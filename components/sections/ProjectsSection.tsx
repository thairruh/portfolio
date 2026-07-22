import { projects } from "../../data/projects";

export default function ProjectsSection() {
    return (
        <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold md:text-6xl">
            Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
            <article
                key={project.title}
                className="rounded-3xl bg-white/15 p-6"
            >
                <h3 className="text-2xl font-semibold">
                {project.title}
                </h3>

                <p className="mt-3 leading-7">
                {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                    key={technology}
                    className="rounded-full bg-white/20 px-3 py-1 text-sm"
                    >
                    {technology}
                    </span>
                ))}
                </div>
            </article>
            ))}
        </div>
        </div>
    );
}