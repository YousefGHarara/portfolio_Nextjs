'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import React from 'react';
import { Button } from "../../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Project } from "@/types/project";

type CartProps = {
    project : Project;
}

const MyCart = ({ project  }: CartProps) => {

    const router = useRouter();

    const handleOnClick = () => {
        router.push(`/projects/${project.id}`)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            {/* flex h-20 items-center justify-center p-6 */}
            <CardContent className="">
                {/* <span className="text-4xl font-semibold"> */}
                    <div className="relative w-full h-56">
                    <Image 
                        src={project.img}
                        fill
                        alt="project"
                        className="rounded-lg object-cover"
                        loading="lazy"
                    />
                        
                    </div>
                {/* </span> */}
            </CardContent>
            <CardFooter className="flex gap-[2rem] flex-wrap justify-between">
                <Button className="min-w-fit flex-[1] cursor-pointer relative" onClick={handleOnClick} variant="outline">
                    View
                </Button>
                <Button className="cursor-pointer min-w-fit flex-[1] " >Deploy</Button>
            </CardFooter>
        </Card>
    );
}

export default MyCart;
