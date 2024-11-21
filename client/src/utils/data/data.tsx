import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
export const sublinks = [
    {
        page: '/',
        links: [
            {
                label: 'payment', icon: <FaCreditCard />, url: '/products'
            },
            {
                label: 'terminal', icon: <FaCreditCard />, url: '/products'
            },
            { label: 'connect', icon: <FaCreditCard />, url: '/products' },
        ],
    },
    {
        page: 'observatory',
        links: [
            {
                label: 'plugins', icon: <FaBook />, url: '/products'
            },
            {
                label: 'libraries', icon: <FaBook />, url: '/products'
            },
            {
                label: 'help', icon: <FaBook />, url: '/products'
            },
            { label: 'billing', icon: <FaBook />, url: '/products' },
        ],
    },
    {
        page: 'statistics',
        links: [],
    },
    {
        page: 'articles',
        links: [
            {
                label: 'about', icon: <FaBriefcase />, url: '/products'
            },
            { label: 'customers', icon: <FaBriefcase />, url: '/products' },
        ],
    },
    {
        page: 'publications',
        links: [],
    },
    {
        page: 'collaborations',
        links: [],
    },
    {
        page: 'missions',
        links: [],
    }
];




// ----------

export const sublinks2 = [
    {
        target: "home",
        page: { fr: 'Accueil', ar: 'الرئيسية' },
        links: [
            // { label: { fr: 'Présentation', ar: 'تقديم' }, url: '/content/presentation' },
            // { label: { fr: 'Structuration organisationnelle', ar: 'الهيكلة النتظيمية' }, url: '/Structuration organisationnelle' },
            // { label: { fr: 'Tâches de référence', ar: 'المهام المرجعية' }, icon: <FaCreditCard />, url: '/Tâches de référence' },
            // { label: { fr: 'Tâches', ar: 'المهام' }, icon: <FaCreditCard />, url: '/Tâches' },
        ],
    },
    {
        target: "observatory",
        page: { fr: 'Observatoire', ar: 'المرصد' },
        links: [
            // { label: { fr: "Présentation de l'observatoire", ar: 'تقديم المرصد' }, url: '/Tâches' },
            // { label: { fr: 'Tâches et spécialisations', ar: 'المهام والاختصاصات' }, url: '/Tâches' },
            // { label: { fr: 'Textes de référence', ar: 'النصوص المرجعية' }, url: 'observatory/texts' },
            { label: { fr: "Présentation de l'observatoire", ar: 'تقديم المرصد' }, url: '/Tâches' },
            { label: { fr: 'Tâches et spécialisations', ar: 'المهام والاختصاصات' }, url: '/Tâches' },
            { label: { fr: 'Textes de référence', ar: 'النصوص المرجعية' }, url: 'observatory/texts' },
        ],
    },
    {
        target: "statistics",
        page: { fr: 'Statistiques', ar: 'الإحصائيات' },
        links: [],
    },
    {
        target: "articles",
        page: { fr: 'Articles', ar: 'المقالات' },
        links: [],
    },
    {
        target: "publications",
        page: { fr: 'Publications', ar: 'الإصدارات' },
        links: [],
    },
    {
        target: "collaborations",
        page: { fr: 'Collaboration et partenariats', ar: 'التعاون والشراكات' },
        links: [],
    },
    // {
    //     target: "missions",
    //     page: { fr: 'Missions', ar: 'المهام' },
    //     links: [],
    // },
    {
        target: "videos",
        page: { fr: 'Ouverture médiatique', ar: 'التغطيات الإعلامية' },
        links: [],
    },
];


export const projectsAndLaws = [
    { ar: "مجلات المديرية", fr: "Magazines de la direction" },
    { ar: "نصوص قانونية", fr: "Textes juridiques" },
    { ar: "اجتهادات قضائية", fr: "Jurisprudence" },
    { ar: "دراسات", fr: "Études" },
    { ar: "المهن القضائية", fr: "Professions judiciaires" },
    { ar: "سلسلة الإتفاقات", fr: "Série d'accords" }
];


export const satistics = [
    {
        "_id": "649027f5bd16508ce74014da",
        "name": "إحصائيات ضد الاشخاص",
    },
    {
        "_id": "64902800bd16508ce7402645",
        "name": "إحصائيات متعلقة بالمخدرات",
    },
    {
        "_id": "64902808bd16508ce74033f7",
        "name": "إحصائيات متعلقة بالأموال",
    },
    {
        "_id": "6490281ebd16508ce74056ee",
        "name": "إحصائيات متعلقة بقوانين خاصة",
    },
    {
        "_id": "64902827bd16508ce7406525",
        "name": "إحصائيات متعلقة بالأمن و النظام العام",
    },
    {
        "_id": "6490282ebd16508ce74071d2",
        "name": "إحصائيات متعلقة بنظام الأسرة و الأخلاق",
    },
    {
        "_id": "64902844bd16508ce74095af",
        "name": "إحصائيات متعلقة بالتزوير و التزييف و الاتصال",
    }
]

export const reports = [
    {
        title: 'تقرير الجريمة الشهري فبراير 2023',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يقدم هذا التقرير ملخصًا للجرائم المسجلة خلال شهر فبراير من عام 2023 ويسلط الضوء على الظروف المؤثرة في تغير أنماط الجريمة.',
    },
    {
        title: 'تقرير الجريمة الشهري مارس 2023',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يحتوي هذا التقرير على تحليل مفصل للجرائم المسجلة خلال شهر مارس من عام 2023 ويقدم تقديرات للتطورات المستقبلية.',
    },
    {
        title: 'تقرير تحليل أنماط الجريمة',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يستند هذا التقرير على تحليل شامل لأنماط الجريمة على مستوى الولايات خلال الفترة من 2019 إلى 2023.',
    },
    {
        title: 'تقرير إحصاء الجريمة في المدن الكبرى',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يعرض هذا التقرير الإحصاءات المتعلقة بالجرائم في المدن الكبرى والمراكز الحضرية خلال العامين الماضيين.',
    },
    {
        title: 'تقرير مؤشرات الأمان الوطني',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يسلط هذا التقرير الضوء على مؤشرات الأمان الوطني والتغيرات الملحوظة على مر السنين.',
    },
    {
        title: 'تقرير الجريمة الالكترونية',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يتناول هذا التقرير الجرائم الإلكترونية المتزايدة والجهود المبذولة لمكافحتها وحماية المواطنين.',
    },
    {
        title: 'تقرير الاعتداءات الجنسية',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يقدم هذا التقرير تحليلًا للحالات المسجلة للاعتداءات الجنسية ويسلط الضوء على ضرورة التوعية والوقاية.',
    },
    {
        title: 'تقرير جرائم العنف الأسري',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يستعرض هذا التقرير الجرائم المرتبطة بالعنف الأسري ويسلط الضوء على الخدمات المقدمة للضحايا.',
    },
    {
        title: 'تقرير الجرائم الاقتصادية',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يتناول هذا التقرير الجرائم الاقتصادية والجهود الرامية لمكافحتها وتعزيز النزاهة في المجتمع.',
    },
    {
        title: 'تقرير الجرائم ضد الطفل',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'يقدم هذا التقرير تحليلًا للجرائم ضد الأطفال ويسلط الضوء على حماية حقوقهم وسلامتهم.',
    },
];

export const achievements = [
    {
        title: 'جائزة التميز في مجال البحث الجنائي',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'حصل مرصد الجريمة الوطني على جائزة للتميز في مجال البحث الجنائي وتطوير الأساليب والتقنيات.',
    },
    {
        title: 'تكريم للإبداع التكنولوجي',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'نال مرصد الجريمة الوطني تكريمًا للإبداع التكنولوجي والحلول الذكية المستخدمة في مكافحة الجريمة.',
    },
    {
        title: 'جائزة الشراكة المجتمعية',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'حصل مرصد الجريمة الوطني على جائزة للشراكات الناجحة مع المجتمع المحلي والجهات الحكومية الأخرى.',
    },
    {
        title: 'تكريم لأفضل برنامج توعوي',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'حصل مرصد الجريمة الوطني على تكريم لأفضل برنامج توعوي يهدف إلى تحسين الوعي الجماهيري.',
    },
    {
        title: 'جائزة مكافحة الجريمة العابرة للحدود',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'نال مرصد الجريمة الوطني جائزة لجهوده المبذولة في مكافحة الجريمة العابرة للحدود والتعاون الدولي.',
    },
    {
        title: 'تكريم لمكافحة غسل الأموال',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'حصل مرصد الجريمة الوطني على تكريم لجهوده في مكافحة غسل الأموال وتعزيز الشفافية المالية.',
    },
    {
        title: 'جائزة الابتكار في تحليل البيانات',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'حصل مرصد الجريمة الوطني على جائزة للابتكار في تحليل البيانات والحصول على رؤى استراتيجية.',
    },
    {
        title: 'تكريم لتعزيز التعاون الدولي',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'حصل مرصد الجريمة الوطني على تكريم لجهوده في تعزيز التعاون الدولي لمكافحة الجريمة.',
    },
    {
        title: 'جائزة الشفافية والمساءلة',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'نال مرصد الجريمة الوطني جائزة للشفافية والمساءلة في أداء مهامه ونشر معلوماته.',
    },
    {
        title: 'تكريم للتميز في الإبلاغ والتحقيق',
        image: 'https://images.pexels.com/photos/7054415/pexels-photo-7054415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'حصل مرصد الجريمة الوطني على تكريم للتميز في عمليات الإبلاغ والتحقيق في الجرائم.',
    },
];


export const globalIndicators = [
    {
        title: "المؤشر العالمي للأمن السيبراني",
        description: "يقيس هذا المؤشر مستوى الأمن السيبراني في مختلف البلدان على مستوى العالم، ويشمل مختلف التهديدات الأمنية والهجمات الإلكترونية.",
        readMoreLink: "https://example.com/cybersecurity.pdf", // PDF link for more details
        locale: "ar", // Arabic locale
    },
    {
        title: "المؤشر العام للفساد",
        description: "يستعرض هذا المؤشر مستوى الفساد في الحكومات والمؤسسات حول العالم، مع تصنيف الدول بناءً على فاعلية مكافحة الفساد.",
        readMoreLink: "https://example.com/corruption.pdf", // PDF link for more details
        locale: "ar", // Arabic locale
    },
    {
        title: "مؤشر الإرهاب",
        description: "هذا المؤشر يقيم مدى انتشار الإرهاب في مختلف البلدان، بناءً على معدلات الحوادث الإرهابية وأثرها على الأمن العالمي.",
        readMoreLink: "https://example.com/terrorism.pdf", // PDF link for more details
        locale: "ar", // Arabic locale
    },
    {
        title: "مؤشر الجريمة المنظمة",
        description: "يقيم هذا المؤشر مستوى الجريمة المنظمة في العالم ويشمل تحليل نشاطات الشبكات الإجرامية وتأثيرها على الأمن العام.",
        readMoreLink: "https://example.com/organized-crime.pdf", // PDF link for more details
        locale: "ar", // Arabic locale
    },
    {
        title: "مؤشر السلام العالمي",
        description: "يقيس هذا المؤشر مستوى السلام في الدول والمناطق حول العالم، ويشمل تقييم الصراعات والتهديدات الأمنية وتأثيرها على المجتمعات.",
        readMoreLink: "https://example.com/global-peace.pdf", // PDF link for more details
        locale: "ar", // Arabic locale
    },
    // French version for each indicator
    {
        title: "Indicateur mondial de cybersécurité",
        description: "Cet indicateur mesure le niveau de cybersécurité dans différents pays à travers le monde, en tenant compte des menaces et des attaques électroniques.",
        readMoreLink: "https://example.com/cybersecurity.pdf", // PDF link for more details
        locale: "fr", // French locale
    },
    {
        title: "Indicateur de la corruption générale",
        description: "Cet indicateur examine le niveau de corruption dans les gouvernements et institutions à travers le monde, en classant les pays selon leur efficacité à lutter contre la corruption.",
        readMoreLink: "https://example.com/corruption.pdf", // PDF link for more details
        locale: "fr", // French locale
    },
    {
        title: "Indicateur du terrorisme",
        description: "Cet indicateur évalue la propagation du terrorisme dans différents pays, en fonction du nombre d'incidents terroristes et de leur impact sur la sécurité mondiale.",
        readMoreLink: "https://example.com/terrorism.pdf", // PDF link for more details
        locale: "fr", // French locale
    },
    {
        title: "Indicateur du crime organisé",
        description: "Cet indicateur évalue le niveau du crime organisé dans le monde, avec une analyse des activités des réseaux criminels et de leur impact sur la sécurité publique.",
        readMoreLink: "https://example.com/organized-crime.pdf", // PDF link for more details
        locale: "fr", // French locale
    },
    {
        title: "Indicateur de la paix mondiale",
        description: "Cet indicateur mesure le niveau de paix dans les pays et régions du monde, en tenant compte des conflits, des menaces sécuritaires et de leur impact sur les communautés.",
        readMoreLink: "https://example.com/global-peace.pdf", // PDF link for more details
        locale: "fr", // French locale
    },
];
 