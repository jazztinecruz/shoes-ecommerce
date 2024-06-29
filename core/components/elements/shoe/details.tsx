"use client";

import type get from "@core/libraries/get";
import type { SIZES } from "@core/types/data";
import RichTextEditor from "../fields/rich-text-editor";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  shoe: Awaited<ReturnType<typeof get.shoes.single>>["shoe"];
};

interface ItemValue {
  id: string;
  title: string;
  price: number;
  size: SIZES[keyof SIZES];
  color: string;
  quantity: number;
}

const ShoeDetails = ({ shoe }: Props) => {
  const { handleSubmit, setValue, watch } = useForm<ItemValue>();
  const [quantity, setQuantity] = useState(0);

  if (!shoe) return null;

  const onSubmit: SubmitHandler<ItemValue> = (data) => {
    console.log(data);
  };

  // Watch for changes in quantity, size, and color
  const selectedSize = watch("size");
  const selectedColor = watch("color");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium">{shoe.title}</h1>
        <span className="text-3xl font-bold">${shoe.price}.00</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="submit"
          className="rounded-md bg-black px-6 py-2 text-sm font-semibold text-white">
          Buy Now
        </button>
        <button
          type="submit"
          className="rounded-md border border-black px-6 py-2 text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-sm">Quantity</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setQuantity((prev) => {
                const newQuantity = Math.max(prev - 1, 0);
                setValue("quantity", newQuantity);
                return newQuantity;
              })
            }
            disabled={quantity <= 0}
            className="rounded border p-2 text-sm hover:bg-slate-100">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          {quantity}
          <button
            type="button"
            onClick={() =>
              setQuantity((prev) => {
                const newQuantity = prev + 1;
                setValue("quantity", newQuantity);
                return newQuantity;
              })
            }
            className="rounded border p-2 text-sm hover:bg-slate-100">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* sizes */}
      <div className="space-y-2">
        <p className="text-sm">Sizes</p>
        <div className="flex flex-grow items-center gap-2">
          {shoe.sizes.map((size) => (
            <button
              key={size.name}
              type="button"
              onClick={() => setValue("size", size.name as keyof SIZES)}
              className={`rounded border p-2 text-sm ${selectedSize === (size.name as keyof SIZES) ? "bg-slate-300" : "hover:bg-slate-100"}`}>
              {size.name}
            </button>
          ))}
        </div>
      </div>

      {/* colors */}
      <div className="flex items-center gap-3">
        <p className="text-sm">Colors</p>
        <div className="flex flex-grow items-center gap-2">
          {shoe.colors.map((color) => (
            <button
              key={color.hex}
              type="button"
              onClick={() => setValue("color", color.hex)}
              className={`rounded border p-2 ${selectedColor === color.hex ? "bg-slate-300" : "hover:bg-slate-100"}`}>
              <div
                className={`h-4 w-4 rounded-full`}
                style={{ backgroundColor: color.hex }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* paragraph details */}
      <RichTextEditor
        content={shoe.description?.html || ""}
        isEditable={false}
      />
    </form>
  );
};

export default ShoeDetails;
