type ExperienceCardProps = {
    title: string;
    organization?: string;
    dates?: string;
    image: string;
    color: string;
    notes?: string[];
    rotation?: "left" | "right";
};

export default function ExperienceCard({
    title,
    organization,
    dates,
    image,
    color,
    notes,
    rotation = "left",
}: ExperienceCardProps) {
    const isPlaceholder =
        !organization &&
        !dates &&
        (!notes || notes.every((note) => !note.trim()));

    return (
        <article
            className={`
                relative

                aspect-3/4
                w-[82vw]
                max-w-85
                shrink-0

                rounded-3xl

                ring-10
                ring-inset
                ring-black/30

                px-5
                py-7

                shadow-[0_12px_18px_rgba(0,0,0,0.35)]

                transition-transform
                duration-300

                sm:w-[86vw]
                sm:max-w-90
                sm:px-6

                md:aspect-52/35
                md:w-full
                md:max-w-130
                md:px-8
                md:py-7

                ${
                    rotation === "left"
                        ? "-rotate-2 hover:-rotate-1 md:-rotate-3"
                        : "rotate-2 hover:rotate-1 md:rotate-3"
                }
            `}
            style={{ backgroundColor: color }}
        >
            {/* CLIP */}
            <img
                src="/clippng.png"
                alt=""
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute

                    left-1/2
                    -top-10
                    z-30

                    w-16
                    -translate-x-1/2
                    object-contain

                    md:-top-12
                    md:w-20
                "
            />

            {isPlaceholder ? (
                <div
                    className="
                        flex
                        h-full
                        flex-col
                        items-center
                        justify-center
                        gap-5

                        text-[#3D2F15]
                    "
                >
                    <div
                        className="
                            flex
                            h-32
                            w-32
                            items-center
                            justify-center

                            md:h-36
                            md:w-36
                        "
                    >
                        <img
                            src={image}
                            alt=""
                            aria-hidden="true"
                            className="
                                max-h-full
                                max-w-full
                                object-contain
                            "
                        />
                    </div>

                    <h3
                        className="
                            text-center
                            text-3xl
                            leading-tight
                        "
                    >
                        {title}
                    </h3>
                </div>
            ) : (
                <>
                    {/* TOP / MOBILE STACK */}
                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            gap-5

                            md:flex-row
                            md:items-start
                            md:gap-7
                        "
                    >
                        {/* LOGO */}
                        <div
                            className="
                                flex
                                h-32
                                w-32
                                shrink-0
                                items-center
                                justify-center

                                md:h-28
                                md:w-28
                            "
                        >
                            <img
                                src={image}
                                alt={
                                    organization
                                        ? `${organization} logo`
                                        : ""
                                }
                                className="
                                    max-h-full
                                    max-w-full
                                    object-contain
                                "
                            />
                        </div>

                        {/* INFO */}
                        <div
                            className="
                                min-w-0
                                w-full
                                flex-1
                                text-center
                                text-[#3D2F15]

                                md:pt-1
                                md:text-left
                            "
                        >
                            <h3
                                className="
                                    text-2xl
                                    leading-tight

                                    md:text-3xl
                                "
                            >
                                {title}
                            </h3>

                            {organization && (
                                <p
                                    className="
                                        mt-1
                                        text-lg
                                        leading-tight
                                    "
                                >
                                    {organization}
                                </p>
                            )}

                            {/* DATES */}
                            {dates && (
                                <div
                                    className="
                                        mt-4
                                        flex
                                        items-end
                                        justify-center
                                        gap-2

                                        md:justify-start
                                        md:gap-3
                                    "
                                >
                                    <span
                                        className="
                                            shrink-0
                                            text-sm
                                        "
                                    >
                                        Dates:
                                    </span>

                                    <div
                                        className="
                                            relative
                                            w-44

                                            border-b
                                            border-black/60

                                            md:w-52
                                        "
                                    >
                                        <span
                                            className="
                                                absolute
                                                bottom-0
                                                left-1/2
                                                -translate-x-1/2

                                                whitespace-nowrap
                                                text-sm

                                                md:left-10
                                                md:translate-x-0
                                            "
                                        >
                                            {dates}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* NOTES */}
                    {notes &&
                        notes.some((note) => note.trim()) && (
                            <div
                                className="
                                    mt-6
                                    text-[#3D2F15]

                                    md:mt-5
                                "
                            >
                                <p
                                    className="
                                        mb-2
                                        text-base
                                    "
                                >
                                    Notes:
                                </p>

                                <ul
                                    className="
                                        list-disc
                                        space-y-2
                                        pl-5

                                        text-sm
                                        leading-snug

                                        md:space-y-1
                                        md:text-[0.95rem]
                                    "
                                >
                                    {notes
                                        .filter((note) =>
                                            note.trim()
                                        )
                                        .map((note) => (
                                            <li key={note}>
                                                {note}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                </>
            )}
        </article>
    );
}