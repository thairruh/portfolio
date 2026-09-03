import Hero from "../components/portfolio/Hero";
import FolderStack from "../components/portfolio/FolderStack";

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
            <Hero />
            <FolderStack />
        </main>
    );
}