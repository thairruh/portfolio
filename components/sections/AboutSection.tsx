export default function AboutSection() {
    return (
        <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
                About Me
            </h2>

            <div className="mt-6 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-10">
                <div className="min-h-48 rounded-3xl bg-white/15 sm:min-h-60 md:min-h-72">
                    {/* Add photo or illustration later */}
                </div>

                <div className="min-w-0">
                    <p className="break-words text-base leading-7 sm:text-lg sm:leading-8">
                        aouwifhnuaqhnouafvhbouaqwfvhouqwafghvcuajzbvgaow
                    </p>
                </div>
            </div>
        </div>
    );
}