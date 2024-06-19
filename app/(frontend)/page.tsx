import get from "@core/libraries/get";

const Page: Page = async () => {
  const { shoes } = await get.items.multiple();
  console.log(shoes)
  return <div>Page</div>;
};

export default Page;
