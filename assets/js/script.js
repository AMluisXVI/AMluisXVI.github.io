'use strict';



/*-----------------------------------*\
  #i18n DICTIONARY
\*-----------------------------------*/

const i18n = {
  en: {
    // Sidebar
    "sidebar.show_contacts": "Show Contacts",
    "sidebar.download_cv": "Download CV",
    "sidebar.email_outlook": "Email — Outlook",
    "sidebar.email_gmail": "Email — Gmail",
    "sidebar.phone": "Phone",
    "sidebar.location": "Location",
    "sidebar.linkedin": "LinkedIn",

    // Navbar
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // About
    "about.title": "About me",
    "about.p1": "I'm a QA Analyst with a Mechatronics Engineering background and structured QA Engineering training. I specialize in web test automation with Selenium and Playwright, REST API validation, and functional testing. I enjoy taking specifications and turning them into solid test cases that catch bugs before they reach production.",
    "about.p2": "Before QA, I worked on-site supervising civil works and building pathology restoration projects \u2014 that field discipline of documenting, tracing, and escalating issues carries directly into how I approach defect tracking today.",
    "about.p3": "I work as a QA Analyst on the uTest platform, where I review requirements, design test plans, and execute functional, exploratory, and regression testing on real-world applications for clients around the world. My time at TripleTen gave me a strong foundation across the full QA cycle \u2014 manual testing, test design, APIs, mobile, SQL, and automation.",
    "about.services_title": "What I'm doing",
    "about.svc1_title": "Test Automation",
    "about.svc1_text": "Selenium, Playwright, Pytest. E2E suites with POM that actually scale.",
    "about.svc2_title": "API & Backend Testing",
    "about.svc2_text": "REST API validation with Postman and Python. Status codes, JSON schemas, edge cases.",
    "about.svc3_title": "Manual & Exploratory Testing",
    "about.svc3_text": "Requirements analysis, test plans, bug reports with traceability. Regression and exploratory.",
    "about.svc4_title": "Mobile Testing",
    "about.svc4_text": "Android testing on emulators and real devices. Functional checklists, permission testing, crash detection.",
    "about.svc5_title": "Field & Site Engineering",
    "about.svc5_text": "Civil works supervision, building pathology, HSE compliance \u2014 a builder\u2019s eye for detail applied to test coverage.",

    // Resume
    "resume.title": "Resume",
    "resume.experience": "Experience",
    "resume.education": "Education",
    "resume.qa_skills": "QA Skills",
    "resume.soft_skills": "Soft Skills",
    "resume.certifications": "Certifications",

    // Experience
    "resume.exp1_title": "QA Analyst \u2014 uTest",
    "resume.exp1_text": "Review requirements, specifications, and design docs with a QA mindset for early defect detection. Design test plans and functional test cases using equivalence partitioning and boundary value analysis. Validate REST APIs with Postman: response codes, JSON structures, business logic. Use DevTools for network diagnostics, performance analysis, and UI validation. Document and trace defects throughout the SDLC, execute post-fix regressions, and prepare test data for end-to-end validation.",
    "resume.exp2_title": "QA Projects \u2014 TripleTen LatAm",
    "resume.exp2_text": "E2E automation with Selenium WebDriver + POM: 9 tests covering complete taxi order flow with OTP interception via CDP. API automation with Python + pytest + requests: 9 tests with equivalence class and BVA coverage. REST API testing with Postman: 43 test cases across 3 endpoints, 25 bugs found including 500-level server errors. Mobile functional testing on Android: 34-item checklist, identified critical crash on geolocation denial. Executed 24 regression test cases on Urban Routes (web) with bug reports in Jira. SQL queries: COUNT DISTINCT, GROUP BY, JOIN, CASE WHEN on PostgreSQL.",
    "resume.exp3_title": "Construction Supervisor Assistant \u2014 Arevalo Patologia Plus",
    "resume.exp3_text": "Supervised civil works contracts for restoration and building pathology maintenance. Served as the primary communication link between the pathology specialist and the field crew, translating findings into clear work instructions. Documented and escalated field anomalies, managed material requests, and prepared daily and weekly technical reports. Developed attention to detail and structured documentation skills that carry directly into defect tracking.",
    "resume.exp4_title": "Engineering Assistant \u2014 IMI Colombia (Yara Ammonia Plant & Cabot Carbon Black Plant)",
    "resume.exp4_text": "Supported scheduled maintenance shutdowns at two industrial plants: Yara Ammonia Plant and Cabot Carbon Black Plant. Coordinated contractors under strict HSE and permit-to-work controls, documented non-conformities, and inspected valve replacements, coatings, and welding \u2014 building a methodical, process-oriented mindset transferable to QA.",

    // Education
    "resume.edu1_title": "QA Engineering Bootcamp",
    "resume.edu1_text": "TripleTen LatAm \u2014 Full QA cycle: manual testing, test design, web & cross-browser, API testing, mobile testing, console & SQL, API automation, UI automation.",
    "resume.edu2_title": "Mechatronics Engineering",
    "resume.edu2_text": "Universidad Tecnol\u00f3gica de Bol\u00edvar \u2014 COPNIA: 031259-0698088 BLV. Seminar: Industrial Automation (2022). Seminar: Digital Transformation (2022).",

    // QA Skills
    "resume.skill_manual_title": "Manual & Functional Testing",
    "resume.skill_manual_text": "Test case design, equivalence partitioning, boundary value analysis, exploratory testing, regression, smoke & sanity testing",
    "resume.skill_auto_title": "Test Automation",
    "resume.skill_auto_text": "Selenium WebDriver, Playwright, Cypress, Pytest, Page Object Model, Mocha + Chai (Node.js)",
    "resume.skill_api_title": "API Testing",
    "resume.skill_api_text": "Postman, REST, JSON schema validation, Python + requests",
    "resume.skill_mobile_title": "Mobile Testing",
    "resume.skill_mobile_text": "Android Studio, AVD/emulators, permissions testing, crash analysis",
    "resume.skill_perf_title": "Performance & Load",
    "resume.skill_perf_text": "JMeter (basic), load and stress testing fundamentals",
    "resume.skill_sdlc_title": "SDLC & Tools",
    "resume.skill_sdlc_text": "Agile/Scrum, Jira, Git, SQL (PostgreSQL), DevTools, CI/CD basics",
    "resume.skill_prog_title": "Programming Languages",
    "resume.skill_prog_text": "Python, JavaScript, SQL",
    "resume.skill_lang_title": "Languages",
    "resume.skill_lang_text": "English (Full Professional), Spanish (Native)",

    // Soft Skills
    "resume.ss_analytical_title": "Analytical Thinking",
    "resume.ss_analytical_text": "Methodical problem decomposition rooted in mechatronics engineering and QA test design",
    "resume.ss_detail_title": "Attention to Detail",
    "resume.ss_detail_text": "Precision in test execution, defect reproduction, and spec analysis \u2014 sharpened through construction QA and field inspections",
    "resume.ss_comm_title": "Technical Communication",
    "resume.ss_comm_text": "Clear bug reports, test documentation, and requirements analysis with actionable detail for developers",
    "resume.ss_team_title": "Team Collaboration",
    "resume.ss_team_text": "Cross-functional coordination with developers, PMs, and stakeholders \u2014 from field crew alignment to remote QA teams",
    "resume.ss_problem_title": "Problem Solving",
    "resume.ss_problem_text": "Root cause analysis and creative test scenario design; escalated field anomalies now inform defect triage instincts",
    "resume.ss_doc_title": "Documentation",
    "resume.ss_doc_text": "Structured test plans, traceability matrices, and technical reports \u2014 a discipline carried from civil works supervision",
    "resume.ss_adapt_title": "Adaptability",
    "resume.ss_adapt_text": "Transitioned from civil engineering to QA; comfortable learning new tools, domains, and workflows on the fly",
    "resume.ss_stakeholder_title": "Stakeholder Communication",
    "resume.ss_stakeholder_text": "Translated specialist findings into actionable work instructions on-site; now communicates test outcomes to product and dev teams",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.filter_all": "Todos",
    "portfolio.filter_automation": "Automatizaci\u00f3n",
    "portfolio.filter_api": "Pruebas de API",
    "portfolio.filter_manual": "Pruebas Manuales",
    "portfolio.filter_mobile": "Pruebas M\u00f3viles",
    "portfolio.filter_backend": "Backend",
    "portfolio.select_category": "Seleccionar categor\u00eda",

    // Project titles
    "portfolio.proj1_title": "Automatizaci\u00f3n de UI \u2014 Urban Routes",
    "portfolio.proj1_cat": "Automatizaci\u00f3n",
    "portfolio.proj2_title": "Automatizaci\u00f3n de API \u2014 Urban Grocers",
    "portfolio.proj2_cat": "Automatizaci\u00f3n",
    "portfolio.proj3_title": "Pruebas de API \u2014 Urban Grocers",
    "portfolio.proj3_cat": "Pruebas de API",
    "portfolio.proj4_title": "Pruebas de Regresi\u00f3n \u2014 Urban Routes",
    "portfolio.proj4_cat": "Pruebas Manuales",
    "portfolio.proj5_title": "Dise\u00f1o de Pruebas \u2014 Carpool Feature",
    "portfolio.proj5_cat": "Pruebas Manuales",
    "portfolio.proj6_title": "Pruebas Multi-Navegador \u2014 Urban Routes",
    "portfolio.proj6_cat": "Pruebas Manuales",
    "portfolio.proj7_title": "Pruebas M\u00f3viles \u2014 Urban Lunch",
    "portfolio.proj7_cat": "Pruebas M\u00f3viles",
    "portfolio.proj8_title": "Consola y SQL \u2014 Linux + PostgreSQL",
    "portfolio.proj8_cat": "Pruebas Manuales",
    "portfolio.proj9_title": "Ciclo QA Completo \u2014 Urban Scooter",
    "portfolio.proj9_cat": "Pruebas de API",
    "portfolio.proj10_title": "Convertidor M\u00e9trico-Imperial",
    "portfolio.proj10_cat": "Backend",
    "portfolio.proj11_title": "Seguimiento de Incidencias",
    "portfolio.proj11_cat": "Backend",
    "portfolio.proj12_title": "Biblioteca Personal",
    "portfolio.proj12_cat": "Backend",
    "portfolio.proj13_title": "Resolvedor de Sudoku",
    "portfolio.proj13_cat": "Backend",
    "portfolio.proj14_title": "Traductor US-UK",
    "portfolio.proj14_cat": "Backend",

    // Contact
    "contact.title": "Contact",
    "contact.text": "\u00a1Conectemos! Ya sea que tengas una oportunidad laboral, una idea de proyecto o simplemente quieras hablar sobre QA, no dudes en comunicarte a trav\u00e9s de cualquiera de los siguientes canales.",
    "contact.email_outlook": "Email \u2014 Outlook",
    "contact.email_gmail": "Email \u2014 Gmail",
    "contact.phone": "Tel\u00e9fono",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub"
  },

  es: {
    // Sidebar
    "sidebar.show_contacts": "Mostrar contactos",
    "sidebar.download_cv": "Descargar CV",
    "sidebar.email_outlook": "Email \u2014 Outlook",
    "sidebar.email_gmail": "Email \u2014 Gmail",
    "sidebar.phone": "Tel\u00e9fono",
    "sidebar.location": "Ubicaci\u00f3n",
    "sidebar.linkedin": "LinkedIn",

    // Navbar
    "nav.about": "Sobre m\u00ed",
    "nav.resume": "Curr\u00edculum",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    // About
    "about.title": "Sobre m\u00ed",
    "about.p1": "Soy Analista QA con formaci\u00f3n en Ingenier\u00eda Mecatr\u00f3nica y capacitaci\u00f3n estructurada en Ingenier\u00eda de QA. Me especializo en automatizaci\u00f3n de pruebas web con Selenium y Playwright, validaci\u00f3n de APIs REST y testing funcional. Disfruto convertir especificaciones en casos de prueba s\u00f3lidos que detectan errores antes de que lleguen a producci\u00f3n.",
    "about.p2": "Antes de QA, trabaj\u00e9 supervisando obras civiles y proyectos de restauraci\u00f3n de patolog\u00eda edilicia \u2014 esa disciplina de documentar, rastrear y escalar problemas se traslada directamente a mi enfoque actual en el seguimiento de defectos.",
    "about.p3": "Trabajo como Analista QA en la plataforma uTest, donde reviso requisitos, dise\u00f1o planes de prueba y ejecuto testing funcional, exploratorio y de regresi\u00f3n en aplicaciones reales para clientes de todo el mundo. Mi paso por TripleTen me brind\u00f3 una base s\u00f3lida en el ciclo completo de QA \u2014 testing manual, dise\u00f1o de pruebas, APIs, móvil, SQL y automatizaci\u00f3n.",
    "about.services_title": "Lo que hago",
    "about.svc1_title": "Automatizaci\u00f3n de Pruebas",
    "about.svc1_text": "Selenium, Playwright, Pytest. Suites E2E con POM que realmente escalan.",
    "about.svc2_title": "Pruebas de API y Backend",
    "about.svc2_text": "Validaci\u00f3n de APIs REST con Postman y Python. C\u00f3digos de estado, esquemas JSON, casos extremos.",
    "about.svc3_title": "Testing Manual y Exploratorio",
    "about.svc3_text": "An\u00e1lisis de requisitos, planes de prueba, reportes de errores con trazabilidad. Regresi\u00f3n y exploraci\u00f3n.",
    "about.svc4_title": "Pruebas M\u00f3viles",
    "about.svc4_text": "Testing en Android con emuladores y dispositivos reales. Listas de verificaci\u00f3n funcionales, pruebas de permisos, detecci\u00f3n de fallos.",
    "about.svc5_title": "Ingenier\u00eda de Campo y Obra",
    "about.svc5_text": "Supervisi\u00f3n de obras civiles, patolog\u00eda edilicia, cumplimiento HSE \u2014 ojo de constructor aplicado a la cobertura de pruebas.",

    // Resume
    "resume.title": "Curr\u00edculum",
    "resume.experience": "Experiencia",
    "resume.education": "Educaci\u00f3n",
    "resume.qa_skills": "Habilidades de QA",
    "resume.soft_skills": "Habilidades Blandas",
    "resume.certifications": "Certificaciones",

    // Experience
    "resume.exp1_title": "Analista QA \u2014 uTest",
    "resume.exp1_text": "Revisi\u00f3n de requisitos, especificaciones y documentos de dise\u00f1o con mentalidad QA para detecci\u00f3n temprana de defectos. Dise\u00f1o de planes de prueba y casos de prueba funcionales usando particionamiento por equivalencia y an\u00e1lisis de valores l\u00edmite. Validaci\u00f3n de APIs REST con Postman: c\u00f3digos de respuesta, estructuras JSON, l\u00f3gica de negocio. Uso de DevTools para diagn\u00f3stico de red, an\u00e1lisis de rendimiento y validaci\u00f3n de interfaz. Documentaci\u00f3n y seguimiento de defectos a lo largo del SDLC, ejecuci\u00f3n de regresiones post-correcci\u00f3n y preparaci\u00f3n de datos de prueba para validaci\u00f3n end-to-end.",
    "resume.exp2_title": "Proyectos QA \u2014 TripleTen LatAm",
    "resume.exp2_text": "Automatizaci\u00f3n E2E con Selenium WebDriver + POM: 9 pruebas que cubren el flujo completo de pedido de taxi con intercepci\u00f3n de OTP v\u00eda CDP. Automatizaci\u00f3n de API con Python + pytest + requests: 9 pruebas con cobertura de clases de equivalencia y BVA. Pruebas de API REST con Postman: 43 casos de prueba en 3 endpoints, 25 errores encontrados incluyendo errores de servidor nivel 500. Testing funcional m\u00f3vil en Android: lista de 34 \u00edtems, identificaci\u00f3n de fallo cr\u00edtico al denegar geolocalizaci\u00f3n. Ejecuci\u00f3n de 24 casos de prueba de regresi\u00f3n en Urban Routes (web) con reportes de errores en Jira. Consultas SQL: COUNT DISTINCT, GROUP BY, JOIN, CASE WHEN en PostgreSQL.",
    "resume.exp3_title": "Asistente de Supervisi\u00f3n de Construcci\u00f3n \u2014 Arevalo Patologia Plus",
    "resume.exp3_text": "Supervisi\u00f3n de contratos de obras civiles para restauraci\u00f3n y mantenimiento de patolog\u00eda edilicia. Enlace de comunicaci\u00f3n principal entre el especialista en patolog\u00eda y el equipo de campo, traduciendo hallazgos en instrucciones de trabajo claras. Documentaci\u00f3n y escalamiento de anomal\u00edas de campo, gesti\u00f3n de solicitudes de materiales y elaboraci\u00f3n de informes t\u00e9cnicos diarios y semanales. Desarrollo de atenci\u00f3n al detalle y habilidades de documentaci\u00f3n estructurada que se aplican directamente al seguimiento de defectos.",
    "resume.exp4_title": "Asistente de Ingenier\u00eda \u2014 IMI Colombia (Planta de Amoniaco Yara y Planta de Carbon Black Cabot)",
    "resume.exp4_text": "Soporte en paradas de mantenimiento programadas en dos plantas industriales: Planta de Amoniaco Yara y Planta de Carbon Black Cabot. Coordinaci\u00f3n de contratistas bajo estrictos controles HSE y permisos de trabajo, documentaci\u00f3n de no conformidades e inspecci\u00f3n de reemplazos de v\u00e1lvulas, recubrimientos y soldadura \u2014 construyendo una mentalidad met\u00f3dica y orientada a procesos transferible a QA.",

    // Education
    "resume.edu1_title": "Bootcamp de Ingenier\u00eda QA",
    "resume.edu1_text": "TripleTen LatAm \u2014 Ciclo completo de QA: testing manual, dise\u00f1o de pruebas, web y multi-navegador, pruebas de API, pruebas m\u00f3viles, consola y SQL, automatizaci\u00f3n de API, automatizaci\u00f3n de UI.",
    "resume.edu2_title": "Ingenier\u00eda Mecatr\u00f3nica",
    "resume.edu2_text": "Universidad Tecnol\u00f3gica de Bol\u00edvar \u2014 COPNIA: 031259-0698088 BLV. Seminario: Automatizaci\u00f3n Industrial (2022). Seminario: Transformaci\u00f3n Digital (2022).",

    // QA Skills
    "resume.skill_manual_title": "Testing Manual y Funcional",
    "resume.skill_manual_text": "Dise\u00f1o de casos de prueba, particionamiento por equivalencia, an\u00e1lisis de valores l\u00edmite, testing exploratorio, regresi\u00f3n, smoke y sanity testing",
    "resume.skill_auto_title": "Automatizaci\u00f3n de Pruebas",
    "resume.skill_auto_text": "Selenium WebDriver, Playwright, Cypress, Pytest, Page Object Model, Mocha + Chai (Node.js)",
    "resume.skill_api_title": "Pruebas de API",
    "resume.skill_api_text": "Postman, REST, validaci\u00f3n de esquemas JSON, Python + requests",
    "resume.skill_mobile_title": "Pruebas M\u00f3viles",
    "resume.skill_mobile_text": "Android Studio, AVD/emuladores, pruebas de permisos, an\u00e1lisis de fallos",
    "resume.skill_perf_title": "Rendimiento y Carga",
    "resume.skill_perf_text": "JMeter (b\u00e1sico), fundamentos de pruebas de carga y estr\u00e9s",
    "resume.skill_sdlc_title": "SDLC y Herramientas",
    "resume.skill_sdlc_text": "Agile/Scrum, Jira, Git, SQL (PostgreSQL), DevTools, fundamentos de CI/CD",
    "resume.skill_prog_title": "Lenguajes de Programaci\u00f3n",
    "resume.skill_prog_text": "Python, JavaScript, SQL",
    "resume.skill_lang_title": "Idiomas",
    "resume.skill_lang_text": "Ingl\u00e9s (Profesional Completo), Espa\u00f1ol (Nativo)",

    // Soft Skills
    "resume.ss_analytical_title": "Pensamiento Anal\u00edtico",
    "resume.ss_analytical_text": "Descomposici\u00f3n met\u00f3dica de problemas con ra\u00edces en ingenier\u00eda mecatr\u00f3nica y dise\u00f1o de pruebas QA",
    "resume.ss_detail_title": "Atenci\u00f3n al Detalle",
    "resume.ss_detail_text": "Precisi\u00f3n en ejecuci\u00f3n de pruebas, reproducci\u00f3n de defectos y an\u00e1lisis de especificaciones \u2014 afilada mediante QA en construcci\u00f3n e inspecciones de campo",
    "resume.ss_comm_title": "Comunicaci\u00f3n T\u00e9cnica",
    "resume.ss_comm_text": "Reportes de errores claros, documentaci\u00f3n de pruebas y an\u00e1lisis de requisitos con detalle accionable para desarrolladores",
    "resume.ss_team_title": "Trabajo en Equipo",
    "resume.ss_team_text": "Coordinaci\u00f3n multifuncional con desarrolladores, PMs y stakeholders \u2014 desde la alineaci\u00f3n con equipos de campo hasta equipos QA remotos",
    "resume.ss_problem_title": "Resoluci\u00f3n de Problemas",
    "resume.ss_problem_text": "An\u00e1lisis de causa ra\u00edz y dise\u00f1o creativo de escenarios de prueba; las anomal\u00edas escaladas del campo ahora informan mi instinto para la priorizaci\u00f3n de defectos",
    "resume.ss_doc_title": "Documentaci\u00f3n",
    "resume.ss_doc_text": "Planes de prueba estructurados, matrices de trazabilidad e informes t\u00e9cnicos \u2014 una disciplina heredada de la supervisi\u00f3n de obras civiles",
    "resume.ss_adapt_title": "Adaptabilidad",
    "resume.ss_adapt_text": "Transici\u00f3n de ingenier\u00eda civil a QA; c\u00f3modo aprendiendo nuevas herramientas, dominios y flujos de trabajo sobre la marcha",
    "resume.ss_stakeholder_title": "Comunicaci\u00f3n con Interesados",
    "resume.ss_stakeholder_text": "Traduje hallazgos de especialistas en instrucciones de trabajo accionables en campo; ahora comunico resultados de pruebas a equipos de producto y desarrollo",

    // Portfolio
    "portfolio.title": "Portafolio",
    "portfolio.filter_all": "Todos",
    "portfolio.filter_automation": "Automatizaci\u00f3n",
    "portfolio.filter_api": "Pruebas de API",
    "portfolio.filter_manual": "Pruebas Manuales",
    "portfolio.filter_mobile": "Pruebas M\u00f3viles",
    "portfolio.filter_backend": "Backend",
    "portfolio.select_category": "Seleccionar categor\u00eda",

    // Project titles
    "portfolio.proj1_title": "Automatizaci\u00f3n de UI \u2014 Urban Routes",
    "portfolio.proj1_cat": "Automatizaci\u00f3n",
    "portfolio.proj2_title": "Automatizaci\u00f3n de API \u2014 Urban Grocers",
    "portfolio.proj2_cat": "Automatizaci\u00f3n",
    "portfolio.proj3_title": "Pruebas de API \u2014 Urban Grocers",
    "portfolio.proj3_cat": "Pruebas de API",
    "portfolio.proj4_title": "Pruebas de Regresi\u00f3n \u2014 Urban Routes",
    "portfolio.proj4_cat": "Pruebas Manuales",
    "portfolio.proj5_title": "Dise\u00f1o de Pruebas \u2014 Carpool Feature",
    "portfolio.proj5_cat": "Pruebas Manuales",
    "portfolio.proj6_title": "Pruebas Multi-Navegador \u2014 Urban Routes",
    "portfolio.proj6_cat": "Pruebas Manuales",
    "portfolio.proj7_title": "Pruebas M\u00f3viles \u2014 Urban Lunch",
    "portfolio.proj7_cat": "Pruebas M\u00f3viles",
    "portfolio.proj8_title": "Consola y SQL \u2014 Linux + PostgreSQL",
    "portfolio.proj8_cat": "Pruebas Manuales",
    "portfolio.proj9_title": "Ciclo QA Completo \u2014 Urban Scooter",
    "portfolio.proj9_cat": "Pruebas de API",
    "portfolio.proj10_title": "Convertidor M\u00e9trico-Imperial",
    "portfolio.proj10_cat": "Backend",
    "portfolio.proj11_title": "Seguimiento de Incidencias",
    "portfolio.proj11_cat": "Backend",
    "portfolio.proj12_title": "Biblioteca Personal",
    "portfolio.proj12_cat": "Backend",
    "portfolio.proj13_title": "Resolvedor de Sudoku",
    "portfolio.proj13_cat": "Backend",
    "portfolio.proj14_title": "Traductor US-UK",
    "portfolio.proj14_cat": "Backend",

    // Contact
    "contact.title": "Contacto",
    "contact.text": "\u00a1Conectemos! Ya sea que tengas una oportunidad laboral, una idea de proyecto o simplemente quieras hablar sobre QA, no dudes en comunicarte a trav\u00e9s de cualquiera de los siguientes canales.",
    "contact.email_outlook": "Email \u2014 Outlook",
    "contact.email_gmail": "Email \u2014 Gmail",
    "contact.phone": "Tel\u00e9fono",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub"
  }
};



/*-----------------------------------*\
  #i18n APPLY LANGUAGE
\*-----------------------------------*/

const applyLanguage = function (lang) {

  const dict = i18n[lang];
  if (!dict) return;

  // Update <html lang="...">
  document.documentElement.setAttribute("lang", lang);

  // Translate all elements with data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  for (let i = 0; i < elements.length; i++) {
    const key = elements[i].getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      elements[i].textContent = dict[key];
    }
  }

  // Update CV link href based on active language
  const cvLink = document.querySelector(".btn-cv");
  if (cvLink) {
    cvLink.setAttribute("href", lang === "es" ? "./cv-es.html" : "./cv.html");
  }

  // Update language toggle button
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    if (lang === "en") {
      langToggle.innerHTML = "\ud83c\uddfa\ud83c\uddf8";
      langToggle.setAttribute("title", "Switch to Espa\u00f1ol");
      langToggle.setAttribute("aria-label", "Switch to Spanish");
    } else {
      langToggle.innerHTML = "\ud83c\uddea\ud83c\uddf8";
      langToggle.setAttribute("title", "Switch to English");
      langToggle.setAttribute("aria-label", "Switch to English");
    }
  }

  // Persist preference
  localStorage.setItem("lang", lang);
};



/*-----------------------------------*\
  #i18n TOGGLE HANDLER
\*-----------------------------------*/

document.getElementById("lang-toggle").addEventListener("click", function () {
  const currentLang = localStorage.getItem("lang") || "en";
  const newLang = currentLang === "en" ? "es" : "en";
  applyLanguage(newLang);
});



/*-----------------------------------*\
  #SIDEBAR
\*-----------------------------------*/

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



/*-----------------------------------*\
  #PORTFOLIO FILTER
\*-----------------------------------*/

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items — use data-filter-value for i18n-safe filtering
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.dataset.filterValue;
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items — use data-filter-value for i18n-safe filtering
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.dataset.filterValue;
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



/*-----------------------------------*\
  #PAGE NAVIGATION
\*-----------------------------------*/

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link — use data-nav-value for i18n-safe navigation
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    const navValue = this.dataset.navValue;

    for (let j = 0; j < pages.length; j++) {
      if (navValue === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}



/*-----------------------------------*\
  #i18n INIT — load saved language
\*-----------------------------------*/

(function () {
  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);
})();
