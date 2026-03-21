'use client'

import Image from "next/image";

type FullscreenGifProps = {
    src: string
    alt: string
}

export default function FullscreenGif({ src, alt = "Loading..." }: FullscreenGifProps) {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
      
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-contain "
      />

    </div>
  );
}