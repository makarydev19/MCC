"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FiX } from "react-icons/fi";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ease-out" />

        {/* Drawer Content with Slide-up Transition */}
        <Dialog.Content
          className={`fixed bottom-0 left-0 right-0 w-full h-[80vh] bg-white shadow-lg z-50 p-5 rounded-t-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={onClose}>
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-5 overflow-auto">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Drawer;
