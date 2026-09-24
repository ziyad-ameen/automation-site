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
        invalidResponse: "The automation service returned an empty or invalid response.",
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
        invalidResponse: "أعادت خدمة الأتمتة استجابة فارغة أو غير صالحة.",
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

function extractN8nMessage(rawBody, contentType) {
    const trimmed = rawBody.trim();

    if (!trimmed) return "";

    if (contentType.toLowerCase().includes("application/json")) {
        try {
            const data = JSON.parse(trimmed);

            if (typeof data === "string") return data.trim();

            const candidateKeys = ["message", "response", "reply", "output", "text", "result"];
            for (const key of candidateKeys) {
                if (typeof data?.[key] === "string" && data[key].trim()) {
                    return data[key].trim();
                }
            }

            // Some workflows wrap their response inside a data/result object.
            for (const wrapperKey of ["data", "result", "body"]) {
                const nested = data?.[wrapperKey];
                if (nested && typeof nested === "object") {
                    for (const key of candidateKeys) {
                        if (typeof nested[key] === "string" && nested[key].trim()) {
                            return nested[key].trim();
                        }
                    }
                }
            }

            return JSON.stringify(data, null, 2);
        } catch (error) {
            // The Worker can legally pass through plain text even when the content type is not JSON.
        }
    }

    return trimmed;
}

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
            // Keep this payload aligned with the existing Worker contract.
            body: JSON.stringify({ name, message })
        });

        const rawBody = await response.text();
        const responseText = extractN8nMessage(rawBody, response.headers.get("Content-Type") || "");

        if (!response.ok) {
            responseMessage.textContent = content.genericError;
            return;
        }

        if (!responseText) {
            responseMessage.textContent = content.invalidResponse;
            return;
        }

        // Show the actual response returned by n8n immediately.
        responseMessage.textContent = responseText;
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
