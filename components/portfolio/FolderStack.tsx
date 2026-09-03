"use client";

import { useRef, useState } from "react";

import Folder, { type FolderId } from "./Folder";

import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import TechnologiesSection from "../sections/TechnologiesSection";

const ANIMATION_DURATION = 500;

const folderOrder: FolderId[] = [
    "about",
    "projects",
    "technologies",
    "experience",
];

export default function FolderStack() {
    const [activeFolder, setActiveFolder] =
        useState<FolderId | null>(null);

    const [isClosing, setIsClosing] = useState(false);

    const closeTimer =
        useRef<ReturnType<typeof setTimeout> | null>(null);

    const activeIndex =
        activeFolder === null
            ? -1
            : folderOrder.indexOf(activeFolder);

    function handleToggle(id: FolderId) {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }

        // Clicking the currently active folder closes the stack
        if (activeFolder === id) {
            setIsClosing(true);

            closeTimer.current = setTimeout(() => {
                setActiveFolder(null);
                setIsClosing(false);
                closeTimer.current = null;
            }, ANIMATION_DURATION);

            return;
        }

        // Open/switch to another folder
        setIsClosing(false);
        setActiveFolder(id);
    }

    return (
        <section
            className="
                absolute inset-0
                overflow-hidden
            "
        >
            <Folder
                id="about"
                index={0}
                title="About"
                color="#4A1F00"
                expanded={
                    !isClosing &&
                    activeIndex >= 0
                }
                active={
                    activeFolder === "about"
                }
                showContent={
                    !isClosing &&
                    activeFolder === "about"
                }
                onToggle={handleToggle}
                tabPosition="
                    left-[15%]
                    md:left-[25%]
                "
            >
                <AboutSection />
            </Folder>

            <Folder
                id="projects"
                index={1}
                title="Projects"
                color="#818249"
                expanded={
                    !isClosing &&
                    activeIndex >= 1
                }
                active={
                    activeFolder === "projects"
                }
                showContent={
                    !isClosing &&
                    activeFolder === "projects"
                }
                onToggle={handleToggle}
                tabPosition="
                    right-[10%]
                    md:right-[20%]
                "
            >
                <ProjectsSection />
            </Folder>

            <Folder
                id="technologies"
                index={2}
                title="Technologies"
                color="#D18E97"
                expanded={
                    !isClosing &&
                    activeIndex >= 2
                }
                active={
                    activeFolder === "technologies"
                }
                showContent={
                    !isClosing &&
                    activeFolder === "technologies"
                }
                onToggle={handleToggle}
                tabPosition="
                    left-[8%]
                    md:left-[7%]
                "
            >
                <TechnologiesSection />
            </Folder>

            <Folder
                id="experience"
                index={3}
                title="Experience"
                color="#57062F"
                expanded={
                    !isClosing &&
                    activeIndex >= 3
                }
                active={
                    activeFolder === "experience"
                }
                showContent={
                    !isClosing &&
                    activeFolder === "experience"
                }
                onToggle={handleToggle}
                tabPosition="
                    right-[2%]
                "
            >
                <ExperienceSection />
            </Folder>
        </section>
    );
}