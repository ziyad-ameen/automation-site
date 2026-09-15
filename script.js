const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");
const submitButton = document.getElementById("submitButton");

const WORKER_URL =
    "https://automation-site-proxy.ameenziyad9.workers.dev/";


contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const message =
        document.getElementById("message").value.trim();


    responseMessage.textContent = "Sending your enquiry...";

    submitButton.disabled = true;

    submitButton.textContent = "Sending...";


    try {

        const response = await fetch(WORKER_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                message: message
            })

        });


        let data;

        try {

            data = await response.json();

        } catch (error) {

            throw new Error(
                "The server returned an invalid response."
            );

        }


        if (!response.ok || !data.success) {

            const errorMessage =
                data.errors?.join(" ") ||
                data.error ||
                "Sorry, something went wrong.";

            responseMessage.textContent =
                errorMessage;

            return;
        }


        responseMessage.textContent =
            data.reply ||
            "Thanks for reaching out. Your enquiry has been received.";


        contactForm.reset();


    } catch (error) {

        console.error(
            "Website request failed:",
            error
        );

        responseMessage.textContent =
            "Sorry, we couldn't send your enquiry right now. Please try again or contact me directly by email or WhatsApp.";

    } finally {

        submitButton.disabled = false;

        submitButton.textContent =
            "Send enquiry";

    }

});
