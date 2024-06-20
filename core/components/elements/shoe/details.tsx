import type get from "@core/libraries/get";

type Props = {
  shoe: Awaited<ReturnType<typeof get.shoes.single>>["shoe"];
};

const ShoeDetails = ({ shoe }: Props) => {
  if (!shoe) return null;

  return (
    <div className="space-y-5 lg:space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">{shoe.title}</h1>
        <span className="text-2xl font-bold">${shoe.price}.00</span>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-md bg-black px-6 py-2 text-sm font-semibold text-white">
          Buy Now
        </button>
        <button className="rounded-md border border-black px-6 py-2 text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </div>

      <div className="space-y-2">
        <p className="font-semibold">Sizes</p>
        <div className="flex flex-grow items-center gap-2">
          {shoe.sizes.map((size) => (
            <button className="rounded border p-2.5 shadow hover:bg-slate-100">
              {size.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-semibold">Colors</p>
        <div className="flex flex-grow items-center gap-2">
          {shoe.colors.map((color) => {
            return (
              <button className="rounded border p-2">
                <div className={`h-8 w-8 rounded-full bg-black`} />
              </button>
            );
          })}
        </div>
      </div>

      <p className="leading-7">{shoe.description?.markdown}</p>
    </div>
  );
};

export default ShoeDetails;