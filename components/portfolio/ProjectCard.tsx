type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    color: string;
    technologies: string[];
    link: string;
};

export default function ProjectCard({
    title,
    description,
    image,
    color,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="relative w-full">
            {/* NOTE PAPER */}
            <div
                className="
                    relative
                    left-1/2
                    w-[108%]
                    -translate-x-1/2
                    min-h-[505px]
                    rounded-[1.5rem]
                    bg-[#EAEAEA]
                    px-7
                    pb-8
                    pt-[255px]
                    shadow-[0_8px_12px_rgba(0,0,0,0.18)]
                "
            >
                {/* binder holes */}
                <div className="absolute left-4 top-5 flex gap-3">
                    <span className="h-7 w-7 rounded-full bg-[#818249]" />
                    <span className="h-7 w-7 rounded-full bg-[#818249]" />
                </div>

                {/* notebook lines */}
                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        inset-x-7
                        top-[135px]
                        bottom-7
                        opacity-60
                    "
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, #7CA0C8 35px, #7CA0C8 36px)",
                    }}
                />

                {/* CONTENT */}
                <div className="relative -top-[4px] z-10">
                    <h3 className="m-0 text-3xl leading-[36px]">
                        {title}
                    </h3>

                    <p className="m-0 text-base leading-[36px]">
                        {description}
                    </p>
                </div>

                {/* TECHNOLOGIES */}
                <div
                    className="
                        absolute
                        bottom-[36px]
                        left-7
                        right-7
                        z-10
                        flex
                        flex-wrap
                        items-center
                        gap-x-3
                        gap-y-0
                    "
                >
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="
                                relative
                                isolate
                                inline-block
                                px-1
                                text-sm
                                leading-[36px]
                            "
                        >
                            {/* highlighter */}
                            <span
                                aria-hidden="true"
                                className="
                                    absolute
                                    inset-x-0
                                    bottom-[8px]
                                    -z-10
                                    h-[15px]
                                    -rotate-1
                                    bg-[#F2D96B]/70
                                "
                            />

                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            {/* PROJECT IMAGE */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} project`}
                className="
                    absolute
                    left-39
                    top-[-13px]
                    z-20
                    aspect-square
                    w-[95%]
                    -translate-x-1/2
                    rotate-10
                    overflow-hidden
                    rounded-[1.25rem]
                    shadow-[0_7px_10px_rgba(0,0,0,0.25)]

                    transition-transform
                    duration-300
                    ease-out

                    hover:scale-102
                    focus-visible:scale-105
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                "
                style={{ backgroundColor: color }}
            >
                <img
                    src={image}
                    alt=""
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                />
            </a>

            {/* PAPERCLIP */}
            <img
                src="/paperclip.png"
                alt=""
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-45
                    top-[-54px]
                    z-30
                    w-35
                    -translate-x-1/2
                "
            />
        </article>
    );
}