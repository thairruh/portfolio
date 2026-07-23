export default function Hero() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center px-6 ">
        <div className="relative w-[min(80vw,800px)]">
            <img
                src="/stamp.png"
                alt=""
                className="h-auto w-full"
            />

            <div
                className="
                absolute inset-0
                flex items-center justify-center
                px-[15%] pb-[6%]
                text-center
                "
            >
                <h1
                className="
                    text-5xl  leading-tight
                    text-[#4A102A]
                    sm:text-6xl
                    md:text-7xl
                    rotate-[-8.25deg]
                "
                >
                Hello! I’m
                <br />
                Thaira :)
                </h1>
            </div>
            </div>
        </section>
    );
}