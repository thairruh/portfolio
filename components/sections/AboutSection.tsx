export default function AboutSection() {
    return (
        <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold md:text-6xl">
            About Me
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="min-h-72 rounded-3xl bg-white/15">
            {/* Add photo or illustration later */}
            </div>

            <div>
            <p className="text-lg leading-8">
                I’m Thaira, a computer science student and
                developer interested in combining technology,
                design, and creativity.
            </p>
            </div>
        </div>
        </div>
    );
}