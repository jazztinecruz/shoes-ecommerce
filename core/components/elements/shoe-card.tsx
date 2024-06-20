import type get from "@core/libraries/get";
import Image from "next/image";
import Link from "next/link";

type Props = {
  shoe: Awaited<ReturnType<typeof get.shoes.single>>["shoe"];
};

const ShoeCard = ({ shoe }: Props) => {
  if (!shoe) return null;

  return (
    <Link href={`/shoes/${shoe.id}`}>
      <div className="relative cursor-pointer space-y-3">
        {/* images */}
        <div className="relative aspect-square rounded-md bg-slate-300">
          <Image
            src={shoe.images[0].url}
            alt={shoe.title!}
            width={shoe.images[0].width || 250}
            height={shoe.images[0].height || 250}
            className="h-full w-full rounded-md"
          />
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
    </Link>
  );
};

export default ShoeCard;
