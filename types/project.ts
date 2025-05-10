import { StaticImageData } from "next/image";

export type Project = {
    id: number;
    title: string;
    description?:string;
    img: StaticImageData
}