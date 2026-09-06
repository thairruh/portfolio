"use client";

import { useState } from "react";
import { technologies } from "@/data/technologies";

export default function TechnologiesSection() {
    const [activeTool, setActiveTool] = useState<string | null>(null);

    return (
        <section
            className="
                short-laptop-content
                mobile-short-content
                mx-auto
                w-full
                max-w-337.5
            "
        >
            <div
                className="
                    

                    grid
                    grid-cols-1
                    gap-8

                    md:grid-cols-2

                    lg:grid-cols-3
                    lg:gap-13
                "
            >
                {technologies.map((group) => (
                    <article
                        key={group.title}
                        className="
                            relative

                            min-h-72.5
                            rounded
                            bg-[#F3EED8]

                            px-7
                            pb-6
                            pt-6

                            shadow-[0_8px_14px_rgba(0,0,0,0.18)]

                            lg:min-h-77.5
                            lg:px-8
                            lg:pt-7
                        "
                    >
                        <h3
                            className="
                                mb-6
                                text-2xl
                                text-[#3D2F15]

                                lg:text-[1.65rem]
                            "
                        >
                            {group.title}
                        </h3>

                        <div
                            className="
                                grid
                                grid-cols-3
                                place-items-center

                                gap-x-6
                                gap-y-5
                            "
                        >
                            {group.tools.map((tool) => {
                                const toolId = `${group.title}-${tool.name}`;
                                const isActive = activeTool === toolId;

                                return (
                                    <div
                                        key={tool.name}
                                        className="
                                            group/tool
                                            relative

                                            flex
                                            h-15
                                            w-15
                                            items-center
                                            justify-center

                                            transition-transform
                                            duration-200

                                            hover:-translate-y-0.5
                                        "
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveTool(
                                                    isActive
                                                        ? null
                                                        : toolId
                                                )
                                            }
                                            aria-label={tool.name}
                                            aria-expanded={isActive}
                                            className="
                                                flex
                                                h-full
                                                w-full
                                                cursor-pointer
                                                items-center
                                                justify-center

                                                focus-visible:outline-2
                                                focus-visible:outline-offset-4
                                                focus-visible:outline-[#3D2F15]
                                            "
                                        >
                                            <img
                                                src={tool.icon}
                                                alt=""
                                                aria-hidden="true"
                                                className="
                                                    max-h-full
                                                    max-w-full
                                                    object-contain
                                                "
                                            />
                                        </button>

                                        <div
                                            className={`
                                                pointer-events-none
                                                absolute

                                                bottom-full
                                                left-1/2
                                                z-30

                                                mb-2
                                                -translate-x-1/2

                                                whitespace-nowrap

                                                rounded-md
                                                bg-[#3D2F15]

                                                px-2
                                                py-1

                                                text-xs
                                                text-[#F3EED8]

                                                shadow-md

                                                transition-opacity
                                                duration-75

                                                ${
                                                    isActive
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                }

                                                group-hover/tool:opacity-100
                                            `}
                                        >
                                            {tool.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}