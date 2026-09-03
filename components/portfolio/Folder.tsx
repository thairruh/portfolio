import type { ReactNode } from "react";

export type FolderId =
    | "about"
    | "projects"
    | "technologies"
    | "experience";

type FolderProps = {
    id: FolderId;
    index: number;
    title: string;
    color: string;

    // Whether this physical folder is pulled upward
    expanded: boolean;

    // Whether this is the currently selected folder
    active: boolean;

    // Controls content fade separately from folder movement
    showContent: boolean;

    onToggle: (id: FolderId) => void;
    children: ReactNode;

    // Desktop tab position
    tabPosition: string;
};


const FOLDER_COUNT = 4;

export default function Folder({
    id,
    index,
    title,
    color,
    expanded,
    active,
    showContent,
    onToggle,
    children,
    tabPosition,
}: FolderProps) {
    const closedTop = `calc(
        100% - (${FOLDER_COUNT - index} * var(--folder-closed-strip))
    )`;

    const expandedTop = `calc(
        var(--folder-top-space)
        + ${index} * var(--folder-open-gap)
    )`;

    const top = expanded
        ? expandedTop
        : closedTop;

    /*
     * Mobile positions are handled here so existing
     * desktop tabPosition values stay untouched.
     */
    const mobileTabPosition: Record<FolderId, string> = {
        about: "left-[15%]",
        projects: "right-[10%]",
        technologies: "left-[8%]",
        experience: "right-[2%]",
    };

    return (
        <article
            className="
                absolute inset-x-0 bottom-0
                flex min-h-0 flex-col

                [--folder-closed-strip:2.2rem]
                [--folder-top-space:3.25rem]
                [--folder-open-gap:1.45rem]

                md:[--folder-closed-strip:3.20rem]
                md:[--folder-top-space:clamp(3rem,10.5svh,5rem)]
                md:[--folder-open-gap:clamp(1.75rem,4svh,4.25rem)]

                shadow-[0_-10px_18px_-8px_rgba(0,0,0,0.35)]
                transition-[top]
                duration-500
                ease-in-out
            "
            style={{
                backgroundColor: color,
                top,
                zIndex: index + 1,
            }}
        >

            {/* Folder header / clickable strip */}
            <button
                type="button"
                onClick={() => onToggle(id)}
                aria-expanded={active}
                className="
                    relative z-20

                    h-[2.6rem]
                    md:h-[3.75rem]

                    w-full
                    shrink-0
                    text-[#F3EED8]
                "
            >
                {/* Folder tab */}
                <span
                    className={`
                        absolute top-0

                        h-[2.7rem]
                        w-[9rem]

                        md:h-[clamp(3.75rem,8svh,5.5rem)]
                        md:w-[clamp(10rem,25vw,20rem)]

                        -translate-y-full

                        ${mobileTabPosition[id]}
                        md:${tabPosition}
                    `}
                >
                    {/* Tab background */}
                    <span
                        className="
                            absolute inset-x-0 top-0 -bottom-[2px]

                            origin-bottom
                            rounded-t-2xl

                            transform-[perspective(12rem)_rotateX(12deg)]

                            shadow-[0_-8px_12px_-2px_rgba(0,0,0,0.25)]
                        "
                        style={{
                            backgroundColor: color,
                        }}
                    />

                    {/* Tab text */}
                    <span
                        className="
                            relative z-10

                            flex h-full
                            items-center justify-center

                            px-2
                            text-center

                            text-[1rem]
                            md:text-[clamp(1.25rem,2.2vw,2.25rem)]
                        "
                    >
                        {title}
                    </span>
                </span>
            </button>

            {/* Folder content */}
            <div
                className={`
                    relative z-10

                    min-h-0
                    flex-1

                    overflow-y-auto
                    overflow-x-hidden

                    ${
                        expanded
                            ? ""
                            : "pointer-events-none"
                    }
                `}
            >
                <div
                    className={`
                        mx-auto
                        w-full
                        max-w-[1200px]

                        px-5
                        sm:px-8
                        lg:px-12

                        pt-[clamp(2rem,5svh,4rem)]
                        pb-6

                        transition-opacity
                        duration-300
                        ease-out

                        ${
                            showContent
                                ? "opacity-100 delay-200"
                                : "pointer-events-none opacity-0 delay-0"
                        }
                    `}
                >
                    {children}
                </div>
            </div>
        </article>
    );
}