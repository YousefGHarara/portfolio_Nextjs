import React from 'react';
import InputFeild from '../common/InputFeild';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const Contact = () => {
    return (
        <section className="w-full py-[3rem]">
            <form action="" className="flex flex-col gap-4 max-w-xl rounded-lg border border-zinc-300 p-8 mx-auto dark:border-neutral-700 dark:bg-input/30">
                <h2>Contact Me</h2>
                <div className=" flex flex-wrap justify-between gap-4">
                    <div className=' min-w-fit flex-[1]'>
                        <InputFeild required type="text" label="Username" />

                    </div>
                    <div className='min-w-fit flex-[1]'>

                        <InputFeild required type="email" label="Email" />
                    </div>
                </div>
                <Textarea minLength={10} className="h-36" maxLength={200} required placeholder="Type your message here." />
                <Button className="" size={"lg"}>Send</Button>
            </form>
        </section>
    );
}

export default Contact;
