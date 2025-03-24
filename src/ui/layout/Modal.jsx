const baseStyles =
  "fixed inset-0 z-60 bg-slate-500/10 backdrop-blur-xs lg:hidden";

const types = {
  open: "visible bottom-0 opacity-100",
  close: "invisible opacity-0",
};

function Modal({ isOpen, onClick }) {
  const className = isOpen
    ? `${baseStyles} ${types.open}`
    : `${baseStyles} ${types.close}`;

  return <div onClick={onClick} className={className}></div>;
}

export default Modal;
