"use client";

import { useRef } from "react";

import ExperienceCard from "../portfolio/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
    const carouselRef = useRef<HTMLDivElement>(null);

    function scroll(direction: "left" | "right") {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const cards = Array.from(
            carousel.querySelectorAll<HTMLElement>(
                "[data-experience-card]"
            )
        );

        if (!cards.length) return;

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
                cardCenter - carouselCenter
            );

            if (distance < smallestDistance) {
                smallestDistance = distance;
                currentIndex = index;
            }
        });

        const visibleCards =
            window.innerWidth >= 1024 ? 2 : 1;

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
                max-w-300
                py-8
            "
        >
            {/* LEFT ARROW */}
            <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous experience"
                className="
                    absolute
                    top-1/2
                    z-30

                    hidden
                    -translate-y-1/2

                    text-4xl
                    text-[#F3EED8]

                    transition-transform
                    duration-200

                    hover:scale-110

                    lg:-left-10
                    lg:block
                "
            >
                ←
            </button>

            {/* CAROUSEL VIEWPORT */}
            <div
                className="
                    mx-auto
                    w-full
                    overflow-x-hidden
                    overflow-y-visible
                "
            >
                {/* CAROUSEL TRACK */}
                <div
                    ref={carouselRef}
                    className="
                        flex
                        items-center

                        gap-8

                        overflow-x-hidden
                        scroll-smooth

                        px-6
                        py-8

                        sm:px-8

                        lg:gap-12
                        lg:px-9
                        lg:py-16
                    "
                >
                    {experiences.map(
                        (experience, index) => (
                            <div
                                key={`${experience.organization}-${experience.title}`}
                                data-experience-card
                                className={`
                                    flex
                                    shrink-0
                                    justify-center

                                    basis-full

                                    transition-transform
                                    duration-300

                                    lg:basis-[calc((100%-3rem)/2)]

                                    ${
                                        index % 2 === 0
                                            ? "lg:-translate-y-8"
                                            : "lg:translate-y-8"
                                    }
                                `}
                            >
                                <ExperienceCard
                                    {...experience}
                                    rotation={
                                        index % 2 === 0
                                            ? "left"
                                            : "right"
                                    }
                                />
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* RIGHT ARROW */}
            <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next experience"
                className="
                    absolute
                    top-1/2
                    z-30

                    hidden
                    -translate-y-1/2

                    text-4xl
                    text-[#F3EED8]

                    transition-transform
                    duration-200

                    hover:scale-110

                    lg:-right-10
                    lg:block
                "
            >
                →
            </button>

            {/* MOBILE CONTROLS */}
            <div
                className="
                    mt-2

                    flex
                    justify-center
                    gap-10

                    lg:hidden
                "
            >
                <button
                    type="button"
                    onClick={() => scroll("left")}
                    aria-label="Previous experience"
                    className="
                        text-3xl
                        text-[#F3EED8]

                        transition-transform

                        hover:scale-110
                    "
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={() => scroll("right")}
                    aria-label="Next experience"
                    className="
                        text-3xl
                        text-[#F3EED8]

                        transition-transform

                        hover:scale-110
                    "
                >
                    →
                </button>
            </div>
        </section>
    );
}