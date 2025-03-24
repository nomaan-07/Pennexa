import { createContext, useEffect, useState } from "react";

const MobileFilterContext = createContext();

function MobileFilterProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFilterModal = () => setIsModalOpen((prev) => !prev);

  useEffect(() => {
    if (isModalOpen) document.body.classList.add("h-screen", "overflow-hidden");
    else document.body.classList.remove("h-screen", "overflow-hidden");
  }, [isModalOpen]);

  return (
    <MobileFilterContext.Provider value={{ isModalOpen, toggleFilterModal }}>
      {children}
    </MobileFilterContext.Provider>
  );
}

export { MobileFilterContext, MobileFilterProvider };
