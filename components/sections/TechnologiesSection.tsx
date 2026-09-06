import { technologies } from "@/data/technologies";


export default function TechnologiesSection() {
    return (
        <section
            className="
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
                        {/* TITLE */}
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

                        {/* ICON GRID */}
                        <div
                            className="
                                grid
                                grid-cols-3
                                place-items-center

                                gap-x-6
                                gap-y-5
                            "
                        >
                            {group.tools.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="
                                        group/tool

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
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        title={tool.name}
                                        className="
                                            max-h-full
                                            max-w-full
                                            object-contain
                                        "
                                    />
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}