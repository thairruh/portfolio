import { experiences } from "../../data/experience";

export default function ExperienceSection() {
    return (
        <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
                Experience
            </h2>

            <div className="mt-6 space-y-4 md:mt-10 md:space-y-6">
                {experiences.map((experience) => (
                    <article
                        key={`${experience.organization}-${experience.role}`}
                        className="w-full rounded-2xl bg-white/15 p-5 sm:rounded-3xl sm:p-6"
                    >
                        <p className="text-xs uppercase tracking-wider sm:text-sm">
                            {experience.dates}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                            {experience.role}
                        </h3>

                        <p className="mt-1 text-base sm:text-lg">
                            {experience.organization}
                        </p>

                        <p className="mt-4 break-words text-sm leading-6 sm:text-base sm:leading-7">
                            {experience.description}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}