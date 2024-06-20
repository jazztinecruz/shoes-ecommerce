import ShoeCard from "@core/components/elements/shoe/card";
import get from "@core/libraries/get";

const Page: Page = async () => {
  const { shoes } = await get.shoes.multiple();

  if (!shoes) return null;

  return (
    <section className="my-10">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {shoes.map((shoe) => (
          <li key={shoe.id}>
            <ShoeCard shoe={shoe} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Page;
