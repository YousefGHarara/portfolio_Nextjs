import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import MyCart from "./MyCard"
import { getProjects } from "@/services/projectServices"

export function MyCarousel() {
    return (
        <Carousel className="max-w-xl lg:max-w-3xl" opts={{
            loop: true,
            align: "start"
        }}>
            <CarouselContent className="flex items-center">
                {getProjects().map((project) => (
                    <CarouselItem key={project.id} className="lg:basis-1/2">
                        <div className="p-1">
                            <MyCart project={project}/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
        </Carousel>
    )
}
