type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    color: string;

    technologies?: string[];
    credits?: string[];

    link?: string;
    video?: string;

    onOpenVideo?: (
        video: string,
        title: string
    ) => void;
};

export default function ProjectCard({
    title,
    description,
    image,
    color,
    technologies,
    credits,
    link,
    video,
    onOpenVideo,
}: ProjectCardProps) {
    const isEdit = Boolean(video);

    const imageClasses = `
        absolute
        left-45
        top-[-10px]
        z-20

        aspect-square
        w-[80%]

        -translate-x-1/2
        rotate-[7deg]

        overflow-hidden
        rounded-[1rem]

        shadow-[0_7px_10px_rgba(0,0,0,0.25)]

        sm:w-[72%]
        sm:top-[-12px]
        sm:left-60

        lg:left-39
        lg:top-[-13px]
        lg:w-[95%]
        lg:rotate-10
        lg:rounded-[1.25rem]
    `;

    const previewImage = (
        <img
            src={image}
            alt={
                isEdit
                    ? `${title} video thumbnail`
                    : `${title} preview`
            }
            className="
                h-full
                w-full
                object-cover
            "
        />
    );

    return (
        <article
            className="
                relative
                mx-auto

                w-[75vw]
                max-w-[360px]

                sm:w-[72vw]
                sm:max-w-[390px]

                lg:w-full
                lg:max-w-none
            "
        >
            {/* NOTE PAPER */}
            <div
                className="
                    relative
                    left-1/2
                    w-full
                    -translate-x-1/2

                    min-h-[460px]
                    rounded-[1.25rem]
                    bg-[#EAEAEA]

                    px-5
                    pb-6
                    pt-[220px]

                    shadow-[0_8px_12px_rgba(0,0,0,0.18)]

                    sm:min-h-[480px]
                    sm:px-6
                    sm:pt-[235px]

                    lg:w-[108%]
                    lg:min-h-[505px]
                    lg:rounded-[1.5rem]
                    lg:px-7
                    lg:pb-8
                    lg:pt-[255px]
                "
            >
                {/* BINDER HOLES */}
                <div
                    className="
                        absolute
                        left-3
                        top-4

                        flex
                        gap-2

                        lg:left-4
                        lg:top-5
                        lg:gap-3
                    "
                >
                    <span
                        className="
                            h-5
                            w-5

                            rounded-full
                            bg-[#818249]

                            lg:h-7
                            lg:w-7
                        "
                    />

                    <span
                        className="
                            h-5
                            w-5

                            rounded-full
                            bg-[#818249]

                            lg:h-7
                            lg:w-7
                        "
                    />
                </div>

                {/* NOTEBOOK LINES */}
                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute

                        inset-x-5
                        top-[110px]
                        bottom-6

                        opacity-60

                        lg:inset-x-7
                        lg:top-[135px]
                        lg:bottom-7
                    "
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, #7CA0C8 35px, #7CA0C8 36px)",
                    }}
                />

                {/* CONTENT */}
                <div
                    className="
                        relative
                        top-[33px]
                        z-10

                        lg:-top-[2px]
                    "
                >
                    <h3
                        className="
                            m-0

                            text-[1.55rem]
                            leading-[36px]

                            lg:text-3xl
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                            m-0

                            text-[0.9rem]
                            leading-[36px]

                            lg:text-base
                        "
                    >
                        {description}
                    </p>

                    {/* ART CREDITS */}
                    {credits && (
                        <div
                            className="
                                mt-3

                                text-[0.65rem]
                                leading-[20px]

                                lg:mt-2
                                lg:text-[0.72rem]
                                lg:leading-[22px]
                            "
                        >
                            <span
                                className="
                                    mr-1
                                    opacity-60
                                "
                            >
                                ART CREDITS:
                            </span>

                            {credits.map(
                                (credit, index) => (
                                    <span key={credit}>
                                        <span
                                            className="
                                                relative
                                                isolate
                                                inline-block
                                                px-[2px]
                                            "
                                        >
                                            {/* HIGHLIGHTER */}
                                            <span
                                                aria-hidden="true"
                                                className="
                                                    absolute
                                                    inset-x-0
                                                    bottom-[2px]
                                                    -z-10

                                                    h-[9px]
                                                    -rotate-1

                                                    bg-[#F2D96B]/70
                                                "
                                            />

                                            {credit}
                                        </span>

                                        {index <
                                            credits.length -
                                                1 && (
                                            <span
                                                className="
                                                    mx-1
                                                    opacity-50
                                                "
                                            >
                                                ·
                                            </span>
                                        )}
                                    </span>
                                )
                            )}
                        </div>
                    )}
                </div>

                {/* TECHNOLOGIES */}
                {technologies && (
                    <div
                        className="
                            absolute
                            bottom-[30px]
                            left-5
                            right-5
                            z-10

                            flex
                            flex-wrap
                            items-center

                            gap-x-2
                            gap-y-0

                            lg:bottom-[36px]
                            lg:left-7
                            lg:right-7
                            lg:gap-x-3
                        "
                    >
                        {technologies.map(
                            (technology) => (
                                <span
                                    key={technology}
                                    className="
                                        relative
                                        isolate
                                        inline-block

                                        px-1

                                        text-[0.72rem]
                                        leading-[30px]

                                        lg:text-sm
                                        lg:leading-[36px]
                                    "
                                >
                                    {/* HIGHLIGHTER */}
                                    <span
                                        aria-hidden="true"
                                        className="
                                            absolute
                                            inset-x-0
                                            bottom-[6px]
                                            -z-10

                                            h-[13px]
                                            -rotate-1

                                            bg-[#F2D96B]/70

                                            lg:bottom-[8px]
                                            lg:h-[15px]
                                        "
                                    />

                                    {technology}
                                </span>
                            )
                        )}
                    </div>
                )}
            </div>

            {/* EDIT VIDEO PREVIEW */}
            {video ? (
                <button
                    type="button"
                    onClick={() =>
                        onOpenVideo?.(
                            video,
                            title
                        )
                    }
                    aria-label={`Play ${title}`}
                    className={`
                        ${imageClasses}

                        cursor-pointer

                        transition-transform
                        duration-300
                        ease-out

                        hover:scale-102

                        focus-visible:scale-105
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                    `}
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {previewImage}

                    {/* PLAY ICON */}
                    <span
                        aria-hidden="true"
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            z-10

                            flex

                            h-14
                            w-14

                            -translate-x-1/2
                            -translate-y-1/2

                            items-center
                            justify-center

                            rounded-full
                            bg-black/60

                            pl-1

                            text-2xl
                            text-white
                        "
                    >
                        ▶
                    </span>
                </button>
            ) : link ? (
                /* DEV PROJECT WITH LINK */
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${title} project`}
                    className={`
                        ${imageClasses}

                        transition-transform
                        duration-300
                        ease-out

                        hover:scale-102

                        focus-visible:scale-105
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                    `}
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {previewImage}
                </a>
            ) : (
                /* DEV PROJECT WITHOUT LINK */
                <div
                    className={imageClasses}
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {previewImage}
                </div>
            )}

            {/* PAPERCLIP */}
            <img
                src="/paperclip.png"
                alt=""
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute

                    left-[57%]
                    top-[-18px]
                    z-30

                    w-[22%]
                    max-w-[78px]

                    -translate-x-1/2

                    lg:left-45
                    lg:top-[-54px]
                    lg:w-35
                    lg:max-w-none
                "
            />
        </article>
    );
}