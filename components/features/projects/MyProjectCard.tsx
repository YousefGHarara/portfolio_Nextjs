import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectType = {
    project : Project
}

const MyProjectCart = ({project} : ProjectType) => {
    return (
        <Link href={`view/${project.id}`} className='cursor-pointer flex sm:justify-between py-3 px-6 w-full rounded-lg border border-gray-200 shadow flex-col justify-center items-center gap-8 sm:flex-row sm:gap-0'>
            <h2>{project.title}</h2>
            <div className='relative w-64 h-32 rounded-lg'>
                <Image 
                    src={project.img}
                    fill
                    alt='project'
                    className='object-cover rounded-lg'
                />
            </div>


            
        </Link>
    );
}

export default MyProjectCart;
