// data/projects.ts

export const projects = [
    {
        title: "Knights Records",
        description:
            "Worked on the website for Knights Records, UCF's student-run mock record label.",
        image: "/kricon.png",
        color: "#a16f9d",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
        ],
        link: "https://github.com/Knights-Records-UCF/Knights-Record-Website",
        type: "code" as const,
    },
    {
        title: "SASE UCF",
        description:
            "Built the event management system for the Society of Asian Scientists & Engineers UCF's official website.",
        image: "/sase-ucf.png",
        color: "#82d1ab",
        technologies: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
        ],
        link: "https://ucfsase.com/",
        type: "code" as const,
    },
    {
        title: "Book Nook",
        description:
            "A mobile app where you must read books in order to decorate your cozy space.",
        image: "/book-nook.png",
        color: "#32289C",
        technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "Firebase",
            "NativeWind",
        ],
        link: "https://www.canva.com/design/DAHDIZSXHf4/Hsj3Avm1TP2RIJ0fntWoTw/view?utm_content=DAHDIZSXHf4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2faf69a2f3",
        award: {
            image: "/award.png",
            text: "2nd Place — Girls Who Code UCF Spring Showcase",
        },
        type: "code" as const,
    },
    {
        title: "HandScape",
        description:
            "An interactive 3D sandbox in which users can spawn and manipulate objects through hand gestures.",
        image: "/handscape.png",
        color: "#71354E",
        technologies: [
            "Next.js",
            "React",
            "Three.js",
            "MediaPipe",
        ],
        link: "https://devpost.com/software/handscape-r5yxkq",
        type: "code" as const,
    },
    {
        title: "I'm Human",
        description:
            "A very annoying login page that requires you to prove you're human by solving a series of challenges.",
        image: "/imhuman.png",
        color: "#557A68",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Canvas",
            "Prisma",
        ],
        link: "https://devpost.com/software/i-swear-i-m-human",
        type: "code" as const,
    },
    {
        title: "Music Match",
        description:
            "A music-based guessing game featuring artist matching and leaderboards.",
        image: "/music-match.png",
        color: "#DB9857",
        technologies: [
            "Flask",
            "Python",
            "SQLite",
            "JavaScript",
            "iTunes API",
        ],
        link: "https://musicmatch.pythonanywhere.com/",
        type: "code" as const,
    },
    {
        title: "Portfolio",
        description:
            "You're looking at it right now! My personal website to show off who I am and what I do.",
        image: "/portfolio.png",
        color: "#32289C",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
        ],
        link: "https://thaira.dev/",
        type: "code" as const,
    },
];