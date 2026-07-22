import { experiences } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold md:text-6xl">
        Experience
      </h2>

      <div className="mt-10 space-y-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.organization}-${experience.role}`}
            className="rounded-3xl bg-white/15 p-6"
          >
            <p className="text-sm uppercase tracking-wider">
              {experience.dates}
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              {experience.role}
            </h3>

            <p className="mt-1 text-lg">
              {experience.organization}
            </p>

            <p className="mt-4 leading-7">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}