const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");
const submitButton = document.getElementById("submitButton");
const languageButtons = document.querySelectorAll(".language-button");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const metaDescription = document.querySelector('meta[name="description"]');
const currentYear = document.getElementById("currentYear");

const WORKER_URL = "https://automation-site-proxy.ameenziyad9.workers.dev/";

const translations = {
    en: {
        metaTitle: "Ziyad Automates | Practical Business Automation",
        metaDescription: "Ziyad Automates builds practical business automations for leads, admin, messaging, websites, Google Workspace, and AI-assisted workflows.",
        brand: "Ziyad Automates",
        skipLink: "Skip to content",
        navAria: "Primary navigation",
        benefitsAria: "Benefits",
        visualAria: "Example automation workflow",
        navProblems: "Problems",
        navServices: "Services",
        navExamples: "Examples",
        navProcess: "Process",
        navPricing: "Pricing",
        headerCta: "Start a conversation",
        heroEyebrow: "Practical business automation",
        heroTitle: "Make the repetitive parts of work <em>disappear.</em>",
        heroText: "I connect the tools you already use so leads, messages, data, documents, and routine actions move automatically instead of through copy-paste and manual handoffs.",
        heroPrimary: "Tell me what you want to automate",
        heroSecondary: "See example workflows",
        heroPoint1: "Less admin",
        heroPoint2: "Faster follow-up",
        heroPoint3: "Connected systems",
        visualLabel: "Workflow preview",
        visualLive: "Example",
        visualEyebrow: "A typical enquiry workflow",
        visualTitle: "New enquiry → organised follow-up",
        visualStep1Title: "Incoming enquiry",
        visualStep1Text: "A customer sends a message or fills a form.",
        visualStep2Title: "Capture & organise",
        visualStep2Text: "Important details are extracted and stored.",
        visualStep3Title: "Trigger the next action",
        visualStep3Text: "The right person, system, or follow-up is notified.",
        visualFooter: "The routine work happens in the background.",
        floatOneLabel: "Manual steps",
        floatOneValue: "↓ Fewer handoffs",
        floatTwoLabel: "Connected",
        floatTwoValue: "Tools + data + actions",
        problemsEyebrow: "What I help remove",
        problemsTitle: "Most useful automation starts with a boring problem.",
        problemsIntro: "You do not need to arrive with a technical brief. Start with the task that keeps getting repeated, delayed, copied, checked, or forgotten.",
        problem1Title: "Leads slipping through the cracks",
        problem1Text: "Capture enquiries, organise the details, notify the right person, and trigger follow-up without relying on memory.",
        problem2Title: "Too much admin and copy-paste",
        problem2Text: "Move information between forms, spreadsheets, documents, email, and other tools automatically.",
        problem3Title: "The same customer messages every day",
        problem3Text: "Handle routine questions, routing, notifications, and next steps with practical messaging workflows.",
        problem4Title: "Information living in too many places",
        problem4Text: "Connect websites, web apps, spreadsheets, email, messaging, APIs, and AI so the workflow stays in sync.",
        problemCta: "Ask about this ↗",
        servicesEyebrow: "What I build",
        servicesTitle: "The tools are different. The goal is the same: less manual work.",
        servicesIntro: "These are the main capabilities I use to turn a repetitive process into a dependable workflow.",
        fitLabel: "Useful for",
        serviceCta: "Discuss this service",
        service1Title: "Google Workspace Automation",
        service1Text: "Automate everyday work across Sheets, Gmail, Drive, Forms, and documents.",
        service1Fit: "Admin, reporting, documents, internal operations",
        service1Item1: "Sheets & data workflows",
        service1Item2: "Gmail automation",
        service1Item3: "Drive & document workflows",
        service1Item4: "AI-assisted processes",
        service2Title: "Messaging Automation",
        service2Text: "Connect customer conversations to the right actions with practical WhatsApp and Telegram workflows.",
        service2Fit: "Enquiries, lead routing, reminders, notifications",
        service2Item1: "WhatsApp workflows",
        service2Item2: "Telegram bots",
        service2Item3: "Automated replies & routing",
        service2Item4: "Custom business logic",
        service3Title: "Website & Web App Automation",
        service3Text: "Connect your website or web app to the systems behind it, so leads, records, notifications, and actions stay aligned.",
        service3Fit: "Lead capture, client portals, internal tools, integrations",
        service3Item1: "Lead capture",
        service3Item2: "API integrations",
        service3Item3: "Backend workflows",
        service3Item4: "Data handling & notifications",
        service4Title: "AI Assistants & Smart Workflows",
        service4Text: "Use AI where it adds practical value: understanding requests, working with connected tools, and supporting defined business processes.",
        service4Fit: "Enquiries, knowledge work, classification, task routing",
        service4Item1: "Enquiry assistants",
        service4Item2: "Knowledge & workflow assistants",
        service4Item3: "Task routing",
        service4Item4: "AI + automation workflows",
        examplesEyebrow: "Typical workflows",
        examplesTitle: "What an automation can look like in practice.",
        examplesIntro: "These are illustrative examples, not fixed packages. The final workflow is shaped around the tools and process you already have.",
        example1Tag: "Lead capture",
        example1Title: "Website enquiry → organised follow-up",
        example1Step1: "Website form",
        example1Step2: "Capture details",
        example1Step3: "Store / notify",
        example1Step4: "Follow up",
        example1Text: "Useful when a team receives leads but someone still has to copy the information, decide who should handle it, and remember the next step.",
        example2Tag: "Messaging",
        example2Title: "WhatsApp enquiry → routed action",
        example2Step1: "Message",
        example2Step2: "Classify",
        example2Step3: "Route",
        example2Step4: "Reply / notify",
        example2Text: "Useful when staff repeatedly answer common questions, collect the same information, or manually pass conversations to the next person.",
        example3Tag: "Documents",
        example3Title: "Form submission → document → email",
        example3Step1: "Form",
        example3Step2: "Generate",
        example3Step3: "Save",
        example3Step4: "Send",
        example3Text: "Useful when the same information has to be turned into documents, files, emails, or internal records over and over.",
        example4Tag: "Reporting",
        example4Title: "New data → cleaned report → notification",
        example4Step1: "Collect",
        example4Step2: "Clean",
        example4Step3: "Summarise",
        example4Step4: "Notify",
        example4Text: "Useful when a person regularly prepares the same report or checks the same data before someone else can act on it.",
        processEyebrow: "How it works",
        processTitle: "From manual task to working system.",
        processIntro: "You bring the real-world process. I map it, design the automation, build it, test it, and refine it around the way you actually work.",
        process1Tag: "Understand",
        process1Title: "Map the problem",
        process1Text: "We identify what happens manually, which tools are involved, and where time, consistency, or follow-up is being lost.",
        process2Tag: "Design",
        process2Title: "Design the workflow",
        process2Text: "I turn the process into clear steps, rules, integrations, and handoffs that fit your existing setup.",
        process3Tag: "Deliver",
        process3Title: "Build, test & refine",
        process3Text: "The workflow is implemented, tested, and adjusted until it is practical to use in day-to-day operations.",
        pricingEyebrow: "How projects are scoped",
        pricingTitle: "Quoted around the workflow, not a rigid package.",
        pricingIntro: "Every business process is different. A quote is based on the workflow, the systems involved, the number of steps, and the amount of testing or ongoing support needed.",
        engagement1Title: "Single workflow",
        engagement1Text: "One repetitive process automated from start to finish.",
        engagement1Use: "Good starting point for a focused bottleneck.",
        engagement2Title: "Connected system",
        engagement2Text: "Several tools and actions connected into one end-to-end workflow.",
        engagement2Use: "Useful when the process crosses teams or platforms.",
        engagement3Title: "Ongoing support",
        engagement3Text: "Monitoring, troubleshooting, updates, backups, and workflow improvements as needs change.",
        engagement3Use: "Available when the automation becomes part of daily operations.",
        pricingNote: "The aim is a practical system you can understand and keep using—not unnecessary complexity or a solution that forces your business to change how it works.",
        faqEyebrow: "Before we start",
        faqTitle: "A few practical questions.",
        faqIntro: "You do not need to understand the technology first. The first conversation is about your current process and what you want to change.",
        faq1Q: "Do I need to know exactly what technology I need?",
        faq1A: "No. Explain the current process and the result you want. The technical approach can be worked out from there.",
        faq2Q: "Can you work with the tools we already use?",
        faq2A: "That is the starting point. The goal is usually to connect the tools already in place before introducing unnecessary new software.",
        faq3Q: "What kinds of businesses are a good fit?",
        faq3A: "Businesses with recurring admin, enquiries, data handling, document work, reporting, or customer messaging are often a natural fit for workflow automation.",
        faq4Q: "Can automation include a human step?",
        faq4A: "Yes. Good automation does not have to remove people from the process. It can prepare information, route work, ask for approval, and leave the final decision with a person.",
        faq5Q: "What happens after I send an enquiry?",
        faq5A: "I review the process you described, clarify the important details, and use that conversation to determine whether there is a sensible automation to build.",
        contactEyebrow: "Start a conversation",
        contactTitle: "Tell me about the task you wish you never had to do manually again.",
        contactIntro: "You do not need a technical brief. Describe what happens today, what you would like to improve, and which tools are involved. That is enough to start.",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        whatsappNote: "Message me directly",
        whatsappAria: "Open WhatsApp",
        whatsappTitle: "WhatsApp",
        formEyebrow: "Project enquiry",
        formStatus: "You can describe it in plain language",
        nameLabel: "Your name",
        namePlaceholder: "Your name",
        messageLabel: "What would you like to automate?",
        messagePlaceholder: "For example: I receive customer enquiries through WhatsApp and manually move the details into a spreadsheet...",
        fieldHint: "No technical explanation needed. Just describe the current process in your own words.",
        submitButton: "Send enquiry",
        sending: "Sending...",
        sendingMessage: "Sending your enquiry...",
        successFallback: "Thanks for reaching out. Your enquiry has been received.",
        invalidResponse: "The server returned an invalid response.",
        genericError: "Sorry, your enquiry could not be sent right now. Please try again or contact me directly by email or WhatsApp.",
        validationName: "Please enter your name.",
        validationMessage: "Please describe what you would like to automate.",
        servicePrefix: "I'm interested in",
        serviceSuffix: "Please let me know what would be possible.",
        problemServiceLead: "Lead & Enquiry Automation",
        problemServiceAdmin: "Admin & Document Automation",
        problemServiceMessaging: "Messaging Automation",
        problemServiceSystems: "Connected Systems Automation",
        footerTagline: "Practical automation. Built around your workflow."
    },
    ar: {
        metaTitle: "Ziyad Automates | أتمتة عملية للأعمال",
        metaDescription: "يبني Ziyad Automates حلول أتمتة عملية للأعمال تشمل العملاء المحتملين والإدارة والمراسلة والمواقع وGoogle Workspace وسير العمل المدعوم بالذكاء الاصطناعي.",
        brand: "Ziyad Automates",
        skipLink: "انتقل إلى المحتوى",
        navAria: "التنقل الرئيسي",
        benefitsAria: "الفوائد",
        visualAria: "مثال على سير عمل آلي",
        navProblems: "المشكلات",
        navServices: "الخدمات",
        navExamples: "أمثلة",
        navProcess: "الطريقة",
        navPricing: "التسعير",
        headerCta: "ابدأ محادثة",
        heroEyebrow: "أتمتة عملية للأعمال",
        heroTitle: "اجعل الأجزاء المتكررة من العمل <em>تختفي.</em>",
        heroText: "أربط الأدوات التي تستخدمها بالفعل، بحيث تتحرك بيانات العملاء المحتملين والرسائل والمستندات والإجراءات الروتينية تلقائيًا بدلًا من النسخ واللصق والتسليم اليدوي.",
        heroPrimary: "أخبرني بما تريد أتمتته",
        heroSecondary: "شاهد أمثلة على سير العمل",
        heroPoint1: "إدارة يدوية أقل",
        heroPoint2: "متابعة أسرع",
        heroPoint3: "أنظمة مترابطة",
        visualLabel: "معاينة سير العمل",
        visualLive: "مثال",
        visualEyebrow: "سير عمل نموذجي للاستفسارات",
        visualTitle: "استفسار جديد ← متابعة منظمة",
        visualStep1Title: "وصول الاستفسار",
        visualStep1Text: "يرسل العميل رسالة أو يملأ نموذجًا.",
        visualStep2Title: "جمع وتنظيم",
        visualStep2Text: "يتم استخراج التفاصيل المهمة وتخزينها.",
        visualStep3Title: "تشغيل الخطوة التالية",
        visualStep3Text: "يتم إشعار الشخص أو النظام المناسب أو تشغيل المتابعة.",
        visualFooter: "تُنجز المهام الروتينية في الخلفية.",
        floatOneLabel: "خطوات يدوية",
        floatOneValue: "↓ تسليمات أقل",
        floatTwoLabel: "مترابط",
        floatTwoValue: "أدوات + بيانات + إجراءات",
        problemsEyebrow: "ما أساعد على التخلص منه",
        problemsTitle: "الأتمتة الأكثر فائدة تبدأ بمشكلة مملة ومتكررة.",
        problemsIntro: "لا تحتاج إلى تقديم وصف تقني. ابدأ بالمهمة التي تتكرر أو تتأخر أو تتطلب نسخ البيانات أو التحقق أو التذكر باستمرار.",
        problem1Title: "عملاء محتملون يضيعون بين الخطوات",
        problem1Text: "اجمع الاستفسارات ونظم تفاصيلها وأُشعر الشخص المناسب وشغّل المتابعة دون الاعتماد على الذاكرة.",
        problem2Title: "كثرة الأعمال الإدارية والنسخ واللصق",
        problem2Text: "انقل المعلومات بين النماذج والجداول والمستندات والبريد والأدوات الأخرى تلقائيًا.",
        problem3Title: "الرسائل نفسها تتكرر كل يوم",
        problem3Text: "عالج الأسئلة الروتينية والتوجيه والتنبيهات والخطوات التالية عبر سير عمل عملي للمراسلة.",
        problem4Title: "المعلومات موزعة بين أدوات كثيرة",
        problem4Text: "اربط المواقع وتطبيقات الويب والجداول والبريد والمراسلة وواجهات API والذكاء الاصطناعي حتى يبقى سير العمل متزامنًا.",
        problemCta: "ناقش هذه المشكلة ↗",
        servicesEyebrow: "ما الذي أبنيه",
        servicesTitle: "الأدوات تختلف. والهدف واحد: عمل يدوي أقل.",
        servicesIntro: "هذه هي القدرات الأساسية التي أستخدمها لتحويل العملية المتكررة إلى سير عمل موثوق.",
        fitLabel: "مفيد لـ",
        serviceCta: "ناقش هذه الخدمة",
        service1Title: "أتمتة Google Workspace",
        service1Text: "أتمت المهام اليومية عبر Sheets وGmail وDrive وForms والمستندات.",
        service1Fit: "الإدارة والتقارير والمستندات والعمليات الداخلية",
        service1Item1: "سير عمل Sheets والبيانات",
        service1Item2: "أتمتة Gmail",
        service1Item3: "سير عمل Drive والمستندات",
        service1Item4: "عمليات مدعومة بالذكاء الاصطناعي",
        service2Title: "أتمتة المراسلة",
        service2Text: "اربط محادثات العملاء بالإجراءات المناسبة عبر سير عمل عملي في WhatsApp وTelegram.",
        service2Fit: "الاستفسارات وتوجيه العملاء والتذكيرات والتنبيهات",
        service2Item1: "سير عمل WhatsApp",
        service2Item2: "روبوتات Telegram",
        service2Item3: "ردود وتوجيه آلي",
        service2Item4: "منطق أعمال مخصص",
        service3Title: "أتمتة المواقع وتطبيقات الويب",
        service3Text: "اربط موقعك أو تطبيق الويب بالأنظمة التي تقف خلفه بحيث تبقى بيانات العملاء المحتملين والسجلات والإشعارات والإجراءات متزامنة.",
        service3Fit: "جمع العملاء المحتملين وبوابات العملاء والأدوات الداخلية والتكاملات",
        service3Item1: "جمع العملاء المحتملين",
        service3Item2: "تكاملات API",
        service3Item3: "سير عمل خلفي",
        service3Item4: "معالجة البيانات والإشعارات",
        service4Title: "مساعدو الذكاء الاصطناعي وسير العمل الذكي",
        service4Text: "استخدم الذكاء الاصطناعي حيث يضيف قيمة عملية: فهم الطلبات والعمل مع الأدوات المتصلة ودعم عمليات أعمال محددة.",
        service4Fit: "الاستفسارات والعمل المعرفي والتصنيف وتوجيه المهام",
        service4Item1: "مساعدو الاستفسارات",
        service4Item2: "مساعدو المعرفة وسير العمل",
        service4Item3: "توجيه المهام",
        service4Item4: "سير عمل يجمع AI والأتمتة",
        examplesEyebrow: "سير عمل نموذجي",
        examplesTitle: "هكذا يمكن أن تبدو الأتمتة عمليًا.",
        examplesIntro: "هذه أمثلة توضيحية وليست باقات ثابتة. يتم تصميم سير العمل النهائي حول الأدوات والعملية الموجودة لديك بالفعل.",
        example1Tag: "جمع العملاء المحتملين",
        example1Title: "استفسار الموقع ← متابعة منظمة",
        example1Step1: "نموذج الموقع",
        example1Step2: "جمع التفاصيل",
        example1Step3: "تخزين / إشعار",
        example1Step4: "متابعة",
        example1Text: "مفيد عندما تصل العملاء المحتملون ولكن لا يزال شخص ما مضطرًا لنسخ المعلومات وتحديد المسؤول وتذكر الخطوة التالية.",
        example2Tag: "المراسلة",
        example2Title: "استفسار WhatsApp ← إجراء موجّه",
        example2Step1: "رسالة",
        example2Step2: "تصنيف",
        example2Step3: "توجيه",
        example2Step4: "رد / إشعار",
        example2Text: "مفيد عندما يجيب الموظفون باستمرار عن الأسئلة نفسها أو يجمعون المعلومات نفسها أو ينقلون المحادثات يدويًا إلى الشخص التالي.",
        example3Tag: "المستندات",
        example3Title: "إرسال نموذج ← مستند ← بريد إلكتروني",
        example3Step1: "نموذج",
        example3Step2: "إنشاء",
        example3Step3: "حفظ",
        example3Step4: "إرسال",
        example3Text: "مفيد عندما يجب تحويل المعلومات نفسها إلى مستندات أو ملفات أو رسائل بريد أو سجلات داخلية بشكل متكرر.",
        example4Tag: "التقارير",
        example4Title: "بيانات جديدة ← تقرير منظم ← إشعار",
        example4Step1: "جمع",
        example4Step2: "تنظيف",
        example4Step3: "تلخيص",
        example4Step4: "إشعار",
        example4Text: "مفيد عندما يقوم شخص بإعداد التقرير نفسه أو فحص البيانات نفسها بانتظام قبل أن يتمكن شخص آخر من اتخاذ الإجراء.",
        processEyebrow: "كيف يعمل الأمر",
        processTitle: "من مهمة يدوية إلى نظام يعمل.",
        processIntro: "أنت تقدم العملية الواقعية. أقوم برسمها وتصميم الأتمتة وبنائها واختبارها وتطويرها حول طريقة عملك الفعلية.",
        process1Tag: "فهم",
        process1Title: "افهم المشكلة",
        process1Text: "نحدد ما يحدث يدويًا والأدوات المستخدمة وأين يضيع الوقت أو الاتساق أو المتابعة.",
        process2Tag: "تصميم",
        process2Title: "صمّم سير العمل",
        process2Text: "أحوّل العملية إلى خطوات وقواعد وتكاملات ونقاط تسليم واضحة تناسب إعدادك الحالي.",
        process3Tag: "تنفيذ",
        process3Title: "ابنِ واختبر وطوّر",
        process3Text: "يتم تنفيذ سير العمل واختباره وتعديله حتى يصبح عمليًا للاستخدام اليومي.",
        pricingEyebrow: "كيف يتم تحديد نطاق المشروع",
        pricingTitle: "يتم التسعير حول سير العمل، وليس حول باقة جامدة.",
        pricingIntro: "كل عملية أعمال مختلفة. يتم تحديد العرض وفق سير العمل والأنظمة وعدد الخطوات وحجم الاختبار أو الدعم المستمر المطلوب.",
        engagement1Title: "سير عمل واحد",
        engagement1Text: "أتمتة عملية متكررة واحدة من البداية إلى النهاية.",
        engagement1Use: "نقطة بداية مناسبة لمشكلة محددة.",
        engagement2Title: "نظام مترابط",
        engagement2Text: "ربط عدة أدوات وإجراءات في سير عمل متكامل من البداية إلى النهاية.",
        engagement2Use: "مفيد عندما تتقاطع العملية بين فرق أو منصات مختلفة.",
        engagement3Title: "دعم مستمر",
        engagement3Text: "مراقبة واستكشاف الأخطاء والتحديثات والنسخ الاحتياطية وتحسينات سير العمل مع تغيّر الاحتياجات.",
        engagement3Use: "متاح عندما تصبح الأتمتة جزءًا من العمليات اليومية.",
        pricingNote: "الهدف هو نظام عملي يمكنك فهمه والاستمرار في استخدامه، وليس تعقيدًا غير ضروري أو حلًا يجبر نشاطك على تغيير طريقة عمله.",
        faqEyebrow: "قبل أن نبدأ",
        faqTitle: "بعض الأسئلة العملية.",
        faqIntro: "لا تحتاج إلى فهم التقنية أولًا. تبدأ المحادثة الأولى بالعملية الحالية وما الذي تريد تغييره.",
        faq1Q: "هل أحتاج إلى معرفة التقنية التي أحتاجها بالضبط؟",
        faq1A: "لا. اشرح العملية الحالية والنتيجة التي تريدها، ومن هناك يمكن تحديد النهج التقني المناسب.",
        faq2Q: "هل يمكنكم العمل مع الأدوات التي نستخدمها بالفعل؟",
        faq2A: "هذه هي نقطة البداية. الهدف عادةً هو ربط الأدوات الموجودة قبل إضافة برامج جديدة غير ضرورية.",
        faq3Q: "ما نوع الأنشطة التجارية المناسبة؟",
        faq3A: "الأنشطة التي لديها أعمال إدارية متكررة أو استفسارات أو معالجة بيانات أو مستندات أو تقارير أو مراسلات مع العملاء تكون غالبًا مناسبة لأتمتة سير العمل.",
        faq4Q: "هل يمكن أن تتضمن الأتمتة خطوة بشرية؟",
        faq4A: "نعم. ليست الأتمتة الجيدة مطالبة بإبعاد الأشخاص عن العملية. يمكنها تجهيز المعلومات وتوجيه العمل وطلب الموافقة وترك القرار النهائي للإنسان.",
        faq5Q: "ماذا يحدث بعد إرسال الاستفسار؟",
        faq5A: "أراجع العملية التي وصفتها، وأوضح التفاصيل المهمة، ثم نستخدم هذه المحادثة لتحديد ما إذا كانت هناك أتمتة مناسبة للبناء.",
        contactEyebrow: "ابدأ محادثة",
        contactTitle: "أخبرني عن المهمة التي تتمنى ألا تضطر لتنفيذها يدويًا مرة أخرى.",
        contactIntro: "لا تحتاج إلى وصف تقني. صف ما يحدث اليوم وما الذي تريد تحسينه والأدوات المستخدمة. هذا يكفي للبدء.",
        emailLabel: "البريد الإلكتروني",
        whatsappLabel: "واتساب",
        whatsappNote: "راسلني مباشرة",
        whatsappAria: "فتح واتساب",
        whatsappTitle: "واتساب",
        formEyebrow: "استفسار عن مشروع",
        formStatus: "يمكنك وصف المشكلة بلغة بسيطة",
        nameLabel: "اسمك",
        namePlaceholder: "اكتب اسمك",
        messageLabel: "ما الذي ترغب في أتمتته؟",
        messagePlaceholder: "مثال: تصلني استفسارات العملاء عبر WhatsApp وأنقل التفاصيل يدويًا إلى جدول بيانات...",
        fieldHint: "لا تحتاج إلى شرح تقني. فقط صف العملية الحالية بكلماتك الخاصة.",
        submitButton: "إرسال الاستفسار",
        sending: "جارٍ الإرسال...",
        sendingMessage: "جارٍ إرسال استفسارك...",
        successFallback: "شكرًا لتواصلك. تم استلام استفسارك.",
        invalidResponse: "أعاد الخادم استجابة غير صالحة.",
        genericError: "عذرًا، تعذر إرسال استفسارك الآن. يرجى المحاولة مرة أخرى أو التواصل معي عبر البريد الإلكتروني أو واتساب.",
        validationName: "يرجى إدخال اسمك.",
        validationMessage: "يرجى وصف ما ترغب في أتمتته.",
        servicePrefix: "أنا مهتم بخدمة",
        serviceSuffix: "يرجى إخباري بما يمكن تنفيذه.",
        problemServiceLead: "أتمتة العملاء المحتملين والاستفسارات",
        problemServiceAdmin: "أتمتة الإدارة والمستندات",
        problemServiceMessaging: "أتمتة المراسلة",
        problemServiceSystems: "أتمتة الأنظمة المترابطة",
        footerTagline: "أتمتة عملية. مصممة حول طريقة عملك."
    }
};

let currentLanguage = "en";

function getSavedLanguage() {
    try {
        const savedLanguage = localStorage.getItem("ziyad-language");
        if (savedLanguage === "en" || savedLanguage === "ar") return savedLanguage;
    } catch (error) {
        // Ignore storage errors and use English.
    }
    return "en";
}

function setLanguage(language) {
    currentLanguage = language === "ar" ? "ar" : "en";
    const content = translations[currentLanguage];
    const isArabic = currentLanguage === "ar";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.dir = isArabic ? "rtl" : "ltr";
    document.title = content.metaTitle;

    if (metaDescription) metaDescription.setAttribute("content", content.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (key in content) element.innerHTML = content[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (key in content) element.setAttribute("placeholder", content[key]);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const key = element.getAttribute("data-i18n-aria-label");
        if (key in content) element.setAttribute("aria-label", content[key]);
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
        const key = element.getAttribute("data-i18n-title");
        if (key in content) element.setAttribute("title", content[key]);
    });

    languageButtons.forEach((button) => {
        const active = button.dataset.language === currentLanguage;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });

    document.querySelector(".language-toggle")?.setAttribute("aria-label", isArabic ? "اختيار اللغة" : "Language selection");

    try {
        localStorage.setItem("ziyad-language", currentLanguage);
    } catch (error) {
        // Ignore storage errors.
    }
}

function scrollToContactWithService(service) {
    const content = translations[currentLanguage];
    const serviceNames = {
        lead: content.problemServiceLead,
        admin: content.problemServiceAdmin,
        messaging: content.problemServiceMessaging,
        systems: content.problemServiceSystems,
        "Google Workspace Automation": currentLanguage === "ar" ? "أتمتة Google Workspace" : "Google Workspace Automation",
        "Messaging Automation": currentLanguage === "ar" ? "أتمتة المراسلة" : "Messaging Automation",
        "Website & Web App Automation": currentLanguage === "ar" ? "أتمتة المواقع وتطبيقات الويب" : "Website & Web App Automation",
        "AI Assistants & Smart Workflows": currentLanguage === "ar" ? "مساعدو الذكاء الاصطناعي وسير العمل الذكي" : "AI Assistants & Smart Workflows"
    };
    const serviceName = serviceNames[service] || service;
    messageInput.value = `${content.servicePrefix} ${serviceName}. ${content.serviceSuffix}`;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => messageInput.focus({ preventScroll: true }), 450);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => scrollToContactWithService(button.dataset.service));
});

contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    const content = translations[currentLanguage];

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
            const errorMessage = Array.isArray(data.errors)
                ? data.errors.join(" ")
                : (data.error || content.genericError);
            responseMessage.textContent = errorMessage;
            return;
        }

        responseMessage.textContent = data.reply || content.successFallback;
        contactForm.reset();
    } catch (error) {
        console.error("Website request failed:", error);
        responseMessage.textContent = content.genericError;
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = content.submitButton;
    }
});

if (currentYear) currentYear.textContent = new Date().getFullYear();
setLanguage(getSavedLanguage());
