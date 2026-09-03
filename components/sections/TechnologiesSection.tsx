import { technologies } from "../../data/technologies";

export default function TechnologiesSection() {
    return (
        <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
                Technologies
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:gap-6 lg:grid-cols-3">
                {technologies.map((category) => (
                    <article
                        key={category.title}
                        className="min-w-0 rounded-2xl bg-white/15 p-5 sm:rounded-3xl sm:p-6"
                    >
                        <h3 className="break-words text-xl font-semibold sm:text-2xl">
                            {category.title}
                        </h3>

                        <ul className="mt-4 space-y-2 text-sm sm:text-base">
                            {category.tools.map((tool) => (
                                <li key={tool.name}>
                                    {tool.name}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    );
}