import { cn } from '@/lib/utils';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error?: string;
    className?: string;
}
    
const InputFeild = (
    {label, error, className, ...props} : InputProps,
    ref: React.Ref<HTMLInputElement>
) => {
    return (
        <div className='flex flex-col gap-1'>
            {label && <label className='pl-2 text-sm font-medium text-zinc-700 dark:text-stone-300'>{label}</label>}

            <input 
                ref={ref}
                className={cn(
                    "pl-3 py-1 outline-offset-2 focus:outline-2 rounded-md border border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 dark:focus:outline-neutral-500",
                    error && "border border-red-200 outline-red-400 ",
                    className,
                    )} 
                    {...props}
                    />
            {error && <span className='text-sm text-red-500'>{error}</span>}
        </div>
    );
}

export default  React.forwardRef(InputFeild);
