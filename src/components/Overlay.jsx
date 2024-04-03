import React from "react";

const Overlay = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClick = (e) => {
    console.log(e);
    // Check if the click target is the overlay background
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-[99] top-0 left-0 w-full h-full flex items-center justify-center "
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-black opacity-25  overlay"></div>
      {children}
    </div>
  );
};

export default Overlay;
