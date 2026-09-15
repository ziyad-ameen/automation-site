const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    responseMessage.textContent = "Sending...";

    try {

        const response = await fetch("https://automation-site-proxy.ameenziyad9.workers.dev/", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                message: message
            })
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            responseMessage.textContent =
                data.errors?.join(" ") ||
                data.error ||
                "Sorry, something went wrong.";

            return;
        }

        responseMessage.textContent = data.reply;

    } catch (error) {

        console.error(error);

        responseMessage.textContent =
            "Sorry, something went wrong. Please try again.";

    }

});
