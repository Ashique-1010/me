'use client'

import { useRouter } from "next/navigation";

export default function  HomePage() {

    const router = useRouter();

    const navigatetoDev = () => {
        router.push("/dev");
    };
    
    return(
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 font-sans dark:bg-black">
      <main className="w-full max-w-2xl text-center sm:text-left" onClick={navigatetoDev}>
        <p 
        className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg"
        >
          I am Ashique
        </p>
      </main>
    </div>
    )
}