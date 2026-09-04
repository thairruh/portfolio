"use client";

import { useRef, useState } from "react";

import ProjectCard from "../portfolio/ProjectCard";

import { projects } from "@/data/projects";
import { edits } from "@/data/edits";

type Showcase = "code" | "edits";

type ActiveVideo = {
    src: string;
    title: string;
} | null;

export default function ProjectsSection() {
    const carouselRef =
        useRef<HTMLDivElement>(null);

    const [showcase, setShowcase] =
        useState<Showcase>("code");

    const [activeVideo, setActiveVideo] =
        useState<ActiveVideo>(null);

    const activeProjects =
        showcase === "code"
            ? projects
            : edits;

    function changeShowcase(
        nextShowcase: Showcase
    ) {
        if (nextShowcase === showcase) return;

        setShowcase(nextShowcase);

        carouselRef.current?.scrollTo({
            left: 0,
            behavior: "smooth",
        });
    }

    function scroll(
        direction: "left" | "right"
    ) {
        const carousel =
            carouselRef.current;

        if (!carousel) return;

        const cards = Array.from(
            carousel.querySelectorAll<HTMLElement>(
                "[data-project-card]"
            )
        );

        if (cards.length === 0) return;

        const carouselCenter =
            carousel.scrollLeft +
            carousel.clientWidth / 2;

        let currentIndex = 0;
        let smallestDistance = Infinity;

        cards.forEach((card, index) => {
            const cardCenter =
                card.offsetLeft +
                card.offsetWidth / 2;

            const distance = Math.abs(
                cardCenter -
                    carouselCenter
            );

            if (
                distance <
                smallestDistance
            ) {
                smallestDistance =
                    distance;

                currentIndex = index;
            }
        });

        const visibleCards =
            window.innerWidth >= 1024
                ? 3
                : 1;

        const targetIndex =
            direction === "right"
                ? Math.min(
                      currentIndex +
                          visibleCards,
                      cards.length - 1
                  )
                : Math.max(
                      currentIndex -
                          visibleCards,
                      0
                  );

        cards[
            targetIndex
        ].scrollIntoView({
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
            {/* DESKTOP SHOWCASE TOGGLE */}
            <div
                className="
                    absolute
                    top-[3%]
                    z-40

                    hidden
                    flex-col
                    gap-2

                    lg:flex

                    lg:left-[-2rem]
                    xl:left-[-5rem]
                    2xl:left-[-7rem]
                "
            >
                <button
                    type="button"
                    onClick={() =>
                        changeShowcase(
                            "code"
                        )
                    }
                    aria-pressed={
                        showcase === "code"
                    }
                    className={`
                        w-[5.5rem]
                        rounded-lg

                        px-3
                        py-2

                        text-sm

                        transition-all
                        duration-200

                        hover:scale-105

                        ${
                            showcase ===
                            "code"
                                ? "bg-[#F3EED8] text-black shadow-md"
                                : "bg-[#6E7040] text-[#F3EED8]"
                        }
                    `}
                >
                    DEV
                </button>

                <button
                    type="button"
                    onClick={() =>
                        changeShowcase(
                            "edits"
                        )
                    }
                    aria-pressed={
                        showcase ===
                        "edits"
                    }
                    className={`
                        w-[5.5rem]
                        rounded-lg

                        px-3
                        py-2

                        text-sm

                        transition-all
                        duration-200

                        hover:scale-105

                        ${
                            showcase ===
                            "edits"
                                ? "bg-[#F3EED8] text-black shadow-md"
                                : "bg-[#6E7040] text-[#F3EED8]"
                        }
                    `}
                >
                    EDITS
                </button>
            </div>

            {/* MOBILE SHOWCASE TOGGLE */}
            <div
                className="
                    mb-2

                    flex
                    items-center
                    justify-center
                    gap-3

                    lg:hidden
                "
            >
                <button
                    type="button"
                    onClick={() =>
                        changeShowcase(
                            "code"
                        )
                    }
                    aria-pressed={
                        showcase === "code"
                    }
                    className={`
                        rounded-lg

                        px-4
                        py-2

                        text-sm

                        transition-colors
                        duration-200

                        ${
                            showcase ===
                            "code"
                                ? "bg-[#F3EED8] text-black"
                                : "bg-[#6E7040] text-[#F3EED8]"
                        }
                    `}
                >
                    DEV
                </button>

                <button
                    type="button"
                    onClick={() =>
                        changeShowcase(
                            "edits"
                        )
                    }
                    aria-pressed={
                        showcase ===
                        "edits"
                    }
                    className={`
                        rounded-lg

                        px-4
                        py-2

                        text-sm

                        transition-colors
                        duration-200

                        ${
                            showcase ===
                            "edits"
                                ? "bg-[#F3EED8] text-black"
                                : "bg-[#6E7040] text-[#F3EED8]"
                        }
                    `}
                >
                    EDITS
                </button>
            </div>

            {/* DESKTOP LEFT ARROW */}
            <button
                type="button"
                onClick={() =>
                    scroll("left")
                }
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
                    {activeProjects.map(
                        (project) => (
                            <div
                                key={
                                    project.title
                                }
                                data-project-card
                                className="
                                    shrink-0
                                    basis-full

                                    lg:basis-[calc((100%_-_10rem_-_4rem)/3)]
                                "
                            >
                                <ProjectCard
                                    {...project}
                                    onOpenVideo={(
                                        video,
                                        title
                                    ) => {
                                        setActiveVideo(
                                            {
                                                src: video,
                                                title,
                                            }
                                        );
                                    }}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* DESKTOP RIGHT ARROW */}
            <button
                type="button"
                onClick={() =>
                    scroll("right")
                }
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
                    onClick={() =>
                        scroll("left")
                    }
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
                    onClick={() =>
                        scroll("right")
                    }
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

            {/* VIDEO MODAL */}
            {activeVideo && (
                <div
                    className="
                        fixed
                        inset-0
                        z-[100]

                        flex
                        items-center
                        justify-center

                        bg-black/75
                        p-5
                    "
                    onClick={() =>
                        setActiveVideo(null)
                    }
                >
                    <div
                        className="
                            relative
                            w-full
                            max-w-[1000px]
                        "
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setActiveVideo(
                                    null
                                )
                            }
                            aria-label="Close video"
                            className="
                                absolute
                                -right-1
                                -top-12

                                text-4xl
                                text-white

                                transition-transform
                                duration-200

                                hover:scale-110
                            "
                        >
                            ×
                        </button>

                        <video
                            src={
                                activeVideo.src
                            }
                            controls
                            autoPlay
                            playsInline
                            className="
                                max-h-[85vh]
                                w-full
                                rounded-xl
                                bg-black
                            "
                        />

                        <p
                            className="
                                mt-3
                                text-center
                                text-lg
                                text-white
                            "
                        >
                            {
                                activeVideo.title
                            }
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}