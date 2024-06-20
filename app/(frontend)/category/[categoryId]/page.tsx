import ShoeCard from "@core/components/elements/shoe/card";
import get from "@core/libraries/get";

type Props = {
  params: {
    categoryId: string;
  };
};

const Page = async ({ params: { categoryId } }: Props) => {
  const { category } = await get.categories.single(categoryId);

  if (!category) return null;

  return (
    <section className="my-10">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {category?.shoes.map((shoe: any) => (
          <li key={shoe.id}>
            <ShoeCard shoe={shoe} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Page;
