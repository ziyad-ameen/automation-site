const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");
const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const currentYear = document.getElementById("currentYear");

const WORKER_URL = "https://automation-site-proxy.ameenziyad9.workers.dev/";
const currentLanguage = document.documentElement.lang === "ar" ? "ar" : "en";

const copy = {
    en: {
        validationName: "Please enter your name.",
        validationMessage: "Please describe what you would like to automate.",
        sending: "Sending...",
        sendingMessage: "Sending your enquiry...",
        successFallback: "Thanks for reaching out. Your enquiry has been received.",
        invalidResponse: "The server returned an invalid response.",
        genericError: "Sorry, your enquiry could not be sent right now. Please try again or contact me directly by email or WhatsApp.",
        servicePrefix: "I'm interested in",
        serviceSuffix: "Please let me know what would be possible.",
        services: {
            lead: "Lead & Enquiry Automation",
            admin: "Admin & Document Automation",
            messaging: "Messaging Automation",
            systems: "Connected Systems Automation",
            "Google Workspace Automation": "Google Workspace Automation",
            "Messaging Automation": "Messaging Automation",
            "Website & Web App Automation": "Website & Web App Automation",
            "AI Assistants & Smart Workflows": "AI Assistants & Smart Workflows"
        }
    },
    ar: {
        validationName: "يرجى إدخال اسمك.",
        validationMessage: "يرجى وصف ما ترغب في أتمتته.",
        sending: "جارٍ الإرسال...",
        sendingMessage: "جارٍ إرسال استفسارك...",
        successFallback: "شكرًا لتواصلك. تم استلام استفسارك.",
        invalidResponse: "أعاد الخادم استجابة غير صالحة.",
        genericError: "عذرًا، تعذر إرسال استفسارك الآن. يرجى المحاولة مرة أخرى أو التواصل معي عبر البريد الإلكتروني أو واتساب.",
        servicePrefix: "أنا مهتم بخدمة",
        serviceSuffix: "يرجى إخباري بما يمكن تنفيذه.",
        services: {
            lead: "أتمتة العملاء المحتملين والاستفسارات",
            admin: "أتمتة الإدارة والمستندات",
            messaging: "أتمتة المراسلة",
            systems: "أتمتة الأنظمة المترابطة",
            "Google Workspace Automation": "أتمتة Google Workspace",
            "Messaging Automation": "أتمتة المراسلة",
            "Website & Web App Automation": "أتمتة المواقع وتطبيقات الويب",
            "AI Assistants & Smart Workflows": "مساعدو الذكاء الاصطناعي وسير العمل الذكي"
        }
    }
};

const content = copy[currentLanguage];

document.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
        const service = content.services[button.dataset.service] || button.dataset.service || "";
        messageInput.value = `${content.servicePrefix} ${service}. ${content.serviceSuffix}`;
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => messageInput?.focus({ preventScroll: true }), 450);
    });
});

contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) {
        responseMessage.textContent = content.validationName;
        nameInput.focus();
        return;
    }

    if (!message) {
        responseMessage.textContent = content.validationMessage;
        messageInput.focus();
        return;
    }

    responseMessage.textContent = content.sendingMessage;
    submitButton.disabled = true;
    submitButton.textContent = content.sending;

    try {
        const response = await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, message })
        });

        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(content.invalidResponse);
        }

        if (!response.ok || !data.success) {
            responseMessage.textContent = content.genericError;
            return;
        }

        // Keep the user-facing confirmation in the page's own language even if the Worker reply is English.
        responseMessage.textContent = content.successFallback;
        contactForm.reset();
    } catch (error) {
        console.error("Website request failed:", error);
        responseMessage.textContent = content.genericError;
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = document.documentElement.lang === "ar" ? "إرسال الاستفسار" : "Send enquiry";
    }
});

if (currentYear) currentYear.textContent = new Date().getFullYear();
