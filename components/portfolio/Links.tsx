import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Links() {
    const linkClass = `
        flex
        items-center
        justify-center

        w-8
        h-8

        rotate-[11deg]

        text-[#57062F]
        text-2xl

        transition-transform
        duration-200
        hover:scale-105

        md:w-10
        md:h-10
        md:text-4xl
    `;

    return (
        <div
            className="
                fixed
                top-5
                right-5
                z-1

                flex
                items-center
                justify-center
                gap-1

                w-30
                h-15

                rounded-[50%]

                border-[3px]
                border-dashed
                border-[#57062F]

                bg-[#FFEBAE]

                rotate-11

                md:top-7
                md:right-8
                md:w-52
                md:h-24
                md:gap-6
            "
        >
            <a
                href="https://github.com/thairruh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={linkClass}
            >
                <FaGithub />
            </a>

            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className={linkClass}
            >
                <HiOutlineDocumentText />
            </a>

            <a
                href="https://linkedin.com/in/thaira-choudhury"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={linkClass}
            >
                <FaLinkedinIn />
            </a>
        </div>
    );
}