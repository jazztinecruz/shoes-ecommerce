import get from "@core/libraries/get";

const Page: Page = async () => {
  const { category } = await get.categories.single("clxmky91v24kh07lc81jy8lib");
  console.log(category);
  return <div>Page</div>;
};

export default Page;
