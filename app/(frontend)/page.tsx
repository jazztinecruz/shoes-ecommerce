"use client";

import { useMutation } from "@apollo/client";
import { UPDATE_SINGLE_ITEM } from "@core/mutations";

const Page: Page = () => {
  const [mutate] = useMutation(UPDATE_SINGLE_ITEM, {
    variables: {
      id: "clxkbrzln01s307lcbag883ei",
      data: {
        title: "Nike Zoom 105",
      },
    },
  });

  return (
    <div>
      Page
      <button onClick={() => mutate()}>Update</button>
    </div>
  );
};

export default Page;
