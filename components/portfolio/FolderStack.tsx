"use client";

import { useEffect, useRef, useState } from "react";

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
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

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

        // Clicking active folder closes it
        if (activeFolder === id) {
            closeFolder();
            return;
        }

        // Open/switch folders
        setIsClosing(false);
        setActiveFolder(id);
    }

    function closeFolder() {
        if (activeFolder === null || isClosing) return;

        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }

        setIsClosing(true);

        closeTimer.current = setTimeout(() => {
            setActiveFolder(null);
            setIsClosing(false);
            closeTimer.current = null;
        }, ANIMATION_DURATION);
    }

    return (
        <section
            className={`
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
                z-10

                transition-[opacity,translate]
                duration-700
                delay-100
                ease-out

                motion-reduce:translate-y-0
                motion-reduce:opacity-100
                motion-reduce:transition-none

                ${
                    visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-20 opacity-0"
                }
            `}
        >
            {/* Click-outside backdrop */}
            {activeFolder !== null && (
                <button
                    type="button"
                    aria-label="Close folder"
                    onClick={closeFolder}
                    className="
                        pointer-events-auto
                        absolute
                        inset-0
                        z-0
                        cursor-default
                    "
                />
            )}

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