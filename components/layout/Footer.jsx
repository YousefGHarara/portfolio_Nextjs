
import { Facebook, Linkedin, Twitch, Twitter } from "lucide-react";
import Link from "next/link";
import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-8 w-full py-[3rem] bg-stone-800">
        <div className="w-fit mx-auto flex gap-8 ">
          <Link href={"#"} className="p-2 rounded-full bg-white dark:text-black"><Facebook /></Link>
          <Link href={"#"} className="p-2 rounded-full bg-white dark:text-black"><Linkedin /></Link>
          <Link href={"#"} className="p-2 rounded-full bg-white dark:text-black"><Twitch /></Link>
          <Link href={"#"} className="p-2 rounded-full bg-white dark:text-black"><Twitter /></Link>
        </div>
        <p className="text-stone-100">Terms all served | CopyRight &copy; 2020 | {new Date().getFullYear()}</p>
      </footer>
    );
}

export default Footer;
