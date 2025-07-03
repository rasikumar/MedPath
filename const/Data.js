import {
  abouthero,
  AL,
  ALLogo,
  Andijan,
  astanaLogo,
  Banner_1,
  Banner_2,
  bashkirlogo,
  baskirimageheader,
  baskirimagemain,
  BukharaLogo,
  BukharaStateMedicalInstituteheader,
  BukharaStateMedicalInstitutemain,
  CanthoLogo,
  DaiNamLogo,
  InternationalLogo,
  internationalschoolheader,
  internationalschoolmain,
  italyFlag,
  jalalabadheader,
  jalalabadlogo,
  jalalabadmain,
  kazakhstan,
  KazakLogo,
  kazakstanFlag,
  kazan,
  kazanmedicaluniversityheader,
  kazanmedicaluniversitymain,
  ksmukurskrussiaheader,
  ksmukurskrussiamain,
  KuruskLogo,
  Kyrgyzstan,
  kyrgyzstanFlag,
  MiniBanner_1,
  MiniBanner_2,
  missionImage,
  OrangeBergLogo,
  oshLogo,
  oshstateheader,
  oshstatemain,
  Our_Goal,
  Our_vission,
  PhanChauLogo,
  Russia,
  russiaFlag,
  samarkandheader,
  SamarkandLogo,
  samarkandmain,
  SiberianLogo,
  SmolenexLogo,
  SouthKazakLogo,
  tashkantheader,
  TashkentLogo,
  tashkentmain,
  uzbekistanFlag,
  uzebekistan,
  vietnam,
} from "@/assets/assets";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "@/assets/gallery";
import {
  ABOUT_ROUTE,
  BASHKIR_ROUTE,
  BHUKARA_ROUTE,
  CONTACT_ROUTE,
  INTERNATION_SCHOOL_ROUTE,
  JALALABAD_ROUTE,
  KAZAKHSTAN_ROUTE,
  KAZAN_ROUTE,
  KURSK_ROUTE,
  KYRGYZSTAN_ROUTE,
  OSH_ROUTE,
  RUSSIA_ROUTE,
  SAMARKAND_ROUTE,
  TASHKENT_ROUTE,
  UZBEKISTAN_ROUTE,
  VIETNAM_ROUTE,
} from "@/utils/routes";

export const Home_Data = {
  hero_section: [
    {
      span: "Navigating Your Medical Journey",
      description:
        "At MedPath Overseas, we specialize in guiding aspiring doctors to secure affordable, high-quality medical education at top-ranked international universities. With years of experience, transparent advice, and personalized support, we make your MBBS journey smooth and successful.",
      images: [
        {
          src: Banner_1,
          alt: "Happy medical students graduating abroad",
        },
        {
          src: MiniBanner_1,
          alt: "Students in white coats at international medical university",
        },
      ],
      button: {
        label: "GET STARTED",
        link: "/get-started",
      },
    },
    {
      span: "Navigating Your Medical Journey",
      description:
        "In today’s world, medicine knows no borders — and neither should your education.At MedPath Overseas, we connect ambitious students to globally recognized MBBS programs that shape them into confident, internationally qualified doctors.",
      images: [
        {
          src: Banner_2,
          alt: "International medical students in classroom setting",
        },
        {
          src: MiniBanner_2,
          alt: "Young doctor receiving international medical degree",
        },
      ],
      button: {
        label: "GET STARTED",
        link: "/get-started",
      },
    },
  ],

  our_universities: {
    title: "Our University",
    country_university: [
      {
        id: 1,
        title: "Uzbekistan",
        image: {
          src: uzbekistanFlag,
          alt: "Uzbekistan",
        },
        universities: [
          {
            id: 0,
            title: "Bukhara State Medical Institute",
            description: "Bukhara, Uzbekistan",
            link: BHUKARA_ROUTE,
            image: {
              src: BukharaLogo,
              alt: "Bukhara State Medical Institute",
            },
          },
          {
            id: 1,
            title: "Samarkand State Medical Institute",
            description: "Samarkand, Uzbekistan",
            link: SAMARKAND_ROUTE,
            image: {
              src: SamarkandLogo,
              alt: "Samarkand State Medical Institute",
            },
          },
          {
            id: 2,
            title: "Tashkent Medical University",
            description: "Tashkent, Uzbekistan",
            link: TASHKENT_ROUTE,
            image: {
              src: TashkentLogo,
              alt: "Tashkent Medical University",
            },
          },
          {
            id: 3,
            title: "Andizhan State Medical Institute",
            description: "Andizhan, Uzbekistan",
            image: {
              src: Andijan,
              alt: "Andizhan State Medical Institute",
            },
          },
        ],
      },
      {
        id: 2,
        title: "Kyrgyzstan",
        image: {
          src: kyrgyzstanFlag,
          alt: "Kyrgyzstan",
        },
        universities: [
          {
            id: 0,
            title: "Jalalabad State Medical University",
            description: "Jalalabad, Kyrgyzstan",
            link: JALALABAD_ROUTE,
            image: {
              src: jalalabadlogo,
              alt: "Jalalabad State Medical University",
            },
          },
          {
            id: 1,
            title: "Osh State Medical University",
            link: OSH_ROUTE,
            description: "Osh, Kyrgyzstan",
            image: {
              src: oshLogo,
              alt: "Osh State Medical University", // Fixed to match title (was "BISHKEK INTERNATIONAL UNIVERSITY")
            },
          },
          {
            id: 2,
            title: "International School of Medicine",
            link: INTERNATION_SCHOOL_ROUTE,
            description: "Bishkek, Kyrgyzstan", // Fixed city (was "International")
            image: {
              src: InternationalLogo,
              alt: "International School of Medicine",
            },
          },
        ],
      },
      {
        id: 3,
        title: "Kazakhstan",
        image: {
          src: kazakstanFlag,
          alt: "Kazakhstan",
        },
        universities: [
          {
            id: 0,
            title: "Kazakh National Medical University",
            description: "Almaty, Kazakhstan",
            image: {
              src: KazakLogo,
              alt: "Kazakh National Medical University",
            },
          },
          {
            id: 1,
            title: "Astana Medical University",
            description: "Astana, Kazakhstan",
            image: {
              src: astanaLogo,
              alt: "Astana Medical University",
            },
          },
          {
            id: 2,
            title: "Al-Farabi Kazakh National University",
            description: "Almaty, Kazakhstan", // Corrected city (Al-Farabi is the university's namesake, not location)
            image: {
              src: AL,
              alt: "Al-Farabi Kazakh National University",
            },
          },
          {
            id: 3,
            title: "South Kazakhstan Medical Academy", // Fixed all-caps
            description: "Shymkent, Kazakhstan", // Corrected city (South Kazakhstan region's capital)
            image: {
              src: SouthKazakLogo,
              alt: "South Kazakhstan Medical Academy", // Fixed to match title
            },
          },
        ],
      },
      {
        id: 4,
        title: "Russia",
        image: {
          src: russiaFlag,
          alt: "Russia",
        },
        universities: [
          {
            id: 0,
            title: "Bashkir State Medical University",
            description: "Bashkir, Russia",
            link: BASHKIR_ROUTE,
            image: {
              src: bashkirlogo,
              alt: "Bashkir State Medical University",
            },
          },
          {
            id: 1,
            title: "Kazan State Medical University",
            description: "Kazan, Russia",
            link: KAZAN_ROUTE,
            image: {
              src: kazan,
              alt: "Kazan State Medical University",
            },
          },
          {
            id: 2,
            title: "Kursk State Medical University",
            description: "Kursk, Russia",
            link: KURSK_ROUTE,
            image: {
              src: KuruskLogo,
              alt: "Kursk State Medical University",
            },
          },
          {
            id: 3,
            title: "Siberian State Medical University",
            description: "Moscow, Russia",
            image: {
              src: SiberianLogo,
              alt: "Siberian State Medical University",
            },
          },
          {
            id: 4,
            title: "Smolensk State Medical University",
            description: "Moscow, Russia",
            image: {
              src: SmolenexLogo,
              alt: "Smolensk State Medical University",
            },
          },
          {
            id: 5,
            title: "Orenburg State Medical University",
            description: "Yekaterinburg, Russia",
            image: {
              src: OrangeBergLogo,
              alt: "Orenburg State Medical University",
            },
          },
        ],
      },
      {
        id: 5,
        title: "Vietnam",
        image: {
          src: italyFlag,
          alt: "Vietnam",
        },
        universities: [
          {
            id: 0,
            title: "Can Tho University of Medicine and Pharmacy",
            description: "Can Tho, Vietnam",
            image: {
              src: CanthoLogo,
              alt: "Can Tho University of Medicine and Pharmacy",
            },
          },
          {
            id: 1,
            title: "Phan Chau Trinh University",
            description: "Hội An, Vietnam",
            image: {
              src: PhanChauLogo,
              alt: "Phan Chau Trinh University",
            },
          },
          {
            id: 2,
            title: "Dai Nam University",
            description: "Dai, Vietnam",
            image: {
              src: DaiNamLogo,
              alt: "Dai Nam University",
            },
          },
        ],
      },
    ],
  },

  about_section: {
    span: "About Us",
    title: "Welcome to MedPath",
    description_one:
      "Established in 2025, MBBS Consultancy is dedicated to helping Indian students fulfill their dream of becoming globally recognized doctors. As one of India’s leading facilitators of overseas medical education, we specialize in guiding aspiring medical students to pursue MBBS in top-ranked international universities recognized by the National Medical Commission (NMC), formerly known as the Medical Council of India (MCI).",
    description_two:
      "Our expert team offers comprehensive support throughout the entire journey—from personalized admission counseling to complete assistance during the admission process and beyond. With a student-first approach, we ensure a smooth and transparent experience from application to graduation. Additionally, we provide visa assistance, accommodation support, and post-arrival guidance, making the transition to studying abroad seamless and stress-free. Our mission is to offer affordable education options and unparalleled guidance, helping students realize their aspirations to become successful doctors in global healthcare systems.",
    lists: [
      {
        id: 0,
        title: "Expert Guidance: ",
        description:
          "Navigate abroad’s medical education with personalized expert advice.",
      },
      {
        id: 1,
        title: "Global Connections: ",
        description:
          "Access renowned universities worldwide for your MBBS studies.",
      },
      {
        id: 2,
        title: "Seamless Process: ",
        description:
          "Simplify your journey from application to cultural integration effortlessly.",
      },
    ],
  },

  google_testimonials_section: {
    title: "Google Testimonials",
    testimonials: [
      {
        name: "B. Bhuvanes War!",
        date: "2024-09-23",
        review:
          "I had an excellent experience with Medpath Overseas. They guided me step-by-step through the MBBS admission process, especially for studying abroad. The team is very professional, transparent, and supportive. Highly recommended for students who are serious about a medical career!",
        rating: 5,
        userimageString:
          "https://ui-avatars.com/api/?name=BhuvanesWar&size=200&rounded=true",
      },
      {
        name: "KAMARDEN Safi",
        date: "2024-09-22",
        review:
          "I’m happy with Medpath Overseas for their transparency and honest advice. They clearly explained about the universities, NMC approval, and living costs.The process was smooth and tension-free. There’s a little scope for improving follow-up, but highly recommended.",
        rating: 5,
        userimageString:
          "https://ui-avatars.com/api/?name=KAMARDEN Safi&size=200&rounded=true",
      },
      {
        name: "G. Vijaya Rajsendhiran",
        date: "2024-09-22",
        review:
          "As a parent, I was initially worried about sending my child abroad. But Medpath Overseas guided us with clarity and confidence.  The documentation and university coordination were smooth. Only a slight delay in the visa process, but they handled everything professionally. We are satisfied and recommend them.",
        rating: 3,
        userimageString:
          "https://ui-avatars.com/api/?name=G. Vijaya Rajsendhiran&size=200&rounded=true",
      },
      {
        name: "B. Bhuvanes War!",
        date: "2024-09-23",
        review:
          "great services. 👍👍 their team is extremely supportive, professional, and well-informed. from shortlisting universities to handling documentation, visa procedures, and even pre-departure orientatin , transparency and honest advice. Highly recommended for anyone looking to study MBBS abroad .",
        rating: 2,
        userimageString:
          "https://ui-avatars.com/api/?name=BhuvanesWar&size=200&rounded=true",
      },
      {
        name: "KAMARDEN Safi",
        date: "2024-09-22",
        review:
          "Genuine consultant for abroad medical education, trustable and official representative for abroad medical education for top universities.",
        rating: 3,
        userimageString:
          "https://ui-avatars.com/api/?name=KAMARDEN Safi&size=200&rounded=true",
      },
      {
        name: "G. Vijaya Rajsendhiran",
        date: "2024-09-22",
        review:
          "Good service. Has all the information regarding universities fees, course, offered etc",
        rating: 1,
        userimageString:
          "https://ui-avatars.com/api/?name=G. Vijaya Rajsendhiran&size=200&rounded=true",
      },
    ],
  },

  consult_section: {
    title: "Consult With Our Expert",
    description:
      "Personalized guidance for your medical journey. Choose Medpath now",
    youtube_id: "yInv4pUy_Hs",
    button: {
      label: "GET STARTED",
      link: CONTACT_ROUTE,
    },
  },

  our_services: {
    title: "Our Services",
    services: [
      {
        title: "Carrer Counselling",
      },
      {
        title: "Immigration Clearance",
      },
      {
        title: "University Selection & Admission",
      },
      {
        title: "Visa/Travel/Bank Loan Assistance",
      },
      {
        title: "MCI Approval",
      },
      {
        title: "Scholorship",
      },
      {
        title: "Documentation Verification",
      },
      {
        title: "Old Student Reference",
      },
      {
        title: "PG Admission",
      },
      {
        title: "UK Work Placment",
      },
    ],
  },

  why_us: {
    span: "WHY CHOOSE US",
    title:
      "Unlock Your Medical Dreams Abroad: Medpath, Your Trusted Companion.",
    description:
      "Discover your path to a medical career with Medpath. Benefit from expert guidance, a global network of top-tier universities, and comprehensive services tailored to your needs. Let us simplify your journey to studying MBBS abroad, ensuring a seamless transition and a rewarding educational experience.",
    button: {
      label: "Learn More",
      link: ABOUT_ROUTE,
    },
    approved_by: [
      {
        title: "NMC Aproved",
        description:
          "Medpath: NMC Approved Education Consultant for Pursuing MBBS Abroad.",
        image: "https://example.com/images/nmc.jpg",
      },
      {
        title: "FMGE",
        description:
          "Unlock Your Global Medical Career: FMGE Preparation with Medpath.",
        image: "https://example.com/images/who.jpg",
      },
      {
        title: "Expert Guidance",
        description:
          "Navigate your medical education with seasoned professionals by your side.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "Global Network",
        description:
          "Access top-notch medical universities worldwide through our extensive connections.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "UNESCO Aproved",
        description:
          "Empowering Dreams: Medpath - Your Gateway to International Medical Education.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "Carrer Counselling",
        description:
          "Unlock Your Medical Career: Study MBBS Abroad with Medpath!.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "Comprehensive Services",
        description:
          "Enjoy seamless support from application to post-arrival, simplifying your journey.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "Cultural Integration",
        description:
          "Embrace a smooth transition with our assistance in adapting abroad.",
        image: "https://example.com/images/ministry.jpg",
      },
    ],
  },

  Are_You_Ready: {
    title: "Are You Ready to Study MBBS Abroad?",
    description:
      "We're here to help you unlock your medical dreams abroad. Let's start by learning more about studying MBBS abroad, exploring popular countries, and understanding the benefits of our services.",
    button: {
      label: "CONTACT US NOW",
      link: ABOUT_ROUTE,
    },
  },

  trusted_logo: [
    {
      id: 1,
      image: ALLogo,
      alt: "Al-Farabi_University_",
    },
    {
      image: Andijan,
      alt: "Andijan-State-Medical-Institute",
      id: 2,
    },
    {
      image: astanaLogo,
      alt: "Astana medical University",
      id: 3,
    },
    {
      image: bashkirlogo,
      alt: "Bashkir state medical University",
      id: 4,
    },
    {
      image: BukharaLogo,
      alt: "BUKHARAlogo",
      id: 5,
    },
    {
      image: CanthoLogo,
      alt: "Can Tho University logo",
      id: 6,
    },
    {
      image: InternationalLogo,
      alt: "International School of Medicine logo",
      id: 7,
    },
    {
      image: TashkentLogo,
      alt: "Tashkent logo",
      id: 8,
    },
  ],

  testimonials: {
    title: "Student Testimonial",
    description: "What Our Awesome Students Say",
    entries: [
      {
        id: 1,
        name: "Aarav Sharma",
        feedback:
          "MBBS Consultancy guided me with every step of the admission process. Their support, advice, and prompt responses helped me fulfill my dream of studying abroad. I truly recommend them to any aspiring medical student looking for genuine help.",
        image: "https://example.com/images/testimonial1.jpg",
        alt: "Aarav Sharma",
        starRating: 5,
      },
      {
        id: 2,
        name: "Priya Verma",
        feedback:
          "The consultants at MBBS Consultancy were incredibly patient and knowledgeable. They explained everything clearly, assisted with documentation, and offered motivation throughout the journey. I felt supported at every step, and I’m now pursuing my MBBS in Georgia successfully.",
        image: "https://example.com/images/testimonial2.jpg",
        alt: "Priya Verma",
        starRating: 5,
      },
      {
        id: 3,
        name: "Rahul Mehta",
        feedback:
          "I got admitted to a top medical university in Russia with their help. MBBS Consultancy’s transparent process, quick communication, and honest guidance made everything stress-free. I am very thankful to them for making my study-abroad dream happen.",
        image: "https://example.com/images/testimonial3.jpg",
        alt: "Rahul Mehta",
        starRating: 4,
      },
      {
        id: 4,
        name: "Sneha Kapoor",
        feedback:
          "MBBS Consultancy was always available to answer my questions and offer advice. They ensured I chose the right country and university. The entire process felt simple because of their clarity and professionalism. Truly grateful for their exceptional service and care.",
        image: "https://example.com/images/testimonial4.jpg",
        alt: "Sneha Kapoor",
        starRating: 4,
      },
      {
        id: 5,
        name: "Karan Singh",
        feedback:
          "I’m really happy I chose MBBS Consultancy. Their team helped me complete all documentation and applications smoothly. I had no idea where to start, but their support helped me secure admission into a great university in Kazakhstan without stress.",
        image: "https://example.com/images/testimonial5.jpg",
        alt: "Karan Singh",
        starRating: 5,
      },
      {
        id: 6,
        name: "Meera Iyer",
        feedback:
          "With MBBS Consultancy, my application process became effortless. They clearly explained procedures, offered helpful tips, and checked on my progress. Their service is reliable and student-focused. I'm now studying MBBS in Uzbekistan with confidence and peace of mind.",
        image: "https://example.com/images/testimonial6.jpg",
        alt: "Meera Iyer",
        starRating: 4,
      },
    ],
  },

  Faqs: {
    title: "Frequently Asked Questions",
    description:
      "This is where you'll find answers to some of the most common questions.",
    entries: [
      {
        id: 1,
        question: "What is MBBS Consultancy?",
        answer:
          "We work with top universities in various countries known for their medical programs, including Russia, Ukraine, China, Germany, Kazakhstan, the Philippines, Bangladesh, India, and Georgia. We ensure that the universities we recommend meet high standards of education and accreditation.",
      },
      {
        id: 2,
        question: "How can I apply for MBBS through your Consultants?",
        answer:
          "MBBS Consultancy helps Indian students pursue their dream of studying MBBS in top international universities. We provide comprehensive guidance and support throughout the entire process, from choosing the right university to ensuring a smooth transition to life abroad.",
      },
      {
        id: 3,
        question: "Which countries do you work with for MBBS studies?",
        answer:
          "We work with top universities in various countries known for their medical programs, including Russia, Ukraine, China, Germany, Kazakhstan, the Philippines, Bangladesh, India, and Georgia. We ensure that the universities we recommend meet high standards of education and accreditation.",
      },
      {
        id: 4,
        question: "Is the MBBS degree from abroad valid in India?",
        answer:
          "Yes, the MBBS degrees from recognized universities abroad are valid in India. However, students must clear the Foreign Medical Graduate Examination (FMGE) conducted by the National Board of Examinations (NBE) in India to practice medicine in India. We will guide you on the process and preparation for the FMGE.",
      },
      {
        id: 5,
        question: "How safe is it for Indian students to study abroad?",
        answer:
          "The countries we work with—like Georgia, Russia, Kazakhstan, Uzbekistan, and the USA—are generally safe and student-friendly. We ensure that our partner universities offer secure and comfortable environments.",
      },
      {
        id: 6,
        question: "Which country is the most affordable for MBBS abroad?",
        answer:
          "Countries like Kazakhstan, Uzbekistan, and Russia are among the most budget-friendly options, offering quality education with lower tuition and living expenses.",
      },
      {
        id: 7,
        question: "Can I get a scholarship to study MBBS abroad?",
        answer:
          "Yes, many universities offer partial scholarships based on academic performance or through early admissions. Our team helps identify such opportunities for eligible students.",
      },
      {
        id: 8,
        question: "Do I need to learn the local language to study MBBS abroad?",
        answer:
          "While the medium of instruction is English, some universities may encourage students to learn the local language to better communicate during clinical practice. Basic language classes are often provided as part of the program.",
      },
      {
        id: 9,
        question: "How soon should I apply for MBBS abroad programs?",
        answer:
          "We recommend applying 6–8 months in advance of the intake, as this allows ample time for documentation, visa processing, and other formalities.",
      },
      {
        id: 10,
        question:
          "Can I transfer from one university or country to another during MBBS?",
        answer:
          "In some cases, university transfers are allowed, depending on university policies and credit equivalency. Our team can assist with this process.",
      },
    ],
  },
  countryItems: [
    { id: 5, label: "MBBS IN Uzbekistan", href: UZBEKISTAN_ROUTE },
    { id: 2, label: "MBBS IN Kyrgyzstan", href: KYRGYZSTAN_ROUTE },
    { id: 3, label: "MBBS IN Kazakhstan", href: KAZAKHSTAN_ROUTE },
    { id: 1, label: "MBBS IN Russia", href: RUSSIA_ROUTE },
    { id: 4, label: "MBBS IN Vietnam", href: VIETNAM_ROUTE },
  ],
};

export const About_Page_data = {
  aboutContents: {
    span: "About Us",
    title: "Medpath Abroad Education Consultants",
    description_one:
      "Medpath Abroad was founded with a mission to empower students with the knowledge and resources they need to achieve their academic and career goals. Our team of experienced consultants offers personalized advice and tailor-made solutions to ensure each student finds the right path to success.",
    description_two:
      "With years of experience and a deep understanding of the global education system, we have built a reputation for excellence and reliability. Whether you are looking for undergraduate programs, postgraduate studies, or specialized courses, Medpath Abroad is here to guide you every step of the way.",
    image: {
      src: abouthero,
      alt: "Medpath Abroad Education Consultants",
    },
    image2: {
      src: image7,
      alt: "Medpath Abroad Education Consultants",
    },
  },
  aboutTabData: {
    mission: {
      title: "Our Mission",
      content:
        "1.Empower students to dream beyond borders..2.Create a world-class platform for transparent, ethical, and student-first guidance..3.Build a community of globally trained medical professionals who contribute meaningfully to healthcare worldwide..4.Set new standards in overseas education consultancy through integrity, innovation, and care..",
      image: {
        src: missionImage,
        alt: "Medpath Abroad Education Consultants",
      },
    },
    vision: {
      title: "Our Vision",
      content:
        "1.Helping students access affordable and accredited medical universities worldwide..2.Delivering clear, honest advice with no hidden information or false promises..3.Offering end-to-end support — from application to accommodation..4.Promoting academic excellence and cultural adaptability in future healthcare leaders..",
      image: {
        src: Our_vission,
        alt: "Medpath Abroad Education Consultants",
      },
    },
    goal: {
      title: "Our Goal",
      content:
        "1.Bridge the gap between talented students and top international medical universities..2.Provide honest guidance tailored to each student’s aspirations and academic profile..3.Support every step of the journey — from university selection and admission to visa processing and post-arrival assistance..4.Foster confident, globally competent doctors ready to serve communities around the world..",
      image: {
        src: Our_Goal,
        alt: "Medpath Abroad Education Consultants",
      },
    },
  },
};

export const galleryImages = [
  {
    src: image1.src,
    alt: "Gallery Image 1",
  },
  {
    src: image2.src,
    alt: "Gallery Image 2",
  },
  {
    src: image3.src,
    alt: "Gallery Image 3",
  },
  {
    src: image4.src,
    alt: "Gallery Image 4",
  },
  {
    src: image5.src,
    alt: "Gallery Image 5",
  },
  {
    src: image6.src,
    alt: "Gallery Image 6",
  },
  {
    src: image7.src,
    alt: "Gallery Image 7",
  },
];

export const countries = {
  "study-mbbs-in-russia": {
    name: "Study MBBS in Russia",
    slug: "study-mbbs-in-russia",
    intro: {
      title: "MBBS In Russia - Introduction",
      points: [
        "For most students, choosing to study MBBS in Russia is the ultimate destination for higher studies in this field. Considering globally recognized MBBS programs in Russia, very affordable tuition fees, and highly regarded education standards, studying MBBS in Russia is the latest trend among not only Indian but also other international students. The year 2025 and the time thereafter guarantee better prospects as a greater number of students would find their medical career ambitions being satiated with studies in Russia.",
        "The medical schools in Russia hold high-tech facilities, highly trained staff, and most importantly, a curriculum suitable enough to be adjusted to international level standards. That's why there are many good NMC-approved medical colleges in Russia that make all the process of taking a licensing exam in India or any other country's territory after an educational institution's graduation extremely easy.",
        "The admission process for MBBS in Russia is fairly easy and hassle-free, and for eligibility, students need not appear in any entrance test. The fee structure of pursuing MBBS in Russia is highly affordable; thus, the country could be easily affordable for various sections of the economy. On the other side, some programs were provided in the English language as well, due to which many non-Russian speakers can target medical colleges in Russia to get their higher medical education in a foreign environment. For 2025, the focus remains on providing a hassle-free admission process for MBBS in Russia and helping students cope with the multicultural environment. The advantages of studying MBBS in Russia include practical exposure, globally respected degrees, and excellent career prospects worldwide.",
      ],
      image: {
        src: Russia,
        alt: "Study MBBS in Russia",
      },
      about: {
        title: "About Russia",
        points: [
          "Russia is the biggest country in the world, combining the most interesting features of history, culture, and modern development. It occupies the two parts of continents: Europe and Asia, with breathtaking landscapes, vibrant cities, and a very rich cultural heritage.",
          "For international students, Russia can offer a very reasonable combination of affordability in living and staying while being hospitable. Living in Russia as a medical student is quite an opportunity lively city with excellent educational facilities. Excellent infrastructure, efficient public transportation, and a variety of cuisines make it stand out. Some cities, like Moscow and Saint Petersburg, present modern facilities with a historical touch in their buildings, while others serve as an amalgamation point for students from various backgrounds. From the fascinating beauty of Red Square to the mesmerizing Lake Baikal, the country is indeed a hub that will make your experience rewarding beyond academics.",
        ],
      },
    },
    why_study: {
      title: "Why Study MBBS In Russia",
      points: [
        "For a long time, Russia has been one of the top priorities for medical aspirants from all over the world, and it is continue in 2025. It is the perfect combination of quality education, reasonably affordable costs, and worldwide recognition that makes an ideal destination to study MBBS in Russia.",
        "Among the highlights of the MBBS program in Russia is their affordability. Tuition and the cost of MBBS in Russia, as well as the living expenses, are much cheaper in comparison with many countries of Western economy and without any sacrifice of quality. Moreover, most universities provide programs in English, which thus means no need to learn the local language.",
      ],
    },
    accomadation: {
      title: "Indian Food and Facility For Indian Students",
      content:
        "While living in Russia as a medical student, food and accommodation are the major factors that students keep in mind. The universities in Russia have very affordable accommodation options; most of them offer hostels for international students. These hostels are facilitated with all the necessary facilities that ensure a comfortable living environment for the students. There are numerous Indian restaurants in Russia for Indian students, serving home-style meals at an affordable price. Many students also prefer cooking their own food; university hostels have kitchen facilities in many instances. The easy availability of affordable food options makes the stay in Russia quite convenient for Indian students. Generally speaking, living in Russia is not too expensive, and with a host of accommodation and food alternatives available to suit the lifestyles of international students, there is ample reason to feel at home while pursuing an MBBS in Russia.",
    },
    universities: {
      "kursk-state-medical-university": {
        name: "Kursk State Medical University",
        slug: "kursk-state-medical-university",
        countryName: "Russia",
        countrySlug: "study-mbbs-in-russia",
        content: {
          universitiesname: "Kursk State Medical University",
          headerImage: {
            src: ksmukurskrussiaheader,
            alt: "Kursk State Medical University",
          },
          mainImage: {
            src: ksmukurskrussiamain,
            alt: "Kursk State Medical University Main",
          },
          htmlcontent: `
            <h2><strong>Introduction:</strong></h2>
            <p>In the pursuit of quality education and promising career prospects, students often seek guidance to navigate through the myriad of options available globally. Amidst this quest, Study Doctor Education Consultant emerges as a beacon of hope, providing expert assistance to students aspiring for excellence in the medical field. The recent partnership with Kursk State Medical University, Russia, marks a significant milestone in facilitating access to world-class education and shaping the future of aspiring medical professionals.</p>
            <h3>Exploring Kursk State Medical University:</h3>
            <p>Nestled in the heart of Russia, Kursk State Medical University stands tall as a renowned institution with a rich legacy of academic excellence and innovation. Established in 1935, the university has consistently upheld its commitment to providing exceptional medical education, fostering research, and nurturing future leaders in healthcare. With state-of-the-art infrastructure, cutting-edge laboratories, and a distinguished faculty comprising seasoned academicians and practitioners, Kursk State Medical University offers a conducive environment for holistic learning and skill development.</p>
            <h3><strong>Programs Offered:</strong></h3>
            <p>Through our collaboration with Kursk State Medical University, Study Doctor Education Consultant extends a plethora of undergraduate and postgraduate programs tailored to meet the evolving demands of the healthcare industry. Whether it’s the Bachelor of Medicine and Bachelor of Surgery (MBBS) program, specialized courses in dentistry, pharmacy, or nursing, the university ensures comprehensive training encompassing theoretical knowledge, practical exposure, and clinical experience. Moreover, students can leverage opportunities for research collaboration, internships, and exchange programs to broaden their horizons and gain a global perspective.</p>
            <h3><strong>Advantages of Studying at Kursk State Medical University:</strong></h3>
            <ol>
              <li>Accredited Curriculum: The university follows a curriculum aligned with international standards, ensuring graduates are well-equipped to meet global healthcare challenges.</li>
              <li>Clinical Exposure: Kursk State Medical University boasts affiliations with leading hospitals and healthcare institutions, providing students with hands-on clinical exposure from the early stages of their education.</li>
              <li>Multicultural Environment: With a diverse student body hailing from different corners of the world, the university fosters cross-cultural interactions, enriching the learning experience and promoting global citizenship.</li>
              <li>Affordable Education: Recognizing the financial constraints faced by many students, Kursk State Medical University offers affordable tuition fees without compromising on the quality of education.</li>
            </ol>
            <h3><strong>Support and Guidance from Study Doctor Education Consultant:</strong></h3>
            <p>At Study Doctor Education Consultant, we understand that embarking on a journey towards higher education can be daunting. Hence, our team of experienced counselors and advisors is committed to guiding students at every step of the way. From assisting with university applications and visa procedures to providing pre-departure orientation and ongoing support during their academic tenure, we strive to alleviate the stress and ensure a smooth transition for students aspiring to study at Kursk State Medical University.</p>
          `,
        },
      },
      "bashkir-state-medical-university": {
        name: "Bashkir State Medical University",
        slug: "bashkir-state-medical-university",
        countryName: "Russia",
        countrySlug: "study-mbbs-in-russia",
        content: {
          universitiesname: "Bashkir State Medical University",
          headerImage: {
            src: baskirimageheader,
            alt: "Bashkir State Medical University",
          },
          mainImage: {
            src: baskirimagemain,
            alt: "Bashkir State Medical University Main",
          },
          htmlcontent: `
          <p>In the pursuit of higher education, particularly in the field of medicine, students often find themselves at a crossroads, navigating through a myriad of choices and considerations. Amidst this complexity, having a trusted guide to illuminate the path forward can make all the difference. This is where Study Doctor Education Consultant emerges as a beacon of support, offering invaluable assistance to aspiring medical professionals worldwide.</p>
          <p>At Study Doctor Education Consultant, we understand that the journey to becoming a proficient healthcare practitioner requires not only dedication but also access to top-tier educational institutions. It is with great pride and excitement that we announce our latest collaboration with Bashkir State Medical University in Russia, a partnership set to redefine the landscape of medical education.</p>
          <p>Nestled in the heart of Ufa, the capital city of the Republic of Bashkortostan, Bashkir State Medical University stands as a paragon of academic excellence and innovation. With a rich history spanning over 85 years, the university has consistently upheld its commitment to nurturing the next generation of medical leaders through cutting-edge research, comprehensive curricula, and state-of-the-art facilities.</p>
          <p>Our collaboration with Bashkir State Medical University signifies a significant milestone in our mission to connect aspiring medical professionals with renowned educational institutions worldwide. Through this partnership, students can embark on a transformative educational journey characterized by unparalleled academic rigor, cultural enrichment, and professional development opportunities.</p>
          <p>What sets Bashkir State Medical University apart is its unwavering dedication to fostering a conducive learning environment that empowers students to realize their full potential. The university boasts a distinguished faculty comprising eminent scholars, experienced clinicians, and industry experts who are committed to imparting knowledge, cultivating critical thinking skills, and instilling a sense of ethical responsibility in their students.</p>
          <p>Furthermore, Bashkir State Medical University’s robust infrastructure, which includes state-of-the-art laboratories, simulation centers, and teaching hospitals, ensures that students receive comprehensive hands-on training across various medical disciplines. This immersive learning experience not only equips students with the requisite clinical skills but also nurtures their innate passion for serving humanity through healthcare.</p>
          <p>As a leading education consultant, Study Doctor takes pride in our role as a trusted facilitator, guiding students through every step of their academic journey. From personalized counseling sessions and academic guidance to visa assistance and accommodation arrangements, we strive to alleviate the logistical challenges associated with studying abroad, allowing students to focus wholeheartedly on their education and personal growth.</p>
          <p>Through our partnership with Bashkir State Medical University, we aim to empower aspiring medical professionals with the knowledge, skills, and confidence to thrive in an increasingly complex and dynamic healthcare landscape. Together, we envision a future where every student has the opportunity to realize their dreams and make a meaningful impact on global health outcomes.</p>
          `,
        },
      },
      "kazan-state-medical-university": {
        name: "Kazan State Medical University",
        slug: "kazan-state-medical-university",
        countryName: "Russia",
        countrySlug: "study-mbbs-in-russia",
        content: {
          universitiesname: "Kazan State Medical University",
          headerImage: {
            src: kazanmedicaluniversityheader,
            alt: "Kazan State Medical University",
          },
          mainImage: {
            src: kazanmedicaluniversitymain,
            alt: "Kazan State Medical University Main",
          },
          htmlcontent: `
          <h3><strong>Introduction:</strong></h3>
          <p>In the ever-expanding global landscape of education, the quest for quality medical education is paramount. Aspiring doctors often seek opportunities beyond borders, aiming to broaden their horizons and enhance their skills. Amidst this pursuit, Study Doctor Education Consultant emerges as a guiding beacon, offering invaluable assistance to students in navigating the complexities of international education. One such partnership that underscores their commitment to excellence is with Kazan State Medical University, Russia.</p>
          <h3><strong>Unveiling Kazan State Medical University:</strong></h3>
          <p>Nestled in the picturesque city of Kazan, Kazan State Medical University stands as a beacon of medical excellence in Russia. With a rich legacy spanning over two centuries, the university has consistently upheld its reputation for academic brilliance and innovation. Accredited by prestigious medical bodies and recognized globally, Kazan State Medical University offers a diverse range of medical programs tailored to meet the evolving demands of the healthcare industry.</p>
          <h3><strong>Why Choose Kazan State Medical University?</strong></h3>
          <ol>
              <li>Academic Excellence: Kazan State Medical University boasts a faculty comprising eminent professors, researchers, and medical practitioners dedicated to imparting knowledge of the highest caliber.</li>
              <li>State-of-the-Art Facilities: Equipped with modern laboratories, research centers, and clinical facilities, the university provides students with hands-on learning experiences essential for their professional growth.</li>
              <li>Global Recognition: Graduates of Kazan State Medical University are sought after worldwide, with alumni making significant contributions to the medical field globally.</li>
              <li>Cultural Enrichment: Studying at Kazan State Medical University offers students the unique opportunity to immerse themselves in the rich cultural tapestry of Russia, fostering personal growth and cross-cultural understanding.</li>
            </ol>
          <h3><strong>The Partnership with Study Doctor Education Consultant:</strong></h3>
          <p>Study Doctor Education Consultant’s collaboration with Kazan State Medical University amplifies the opportunities available to aspiring medical professionals. Through this partnership, students gain access to personalized guidance and support at every stage of their academic journey. From application assistance to visa processing and beyond, Study Doctor Education Consultant ensures a seamless transition for students aspiring to study at Kazan State Medical University.</p>
          <h3><strong>Benefits for Students:</strong></h3>
          <ol>
              <li>Expert Guidance: Study Doctor Education Consultant’s team of experienced counselors provides students with comprehensive guidance, helping them make informed decisions regarding their academic and professional pursuits.</li>
              <li>Streamlined Process: Navigating the intricacies of international education can be daunting. Study Doctor Education Consultant simplifies the process, offering step-by-step assistance to students, ensuring a hassle-free experience.</li>
              <li>Tailored Solutions: Recognizing that every student is unique, Study Doctor Education Consultant offers personalized solutions tailored to individual needs, maximizing the chances of success.</li>
              <li>Ongoing Support: The partnership extends beyond enrollment, with Study Doctor Education Consultant offering ongoing support to students throughout their academic journey, ensuring they thrive academically and personally.</li>
            </ol>

          `,
        },
      },
    },
  },
  "study-mbbs-in-uzbekistan": {
    name: "Study MBBS in Uzbekistan",
    slug: "study-mbbs-in-uzbekistan",
    intro: {
      title: "MBBS In uzbekistan - Introdution",
      points: [
        "The batch for studying MBBS in Uzbekistan is proving to be very good for students from other nations, especially students from India, since the number of medical aspirants has grown year by year looking for quality study abroad. Among all factors, it has emerged in the top choice of lists of students as a destination country to study medicine in Uzbekistan.",
        "Its has a number of Universities for MBBS in Uzbekistan offering MBBS programs in the English medium, which makes it rather easy for international students to cope with the curriculum without any language barriers. MBBS programs in Uzbekistan usually take six years that include theoretical learning, clinical practice, and internships. Medical colleges in Uzbekistan are accredited by the WHO and National Medical Commission, hence degrees are accepted all over the world.",
        "It is relatively not so expensive to study MBBS in Uzbekistan when considering other countries that teach medical studies abroad. The fee structure is at an affordable rate, considering that most universities have attached facilities for stay purposes at modest rates. The fees required in the Medical College in Uzbekistan are considerably within reach, making Uzbekistan a real deal for seekers of quality at an economic education.",
        "Studying MBBS in Uzbekistan provides the advantage of diversity and cultural exposure, with traditions of Central Asia combined with modern living. The living cost is lower compared to many Western countries and therefore more affordable for international students. Moreover, after completing MBBS in Uzbekistan, the prospects for a bright job in Uzbekistan and all over the world include postgraduate study and going back to their home country to practice. Conclusively, students from Uzbekistan finally get MBBS admission with affordability and international recognition at an appreciable cost while building their futures in this sphere as a medical professional for the year 2025-26.",
      ],
      image: {
        src: uzebekistan,
        alt: "Study MBBS in uzbekistan",
      },
      about: {
        title: "About Uzbekistan",
        points: [
          "Uzbekistan is a Central Asian country steeped in history, culture, and natural beauty. Its neighbors are Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, and Turkmenistan. With the inclusion of such ancient cities as Samarkand, Bukhara, and Khiva, Uzbekistan is an important center along the Silk Road-the one that has connected the East and the West for many centuries. Modern Tashkent, the capital, is a modern city with many buildings from that time, in addition to developed modern infrastructure. Uzbekistan is also famous for its rich cultural heritage: traditional music, dance, and cuisine. The country boasts deserts, mountains, and very fertile plains, together showing nature in its particular beauty. Uzbekistan has made great progress in modernizing its economy and infrastructure, which makes it a very attractive destination for international students. The country is very friendly towards foreign nationals, and the cost of living is relatively cheap, making it an ideal place to live and study.",
        ],
      },
    },
    why_study: {
      title: "Why Study MBBS in Uzbekistan",
      points: [
        "Studying MBBS in Uzbekistan will be a great opportunity for foreign students who want to pursue quality medical education at an affordable price. Medical universities in Uzbekistan are well-known for their high-quality faculty, modern infrastructure, and practical training, which create an excellent environment for the students.",
        "Another major reason why study MBBS in Uzbekistan is considered an excellent option because of the affordable cost. As compared to other countries, MBBS programs in Uzbekistan are pretty affordable regarding tuition fees and living expenses. Thus, this attracts a great number of students all over the world, especially students from India and other South Asian nations. The MBBS programs in Uzbekistan are accredited by the most recognized international medical bodies, including the WHO and NMC, meaning students graduating here will have a chance to work anywhere in the world. In addition, most of the medical schools in Uzbekistan offer their programs in English, further enhancing the ease of access for international students by removing the barriers that may come with studying in a foreign language and enabling them to focus on their studies.",
        "Besides, cultural diversity, a friendly atmosphere, and modern infrastructure make the studying process really enriching for future doctors in Uzbekistan. Focusing on practical training, students get advantages in further employment after graduation. In the end, studying MBBS in Uzbekistan during is going to be one of the best and most famous destinations among students as it offers affordability with high-quality education and provides world-class recognition.",
      ],
    },
    accomadation: {
      title: "Indian Food and Facility For Indian Students",
      content:
        "While living in Uzbekistan as a medical student, food and accommodation are the major factors that students keep in mind. The universities in Uzbekistan have very affordable accommodation options; most of them offer hostels for international students. These hostels are facilitated with all the necessary facilities that ensure a comfortable living environment for the students. There are numerous Indian restaurants in Uzbekistan for Indian students, serving home-style meals at an affordable price. Many students also prefer cooking their own food; university hostels have kitchen facilities in many instances. The easy availability of affordable food options makes the stay in Uzbekistan quite convenient for Indian students. Generally speaking, living in Uzbekistan is not too expensive, and with a host of accommodation and food alternatives available to suit the lifestyles of international students, there is ample reason to feel at home while pursuing an MBBS in Uzbekistan.",
    },
    universities: {
      "bhu-kara-state-medical-university": {
        name: "Bukhara state medical University",
        slug: "bhu-kara-state-medical-university",
        countryName: "Uzbekistan",
        countrySlug: "study-mbbs-in-uzbekistan",
        content: {
          universitiesname: "Bukhara state medical University",
          headerImage: {
            src: BukharaStateMedicalInstituteheader,
            alt: "Bukhara state medical University",
          },
          mainImage: {
            src: BukharaStateMedicalInstitutemain,
            alt: "Bukhara state medical University Main",
          },
          htmlcontent: `
          <p>In the ever-evolving landscape of education and global opportunities, partnerships between educational institutions and consulting firms play a crucial role in facilitating students’ journeys towards their academic aspirations. At Study Doctor Education Consultant Company, we pride ourselves on fostering such collaborations that open doors to exceptional educational experiences worldwide. Today, we are thrilled to announce our partnership with BHU Kara State Medical University, Uzbekistan, marking a significant milestone in our commitment to providing quality education consultancy services.</p>
          <p>Uzbekistan, with its rich cultural heritage and burgeoning academic sector, has been increasingly recognized as a hub for international students seeking top-notch medical education. Among the distinguished institutions in this region, BHU Kara State Medical University stands out for its excellence in medical education, research, and innovation. Established with a vision to nurture future healthcare leaders, BHU Kara State Medical University offers a conducive learning environment equipped with state-of-the-art facilities and a faculty renowned for their expertise and dedication.</p>
          <p>Through our collaboration with BHU Kara State Medical University, Study Doctor Education Consultant Company aims to streamline the pathway for aspiring medical students from across the globe to pursue their academic dreams. Our partnership entails comprehensive support and guidance throughout the application process, ensuring that students receive personalized assistance at every step of their journey. From navigating admission requirements to facilitating visa procedures and accommodation arrangements, our team of experienced consultants is committed to alleviating the complexities associated with studying abroad.</p>
          <p>One of the distinguishing features of BHU Kara State Medical University is its emphasis on practical learning experiences that complement theoretical knowledge. The university’s modern laboratories, simulation centers, and clinical facilities provide students with hands-on training opportunities under the supervision of seasoned professionals. Furthermore, BHU Kara State Medical University’s collaborative research initiatives and international exchange programs offer students a global perspective and exposure to diverse healthcare practices.</p>
          <p>At Study Doctor, we understand that pursuing education abroad can be a transformative yet daunting experience for many students and their families. Therefore, our collaboration with BHU Kara State Medical University extends beyond mere academic assistance. We are committed to providing ongoing support and guidance to ensure that students seamlessly integrate into the university community and thrive in their academic pursuits. From cultural orientation sessions to peer mentoring programs, we strive to create a nurturing and inclusive environment where students feel empowered to excel academically and personally.</p>
          <p>As we embark on this exciting journey with BHU Kara State Medical University, we invite aspiring medical students to explore the boundless opportunities that await them in Uzbekistan. Whether you aspire to become a compassionate physician, a groundbreaking researcher, or a healthcare innovator, our partnership with BHU Kara State Medical University is poised to catalyze your journey towards a fulfilling and impactful career in medicine.</p>
          `,
        },
      },
      "samarkand-state-medical-university": {
        name: "Samarkand state medical University",
        slug: "samarkand-state-medical-university",
        countryName: "Uzbekistan",
        countrySlug: "study-mbbs-in-uzbekistan",
        content: {
          universitiesname: "Samarkand state medical University",
          headerImage: {
            src: samarkandheader,
            alt: "Samarkand state medical University",
          },
          mainImage: {
            src: samarkandmain,
            alt: "Samarkand state medical University Main",
          },
          htmlcontent: `
          <strong>Introduction:</strong>
          <p>Embarking on a journey towards a medical education is a significant step for any aspiring doctor. Choosing the right institution plays a crucial role in shaping one’s career path. As the global landscape of medical education evolves, partnerships between educational consultants and esteemed universities become increasingly vital. In this blog post, we delve into the exciting collaboration between Study Doctor Education Consultants and Samarkand State Medical University in Uzbekistan, highlighting the benefits it brings to prospective medical students.</p>
          <strong>About Study Doctor Education Consultants:</strong>
          <p>Study Doctor Education Consultants is a renowned consultancy firm dedicated to guiding students through the complex process of pursuing higher education in the medical field. With a wealth of experience and expertise, they assist students in finding the best educational opportunities that align with their goals and aspirations. From application procedures to visa assistance, Study Doctor provides comprehensive support to ensure a smooth transition into academia.</p>
          <strong>Introducing Samarkand State Medical University:</strong>
          <p>Situated in the heart of Uzbekistan, Samarkand State Medical University stands as a beacon of excellence in medical education. Established in 1930, the university has a rich history of producing skilled healthcare professionals who contribute significantly to the global medical community. With state-of-the-art facilities, experienced faculty members, and a diverse student body, Samarkand State Medical University offers a conducive environment for learning and personal growth.</p>
          <strong>The Partnership:</strong>
          <p>The collaboration between Study Doctor Education Consultants and Samarkand State Medical University opens up exciting opportunities for aspiring doctors worldwide. Through this partnership, students gain access to personalized guidance and support throughout their academic journey. From selecting the right program to navigating the intricacies of the admissions process, Study Doctor ensures that students are well-equipped to pursue their dreams of becoming healthcare professionals.</p>
          <strong>Benefits for Students:</strong>
          <ol>
            <li><strong>Expert Guidance: </strong>Study Doctor Education Consultants provide students with expert advice and assistance at every stage of the application process, ensuring that they present a strong candidacy to Samarkand State Medical University.</li>
            <li><strong>Streamlined Process: </strong>By partnering with Study Doctor, students can navigate the often complex application and enrollment procedures with ease, saving time and reducing stress.
</li>
            <li><strong>Cultural Immersion: </strong>Studying at Samarkand State Medical University offers students a unique opportunity to immerse themselves in Uzbek culture while receiving a world-class education in medicine.
</li>
            <li><strong>Global Recognition: </strong>Graduates of Samarkand State Medical University are highly regarded worldwide, opening doors to career opportunities in various countries and healthcare settings.
</li>
            <li><strong>Affordable Education: </strong>Uzbekistan offers affordable tuition fees and living costs compared to many Western countries, making it an attractive destination for international students seeking quality education without breaking the bank.

</li>
          </ol>
          `,
        },
      },
      "tashkent-paediatric-medical-university": {
        name: "Tashkent paediatric medical University",
        slug: "tashkent-paediatric-medical-university",
        countryName: "Uzbekistan",
        countrySlug: "study-mbbs-in-uzbekistan",
        content: {
          universitiesname: "Tashkent paediatric medical University",
          headerImage: {
            src: tashkantheader,
            alt: "Tashkent paediatric medical University",
          },
          mainImage: {
            src: tashkentmain,
            alt: "Tashkent paediatric medical University Main",
          },
          htmlcontent: `<p>
          In the dynamic landscape of international education, forging strategic partnerships is pivotal for both educational institutions and consultancy firms alike. The latest groundbreaking collaboration in this realm comes in the form of Study Doctor Education Consultant Company’s tie-up with Tashkent Paediatric Medical University in Uzbekistan. This alliance marks a significant milestone not only for the institutions involved but also for aspiring medical professionals seeking quality education beyond borders.</p>
          <h2>Strengthening Educational Outreach</h2>
          <p>Study Doctor Education Consultant Company, renowned for its commitment to facilitating global educational opportunities, has once again demonstrated its dedication to expanding horizons. By joining forces with Tashkent Paediatric Medical University, they are opening doors for students worldwide to access top-tier medical education in Central Asia.</p>
          <h2>About Tashkent Paediatric Medical University</h2>
          <p>Tashkent Paediatric Medical University stands as a beacon of excellence in medical education, particularly in the field of pediatrics. Established with a mission to nurture competent healthcare professionals, the university boasts state-of-the-art facilities, a distinguished faculty, and a comprehensive curriculum designed to meet the evolving demands of the medical landscape.</p>
          <h2>Advantages of the Partnership</h2>
          <ol>
            <li><strong>Diversification of Academic Offerings: </strong>Through this partnership, Study Doctor Education Consultant Company expands its portfolio to include specialized medical programs offered by Tashkent Paediatric Medical University, catering to a broader spectrum of student interests.
</li>
            <li><strong>Access to Expertise: </strong>Collaborating with a reputable institution like Tashkent Paediatric Medical University provides students with access to world-class faculty, cutting-edge research facilities, and hands-on training opportunities, enhancing their overall learning experience.
</li>
            <li><strong>Cultural Exchange: </strong>This partnership fosters cultural exchange and promotes international understanding as students from diverse backgrounds converge at Tashkent Paediatric Medical University, enriching the educational environment and fostering a global perspective among future healthcare professionals.
</li>
            <li><strong>Career Opportunities: </strong>Graduates from Tashkent Paediatric Medical University, with the assistance of Study Doctor Education Consultant Company, gain access to a wide array of career opportunities globally, ensuring a smooth transition from academia to professional practice.
</li>
          </ol>
          <h2>Future Prospects</h2>
          <p>The collaboration between Study Doctor Education Consultant Company and Tashkent Paediatric Medical University holds immense promise for the future. As the partnership matures, both institutions aim to explore avenues for joint research initiatives, faculty exchanges, and student scholarships, further enhancing the educational landscape and contributing to advancements in healthcare on a global scale.</p>
          `,
        },
      },
      "andizhan-paediatric-medical-university": {
        name: "Tashkent paediatric medical University",
        slug: "andizhan-paediatric-medical-university",
        countryName: "Uzbekistan",
        countrySlug: "study-mbbs-in-uzbekistan",
        content: {
          universitiesname: "Tashkent paediatric medical University",
          headerImage: {
            src: tashkantheader,
            alt: "Tashkent paediatric medical University",
          },
          mainImage: {
            src: tashkentmain,
            alt: "Tashkent paediatric medical University Main",
          },
          htmlcontent: ``,
        },
      },
    },
  },
  "study-mbbs-in-kazakhstan": {
    name: "Study MBBS in Kazakhstan",
    slug: "study-mbbs-in-kazakhstan",
    intro: {
      title: "MBBS IN Kazakhstan - introduction",
      points: [
        "Study MBBS in Kazakhstan is rapidly becoming a leading destination for students to study MBBS in abroad. The perfect blend of affordability, world-class education, and globally recognized degrees attract students to study the MBBS in Kazakhstan program from all parts of the world.",
        "Medical universities in Kazakhstan, like Al-Farabi Kazakh National University and Astana Medical University, are among the best academically and with modern infrastructure. They offer the MBBS program in English, thus accommodating a large number of international students. The program structure focuses on practical exposure, and students engage in hands-on training in fully equipped laboratories and hospitals affiliated with the institution.",
        "One of the major advantages of study MBBS in Kazakhstan is affordability. The Kazakhstan Medical Colleges Fees are much lower than in countries like the USA or UK, thereby much more cost-effective for medical aspirants. Additionally, the living expenditure in Kazakhstan is very affordable, including accommodation, food, and transport.",
        "There are advantages for study MBBS in Kazakhstan for Indian students. Most medical universities in kazakhstan are approved with the National Medical Commission of India, hence assuring eligibility to practice in India upon successful completion of the licensure examination. Multicultural atmosphere, experienced faculties, and international medical exposure eventually help students pursue their successful career in medicine.",
        "The admission procedure for MBBS in Kazakhstan is quite simple, and most universities do not take any test for admission. Aspiring students should send their applications early in order to be assured of an admission for the academic year 2025-26. Students choosing MBBS in Kazakhstan will very well assure themselves quality education, affordable fees, and a bright future ahead in medicine.",
      ],
      image: {
        src: kazakhstan,
        alt: "Study MBBS in Kazakhstan",
      },
      about: {
        title: "About Kazakhstan",
        points: [
          "Kazakhstan is a vast country and forms the chief part of Central Asia, rich in history and full of diversity in culture with incredibly beautiful landscapes, bordering Russia and China in the east; it is a vital higher education hub for international students. Cities in Kazakhstan offer a combination of modern architecture with rich cultural heritage and include Almaty and Nur-Sultan cities. These urban centers can boast excellent students' facilities at world-class level, infrastructure, health care, and transportation systems.",
          "All kazakhstan medical university are recognized globally because of their academic excellence. The students who opt for MBBS study in Kazakhstan will be provided with a secure and friendly environment that enables them to feel at home and have a safe stay. The locals are very warm and welcoming, hence international students can easily adapt to their lifestyles. Starting from the white-headed crane-like Tian Shan Mountains to endless steppes, Kazakhstan offers varieties for students to explore and take their mind off things during studies. It is a very affordable country, with student-friendly policies, making Kazakhstan an ideal destination for a vibrant academic life and cultural experience.",
        ],
      },
    },
    why_study: {
      title: "Why Study MBBS In Kazakhstan",
      points: [
        "With world-class medical education and relatively cheap fees, Study MBBS in Kazakhstan is becoming one of the most favorite destination. It provides excellent education combined with modern infrastructure and multi-ethnic diversity, which no other country offers to international students, especially students from India.",
        "The MBBS programs in Kazakhstan are designed and projected in such a way that it is able to fulfill the global requirements for quality medical training for the students both in theoretical and practical aspects. Some universities, including Al-Farabi Kazakh National University and Astana Medical University, have international recognition, hence students graduating from such universities will be able to practice any part of the world as their medical degrees will be accepted by medical councils around the world. Study MBBS in Kazakhstan can be considered one of the major reasons for affordability in 2025. Kazakhstan mbbs fees are very low as compared to Western countries, which makes Kazakhstan the attraction for students in search of quality education at an affordable price. Besides, the living expenses in Kazakhstan are also affordable, and students can find reasonable accommodation and enjoy daily expenses without financial strain.",
        "Moreover, the admission process in most universities of Kazakhstan to pursue an MBBS is quite simple and easy. Many medical universities in kazakhstan do not conduct entrance tests, making it easier for the students as many times students are not able to prepare long entrance tests due to one reason or another. Thus, Kazakhstan offers international students a very enriching experience academically and culturally due to the security and multicultural atmosphere. Combining all these factors, Kazakhstan, in 2025, would be a premier destination for medical students who want high-quality yet affordable education.",
      ],
    },
    accomadation: {
      title: "Indian Food and Facility For Indian Students",
      content:
        "While living in Kazakhstan as a medical student, food and accommodation are the major factors that students keep in mind. The universities in Kazakhstan have very affordable accommodation options; most of them offer hostels for international students. These hostels are facilitated with all the necessary facilities that ensure a comfortable living environment for the students. There are numerous Indian restaurants in Kazakhstan for Indian students, serving home-style meals at an affordable price. Many students also prefer cooking their own food; university hostels have kitchen facilities in many instances. The easy availability of affordable food options makes the stay in Kazakhstan quite convenient for Indian students. Generally speaking, living in Kazakhstan is not too expensive, and with a host of accommodation and food alternatives available to suit the lifestyles of international students, there is ample reason to feel at home while pursuing an MBBS in Kazakhstan.",
    },
    universities: {
      "jalalabad-state-medical-university": {
        name: "Jalalabad state medical University",
        slug: "jalalabad-state-medical-university",
        countryName: "Uzbekistan",
        countrySlug: "study-mbbs-in-kazakhstan",
        content: {
          universitiesname: "Jalalabad state medical University",
          headerImage: {
            src: jalalabadheader,
            alt: "Jalalabad state medical University",
          },
          mainImage: {
            src: jalalabadmain,
            alt: "Jalalabad state medical University Main",
          },
          htmlcontent: `
          <strong>Introduction:</strong>
          <p>In the pursuit of higher education, aspiring medical professionals often find themselves navigating a labyrinth of options, seeking the perfect balance between quality education and affordability. This quest becomes even more challenging when considering studying abroad. Fortunately, Study Doctor Education Consultant is dedicated to simplifying this journey for students, and one significant stride in this endeavor is the partnership with Jalalabad State Medical University in Kyrgyzstan. Let’s delve into the intricacies of this collaboration and what it means for aspiring doctors.</p>
          <strong>Establishing the Partnership:</strong>
          <p>Study Doctor Education Consultant prides itself on fostering alliances with esteemed educational institutions worldwide. The partnership with Jalalabad State Medical University exemplifies this commitment. Founded in 1993, Jalalabad State Medical University has emerged as a beacon of excellence in medical education, offering a comprehensive curriculum and state-of-the-art facilities.</p>
          <strong>Benefits for Aspiring Medical Professionals:</strong>
          <p>For students aspiring to pursue a medical degree abroad, the tie-up between Study Doctor Education Consultant and Jalalabad State Medical University presents a plethora of benefits:</p>
          <ol>
            <li><strong>Academic Excellence: </strong>Jalalabad State Medical University boasts a faculty comprising experienced professionals and researchers dedicated to nurturing the next generation of medical practitioners. The curriculum is meticulously crafted to meet international standards, ensuring students receive a comprehensive education.
</li>
            <li><strong>Affordability: </strong>Studying abroad often comes with financial considerations. However, Jalalabad State Medical University offers competitive tuition fees and living expenses, making quality medical education accessible to a broader demographic of students.
</li>
            <li><strong>International Exposure: </strong>The partnership facilitates a culturally enriching experience for students, exposing them to diverse perspectives and fostering global competence—a crucial attribute in today’s interconnected world.
</li>
            <li><strong>Clinical Training Opportunities: </strong>Students benefit from hands-on clinical training in renowned hospitals affiliated with Jalalabad State Medical University. This practical experience equips them with the skills and confidence required to excel in their medical careers.
</li>
            <li><strong>Supportive Guidance: </strong>Study Doctor Education Consultant acts as a bridge between aspiring students and the university, providing comprehensive guidance throughout the application process, visa assistance, and ongoing support during their academic journey.
</li>
          </ol>
          <strong>Impact on Future Medical Careers:</strong>
          <p>The collaboration between Study Doctor Education Consultant and Jalalabad State Medical University lays a robust foundation for the future medical careers of students. Graduates emerge as competent medical professionals equipped with a globally recognized degree, poised to make meaningful contributions to the healthcare landscape.</p>
          `,
        },
      },
      "osh-state-medical-university": {
        name: "Osh state medical University",
        slug: "osh-state-medical-university",
        countryName: "Uzbekistan",
        countrySlug: "study-mbbs-in-kazakhstan",
        content: {
          universitiesname: "Osh state medical University",
          headerImage: {
            src: oshstateheader,
            alt: "Osh state medical University",
          },
          mainImage: {
            src: oshstatemain,
            alt: "Osh state medical University Main",
          },
          htmlcontent: `
          <strong>Introduction:</strong>
          <p>In the ever-expanding landscape of global education, finding the right institution for medical studies can be a daunting task. However, with the right guidance and partnerships, aspiring doctors can unlock a world of opportunities. Today, we’re thrilled to announce an exciting collaboration between Study Doctor Education Consultant Company and Osh State Medical University in Kyrgyzstan.</p>
          <p>At Study Doctor, our mission has always been to empower students in their pursuit of quality education, particularly in the field of medicine. Our partnership with Osh State Medical University is a testament to this commitment, as we aim to provide aspiring medical professionals with access to world-class education and unparalleled opportunities for growth.</p>
          <strong>Why Osh State Medical University?</strong>
          <p>Osh State Medical University stands as a beacon of excellence in medical education, not only in Kyrgyzstan but also on the global stage. Here are some compelling reasons why Osh State Medical University is the perfect destination for aspiring doctors:</p>
          <ol>
            <li><strong>Academic Excellence: </strong>Osh State Medical University boasts a stellar reputation for its rigorous academic programs, state-of-the-art facilities, and distinguished faculty members who are experts in their respective fields.
</li>
            <li><strong>International Recognition: </strong>The university is recognized by prestigious medical councils and organizations worldwide, making its degrees widely accepted and respected across borders.</li>
            <li><strong>Multicultural Environment: </strong>Osh State Medical University welcomes students from diverse cultural backgrounds, fostering an enriching and inclusive learning environment that prepares future doctors for the global healthcare landscape.
</li>
            <li><strong>Clinical Experience: </strong>Students at Osh State Medical University gain invaluable clinical experience through hands-on training in modern medical facilities, ensuring they are well-prepared to excel in their careers upon graduation.</li>
          </ol>
          <strong>Our Commitment to Students:</strong>
          <p>At Study Doctor, we understand that the journey to becoming a doctor is not just about acquiring knowledge but also about finding the right support system every step of the way. That’s why our partnership with Osh State Medical University goes beyond mere enrollment assistance. Here’s what students can expect from us:</p>
          <ol>
            <li><strong>Personalized Guidance: </strong>We provide personalized guidance and support to help students navigate the admission process smoothly, from application submission to visa assistance.
</li>
            <li><strong>Ongoing Support: </strong>Our support doesn’t end once students enroll at Osh State Medical University. We remain committed to assisting them throughout their academic journey, addressing any concerns or challenges they may encounter along the way.
</li>
            <li><strong>Career Counseling: </strong>We offer career counseling services to help students identify their strengths, explore various specializations, and make informed decisions about their future careers in medicine.
</li>
            <li><strong>Community Building: </strong>We facilitate networking opportunities and community-building activities to help students forge meaningful connections with peers, faculty, and industry professionals, both within the university and beyond.

</li>
          </ol>
          `,
        },
      },
      "international-school-of-medicine": {
        name: "International school of medicine",
        slug: "international-school-of-medicine",
        countryName: "Uzbekistan",
        countrySlug: "study-mbbs-in-kazakhstan",
        content: {
          universitiesname: "International school of medicine",
          headerImage: {
            src: internationalschoolheader,
            alt: "International school of medicine",
          },
          mainImage: {
            src: internationalschoolmain,
            alt: "International school of medicine Main",
          },
          htmlcontent: `
          <p>In the dynamic landscape of higher education, the pursuit of quality medical education transcends borders. As aspiring medical professionals seek pathways beyond their home countries, Study Doctor Education Consultant Company emerges as a beacon of guidance and support. In its latest stride towards fostering global opportunities, Study Doctor proudly announces its partnership with the esteemed International School of Medicine in Kyrgyzstan.</p>
          <h2>A Confluence of Excellence</h2>
          <p>Nestled in the heart of Central Asia, the International School of Medicine (ISM) stands as a testament to academic excellence and cultural diversity. With a commitment to nurturing proficient medical practitioners equipped with global perspectives, ISM has carved a niche for itself in the realm of medical education.</p>
          <p>Study Doctor’s collaboration with ISM heralds a new era of opportunities for students aspiring to pursue their medical careers. This partnership serves as a bridge connecting eager minds with the enriching academic resources and cultural immersion offered by ISM.</p>
          <h2>Unraveling the Advantages</h2>
          <p>The tie-up between Study Doctor and ISM opens doors to a myriad of advantages for prospective medical students:</p>
          <ol>
            <li><strong>High-Quality Education: </strong>ISM boasts a faculty comprising seasoned professionals and scholars dedicated to imparting comprehensive medical education. Through this collaboration, students gain access to a curriculum aligned with international standards, ensuring a robust foundation for their medical careers.
</li>
            <li><strong>Clinical Exposure: </strong>Practical training is indispensable in medical education, and ISM excels in providing ample clinical exposure to its students. Study Doctor facilitates seamless access to clinical rotations and internships, allowing students to hone their skills in diverse medical settings.
</li>
            <li><strong>Affordability: </strong>Pursuing medical education abroad often comes with financial considerations. ISM, renowned for its affordability without compromising on quality, presents a compelling option for students seeking value for their investment. Study Doctor further assists students in navigating financial aspects, ensuring a smooth transition into their academic journey.
</li>
            <li><strong>Cultural Immersion: </strong>Beyond academics, studying abroad offers a holistic learning experience enriched by cultural immersion. Kyrgyzstan’s rich heritage and welcoming atmosphere provide an ideal backdrop for students to broaden their horizons and forge lifelong connections.
</li>
          </ol>
          <h2>Guiding Every Step of the Way</h2>
          <p>At Study Doctor, our commitment extends beyond mere facilitation. We understand that navigating the complexities of studying abroad can be daunting. Hence, our team of seasoned consultants stands ready to guide students at every step of their journey:</p>
          <ul>
            <li><strong>Personalized Counseling: </strong>From choosing the right program to assisting with visa procedures, our consultants offer personalized guidance tailored to each student’s aspirations and circumstances.
</li>
            <li><strong>Pre-Departure Assistance: </strong>We leave no stone unturned in ensuring a smooth transition for students, providing comprehensive support with travel arrangements, accommodation, and other logistical concerns.
</li>
            <li><strong>Ongoing Support: </strong>Our relationship with students doesn’t end at enrollment. We remain steadfast in our support throughout their academic tenure, addressing any challenges they may encounter along the way.</li>
          </ul>
          <h2>Embracing Boundless Opportunities</h2>
          <p>In an increasingly interconnected world, the pursuit of education transcends geographical boundaries. Through its collaboration with the International School of Medicine, Kyrgyzstan, Study Doctor reaffirms its commitment to empowering students with global opportunities.</p>
          <p>As aspiring medical professionals embark on this transformative journey, Study Doctor stands as a steadfast companion, guiding them towards a future brimming with promise and potential. Together, let us embrace the boundless opportunities that await on the horizon of global education.</p>
          
          `,
        },
      },
    },
  },
  "study-mbbs-in-kyrgyzstan": {
    name: "Study MBBS in Kyrgyzstan",
    slug: "study-mbbs-in-kyrgyzstan",
    intro: {
      title: "MBBS In Kyrgyzstan - Introduction",
      points: [
        "Studying MBBS in Kyrgyzstan in is an excellent choice for foreign students, especially Indians. Every year, thousands of aspirants choose Kyrgyzstan due to its affordable tuition fees, high-quality education, and globally recognized medical degrees. The MBBS program in Kyrgyzstan has been designed to be at par with international standards so that students can receive excellent medical training at very reasonable costs. One of the major attractions to study medicine in Kyrgyzstan is the low tuition fees. Compared with private medical colleges in India and many other countries, the MBBS in Kyrgyzstan fees remains very affordable. The cost of MBBS in Kyrgyzstan for international students ranges between ₹19 to ₹30 lakhs for the entire course, which also covers tuition fees, accommodation, and other expenses. This is quite affordable and comes within the reach of the students aiming to pursue medical degrees abroad.",
        "Besides, the curriculum structure in Kyrgyzstan medical colleges is well-oriented and maintained at international standards, which give a smooth pathway for graduates to attempt competitive exams like NMC FMGE and USMLE. Teaching is conducted in English; studying is made comfortable for students from India and other nations. MBBS admission in Kyrgyzstan is quite easy to obtain. International students are required to submit academic transcripts, a valid passport, and the NEET exam passed for Indian students. The universities make an online application process easy, after which the students usually receive their admission letters within a few weeks. With a six-year program commencing with clinical training from the third year, much emphasis is given to practical exposure in the medical schools in Kyrgyzstan. The degree is recognized by global authorities like WHO, NMC, and others, hence giving a chance for graduates to practice medicine in several countries, including India.",
      ],
      image: {
        src: Kyrgyzstan,
        alt: "Study MBBS in Kyrgyzstan",
      },
      about: {
        title: "About Kyrgyzstan",
        points: [
          "Kyrgyzstan, officially known as the Kyrgyz Republic, is an incredibly beautiful country in Central Asia, having the most beautiful mountain ranges. This inland country borders Kazakhstan to the north, Uzbekistan to the west, Tajikistan to the southwest, and China to the southeast. The capital and the largest city of Kyrgyzstan is Bishkek, which covers an area of 49 square miles and has a population of over 1.25 million people. Simultaneously, Kyrgyzstan is a very rich country from the historical and cultural points of view because the long-standing traditions are nourishing it. Being a part of the Soviet Union, this country received its independence in 1991-a new mission, a new chapter in Kyrgyz history. Nowadays, Kyrgyzstan is famous for its wonderful landscapes of nature; for this reason, this country attracts many travelers and students from all over the world to its area. It provides a very good academic atmosphere for students who want to study MBBS in Kyrgyzstan. Medical colleges in Kyrgyzstan are approved by major organizations like WHO, WDOMS, and FAIMER to maintain global acceptance of the graduates after getting their degrees. Thereafter, they provide a balanced curriculum for students between theoretical knowledge and practical experiences. Medical colleges in Kyrgyzstan are fully equipped with advanced infrastructure, qualified faculties, and modern technical facilities, hence are one of the ideal choices for students pursuing their MBBS in Kyrgyzstan. The MBBS program in Kyrgyzstan runs for six years, which includes one year of compulsory internship. The rich cultural heritage of the country merged with a strong medical education system makes study medicine in Kyrgyzstan a great opportunity for international students.",
        ],
      },
    },
    why_study: {
      title: "Why Study MBBS in Kyrgyzstan",
      points: [
        "Study MBBS in Kyrgyzstan offers higher studies over other nations, specifically for scholars who wish to study MBBS at a very nominal cost. It possesses several top-class medical colleges which are approved by global bodies like the WHO and National Medical Commission. Thus, the degree provided after studying from such institutes is valid in many nations, starting from India.",
        "The MBBS programs in Kyrgyzstan come with an internationally recognized curriculum, with courses being provided in the English language, hence, easy for students from non-native speaking countries to pursue medical studies. It offers state-of-the-art infrastructure, along with well-equipped research centers and highly qualified faculty members. Moreover, the students benefit from theoretical knowledge and practical exposure, which is rather important in medical fields. Apart from these, the cost of MBBS in Kyrgyzstan provides many more facilities and cheaply compared with many countries like India, the USA, or Europe. Students who avail of such an excellent study environment, therefore, have not had to pay heavy tuition fees or a hefty amount in donations for admissions. Additionally, this brings friendliness in the residents and modern conditions in living in Kyrgyzstan as a medical student further enhances overall studies and develops an excellent stay. It results from here that such a privileged option is usually considered during international student exchange programs.",
      ],
    },
    accomadation: {
      title: "Indian Food and Facility For Indian Students",
      content:
        "While living in Kyrgyzstan as a medical student, food and accommodation are the major factors that students keep in mind. The universities in Kyrgyzstan have very affordable accommodation options; most of them offer hostels for international students. These hostels are facilitated with all the necessary facilities that ensure a comfortable living environment for the students. There are numerous Indian restaurants in Kyrgyzstan for Indian students, serving home-style meals at an affordable price. Many students also prefer cooking their own food; university hostels have kitchen facilities in many instances. The easy availability of affordable food options makes the stay in Kyrgyzstan quite convenient for Indian students. Generally speaking, living in Kyrgyzstan is not too expensive, and with a host of accommodation and food alternatives available to suit the lifestyles of international students, there is ample reason to feel at home while pursuing an MBBS in Kyrgyzstan.",
    },
  },
  "study-mbbs-in-vietnam": {
    name: "Study MBBS in Vietnam",
    slug: "study-mbbs-in-vietnam",
    intro: {
      title: "MBBS In Vietnam - Introduction",
      points: [
        "Vietnam, officially known as the Socialist Republic of Vietnam (SRV), is the fifteenth most populated country in the world. It is situated in Southeast Asia, has a population of 99 million, and occupies an area of 331,212 square kilometers. Its boundaries are shared by China to the north, Laos and Cambodia to the west, and Thailand, the Philippines, Indonesia, and Malaysia on the sea. Vietnam’s capital city is Hanoi, and its largest city is Ho Chi Minh City, formerly known as Saigon.",
        "Vietnam has a long history that dates back to the Paleolithic era, when the first nations were founded in the Red River Delta in the first millennium BC. From 111 BC until the First Vietnamese dynasty’s rise in 939, China ruled over Northern and Central Vietnam during the Han dynasty.",
        "The Chinese Confucianism and Buddhism influenced the succeeding dynasties, which conquered Champa as they advanced southward. Following the August Revolution in 1945, the communist revolutionary Ho Chi Minh led the nationalist coalition Viet Minh in declaring Vietnam’s independence. The Nguyễn monarchy had submitted to France in 1883.",
        "Vietnam fought a protracted battle against France beginning with the First Indochina battle in the 20th century which Vietnam won in 1954, causing the nation to be split in half. The Soviet Union, China, and the United States backed the anti-communist South, while the communist North launched the Vietnam War. The Communist Party of Vietnam led North Vietnam to victory in 1975 and the reunification of the nation as a unitary socialist state.The Communist Party of Vietnam initiated political and economic reforms akin to those of China in 1986, despite facing numerous obstacles including an inefficient planned economy, a trade embargo by the West, and wars with China and Cambodia. These reforms helped the country transition to a market-oriented economy and facilitated its reintegration into the global economy and politics.",
        "Vietnam’s economy is one of the fastest-growing in the twenty-first century, while being classified as a lower-middle-income developing nation. By 2050, it is expected to have a GDP comparable to wealthy countries.",
        "Vietnam is among the nations with the worst records for civil liberties, press freedom, and the freedom of religion and ethnic minorities. It also has a high level of corruption and censorship. In spite of this, Vietnam has held two UN Security Council seats and is a member of numerous international and intergovernmental organizations, such as the ASEAN, APEC, CPTPP, Non-Aligned Movement, OIF, and WTO.",
      ],
      image: {
        src: vietnam,
        alt: "Study MBBS in Vietnam",
      },
      about: {
        title: "About Vietnam",
        points: [
          "Southeast Asia is the region that is home to Vietnam, sometimes referred to as the Socialist Republic of Vietnam. With around 97 million inhabitants, it ranks as the world’s 57th most populous nation. This nation shares borders with China, Malaysia, Indonesia, the Philippines, Cambodia, Laos, Thailand, and Cambodia. Vietnam’s capital city is Hanoi. Ho Chi Minh City is Vietnam’s largest city. The environment in Vietnam will generally fluctuate dramatically for each region due to differences in scope and the obvious variety of geological features. Rainstorm twists typically blow from the upper east along the Chinese coast and across the Gulf of Tonkin during the cooler, or dry, season, which typically lasts from November to April. This causes significant wetness.",
          "The mystical beauty of its natural surroundings and the friendliness of its people have made Vietnam, a stunning country in South East Asia, famous worldwide. Vietnam is a paradise for individuals who love adventures and outdoor sports, with a coastline spanning more than 3,000 kilometres, numerous pristine jungles, and a tropical climate. It is also a nation with a rich cultural heritage, straddling the cultures of several East and South Asian nations, including Vietnam, China, Japan, Champa, Khmer, and India.",
        ],
      },
    },
    why_study: {
      title: "Why Study MBBS In Vietnam",
      points: [
        "Vietnam is becoming a popular destination for students who want to study MBBS abroad, especially for Indian students. The country offers a unique blend of high-quality education, affordable tuition fees, and a rich cultural experience. The MBBS programs in Vietnam are recognized by the World Health Organization (WHO) and the National Medical Commission (NMC), making it easier for graduates to practice medicine in India and other countries.",
        "The MBBS in Vietnam is taught in English, which makes it accessible for international students who are not natively English-speaking. Vietnam also has a large number of medical colleges and universities, making it an excellent choice for international students looking to study medicine abroad. The country has a rich history and culture, which adds to the overall experience of studying in Vietnam. The cost of living in Vietnam is relatively low compared to other countries, making it an affordable option for students. The country also has a vibrant student life, with many opportunities for extracurricular activities and cultural experiences.",
      ],
    },
    accomadation: {
      title: "Indian Food and Facility For Indian Students",
      content:
        "While living in Vietnam as a medical student, food and accommodation are the major factors that students keep in mind. The universities in Vietnam have very affordable accommodation options; most of them offer hostels for international students. These hostels are facilitated with all the necessary facilities that ensure a comfortable living environment for the students. There are numerous Indian restaurants in Vietnam for Indian students, serving home-style meals at an affordable price. Many students also prefer cooking their own food; university hostels have kitchen facilities in many instances. The easy availability of affordable food options makes the stay in Vietnam quite convenient for Indian students. Generally speaking, living in Vietnam is not too expensive, and with a host of accommodation and food alternatives available to suit the lifestyles of international students, there is ample reason to feel at home while pursuing an MBBS in Vietnam.",
    },
  },
};

export const daySchedules = {
  Sunday: "10:00AM - 5.00PM",
  Monday: "10:00AM - 8:00PM",
  Tuesday: "10:00AM - 8:00PM",
  Wednesday: "10:00AM - 8:00PM",
  Thursday: "10:00AM - 8:00PM",
  Friday: "10:00AM - 8:00PM",
  Saturday: "10:00AM - 8.00PM",
};

export const socialmediaLinks = {
  instagram: "https://www.instagram.com/medpathoverseas?igsh=MWRpaWZzaTdlcDN6",
  facebook: "https://www.facebook.com/people/Medpath-Overseas/61576057070037/",
  linkedin:
    "https://www.linkedin.com/company/medpath-overseas/posts/?feedView=all",
  youtube: "https://www.youtube.com/@MedpathOverseasadmin",
  whatsapp: "tel:+917305702699",
  email: "mailto:omedpath@gmail.com",
  appno:
    "https://api.whatsapp.com/send?phone=917305702699&text=Hello%20MedPath%20Overseas",
};
