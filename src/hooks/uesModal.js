import { useEffect, useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) document.body.classList.add("h-screen", "overflow-hidden");
    else document.body.classList.remove("h-screen", "overflow-hidden");
  }, [isOpen]);

  return { isOpen, openModal, closeModal, toggleModal };
}
