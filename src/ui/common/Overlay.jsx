function Overlay({ isOpen, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-100 bg-slate-500/10 backdrop-blur-xs transition-opacity ${
        isOpen ? "modal--open" : `modal--close`
      }`}
    >
      {children}
    </div>
  );
}

export default Overlay;
