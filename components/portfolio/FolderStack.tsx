"use client";

import { useRef, useState } from "react";

import Folder, { type FolderId } from "./Folder";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import TechnologiesSection from "../sections/TechnologiesSection";

const ANIMATION_DURATION = 500;

export default function FolderStack() {
    const [activeFolder, setActiveFolder] =
        useState<FolderId | null>(null);

    const [isExpanded, setIsExpanded] = useState(false);

    const closeTimer =
        useRef<ReturnType<typeof setTimeout> | null>(null);

    function handleToggle(id: FolderId) {
        if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        }

        // close the currently open folder
        if (activeFolder === id) {
        setIsExpanded(false);

        closeTimer.current = setTimeout(() => {
            setActiveFolder(null);
        }, ANIMATION_DURATION);

        return;
        }

        // open a folder or switch to another folder
        setActiveFolder(id);
        setIsExpanded(true);
    }

    return (
        <section
        className={`
            absolute inset-x-0 bottom-0
            flex flex-col overflow-hidden pt-15
            transition-[height] duration-500 ease-in-out
            ${isExpanded ? "h-[97svh]" : "h-79"}
        `}
        >
        <Folder
            id="about"
            title="About"
            color="#4A1F00"
            isOpen={activeFolder === "about"}
            onToggle={handleToggle}
            tabPosition="left-[30%]"
        >
            <AboutSection />
        </Folder>

        <Folder
            id="projects"
            title="Projects"
            color="#818249"
            isOpen={activeFolder === "projects"}
            onToggle={handleToggle}
            tabPosition="left-[65%]"
        >
            <ProjectsSection />
        </Folder>

        <Folder
            id="technologies"
            title="Technologies"
            color="#D18E97"
            isOpen={activeFolder === "technologies"}
            onToggle={handleToggle}
            tabPosition="left-[10%]"
        >
            <TechnologiesSection />
        </Folder>

        <Folder
            id="experience"
            title="Experience"
            color="#57062F"
            isOpen={activeFolder === "experience"}
            onToggle={handleToggle}
            tabPosition="left-[80%]"
        >
            <ExperienceSection />
        </Folder>
        </section>
    );
}