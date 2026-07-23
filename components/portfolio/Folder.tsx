import type { ReactNode } from "react";

export type FolderId =
    | "about"
    | "projects"
    | "technologies"
    | "experience";

type FolderProps = {
    id: FolderId;
    title: string;
    color: string;
    isOpen: boolean;
    onToggle: (id: FolderId) => void;
    children: ReactNode;
    tabPosition: string;
};

export default function Folder({
    id,
    title,
    color,
    isOpen,
    onToggle,
    children,
    tabPosition,
}: FolderProps) {
    return (
        <article
            className={`
                relative flex min-h-14 basis-0 flex-col
                shadow-[0_-10px_18px_-8px_rgba(0,0,0,0.35)]
                transition-[flex-grow] duration-500 ease-in-out
                ${isOpen ? "grow" : "grow-0"}
            `}
            style={{ backgroundColor: color }}
        >

            {/* Paper texture */}
            <div
                aria-hidden="true"
                className="
                pointer-events-none
                absolute inset-0 z-0
                opacity-[0.12]
                mix-blend-multiply
                "
                style={{
                backgroundImage: "url('paper-noise.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "180px 180px",
                }}
            />

        <button
            type="button"
            onClick={() => onToggle(id)}
            aria-expanded={isOpen}
            className="relative z-10 h-16 w-full text-white"
        >
            <span
            className={`
                absolute top-0
                h-22 w-80
                -translate-y-22
                ${tabPosition}
            `}
            >
            {/* Tab background */}
            <span
                className="
                absolute inset-0
                origin-bottom
                rounded-t-2xl
                transform-[perspective(12rem)_rotateX(12deg)]
                shadow-[0_-8px_12px_-2px_rgba(0,0,0,0.25)]
                "
                style={{ backgroundColor: color }}
            />

            {/* Tab text */}
            <span className="relative z-10 flex h-full items-center justify-center text-4xl">
                {title}
            </span>
            </span>
        </button>

        <div
            className={`
            min-h-0 overflow-y-auto
            transition-opacity duration-300
            ${
                isOpen
                ? "flex-1 opacity-100"
                : "h-0 opacity-0 pointer-events-none"
            }
            `}
        >
            <div className="px-6 py-10">
            {children}
            </div>
        </div>
        </article>
    );
}