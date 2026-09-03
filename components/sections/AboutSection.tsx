export default function AboutSection() {
    return (
        <section
            className="
                mx-auto
                grid
                w-full
                max-w-[1200px]
                grid-cols-1
                items-center
                gap-6

                md:grid-cols-2
                md:gap-14
                lg:gap-20
            "
        >
            {/* LEFT SIDE */}
            <div
                className="
                    relative
                    mx-auto
                    w-[88%]
                    max-w-[430px]

                    sm:w-[80%]
                    sm:max-w-[460px]

                    md:w-full
                    md:max-w-[520px]
                "
            >
                <img
                    src="/polaroids.png"
                    alt="Photos of me and my cats"
                    className="
                        block
                        h-auto
                        w-full

                        md:scale-[1.15]
                        md:-translate-x-4

                        lg:scale-[1.22]
                        lg:-translate-x-6
                    "
                />
            </div>

            {/* RIGHT SIDE */}
            <div
                className="
                    mx-auto
                    w-[92%]
                    max-w-[460px]

                    sm:w-[88%]
                    sm:max-w-[500px]

                    md:w-full
                    md:max-w-[520px]
                "
            >
                <div
                    className="
                        relative
                        bg-[#F6F0DE]

                        px-6
                        py-7

                        shadow-[0_12px_24px_rgba(0,0,0,0.18)]

                        sm:px-8
                        sm:py-9

                        md:px-10
                        md:py-13
                    "
                >
                    <h2
                        className="
                            mb-5
                            text-center
                            text-2xl
                            leading-tight

                            sm:mb-6
                            sm:text-3xl

                            md:mb-4
                            md:text-4xl
                        "
                    >
                        Welcome to my portfolio!
                    </h2>

                    <p
                        className="
                            text-[0.82rem]
                            leading-[1.55]

                            sm:text-[0.9rem]
                            sm:leading-[1.6]

                            md:text-lg
                            md:leading-[1.7]
                        "
                    >
                        I’m Thaira, a Computer Science student at the {" "}
                        <span className="text-[#B8963E]">
                            University of Central Florida
                        </span>{" "} with a minor in Digital Media. I enjoy
                        coding, playing video games, cooking, thrifting, and
                        editing, and I love looking for opportunities to bring
                        my technical and creative interests together!

                        <br />
                        <br />

                        Currently, I work on the websites for {" "}
                        <span className="text-[#A94A5B]">
                            Knights Records
                        </span>,
                        UCF’s student-run record label, and the {" "}
                        <span className="text-[#4F718C]">
                            Society of Asian Scientists & Engineers (SASE)
                        </span>{" "} at UCF.
                    </p>

                    {/* Tape */}
                    <img
                        src="/dot-tape.png"
                        alt=""
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            z-10

                            -right-[9%]
                            -top-[13%]
                            w-[30%]

                            md:-right-[10%]
                            md:-top-[12%]
                            md:w-[30%]
                        "
                    />

                    {/* Exclamation sticker */}
                    <img
                        src="/exclamation.png"
                        alt=""
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            z-10

                            -left-[9%]
                            bottom-[5%]
                            w-[20%]

                            rotate-[-10deg]

                            sm:w-[8%]

                            md:-left-[13%]
                            md:bottom-[6%]
                            md:w-[27%]
                        "
                    />
                </div>
            </div>
        </section>
    );
}