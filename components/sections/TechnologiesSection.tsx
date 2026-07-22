import { technologies } from "../../data/technologies";

export default function TechnologiesSection() {
    return (
        <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold md:text-6xl">
            Technologies
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((category) => (
            <article
                key={category.title}
                className="rounded-3xl bg-white/15 p-6"
            >
                <h3 className="text-2xl font-semibold">
                {category.title}
                </h3>

                <ul className="mt-4 space-y-2">
                {category.tools.map((tool) => (
                    <li key={tool.name}>{tool.name}</li>
                ))}
                </ul>
            </article>
            ))}
        </div>
        </div>
    );
}