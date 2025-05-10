import { GalleryHorizontal, HomeIcon, Moon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";

const Hero = () => {
    return (
    <main className="relative w-full min-h-screen flex flex-col gap-12 items-center lg:block">
      <div className="lg:absolute lg:right-[5%] lg:w-72 lg:min-h-screen w-full mb-24 lg:mb-0">
        <div className="lg:absolute w-full bg-stone-900 h-36 lg:min-h-screen flex justify-center ">

          <div className="absolute lg:-left-28 w-56 h-56 rounded-full border-8 border-white dark:border-stone-950 mt-12 overflow-hidden">
            <Image
              src={"/images/profile.jpg"}
              fill
              alt="profile"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <nav className="p-[2rem]">
        <ul className="inline-flex gap-5 items-center  ">
          {Array.of("Home", "About", "Works", "Contact").map((link) => {
            return (
              <Link className="text-lg" href={"#"} key={link}>{link}</Link>
            )
          })}
          <ModeToggle />
        </ul>
      </nav>

      <div className="lg:absolute lg:left-[10%] text-center md:text-start lg:top-[30%] flex flex-col gap-4 max-w-lg">
        <p className="relative text-xl w-fit">Hello 
          <span className="absolute left-[110%] top-[50%] w-xs h-1 bg-zinc-700 rounded-full"></span>
        </p>

        <h1 className="text-4xl font-semibold ">My Name Yousef Harara </h1>
        <p className="text-2xl">A Front-end Developer</p>

      </div>

      <article className="absolute dark:bg-zinc-800 dark:border-zinc-600 bg-white border border-zinc-300 top-[50%] translate-y-[-50%] right-[92%] rounded-xl lg:block hidden">
        <ul className="flex flex-col gap-7 p-2">
          <li className="p-3 rounded-full hover:shadow-xl shadow hover:bg-white dark:hover:bg-zinc-700 cursor-pointer"><HomeIcon /></li>
          <li className="p-3 rounded-full hover:shadow-xl shadow hover:bg-white dark:hover:bg-zinc-700 cursor-pointer"><Moon /></li>
          <li className="p-3 rounded-full hover:shadow-xl shadow hover:bg-white dark:hover:bg-zinc-700 cursor-pointer"><Settings /></li>
          <li className="p-3 rounded-full hover:shadow-xl shadow hover:bg-white dark:hover:bg-zinc-700 cursor-pointer"><GalleryHorizontal /></li>
        </ul>
      </article>

      <div className="lg:absolute p-[1rem] flex flex-col gap-4 max-w-lg  lg:right-[10%] lg:top-[50%] bg-white shadow-lg border border-zinc-300 rounded-xl dark:bg-zinc-800 dark:border-zinc-600 ">
        <h2 className="text-xl">My Bio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto ullam saepe dolor consectetur? Accusantium esse harum itaque sed, id quam quae.</p>
      </div>

      <div className=""></div>

    </main>
    );
}

export default Hero;
