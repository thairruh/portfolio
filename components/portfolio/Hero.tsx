"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <section
            className="
                flex
                h-[calc(100svh-8rem)]
                items-center
                justify-center
                overflow-visible
                px-0
                md:h-auto
                md:min-h-[clamp(26rem,58svh,38rem)]
                md:-translate-y-8
                lg:-translate-y-12
            "
        >
            <div
                className={`
                    short-laptop-hero
                    relative
                    w-[120vw]
                    max-w-none
                    shrink-0

                    transition-[opacity,translate]
                    duration-700
                    ease-out

                    motion-reduce:translate-y-0
                    motion-reduce:opacity-100
                    motion-reduce:transition-none

                    md:w-[min(72vw,800px)]
                    md:max-w-200

                    ${
                        visible
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-16 opacity-0"
                    }
                `}
            >
                <img
                    src="/stamp.png"
                    alt=""
                    className="block h-auto w-full"
                />

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        px-[15%]
                        pb-[6%]
                        text-center
                    "
                >
                    <h1
                        className="
                            rotate-[-8.25deg]
                            text-[clamp(2.6rem,12vw,4.25rem)]
                            leading-tight
                            text-[#4A102A]
                            md:text-7xl
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