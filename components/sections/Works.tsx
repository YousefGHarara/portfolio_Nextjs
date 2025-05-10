import React from 'react';
import { MyCarousel } from '../features/projects/MyCarousel';

const Works = () => {
    return (
        <div className="relative min-h-screen bg-amber-50 w-full dark:bg-zinc-900 flex justify-center ">
        <div className="dark:bg-zinc-800 dark:border-zinc-600 flex flex-col gap-8 lg:absolute min-w-xs bg-white shadow-xl rounded-md border border-zinc-300 px-[2rem] py-[3rem] right-[5%]
          -top-20 lg:right-[20%] left-[5%]
        ">
          <h1 className="text-2xl">Works</h1>

            <article className="px-[10%]">
            <MyCarousel />
            </article>

        </div>
      </div>
    );
}

export default Works;
