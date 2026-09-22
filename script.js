const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");
const submitButton = document.getElementById("submitButton");
const languageButtons =
    document.querySelectorAll(".language-button");

const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");

const metaDescription =
    document.querySelector('meta[name="description"]');


const WORKER_URL =
    "https://automation-site-proxy.ameenziyad9.workers.dev/";


const translations = {

    en: {

        metaTitle:
            "Ziyad Automates | Practical Business Automation",

        metaDescription:
            "Ziyad Automates builds practical automation solutions for Google Workspace, messaging, websites, web apps, and AI-powered business workflows.",

        brand:
            "Ziyad Automates",

        headerCta:
            "Start a conversation",

        eyebrow:
            "Worldwide",

        heroTitle:
            'Turn repetitive work into <span>reliable automation.</span>',

        heroText:
            "I build practical automations that connect the tools your business already uses—helping you reduce repetitive work, improve consistency, and spend more time on what actually matters.",

        heroPrimary:
            "Tell me what you're trying to automate",

        heroSecondary:
            "Explore services",


        servicesEyebrow:
            "What I build",

        servicesTitle:
            "Automation designed around your workflow.",

        servicesIntro:
            "I connect the tools, data, and processes your business already relies on into practical workflows built around the way you work.",


        service1Title:
            "Google Workspace Automation",

        service1Text:
            "Automate repetitive work across Sheets, Gmail, Drive, and other Google Workspace tools.",

        service1Item1:
            "Sheets & data workflows",

        service1Item2:
            "Gmail automation",

        service1Item3:
            "Drive & document workflows",

        service1Item4:
            "AI-assisted processes",


        service2Title:
            "Messaging Automation",

        service2Text:
            "Build WhatsApp and Telegram workflows for enquiries, notifications, follow-ups, routing, and other customer interactions.",

        service2Item1:
            "WhatsApp workflows",

        service2Item2:
            "Telegram bots",

        service2Item3:
            "Custom business logic",

        service2Item4:
            "Automated replies & routing",


        service3Title:
            "Website & Web App Automation",

        service3Text:
            "Connect your website or web app to the systems behind it—capturing leads, moving data, triggering actions, and keeping operations in sync.",

        service3Item1:
            "Lead capture",

        service3Item2:
            "API integrations",

        service3Item3:
            "Backend workflows",

        service3Item4:
            "Data handling & notifications",


        service4Title:
            "AI Agents & Assistants",

        service4Text:
            "Build practical AI agents that can interpret requests, use connected tools, and support defined business workflows within clear rules and boundaries.",

        service4Item1:
            "Enquiry assistants",

        service4Item2:
            "Knowledge & workflow agents",

        service4Item3:
            "Task routing",

        service4Item4:
            "AI + automation workflows",


        processEyebrow:
            "How it works",

        processTitle:
            "From repetitive task to working workflow.",

        process1Title:
            "Describe the problem",

        process1Text:
            "Tell me what you currently do manually, which tools are involved, and where the process becomes repetitive or frustrating.",

        process2Title:
            "Design the workflow",

        process2Text:
            "I identify practical automation opportunities and design a workflow around your existing systems and requirements.",

        process3Title:
            "Deploy and maintain",

        process3Text:
            "Once implemented, the workflow can be monitored and maintained as your needs evolve.",


        pricingEyebrow:
            "Pricing",

        pricingTitle:
            "Built around the complexity of your setup.",

        pricingText1:
            "Every automation project is different. Pricing depends on factors such as workflow complexity, the systems that need to be integrated, and your preferred deployment platform.",

        pricingText2:
            "Ongoing maintenance may be available for workflow monitoring, database backups, updates, troubleshooting, and other operational needs.",

        pricingText3:
            "The goal is to build something practical, maintainable, and appropriate for your actual workflow—not to force every business into the same package.",


        contactEyebrow:
            "Start a conversation",

        contactTitle:
            "Have a repetitive task in mind?",

        contactIntro:
            "Tell me what you're doing today and what you'd like to improve. You don't need to know the technical solution—that's part of the conversation.",

        emailLabel:
            "Email",

        whatsappLabel:
            "WhatsApp",

        whatsappNote:
            "Message me directly",

        whatsappAria:
            "Open WhatsApp",

        whatsappTitle:
            "WhatsApp",


        nameLabel:
            "Your name",

        namePlaceholder:
            "Your name",

        messageLabel:
            "What would you like to automate?",

        messagePlaceholder:
            "For example: I receive customer enquiries through WhatsApp and currently copy the information into a spreadsheet manually...",

        fieldHint:
            "Don't worry about explaining the technical details. Just describe the problem in your own words.",

        submitButton:
            "Send enquiry",

        sending:
            "Sending...",

        sendingMessage:
            "Sending your enquiry...",

        successFallback:
            "Thanks for reaching out. Your enquiry has been received.",

        invalidResponse:
            "The server returned an invalid response.",

        genericError:
            "Sorry, we couldn't send your enquiry right now. Please try again or contact me directly by email or WhatsApp.",

        validationName:
            "Please enter your name.",

        validationMessage:
            "Please describe what you'd like to automate.",

        footerTagline:
            "Practical automation. Worldwide."

    },


    ar: {

        metaTitle:
            "Ziyad Automates | أتمتة عملية للأعمال",

        metaDescription:
            "يقدّم Ziyad Automates حلول أتمتة عملية لـ Google Workspace، والمراسلة، والمواقع، وتطبيقات الويب، وسير العمل المدعوم بالذكاء الاصطناعي.",

        brand:
            "Ziyad Automates",

        headerCta:
            "ابدأ محادثة",

        eyebrow:
            "عالميًا",

        heroTitle:
            'حوّل العمل المتكرر إلى <span>أتمتة موثوقة.</span>',

        heroText:
            "أبني حلول أتمتة عملية تربط الأدوات التي يستخدمها عملك بالفعل، لتقليل العمل المتكرر، وتحسين الاتساق، ومنحك وقتًا أكبر لما يهم فعلًا.",

        heroPrimary:
            "أخبرني بما تريد أتمتته",

        heroSecondary:
            "استعرض الخدمات",


        servicesEyebrow:
            "ما الذي أبنيه",

        servicesTitle:
            "أتمتة مصممة حول طريقة عملك.",

        servicesIntro:
            "أربط الأدوات والبيانات والعمليات التي يعتمد عليها عملك في سير عمل عملي مصمم وفق احتياجاتك وطريقة عملك.",


        service1Title:
            "أتمتة Google Workspace",

        service1Text:
            "أتمت العمل المتكرر عبر Sheets وGmail وDrive وغيرها من أدوات Google Workspace.",

        service1Item1:
            "سير عمل Sheets والبيانات",

        service1Item2:
            "أتمتة Gmail",

        service1Item3:
            "سير عمل Drive والمستندات",

        service1Item4:
            "عمليات مدعومة بالذكاء الاصطناعي",


        service2Title:
            "أتمتة المراسلة",

        service2Text:
            "أنشئ سير عمل عبر WhatsApp وTelegram للاستفسارات والإشعارات والمتابعة والتوجيه وغيرها من تفاعلات العملاء.",

        service2Item1:
            "سير عمل WhatsApp",

        service2Item2:
            "روبوتات Telegram",

        service2Item3:
            "منطق أعمال مخصص",

        service2Item4:
            "ردود وتوجيه آلي",


        service3Title:
            "أتمتة المواقع وتطبيقات الويب",

        service3Text:
            "أربط موقعك أو تطبيق الويب بالأنظمة التي تقف خلفه لجمع العملاء المحتملين، ونقل البيانات، وتشغيل الإجراءات، والحفاظ على ترابط العمليات.",

        service3Item1:
            "جمع العملاء المحتملين",

        service3Item2:
            "تكاملات API",

        service3Item3:
            "سير عمل خلفي",

        service3Item4:
            "معالجة البيانات والإشعارات",


        service4Title:
            "وكلاء الذكاء الاصطناعي والمساعدون الأذكياء",

        service4Text:
            "أبني وكلاء ذكاء اصطناعي عمليين يمكنهم فهم الطلبات، واستخدام الأدوات المتصلة، ودعم سير عمل محدد ضمن قواعد وحدود واضحة.",

        service4Item1:
            "مساعدو الاستفسارات",

        service4Item2:
            "وكلاء المعرفة وسير العمل",

        service4Item3:
            "توجيه المهام",

        service4Item4:
            "سير عمل يجمع AI والأتمتة",


        processEyebrow:
            "كيف يعمل الأمر",

        processTitle:
            "من مهمة متكررة إلى سير عمل يعمل.",

        process1Title:
            "صِف المشكلة",

        process1Text:
            "أخبرني بما تقوم به يدويًا حاليًا، وما الأدوات المستخدمة، وأين تصبح العملية متكررة أو مرهقة.",

        process2Title:
            "صمّم سير العمل",

        process2Text:
            "أحدد فرص الأتمتة العملية وأصمم سير عمل حول أنظمتك الحالية ومتطلباتك.",

        process3Title:
            "نفّذ وصِن الحل",

        process3Text:
            "بعد التنفيذ، يمكن مراقبة سير العمل وصيانته مع تطور احتياجاتك.",


        pricingEyebrow:
            "التسعير",

        pricingTitle:
            "يُبنى على تعقيد إعدادك.",

        pricingText1:
            "كل مشروع أتمتة مختلف. يعتمد التسعير على عوامل مثل تعقيد سير العمل، والأنظمة التي تحتاج إلى التكامل، ومنصة النشر المفضلة لديك.",

        pricingText2:
            "قد تتوفر صيانة مستمرة لمراقبة سير العمل، والنسخ الاحتياطية لقواعد البيانات، والتحديثات، ومعالجة الأعطال، وغيرها من الاحتياجات التشغيلية.",

        pricingText3:
            "الهدف هو بناء حل عملي وقابل للصيانة ومناسب لسير عملك الفعلي، وليس فرض حزمة واحدة على كل نشاط تجاري.",


        contactEyebrow:
            "ابدأ محادثة",

        contactTitle:
            "لديك مهمة متكررة تريد تحسينها؟",

        contactIntro:
            "أخبرني بما تفعله اليوم وما الذي ترغب في تحسينه. لا تحتاج إلى معرفة الحل التقني مسبقًا—فهذا جزء من المحادثة.",

        emailLabel:
            "البريد الإلكتروني",

        whatsappLabel:
            "واتساب",

        whatsappNote:
            "راسلني مباشرة",

        whatsappAria:
            "فتح واتساب",

        whatsappTitle:
            "واتساب",


        nameLabel:
            "اسمك",

        namePlaceholder:
            "اكتب اسمك",

        messageLabel:
            "ما الذي ترغب في أتمتته؟",

        messagePlaceholder:
            "مثال: تصلني استفسارات العملاء عبر WhatsApp، وأقوم حاليًا بنسخ المعلومات يدويًا إلى جدول بيانات...",

        fieldHint:
            "لا تقلق بشأن التفاصيل التقنية. فقط صف المشكلة بكلماتك الخاصة.",

        submitButton:
            "إرسال الاستفسار",

        sending:
            "جارٍ الإرسال...",

        sendingMessage:
            "جارٍ إرسال استفسارك...",

        successFallback:
            "شكرًا لتواصلك. تم استلام استفسارك.",

        invalidResponse:
            "أعاد الخادم استجابة غير صالحة.",

        genericError:
            "عذرًا، تعذر إرسال استفسارك الآن. يرجى المحاولة مرة أخرى أو التواصل معي عبر البريد الإلكتروني أو واتساب.",

        validationName:
            "يرجى إدخال اسمك.",

        validationMessage:
            "يرجى وصف ما ترغب في أتمتته.",

        footerTagline:
            "أتمتة عملية. حول العالم."

    }

};


let currentLanguage = "en";


function getSavedLanguage() {

    try {

        const savedLanguage =
            localStorage.getItem("ziyad-language");

        if (
            savedLanguage === "en" ||
            savedLanguage === "ar"
        ) {
            return savedLanguage;
        }

    } catch (error) {
        // Ignore storage errors and use English.
    }

    return "en";
}


function setLanguage(language) {

    currentLanguage =
        language === "ar" ? "ar" : "en";

    const content =
        translations[currentLanguage];

    const isArabic =
        currentLanguage === "ar";

    document.documentElement.lang =
        currentLanguage;

    document.documentElement.dir =
        isArabic ? "rtl" : "ltr";

    document.body.dir =
        isArabic ? "rtl" : "ltr";

    document.title =
        content.metaTitle;

    if (metaDescription) {

        metaDescription.setAttribute(
            "content",
            content.metaDescription
        );

    }


    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.getAttribute("data-i18n");

            if (!(key in content)) {
                return;
            }

            element.innerHTML =
                content[key];

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (!(key in content)) {
                return;
            }

            element.setAttribute(
                "placeholder",
                content[key]
            );

        });


    document
        .querySelectorAll("[data-i18n-aria-label]")
        .forEach((element) => {

            const key =
                element.getAttribute(
                    "data-i18n-aria-label"
                );

            if (!(key in content)) {
                return;
            }

            element.setAttribute(
                "aria-label",
                content[key]
            );

        });


    document
        .querySelectorAll("[data-i18n-title]")
        .forEach((element) => {

            const key =
                element.getAttribute(
                    "data-i18n-title"
                );

            if (!(key in content)) {
                return;
            }

            element.setAttribute(
                "title",
                content[key]
            );

        });


    languageButtons.forEach((button) => {

        const isActive =
            button.dataset.language ===
            currentLanguage;

        button.classList.toggle(
            "active",
            isActive
        );

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });


    try {
        localStorage.setItem(
            "ziyad-language",
            currentLanguage
        );
    } catch (error) {
        // Ignore storage errors.
    }


    document.querySelector(".language-toggle")
        ?.setAttribute(
            "aria-label",
            isArabic
                ? "اختيار اللغة"
                : "Language selection"
        );

}


languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const language =
            button.dataset.language;

        setLanguage(language);

    });

});


contactForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const name =
            nameInput.value.trim();

        const message =
            messageInput.value.trim();

        const content =
            translations[currentLanguage];


        if (!name) {

            responseMessage.textContent =
                content.validationName;

            nameInput.focus();

            return;
        }


        if (!message) {

            responseMessage.textContent =
                content.validationMessage;

            messageInput.focus();

            return;
        }


        responseMessage.textContent =
            content.sendingMessage;

        submitButton.disabled = true;

        submitButton.textContent =
            content.sending;


        try {

            const response =
                await fetch(
                    WORKER_URL,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            name: name,
                            message: message
                        })
                    }
                );


            let data;


            try {

                data =
                    await response.json();

            } catch (error) {

                throw new Error(
                    content.invalidResponse
                );

            }


            if (
                !response.ok ||
                !data.success
            ) {

                const errorMessage =
                    Array.isArray(data.errors)
                        ? data.errors.join(" ")
                        : (
                            data.error ||
                            content.genericError
                        );

                responseMessage.textContent =
                    errorMessage;

                return;
            }


            responseMessage.textContent =
                data.reply ||
                content.successFallback;


            contactForm.reset();


        } catch (error) {

            console.error(
                "Website request failed:",
                error
            );

            responseMessage.textContent =
                content.genericError;

        } finally {

            submitButton.disabled = false;

            submitButton.textContent =
                content.submitButton;

        }

    }
);


setLanguage(getSavedLanguage());
