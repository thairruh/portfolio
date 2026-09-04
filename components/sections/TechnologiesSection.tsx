import { technologies } from "@/data/technologies";

const iconMap: Record<string, string> = {
    Python: "/tech/python.svg",
    Java: "/tech/java.svg",
    C: "/tech/c.svg",
    JavaScript: "/tech/javascript.svg",
    HTML: "/tech/html.svg",
    CSS: "/tech/css.svg",
    Typescript: "/tech/typescript.svg",
    SQL: "/tech/sql.svg",
    "C++": "/tech/cpp.svg",

    React: "/tech/react.svg",
    "Next.js": "/tech/nextjs.svg",
    "Tailwind CSS": "/tech/tailwind.svg",
    "Node.js": "/tech/nodejs.svg",
    Vite: "/tech/vite.svg",
    "React Native": "/tech/react.svg",
    Flask: "/tech/flask.svg",
    "Three.js": "/tech/threejs.svg",
    "Phaser.js": "/tech/phaser.svg",

    Git: "/tech/git.svg",
    GitHub: "/tech/github.svg",
    "VS Code": "/tech/vscode.svg",
    Figma: "/tech/figma.svg",
    Firebase: "/tech/firebase.svg",
    SQLite: "/tech/sqlite.svg",
    Godot: "/tech/godot.svg",
    "Adobe After Effects": "/tech/after-effects.svg",
    "Adobe Premiere Pro": "/tech/premiere-pro.svg",
};

const tapeMap: Record<string, string> = {
    LANGUAGES: "/tape-blue.png",
    "FRAMEWORKS/PACKAGES": "/tape-peach.png",
    TOOLS: "/tape-purple.png",
};

export default function TechnologiesSection() {
    return (
        <section
            className="
                mx-auto
                w-full
                max-w-[1200px]
            "
        >
            <div
                className="
                    grid
                    grid-cols-1
                    gap-12
                    md:grid-cols-2
                    lg:grid-cols-3
                    lg:gap-14
                "
            >
                {technologies.map((group) => (
                    <article
                        key={group.title}
                        className="
                            relative
                            pt-10
                        "
                    >
                        {/* CARD */}
                        <div
                            className="
                                min-h-[330px]
                                rounded-[1.25rem]
                                bg-[#F3EED8]
                                px-6
                                pb-7
                                pt-14
                                shadow-[0_8px_14px_rgba(0,0,0,0.18)]
                            "
                        >
                            {/* ICON GRID */}
                            <div
                                className="
                                    grid
                                    grid-cols-3
                                    place-items-center
                                    gap-x-5
                                    gap-y-7
                                "
                            >
                                {group.tools.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className="
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <img
                                            src={iconMap[tool.name]}
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
                        </div>

                        {/* TAPE */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-0
                                z-10
                                w-[78%]
                                -translate-x-1/2
                            "
                        >
                            <img
                                src={tapeMap[group.title]}
                                alt=""
                                aria-hidden="true"
                                className="
                                    h-auto
                                    w-full
                                "
                            />

                            <h3
                                className="
                                    absolute
                                    inset-0
                                    flex
                                    items-center
                                    justify-center
                                    px-4
                                    text-center
                                    text-xl
                                    md:text-2xl
                                "
                            >
                                {group.title}
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}