'use client'

import Image from "next/image";

type FullscreenGifProps = {
    src: string
    alt: string
}

export default function FullscreenGif({ src, alt = "Loading..." }: FullscreenGifProps) {
  const basePath = process.env.NODE_ENV === "production" ? "/me" : "";

    return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
      
      <Image
        src={`${basePath}${src}`}
        alt={alt}
        fill
        priority
        unoptimized
        className="object-contain "
      />

    </div>
  );
}