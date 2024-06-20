"use client";

import { Dialog, DialogPanel } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[999]">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 p-4 backdrop-blur-md">
        <DialogPanel className="max-h-screen max-w-5xl overflow-y-scroll border bg-white p-6 md:p-12">
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
