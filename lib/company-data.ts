export type Locale = 'en' | 'ar';

export interface NavItem {
  key: string;
  href: {
    en: string;
    ar: string;
  };
  label: {
    en: string;
    ar: string;
  };
  children?: {
    href: { en: string; ar: string };
    label: { en: string; ar: string };
    desc?: { en: string; ar: string };
  }[];
}

export interface ServiceDetail {
  slug: string;
  id: string;
  number: string;
  title: { en: string; ar: string };
  shortDesc: { en: string; ar: string };
  overview: { en: string; ar: string };
  icon: string;
  capabilities: { en: string; ar: string }[];
  deliverables: { en: string; ar: string }[];
  strategicValue: { en: string; ar: string };
  relatedServices: string[];
}

export interface ProjectRecord {
  id: number;
  project: { en: string; ar: string };
  client: { en: string; ar: string };
  valueAED: string;
  period: string;
  status: { en: string; ar: string };
  progress: string;
  category: 'analytics' | 'support' | 'automation' | 'infra' | 'manpower';
  isNew?: boolean;
}

export interface ContactPerson {
  name: { en: string; ar: string };
  title: { en: string; ar: string };
  phone: string;
}

export const COMPANY_PROFILE = {
  name: {
    en: 'Mustasharcom for Informatics Solutions',
    ar: 'مستشاركم للحلول المعلوماتية',
  },
  shortName: {
    en: 'Mustasharcom',
    ar: 'مستشاركم',
  },
  tagline: {
    en: 'IT Consultancy · Data & AI Solutions · Digital Transformation for Government & Enterprise',
    ar: 'استشارات تقنية المعلومات · حلول البيانات والذكاء الاصطناعي · التحول الرقمي للقطاع الحكومي والمؤسسات',
  },
  established: 2019,
  location: {
    city: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    country: { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' },
  },
  ownership: {
    en: '100% UAE National-Owned',
    ar: 'مملوكة بنسبة 100% لمواطني دولة الإمارات',
  },
  licence: {
    number: 'CN-2769971',
    authority: 'ADRA (Abu Dhabi Department of Economic Development)',
    authorityAr: 'دائرة التنمية الاقتصادية - أبوظبي (ADRA)',
    validity: '17 April 2031',
    validityAr: '17 أبريل 2031',
    activities: {
      en: [
        'Research & development in smart systems',
        'Data classification and analysis',
        'Computer systems and software design',
        'IT consultancy',
        'Call-centre services',
        'Quality / standardisation consultancy',
        'Computer network management and operation',
      ],
      ar: [
        'البحث والتطوير في الأنظمة الذكية',
        'تصنيف وتحليل البيانات',
        'تصميم نظم وبرمجيات الحاسوب',
        'استشارات تقنية المعلومات',
        'خدمات مراكز الاتصال',
        'استشارات الجودة والمقاييس',
        'إدارة وتشغيل شبكات الحاسوب الآلي',
      ],
    },
  },
  certifications: {
    iso: {
      standard: 'ISO 9001:2015',
      system: {
        en: 'Quality Management System (QMS)',
        ar: 'نظام إدارة الجودة',
      },
      certificateNumber: 'UAF140791497',
      validity: '13 July 2028',
      validityAr: '13 يوليو 2028',
    },
    icv: {
      score: '55.03%',
      certificateNumber: '153777',
      category: {
        en: 'SME in UAE · Service Provider',
        ar: 'منشأة صغيرة ومتوسطة في الإمارات · مزود خدمات',
      },
      validity: '31 August 2027',
      validityAr: '31 أغسطس 2027',
    },
  },
  metrics: {
    engagements: '17',
    quantifiableValue: 'AED 69M+',
    activeProjects: '13',
    govPercentage: '100%',
  },
  office: {
    address: {
      en: 'Office 02, 3rd Floor, East 22_2 Building, Al Jazira Sports & Cultural Club, Al Nahyan, Abu Dhabi, UAE',
      ar: 'مكتب 02، الطابق الثالث، مبنى شرق 22_2، نادي الجزيرة الرياضي الثقافي، آل نهيان، أبوظبي، الإمارات',
    },
    poBox: '58571',
    telFax: '+971 2 658 8099 / 8909',
    tel1: '+971 2 658 8099',
    tel2: '+971 2 658 8909',
    email: 'info@mustasharcom.ae',
  },
  leadership: [
    {
      name: { en: 'Jasem Hasan Jasem', ar: 'جاسم حسن جاسم' },
      title: { en: 'Chief Executive Officer', ar: 'الرئيس التنفيذي' },
      phone: '+971 50 628 6221',
    },
    {
      name: { en: 'Azhar Nasr', ar: 'أزهر نصر' },
      title: { en: 'Technical Manager', ar: 'المدير الفني' },
      phone: '+971 50 621 0636',
    },
    {
      name: { en: 'Alaa Abulula', ar: 'علاء أبوالعلا' },
      title: { en: 'Business Development', ar: 'تطوير الأعمال' },
      phone: '+971 50 775 3569',
    },
  ] as ContactPerson[],
  quote: {
    en: 'We come in as consultants — we understand your business and help you maximise revenue while minimising cost.',
    ar: 'نأتي كاستشاريين — نفهم طبيعة أعمالكم ونساعدكم على تعظيم العوائد وخفض التكاليف التشغيلية.',
  },
  mission: {
    en: 'To provide the most advanced, integrated consultancy services in software solutions to our clients in the most easily implemented way — coordinating each client’s resources, information, and activities within one holistic system that drives measurable productivity and efficiency.',
    ar: 'تقديم أكثر الخدمات الاستشارية تقدماً وتكاملاً في الحلول البرمجية لعملائنا بالطريقة الأسهل تنفيذاً — وتنسيق موارد كل عميل ومعلوماته وأنشطته ضمن نظام متكامل يقود إلى إنتاجية وكفاءة قابلة للقياس.',
  },
  consultancyApproach: {
    en: 'Mustasharcom for Informatics Solutions has developed and implemented complex business solutions in the most simplified way possible for our customers. Our experienced and skilled team of project managers, programmers, and quality experts delivers technical implementation in a cost-effective and timely manner, using modern technologies matched to global best practice.',
    ar: 'قامت مستشاركم للحلول المعلوماتية بتطوير وتنفيذ حلول أعمال معقدة بأبسط الطرق الممكنة لعملائنا. يقدم فريقنا الماهر والمتمرس من مديري المشاريع والمبرمجين وخبراء الجودة تنفيذاً تقنياً فعالاً من حيث التكلفة والالتزام الزمني، باستخدام تقنيات حديثة تتوافق مع أفضل الممارسات العالمية.',
  },
};

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    key: 'home',
    href: { en: '/', ar: '/ar' },
    label: { en: 'Home', ar: 'الرئيسية' },
  },
  {
    key: 'about',
    href: { en: '/about', ar: '/ar/about' },
    label: { en: 'About', ar: 'من نحن' },
  },
  {
    key: 'services',
    href: { en: '/services', ar: '/ar/services' },
    label: { en: 'Services', ar: 'خدماتنا' },
    children: [
      {
        href: { en: '/services/it-consulting', ar: '/ar/services/it-consulting' },
        label: { en: 'IT Consulting & Project Management', ar: 'استشارات تقنية المعلومات وإدارة المشاريع' },
        desc: { en: 'Strategic roadmaps, project governance, and municipal sector advisory', ar: 'خرائط طريق استراتيجية، وحوكمة المشاريع، والاستشارات البلدية' },
      },
      {
        href: { en: '/services/data-ai', ar: '/ar/services/data-ai' },
        label: { en: 'Data, Analytics & AI Solutions', ar: 'البيانات، التحليلات وحلول الذكاء الاصطناعي' },
        desc: { en: 'Power BI dashboards, data consultancy, RPA and automated workflows', ar: 'لوحات Power BI، واستشارات البيانات، وأتمتة العمليات RPA' },
      },
      {
        href: { en: '/services/systems-applications', ar: '/ar/services/systems-applications' },
        label: { en: 'Systems & Digital Applications', ar: 'الأنظمة والتطبيقات الرقمية' },
        desc: { en: 'Enterprise ERP, SAP Ariba support, e-commerce, and mobile platforms', ar: 'أنظمة تخطيط الموارد ERP، ودعم SAP Ariba، والتطبيقات المتنقلة' },
      },
      {
        href: { en: '/services/infrastructure-security', ar: '/ar/services/infrastructure-security' },
        label: { en: 'Infrastructure, Networks & Security', ar: 'البنية التحتية، الشبكات وأمن المعلومات' },
        desc: { en: 'Mission-critical hardware, enterprise networking, and security governance', ar: 'الأجهزة والشبكات المتقدمة، وحلول أمن المعلومات وحوكمتها' },
      },
      {
        href: { en: '/services/technical-support', ar: '/ar/services/technical-support' },
        label: { en: 'Technical Support Services', ar: 'خدمات الدعم الفني' },
        desc: { en: 'Continuous SLA support, incident management, and ICT manpower provision', ar: 'دعم بموجب مستويات خدمة صارمة، وتوفير الكفاءات التخصصية' },
      },
      {
        href: { en: '/services/contact-center', ar: '/ar/services/contact-center' },
        label: { en: 'Contact Centre Solutions', ar: 'حلول مراكز الاتصال وإدارة التواصل' },
        desc: { en: 'Smart Hub operations, CRM systems, and unified citizen communication', ar: 'تشغيل المراكز الذكية، وأنظمة CRM، ومنظومات خدمة المواطنين' },
      },
    ],
  },
  {
    key: 'projects',
    href: { en: '/projects', ar: '/ar/projects' },
    label: { en: 'Projects', ar: 'المشاريع' },
  },
  {
    key: 'quality-compliance',
    href: { en: '/quality-compliance', ar: '/ar/quality-compliance' },
    label: { en: 'Quality & Compliance', ar: 'الجودة والامتثال' },
  },
  {
    key: 'contact',
    href: { en: '/contact', ar: '/ar/contact' },
    label: { en: 'Contact', ar: 'تواصل معنا' },
  },
];

export const SERVICES_CATALOG: ServiceDetail[] = [
  {
    slug: 'it-consulting',
    id: 'it-consulting',
    number: '01',
    title: {
      en: 'IT Consulting & Project Management',
      ar: 'استشارات تقنية المعلومات وإدارة المشاريع',
    },
    shortDesc: {
      en: 'Strategic IT advisory, project governance, and specialized operational consultation tailored for public sector institutions and enterprise entities.',
      ar: 'استشارات استراتيجية لتقنية المعلومات، وحوكمة المشاريع، واستشارات تشغيلية متخصصة موجهة للمؤسسات الحكومية والشركات الكبرى.',
    },
    overview: {
      en: 'Mustasharcom provides comprehensive IT consultancy services and manages large-scale IT projects from inception to sustained operational readiness. We align technical infrastructure with institutional mandates, coordinating stakeholders, methodologies, and quality standards to guarantee predictable delivery and cost containment.',
      ar: 'تقدم مستشاركم خدمات استشارية متكاملة في تقنية المعلومات وإدارة المشاريع التقنية الكبرى من مرحلة التخطيط حتى الجاهزية التشغيلية المستدامة. نوائم البنية التحتية التقنية مع الأهداف المؤسسية، مع تنسيق منهجيات العمل ومعايير الجودة لضمان التسليم الموثوق وإدارة التكاليف.',
    },
    icon: 'briefcase',
    capabilities: [
      {
        en: 'IT Consultancy Services: Architecture assessment, digital roadmapping, and vendor evaluation',
        ar: 'استشاريات تقنية المعلومات: تقييم البنية المؤسسية، وخرائط الطريق الرقمية، واختيار الموردين',
      },
      {
        en: 'Managing IT Projects: End-to-end PMO governance, milestone tracking, and risk mitigation',
        ar: 'إدارة المشاريع التقنية: حوكمة مكاتب إدارة المشاريع PMO، ومتابعة المراحل وإدارة المخاطر',
      },
      {
        en: 'Operations Sector Advisory: Customized business consultant services for municipality centers',
        ar: 'استشارات قطاع العمليات: استشارات أعمال مخصصة لقطاعات عمليات المراكز البلدية',
      },
      {
        en: 'Digital Transformation Planning: Phased migration from legacy procedures to automated workflows',
        ar: 'تخطيط التحول الرقمي: الانتقال المنظم من الإجراءات التقليدية إلى مسارات العمل المؤتمتة',
      },
    ],
    deliverables: [
      {
        en: 'Enterprise IT Masterplans and Gap Analyses',
        ar: 'المخططات الاستراتيجية الشاملة لتقنية المعلومات وتحليلات الفجوات',
      },
      {
        en: 'Project Management Governance Frameworks',
        ar: 'أطر حوكمة وإدارة المشاريع التقنية',
      },
      {
        en: 'Technical Specifications & RFP Tender Formulation',
        ar: 'صياغة المواصفات الفنية ووثائق طلب العروض (RFP)',
      },
      {
        en: 'Operational Readiness & Quality Assurance Audits',
        ar: 'مراجعات الجاهزية التشغيلية وضمان الجودة المعتمدة',
      },
    ],
    strategicValue: {
      en: 'Backed by extensive public sector delivery in Abu Dhabi, our consultancy models minimize implementation risk while accelerating municipal service availability.',
      ar: 'انطلاقاً من خبرتنا في القطاع الحكومي بأبوظبي، تضمن نماذجنا الاستشارية تقليص مخاطر التنفيذ مع تسريع توفر الخدمات البلدية.',
    },
    relatedServices: ['data-ai', 'systems-applications', 'technical-support'],
  },
  {
    slug: 'data-ai',
    id: 'data-ai',
    number: '02',
    title: {
      en: 'Data, Analytics & AI Solutions',
      ar: 'البيانات، التحليلات وحلول الذكاء الاصطناعي',
    },
    shortDesc: {
      en: 'Data analysis consultancy, Power BI executive dashboards, and Robotic Process Automation (RPA) engineering that turns complex data assets into actionable leadership intelligence.',
      ar: 'استشارات تحليل البيانات، لوحات Power BI التنفيذية، وهندسة أتمتة الإجراءات بالذكاء الاصطناعي (RPA) لتحويل أصول البيانات إلى مؤشرات قيادية دقيقة.',
    },
    overview: {
      en: 'Data and intelligent automation form a core pillar of Mustasharcom’s verified expertise. From multi-million AED engagements analyzing municipal digital usage to building live Power BI executive reporting ecosystems and automating network programming procedures with AI/RPA, we empower leaders with precise decision metrics.',
      ar: 'تشكل البيانات والأتمتة الذكية ركيزة أساسية من خبرات مستشاركم الموثقة. من مشاريع بمليارات الدراهم في تحليل استخدام الخدمات الرقمية البلدية إلى بناء منظومات التقارير التنفيذية بـ Power BI وأتمتة إجراءات البرمجة بالذكاء الاصطناعي وRPA، نمكّن القيادات من اتخاذ قرارات مبنية على حقائق دقيقة.',
    },
    icon: 'bar-chart-3',
    capabilities: [
      {
        en: 'Data Analysis Consultancy: Comprehensive classification, statistical auditing, and adoption analysis',
        ar: 'استشارات تحليل البيانات: التصنيف الشامل، والتدقيق الإحصائي، وتحليل معدلات تبني الخدمات',
      },
      {
        en: 'Data Analytics & Power BI Dashboards: Interactive leadership dashboards, KPI monitors, and scheduled Power BI reporting',
        ar: 'لوحات تحليل البيانات Power BI: لوحات تحكم تفاعلية للقيادة، ومراقبة مؤشرات الأداء، والتقارير الدورية المعتمدة',
      },
      {
        en: 'Automation, RPA & AI Solutions: Bot-driven task automation, network programming acceleration, and rule engines',
        ar: 'أتمتة الإجراءات وحلول الذكاء الاصطناعي: أتمتة المهام بالروبوت البرمجي، وتسريع برمجة الشبكات، ومحركات القواعد الذكية',
      },
      {
        en: 'Data Governance & Integration: Data pipeline harmonization across municipal departments and central repositories',
        ar: 'حوكمة وتكامل البيانات: مواءمة تدفقات البيانات عبر الإدارات البلدية والمستودعات المركزية',
      },
    ],
    deliverables: [
      {
        en: 'Executive Power BI Dashboard Suites with Drill-Down Telemetry',
        ar: 'حزم لوحات Power BI التنفيذية مع إمكانية استعراض التفاصيل التحليلية',
      },
      {
        en: 'Data Usage & Adoption Diagnostic Reports',
        ar: 'تقارير تشخيصية لمعدلات استخدام واعتماد الخدمات الرقمية',
      },
      {
        en: 'Automated RPA Bot Workflows for Network & Document Procedures',
        ar: 'مسارات أتمتة روبوتية (RPA) لإجراءات الشبكات ومعالجة المعاملات',
      },
      {
        en: 'Data Modeling, ETL Frameworks and Security Compliance Checklists',
        ar: 'نماذج البيانات، وأطر التحويل (ETL)، وقوائم الامتثال لأمن وسرية البيانات',
      },
    ],
    strategicValue: {
      en: 'Directly demonstrated in major projects including the AED 10M RPA Network Automation and the ongoing Power BI Reporting consultancy with Abu Dhabi municipal entities.',
      ar: 'مثبت عملياً في مشاريع كبرى تشمل أتمتة إجراءات الشبكات بالذكاء الاصطناعي (10 ملايين درهم) واستشارات لوحات تقارير Power BI المستمرة مع الجهات البلدية بأبوظبي.',
    },
    relatedServices: ['it-consulting', 'systems-applications', 'infrastructure-security'],
  },
  {
    slug: 'systems-applications',
    id: 'systems-applications',
    number: '03',
    title: {
      en: 'Systems & Digital Applications',
      ar: 'الأنظمة والتطبيقات الرقمية',
    },
    shortDesc: {
      en: 'Enterprise Resource Planning (ERP), SAP Ariba technical support, customized software development, mobility solutions, and digital transactional platforms.',
      ar: 'أنظمة تخطيط موارد المؤسسات (ERP)، والدعم الفني لمنظومة SAP Ariba، وتطوير البرمجيات المتخصصة، وتطبيقات الهاتف المتحرك، ومنصات التعاملات الرقمية.',
    },
    overview: {
      en: 'We engineer, enhance, and sustain core enterprise systems that streamline resource planning, procurement, and public-facing digital services. Our experience spans institutional ERP architectures, SAP Ariba procurement workflows, custom governmental applications, and responsive mobility frameworks.',
      ar: 'نقوم بتطوير وتحسين واستدامة الأنظمة المؤسسية المركزية التي تسهل تخطيط الموارد، والمشتريات، والخدمات الرقمية الموجهة للجمهور. تمتد خبراتنا عبر بنى ERP المؤسسية، وتدفقات مشتريات SAP Ariba، وتطبيقات الجهات الحكومية، وأطر تطبيقات الهواتف المتحركة.',
    },
    icon: 'layers',
    capabilities: [
      {
        en: 'ERP Systems: Enterprise resource planning lifecycle configuration, process realignment, and auditability',
        ar: 'أنظمة تخطيط موارد المؤسسات ERP: تكوين دورة حياة تخطيط الموارد، وإعادة هندسة العمليات، وقابلية التدقيق',
      },
      {
        en: 'SAP & Ariba Technical Support: Procurement integration, catalog management, and workflow maintenance',
        ar: 'الدعم الفني لأنظمة SAP وAriba: تكامل المشتريات، وإدارة الكتالوجات، وصيانة مسارات العمل',
      },
      {
        en: 'Enhancement, Development & Support for Applications: Custom software lifecycle engineering',
        ar: 'تطوير ودعم وتحسين التطبيقات: هندسة دورة حياة البرمجيات المتخصصة للجهات الحكومية',
      },
      {
        en: 'Mobility Solutions & E-Commerce: Cross-platform mobile applications and secure transaction gateways',
        ar: 'حلول تطبيقات الهاتف والتجارة الإلكترونية: تطبيقات متعددة المنصات وبوابات تعاملات آمنة',
      },
    ],
    deliverables: [
      {
        en: 'Configured & Supported SAP / ERP Transaction Modules',
        ar: 'وحدات وأنظمة SAP / ERP المهيأة والمدعومة تشغيلياً',
      },
      {
        en: 'High-Availability Web & Native Mobile Client Applications',
        ar: 'تطبيقات الويب والتطبيقات الذكية عالية التوافر للمستخدمين',
      },
      {
        en: 'API Integration Hubs Connecting Core Backend Registers',
        ar: 'مراكز تكامل واجهات البرمجة (APIs) لربط السجلات الخلفية الأساسية',
      },
      {
        en: 'Application Maintenance, Patch Management and Feature Sprints',
        ar: 'صيانة التطبيقات، وإدارة التحديثات الأمنية، وتطوير الميزات الجديدة',
      },
    ],
    strategicValue: {
      en: 'Validated through projects like the AED 11.69M application enhancement mandate for DMT and SAP Ariba support for the Integrated Transport Centre.',
      ar: 'موثق عبر مشاريع بارزة كمشروع تطوير وتحسين ودعم التطبيقات بقيمة 11.69 مليون درهم لدائرة البلديات والنقل، ودعم SAP Ariba لمركز النقل المتكامل.',
    },
    relatedServices: ['it-consulting', 'technical-support', 'infrastructure-security'],
  },
  {
    slug: 'infrastructure-security',
    id: 'infrastructure-security',
    number: '04',
    title: {
      en: 'Infrastructure, Networks & Security',
      ar: 'البنية التحتية، الشبكات وأمن المعلومات',
    },
    shortDesc: {
      en: 'Resilient hardware deployments, high-performance network engineering, and information security solutions built to safeguard mission-critical government infrastructure.',
      ar: 'تجهيزات الأجهزة الموثوقة، وهندسة الشبكات عالية الأداء، وحلول أمن المعلومات المصممة لحماية البنى التحتية الحيوية والمؤسسية.',
    },
    overview: {
      en: 'Mustasharcom designs, implements, and maintains robust ICT infrastructure that meets sovereign reliability and compliance standards. Our engineers deploy server environments, enterprise network architectures, structured hardware configurations, and multi-layered cyber security controls.',
      ar: 'تصمم مستشاركم وتنفذ وتدير بنية تحتية لتقنية المعلومات والاتصالات تلبي أعلى معايير الاعتمادية الوطنية والامتثال. ينشر مهندسونا بيئات الخوادم، والشبكات المؤسسية، وتجهيزات الأجهزة، وضوابط أمن المعلومات متعددة الطبقات.',
    },
    icon: 'shield-check',
    capabilities: [
      {
        en: 'IT Infrastructure: Enterprise server hosting, storage consolidation, and virtualization environments',
        ar: 'البنية التحتية التقنية: استضافة الخوادم المؤسسية، وتجميع وحدات التخزين، وبيئات المحاكاة الافتراضية',
      },
      {
        en: 'Hardware and Network: Structured cabling, active switching, routing, and high-bandwidth interconnects',
        ar: 'الأجهزة والشبكات: التمديدات المنظمة، والمفاتيح النشطة، والتوجيه، والربط الشبكي عالي السعة',
      },
      {
        en: 'Security Solutions: Perimeter defense, endpoint protection, access governance, and vulnerability scanning',
        ar: 'حلول أمن المعلومات: الحماية المحيطية، وحماية النقاط الطرفية، وحوكمة الوصول، وفحص الثغرات',
      },
      {
        en: 'Network Management & Operations: Continuous link monitoring, bandwidth optimization, and failover architectures',
        ar: 'إدارة وتشغيل شبكات الحاسوب: المراقبة المستمرة، وتحسين النطاق الترددي، وأنظمة التعافي التلقائي',
      },
    ],
    deliverables: [
      {
        en: 'Resilient On-Premises & Hybrid Infrastructure Topologies',
        ar: 'طوبولوجيا بنية تحتية هجينة ومحلية تتسم بالمرونة العالية',
      },
      {
        en: 'Network Architecture Documentation & High-Availability Configurations',
        ar: 'توثيق بنية الشبكات وتكوينات التوافر العالي والنسخ الاحتياطي',
      },
      {
        en: 'Security Posture Assessments & Baseline Hardening Guidelines',
        ar: 'تقييمات الوضع الأمني وأدلة التحصين التقني المعتمدة',
      },
      {
        en: 'Hardware Commissioning, Warranty Handling and Lifecycle Upgrades',
        ar: 'تشغيل واختبار الأجهزة، وإدارة الضمانات، وترقية دورة الحياة',
      },
    ],
    strategicValue: {
      en: 'Licensed by ADRA for computer network management and smart system operation, ensuring compliant infrastructure execution for Abu Dhabi entities.',
      ar: 'مرخصة رسمياً من دائرة التنمية الاقتصادية بأبوظبي لإدارة وتشغيل شبكات الحاسوب والأنظمة الذكية وفق أعلى الضوابط التنظيمية.',
    },
    relatedServices: ['it-consulting', 'technical-support', 'systems-applications'],
  },
  {
    slug: 'technical-support',
    id: 'technical-support',
    number: '05',
    title: {
      en: 'Technical Support Services',
      ar: 'خدمات الدعم الفني',
    },
    shortDesc: {
      en: 'Mission-critical SLA-driven technical support, systems maintenance, specialized presence center backing, and strategic ICT manpower outsourcing.',
      ar: 'دعم فني متخصص ومحكوم باتفاقيات مستوى خدمة (SLA)، وصيانة الأنظمة، ودعم مراكز التواجد البلدي، وتوفير الكوادر التقنية المتخصصة.',
    },
    overview: {
      en: 'We maintain continuous system availability across Abu Dhabi government departments. From dedicated support for municipal presence centers to Tamm platform technical services, estates management systems, and ICT manpower outsourcing, our certified teams guarantee responsive issue resolution.',
      ar: 'نحافظ على الجاهزية التشغيلية المستمرة للأنظمة في مختلف الدوائر الحكومية بأبوظبي. من الدعم المخصص لمشاريع مراكز التواجد البلدي، إلى خدمات الدعم الفني لمنصة "تم"، ونظام إدارة التركات، وتوفير الكفاءات التقنية المتخصصة، يضمن فريقنا حل المشكلات بسرعة واحترافية.',
    },
    icon: 'wrench',
    capabilities: [
      {
        en: 'Technical Support Services: Multi-tiered helpdesk, on-site engineers, and preventative system servicing',
        ar: 'خدمات الدعم الفني: مكتب مساعدة متعدد المستويات، مهندسون ميدانيون، وصيانة وقائية للأنظمة',
      },
      {
        en: 'Municipal Presence Centre Support: Long-term operational technical backing for localized municipal branches',
        ar: 'دعم مشاريع مراكز التواجد البلدي: إسناد فني تشغيلي طويل الأجل للمراكز والفروع البلدية',
      },
      {
        en: 'Government Platform Support: Dedicated technical administration for platforms such as Tamm',
        ar: 'دعم المنصات الحكومية: إدارة فنية متخصصة لمنصات مثل منصة "تم" ونظم الرعاية الاجتماعية',
      },
      {
        en: 'ICT Manpower Outsourcing: Deploying certified developers, analysts, and system administrators to government entities',
        ar: 'توفير الكفاءات والموارد التقنية: إسناد مبرمجين ومحللين ومديري أنظمة معتمدين للجهات الحكومية',
      },
    ],
    deliverables: [
      {
        en: 'Guaranteed Multi-Tier SLA Response Frameworks',
        ar: 'أطر استجابة محددة باتفاقيات مستوى الخدمة (SLA) متعددة المستويات',
      },
      {
        en: 'Dedicated On-Site & Remote Certified Technical Teams',
        ar: 'فرق تقنية معتمدة متواجدة ميدانياً وعن بُعد في أبوظبي',
      },
      {
        en: 'Periodic Incident, Preventive Maintenance and Uptime Audit Logs',
        ar: 'سجلات تدقيق دورية للحوادث والصيانة الوقائية ومعدلات التوافر',
      },
      {
        en: 'Flexible ICT Specialist Resource Placement Under Formal Agreements',
        ar: 'توفير متخصصين في تقنية المعلومات وفق اتفاقيات إسناد رسمية مرنة',
      },
    ],
    strategicValue: {
      en: 'Reflected in landmark engagements including the AED 9M Municipal Presence Centre contract (2022–2029) and manpower outsourcing for ADDA and government support departments.',
      ar: 'يتجلى في عقود محورية تشمل دعم مراكز التواجد البلدي بقيمة 9 ملايين درهم (2022–2029) وعقود توفير الكوادر لهيئة أبوظبي الرقمية ودائرة الإسناد الحكومي.',
    },
    relatedServices: ['contact-center', 'infrastructure-security', 'it-consulting'],
  },
  {
    slug: 'contact-center',
    id: 'contact-center',
    number: '06',
    title: {
      en: 'Communication & Contact Centre Solutions',
      ar: 'حلول مراكز الاتصال وإدارة التواصل',
    },
    shortDesc: {
      en: 'Smart Hub call center operations, CRM systems integration, and omnichannel citizen support platforms designed for municipal and government entities.',
      ar: 'تشغيل مراكز الاتصال الذكية (Smart Hub)، وتكامل أنظمة إدارة علاقات العملاء (CRM)، ومنصات دعم وتواصل المواطنين والمجتمع.',
    },
    overview: {
      en: 'Mustasharcom possesses deep specialization in government contact center operations. Having executed multiple multi-million AED contracts for Abu Dhabi City Municipality’s Smart Hub Call Centre and CRM systems, we unify telephony, CRM integration, digital ticketing, and citizen feedback loops into seamless operations.',
      ar: 'تمتلك مستشاركم تخصصاً عميقاً في إدارة وتشغيل مراكز الاتصال الحكومية. فمن خلال تنفيذ عقود متتالية بملايين الدراهم لمركز الاتصال الذكي (Smart Hub) ونظام CRM لبلدية مدينة أبوظبي، نوحد الاتصالات الهاتفية، وتكامل إدارة علاقات العملاء، والتذاكر الرقمية في منظومة تشغيلية سلسة.',
    },
    icon: 'headset',
    capabilities: [
      {
        en: 'Smart Hub Call Centre Support: High-capacity telephony routing, queue balancing, and operational supervision',
        ar: 'دعم مراكز الاتصال الذكية (Smart Hub): توجيه المكالمات عالي السعة، وإدارة الانتظار، والإشراف التشغيلي',
      },
      {
        en: 'CRM Systems Integration: Case logging, citizen profile enrichment, and cross-departmental escalation paths',
        ar: 'تكامل أنظمة CRM: تسجيل البلاغات والمعاملات، وتحديث ملفات المتعاملين، وتصعيد الحالات بين الإدارات',
      },
      {
        en: 'Quality Monitoring & Analytics: First-contact resolution auditing, citizen satisfaction (CSAT) scoring, and KPI analytics',
        ar: 'مراقبة الجودة والتحليلات: تدقيق الحل من أول اتصال، وقياس رضا المتعاملين، وتحليلات مؤشرات الأداء',
      },
      {
        en: 'Bilingual Agent & Supervisor Tooling: Native Arabic and English workflow consoles with knowledgebase synchronization',
        ar: 'أدوات الموظفين والمشرفين باللغتين: واجهات عمل عربية وإنجليزية مع تكامل قواعد المعرفة المحدثة',
      },
    ],
    deliverables: [
      {
        en: 'Fully Integrated Smart Hub Contact Centre Telephony & CRM Workspaces',
        ar: 'بيئات عمل متكاملة لمراكز الاتصال الذكية تجمع الهاتف ونظام إدارة علاقات المتعاملين',
      },
      {
        en: 'Operational SLA Governance & Real-Time Queue Telemetry',
        ar: 'حوكمة اتفاقيات مستوى الخدمة ومؤشرات حية لمراقبة خطوط الاتصال',
      },
      {
        en: 'Citizen Inquiry Resolution Pipelines and Escalation Matrixes',
        ar: 'مسارات معالجة استفسارات وطلبات المتعاملين ومصفوفات التصعيد المعتمدة',
      },
      {
        en: 'Performance Audits and Customer Satisfaction Benchmark Reports',
        ar: 'تقارير تدقيق الأداء ومؤشرات قياس الرضا المرفوعة للقيادة البلدية',
      },
    ],
    strategicValue: {
      en: 'Proven across consecutive contracts with Abu Dhabi City Municipality totaling over AED 21.7M for Smart Hub Services and CRM operations.',
      ar: 'مثبت عبر عقود متتالية مع بلدية مدينة أبوظبي تجاوزت قيمتها 21.7 مليون درهم لخدمات المركز الذكي ونظام إدارة علاقات العملاء CRM.',
    },
    relatedServices: ['technical-support', 'data-ai', 'it-consulting'],
  },
];

export const PROJECTS_RECORD: ProjectRecord[] = [
  {
    id: 1,
    project: {
      en: 'Consultancy Services to Analyse Data and Increase Usage of Digital Services',
      ar: 'خدمات استشارية لتحليل البيانات وزيادة استخدام الخدمات الرقمية',
    },
    client: {
      en: 'Abu Dhabi City Municipality',
      ar: 'بلدية مدينة أبوظبي',
    },
    valueAED: '3,599,984',
    period: 'Aug 2019 – Dec 2020',
    status: { en: 'Completed', ar: 'مكتمل' },
    progress: '100%',
    category: 'analytics',
  },
  {
    id: 2,
    project: {
      en: 'Technical Support for Smart Hub Services and CRM (Call Centre)',
      ar: 'الدعم الفني لخدمات المركز الذكي ونظام إدارة علاقات العملاء (مركز الاتصال)',
    },
    client: {
      en: 'Abu Dhabi City Municipality',
      ar: 'بلدية مدينة أبوظبي',
    },
    valueAED: '572,000',
    period: 'Sep – Dec 2022',
    status: { en: 'Completed', ar: 'مكتمل' },
    progress: '100%',
    category: 'support',
  },
  {
    id: 3,
    project: {
      en: 'Technical Support for Smart Hub Services and CRM (Call Centre)',
      ar: 'الدعم الفني لخدمات المركز الذكي ونظام إدارة علاقات العملاء (مركز الاتصال)',
    },
    client: {
      en: 'Abu Dhabi City Municipality',
      ar: 'بلدية مدينة أبوظبي',
    },
    valueAED: '6,700,000',
    period: 'Jan 2021 – Dec 2022',
    status: { en: 'Completed', ar: 'مكتمل' },
    progress: '100%',
    category: 'support',
  },
  {
    id: 4,
    project: {
      en: 'Technical Support for Smart Hub Services and CRM (Call Centre)',
      ar: 'الدعم الفني لخدمات المركز الذكي ونظام إدارة علاقات العملاء (مركز الاتصال)',
    },
    client: {
      en: 'Abu Dhabi City Municipality',
      ar: 'بلدية مدينة أبوظبي',
    },
    valueAED: '14,522,880',
    period: 'Jan 2023 – Dec 2024',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '8%',
    category: 'support',
  },
  {
    id: 5,
    project: {
      en: 'Customized Business Consultant Services for Sub-Centres Operations Sector',
      ar: 'خدمات استشارية متخصصة لقطاع عمليات المراكز الفرعية',
    },
    client: {
      en: 'Abu Dhabi City Municipality',
      ar: 'بلدية مدينة أبوظبي',
    },
    valueAED: '6,000,000',
    period: 'Feb 2020 – Feb 2024',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '0%',
    category: 'analytics',
  },
  {
    id: 6,
    project: {
      en: 'Support for Development Projects of Municipality Centres Operations Sector',
      ar: 'دعم مشاريع التطوير لقطاع عمليات المراكز البلدية',
    },
    client: {
      en: 'Abu Dhabi City Municipality',
      ar: 'بلدية مدينة أبوظبي',
    },
    valueAED: '6,000,000',
    period: 'Oct 2019 – Oct 2024',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '40%',
    category: 'support',
  },
  {
    id: 7,
    project: {
      en: 'Automation of Network Programming Procedures Using AI (RPA)',
      ar: 'أتمتة إجراءات برمجة الشبكات باستخدام الذكاء الاصطناعي (RPA)',
    },
    client: {
      en: 'Dept. of Municipalities & Transport',
      ar: 'دائرة البلديات والنقل',
    },
    valueAED: '10,000,000',
    period: 'Aug 2020 – Aug 2023',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '83%',
    category: 'automation',
  },
  {
    id: 8,
    project: {
      en: 'Technical & Specialised Support for Municipal Presence Centre Projects',
      ar: 'الدعم الفني والتخصصي لمشاريع مراكز التواجد البلدي',
    },
    client: {
      en: 'Abu Dhabi City Municipality',
      ar: 'بلدية مدينة أبوظبي',
    },
    valueAED: '9,000,000',
    period: 'Apr 2022 – Apr 2029',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '40%',
    category: 'support',
  },
  {
    id: 9,
    project: {
      en: 'Enhancement, Development & Support for Applications',
      ar: 'تحسين وتطوير ودعم التطبيقات',
    },
    client: {
      en: 'Dept. of Municipalities & Transport',
      ar: 'دائرة البلديات والنقل',
    },
    valueAED: '11,692,713',
    period: 'Jun 2022 – Sep 2023',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '53%',
    category: 'infra',
  },
  {
    id: 10,
    project: {
      en: 'ICT Manpower / External Resources Outsourcing Agreement',
      ar: 'اتفاقية توفير الموارد الخارجية والكوادر التقنية',
    },
    client: {
      en: 'Zoo & Aquarium Public Institution, Al Ain',
      ar: 'المؤسسة العامة لحديقة الحيوان والأحياء المائية بالعين',
    },
    valueAED: '435,680',
    period: 'Jan 2022 – Oct 2023',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '50%',
    category: 'manpower',
  },
  {
    id: 11,
    project: {
      en: 'Provision of Technical Support – Ariba Services for SAP',
      ar: 'توفير الدعم الفني – خدمات Ariba لنظام SAP',
    },
    client: {
      en: 'Integrated Transport Centre',
      ar: 'مركز النقل المتكامل',
    },
    valueAED: '257,496',
    period: 'Aug 2022 – Aug 2023',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '40%',
    category: 'support',
  },
  {
    id: 12,
    project: {
      en: 'Technical Support Services for Tamm Platform',
      ar: 'خدمات الدعم الفني لمنصة تم',
    },
    client: {
      en: 'Social, Minors & Care Affairs Foundation',
      ar: 'مؤسسة الرعاية الاجتماعية وشؤون القصر',
    },
    valueAED: '193,200',
    period: 'Oct 2022 – Oct 2023',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '30%',
    category: 'support',
  },
  {
    id: 13,
    project: {
      en: 'Technical Support for Inherited (Estates) Management System',
      ar: 'الدعم الفني لنظام إدارة التركات الموروثة',
    },
    client: {
      en: 'Social, Minors & Care Affairs Foundation',
      ar: 'مؤسسة الرعاية الاجتماعية وشؤون القصر',
    },
    valueAED: '316,800',
    period: 'Oct 2022 – Oct 2023',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '30%',
    category: 'support',
  },
  {
    id: 14,
    project: {
      en: 'ICT Manpower Outsourcing – Service Agreement',
      ar: 'اتفاقية خدمات توفير الكوادر التقنية المتخصصة',
    },
    client: {
      en: 'Abu Dhabi Digital Authority',
      ar: 'هيئة أبوظبي الرقمية',
    },
    valueAED: 'As per usage',
    period: 'Jan 2022 – Oct 2023',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '0%',
    category: 'manpower',
  },
  {
    id: 15,
    project: {
      en: 'Provision of Services Modernization Resources',
      ar: 'توفير موارد ومختصين لتحديث الخدمات',
    },
    client: {
      en: 'Abu Dhabi Digital Authority',
      ar: 'هيئة أبوظبي الرقمية',
    },
    valueAED: 'As per usage',
    period: 'Jun 2022 – Jun 2025',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '0%',
    category: 'manpower',
  },
  {
    id: 16,
    project: {
      en: 'ICT Manpower Outsourcing for Abu Dhabi Government Entities',
      ar: 'توفير الكوادر التقنية المتخصصة للجهات الحكومية بأبوظبي',
    },
    client: {
      en: 'Dept. of Government Support',
      ar: 'دائرة الإسناد الحكومي',
    },
    valueAED: 'Per agreement',
    period: 'Nov 2021 – Nov 2023',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: '75%',
    category: 'manpower',
  },
  {
    id: 17,
    project: {
      en: 'Data Analytics & Power BI Reporting / Dashboards Consultancy',
      ar: 'استشارات تحليل البيانات وتقارير ولوحات Power BI',
    },
    client: {
      en: 'Dept. of Municipalities & Transport (Abu Dhabi Municipality)',
      ar: 'دائرة البلديات والنقل (بلدية مدينة أبوظبي)',
    },
    valueAED: 'To be confirmed',
    period: '2024 – Present',
    status: { en: 'In Progress', ar: 'قيد التنفيذ' },
    progress: 'To be confirmed',
    category: 'analytics',
    isNew: true,
  },
];
