"use client";

import { useRouter } from "next/navigation";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Modal from "@core/components/elements/modal";
import ShoeImages from "@core/components/elements/shoe/images";
import ShoeDetails from "@core/components/elements/shoe/details";
import { useSuspenseQuery } from "@apollo/client";
import { GET_SHOE } from "@hygraph/queries";

type Props = {
  params: {
    categoryId: string;
    shoeId: string;
  };
};

const InterceptorShoeModal = ({ params }: Props) => {
  const { shoeId } = params;
  const { data } = useSuspenseQuery(GET_SHOE, { variables: { id: shoeId } });
  const router = useRouter();

  const shoe = data?.shoe;
  const handleBack = () => {
    router.back();
  };

  if (!shoe) return null;

  return (
    <Modal isOpen={true} onClose={handleBack}>
      <div className="grid h-full gap-10 lg:grid-cols-2">
        <ShoeImages shoe={shoe} />
        <ShoeDetails shoe={shoe} />
      </div>
    </Modal>
  );
};

export default InterceptorShoeModal;
