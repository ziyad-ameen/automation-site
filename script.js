const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    responseMessage.textContent = "Sending...";

    try {

        const response = await fetch("https://liberal-millipede.pikapod.net/webhook-test/261a66a0-6999-46d6-9985-4108f94a8af6", {
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

        responseMessage.textContent = data.reply;

    } catch (error) {

        console.error(error);

        responseMessage.textContent =
            "Sorry, something went wrong. Please try again.";

    }

});
