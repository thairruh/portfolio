import { projects } from "../../data/projects";

export default function ProjectsSection() {
    return (
        <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
                Projects
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="min-w-0 rounded-2xl bg-white/15 p-5 sm:rounded-3xl sm:p-6"
                    >
                        <h3 className="text-xl font-semibold sm:text-2xl">
                            {project.title}
                        </h3>

                        <p className="mt-3 break-words text-sm leading-6 sm:text-base sm:leading-7">
                            {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full bg-white/20 px-3 py-1 text-xs sm:text-sm"
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