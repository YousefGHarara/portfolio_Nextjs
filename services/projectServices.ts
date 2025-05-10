import { projects } from "@/constant/projects";
import { Project } from "@/types/project";

export const getProjects = () : Project[] => (
    projects
)

export const getProjectById = (id: number) : Project | undefined => (
    projects
    .find((project) => project.id === id)
);