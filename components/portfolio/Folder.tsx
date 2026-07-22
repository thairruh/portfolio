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
                relative flex min-h-14 flex-col
                ${isOpen ? "flex-1" : "flex-none"}
            `}
            style={{ backgroundColor: color }}
        >
        <button
            type="button"
            onClick={() => onToggle(id)}
            aria-expanded={isOpen}
            className="relative z-10 h-16 w-full text-white"
        >
            <span
            className={`
                absolute top-0
                h-30 w-70
                -translate-y-1/2
                ${tabPosition}
            `}
            >
            {/* Tab background */}
            <span
                className="
                absolute inset-0
                origin-bottom
                rounded-t-2xl
                [transform:perspective(12rem)_rotateX(12deg)]
                "
                style={{ backgroundColor: color }}
            />

            {/* Tab text */}
            <span className="relative z-10 flex h-full items-center justify-center">
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