import { technologies } from "@/data/technologies";


export default function TechnologiesSection() {
    return (
        <section
            className="
                mx-auto
                w-full
                max-w-[1350px]
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

                            min-h-[290px]

                            rounded
                            bg-[#F3EED8]

                            px-7
                            pb-6
                            pt-6

                            shadow-[0_8px_14px_rgba(0,0,0,0.18)]

                            lg:min-h-[310px]
                            lg:px-8
                            lg:pt-7
                        "
                    >
                        {/* TITLE */}
                        <h3
                            className="
                                mb-6

                                text-2xl

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

                        {/* DECORATIVE TAPE */}
                        <img
                            src="/tape.png"
                            alt=""
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute

                                -top-5
                                right-7
                                z-20

                                w-24
                                rotate-6

                                lg:w-28
                            "
                        />

                        {/* STICKER */}
                        <img
                            src="/star-sticker.png"
                            alt=""
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute

                                -bottom-4
                                -left-3
                                z-20

                                w-16
                                -rotate-12

                                lg:w-18
                            "
                        />
                    </article>
                ))}
            </div>
        </section>
    );
}