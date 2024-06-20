"use client";

import type get from "@core/libraries/get";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  shoe: Awaited<ReturnType<typeof get.shoes.single>>["shoe"];
};

const ShoeCard = ({ shoe }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (shoe?.images.length) {
      if (currentImageIndex === shoe.images.length - 1) {
        return setCurrentImageIndex(0);
      }
      setCurrentImageIndex((prev) => prev + 1);
    }
    return null;
  };

  const handlePrev = () => {
    if (shoe?.images.length) {
      if (currentImageIndex === 0) {
        return setCurrentImageIndex(shoe.images.length - 1);
      }
      setCurrentImageIndex((prev) => prev - 1);
    }
    return null;
  };

  if (!shoe) return null;

  return (
    <div className="cursor-pointer space-y-3">
      {/* images */}
      <div className="relative aspect-square rounded-md bg-slate-300">
        <Image
          src={shoe.images[currentImageIndex].url}
          alt={shoe.title!}
          width={shoe.images[currentImageIndex].width || 250}
          height={shoe.images[currentImageIndex].height || 250}
          className="h-full w-full rounded-md"
        />
        <button
          onClick={handleNext}
          className="absolute right-2 top-2/4 z-10 -translate-y-2/4 rounded-full bg-slate-200 p-2">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
        <button
          onClick={handlePrev}
          className="absolute left-2 top-2/4 z-10 -translate-y-2/4 rounded-full bg-slate-200 p-2">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
      </div>
      {/* details */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between">
          <h3 className="text-lg font-semibold lg:text-xl">{shoe.title}</h3>
          <span className="font-semibold">${shoe.price}.00</span>
        </div>
        <button className="rounded-full bg-black px-3 py-2 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoeCard;
