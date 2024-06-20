import ShoeDetails from "@core/components/elements/shoe/details";
import ShoeImages from "@core/components/elements/shoe/images";
import get from "@core/libraries/get";

type Props = {
  params: {
    shoeId: string;
  };
};

export const generateMetadata = () => {
  return {
    title: "Shoe Viewer Page",
    description: "Shoe Viewer Page",
  };
};

const Shoe = async ({ params: { shoeId } }: Props) => {
  const { shoe } = await get.shoes.single(shoeId);

  if (!shoe) return null;

  return (
    <div className="grid h-full gap-10 lg:grid-cols-2">
      <ShoeImages shoe={shoe} />
      <ShoeDetails shoe={shoe} />
    </div>
  );
};

export default Shoe;
