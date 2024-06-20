import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: Props) => {
  return <div>Page {id}</div>;
};

export default Page;
