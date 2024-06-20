"use client";

import get from "@core/libraries/get";
import Image from "next/image";
import { useState } from "react";

type Props = {
  shoe: Awaited<ReturnType<typeof get.shoes.single>>["shoe"];
};

const ShoeImages = ({ shoe }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!shoe) return null;

  return (
    <div className="flex h-full flex-col gap-6 md:flex-row lg:flex-col">
      <div className="relative aspect-square rounded-md bg-slate-300 shadow">
        <Image
          src={shoe.images[currentIndex].url}
          alt={shoe.title!}
          width={shoe.images[currentIndex].width || 250}
          height={shoe.images[currentIndex].height || 250}
          className="h-full w-full rounded-md"
        />
      </div>

      <div className="flex flex-row items-center gap-3 md:flex-col lg:flex-row lg:justify-between">
        {shoe.images.map((image, index) => (
          <button
            key={image.url}
            onClick={() => setCurrentIndex(index)}
            className={`${index !== currentIndex ? "brightness-75" : "brightness-105"} relative h-24 w-24 cursor-pointer rounded-md bg-slate-300 lg:aspect-square lg:h-full lg:w-full`}>
            <Image
              src={image.url}
              alt={shoe.title!}
              fill
              className="h-full w-full rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShoeImages;
