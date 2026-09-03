import Hero from "../components/portfolio/Hero";
import FolderStack from "../components/portfolio/FolderStack";
import Links from "../components/portfolio/Links";

export default function Home() {
    return (
        <main
            className="
                relative
                grid-paper
                h-svh
                overflow-hidden
            "
        >
            <Links />
            <Hero />
            <FolderStack />
        </main>
    );
}