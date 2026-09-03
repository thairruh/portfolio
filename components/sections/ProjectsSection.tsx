"use client";

import { useRef } from "react";
import ProjectCard from "../portfolio/ProjectCard";

const projects = [
    {
        title: "Knights Records",
        description:
            "Worked on the website for Knights Records, UCF's student-run mock record label.",
        image: "/projects/knights-records.png",
        color: "#a16f9d",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
        ],
        link: "",
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
    },
    {
        title: "HandScape",
        description:
            "An interactive 3D sandbox in which users can spawn and manipulate objects through hand gestures.",
        image: "/projects/handscape.png",
        color: "#71354E",
        technologies: [
            "Next.js",
            "React",
            "Three.js",
            "MediaPipe",
        ],
        link: "https://devpost.com/software/handscape-r5yxkq",
    },
    {
        title: "Music Match",
        description:
            "A music-based guessing game featuring artist matching and leaderboards.",
        image: "/projects/music-match.png",
        color: "#DB9857",
        technologies: [
            "Flask",
            "Python",
            "SQLite",
            "JavaScript",
            "iTunes API",
        ],
        link: "",
    },
    {
        title: "I'm Human",
        description:
            "A very annoying login page that requires you to prove you're human by solving a series of challenges.",
        image: "/projects/leetfield.png",
        color: "#557A68",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Canvas",
            "Prisma",
        ],
        link: "",
    },
    {
        title: "Portfolio",
        description:
            "You're looking at it right now! My personal website to show off my projects and experience.",
        image: "/portfolio.png",
        color: "#32289C",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
        ],
        link: "",
    },
];

export default function ProjectsSection() {
    const carouselRef = useRef<HTMLDivElement>(null);

    function scroll(direction: "left" | "right") {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = Array.from(
        carousel.querySelectorAll<HTMLElement>("[data-project-card]")
    );

    if (cards.length === 0) return;

    const carouselCenter =
        carousel.scrollLeft + carousel.clientWidth / 2;

    let currentIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
        const cardCenter =
            card.offsetLeft + card.offsetWidth / 2;

        const distance = Math.abs(cardCenter - carouselCenter);

        if (distance < smallestDistance) {
            smallestDistance = distance;
            currentIndex = index;
        }
    });

    const visibleCards = window.innerWidth >= 1024 ? 3 : 1;

    const targetIndex =
        direction === "right"
            ? Math.min(
                  currentIndex + visibleCards,
                  cards.length - 1
              )
            : Math.max(
                  currentIndex - visibleCards,
                  0
              );

    cards[targetIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
    });
}

    return (
        <section
            className="
                relative
                mx-auto
                w-full
                max-w-[1500px]

                -translate-y-8
                md:-translate-y-10
                lg:-translate-y-12
            "
        >
            {/* DESKTOP LEFT ARROW */}
            <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous projects"
                className="
                    absolute
                    left-0
                    top-1/2
                    z-30
                    hidden
                    -translate-y-1/2

                    text-4xl
                    transition-transform
                    duration-200
                    hover:scale-110

                    lg:block
                    lg:-left-12
                "
            >
                ←
            </button>

            {/* CAROUSEL VIEWPORT */}
            <div
                className="
                    mx-auto
                    w-full
                    overflow-hidden
                "
            >
                {/* CAROUSEL TRACK */}
                <div
                    ref={carouselRef}
                    className="
                        box-border
                        flex
                        gap-15

                        overflow-x-hidden
                        scroll-smooth

                        px-5
                        py-9

                        md:px-9

                        lg:gap-25
                        lg:px-8
                    "
                >
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            data-project-card
                            className="
                                shrink-0
                                basis-full

                                lg:basis-[calc((100%_-_10rem_-_4rem)/3)]
                            "
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP RIGHT ARROW */}
            <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next projects"
                className="
                    absolute
                    right-0
                    top-1/2
                    z-30
                    hidden
                    -translate-y-1/2

                    text-4xl
                    transition-transform
                    duration-200
                    hover:scale-110

                    lg:block
                    lg:-right-12
                "
            >
                →
            </button>

            {/* MOBILE ARROWS */}
            <div
                className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-10

                    lg:hidden
                "
            >
                <button
                    type="button"
                    onClick={() => scroll("left")}
                    aria-label="Previous project"
                    className="
                        text-3xl
                        transition-transform
                        duration-200
                        hover:scale-110
                    "
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={() => scroll("right")}
                    aria-label="Next project"
                    className="
                        text-3xl
                        transition-transform
                        duration-200
                        hover:scale-110
                    "
                >
                    →
                </button>
            </div>
        </section>
    );
}