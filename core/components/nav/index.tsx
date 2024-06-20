"use client";

import { useSuspenseQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@hygraph/queries/categories";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

const NavigationCategories = () => {
  const { data } = useSuspenseQuery(GET_CATEGORIES);
  const segments = useSelectedLayoutSegments();

  const selectedCategory = useSelectedLayoutSegments()[2];
  const isAllActive = segments.length === 1;
  const categories = data.categories;

  const getClassName = (isActive: boolean) => {
    let baseClass =
      "text-base transition-all duration-100 hover:font-medium cursor-pointer whitespace-nowrap";
    return isActive ? `${baseClass} font-bold` : baseClass;
  };

  return (
    <ul className="max-w-wrapper flex items-center justify-between gap-4">
      <Link href="/">
        <li className={getClassName(isAllActive)}>All</li>
      </Link>
      {categories.map((category) => {
        const isActive = selectedCategory === category.id;
        return (
          <Link key={category.id} href={`/category/${category.id}`}>
            <li key={category.id} className={getClassName(isActive)}>
              {category.label}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavigationCategories;
