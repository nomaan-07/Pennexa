function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/logo-icon.png" alt="logo-icon" className="w-9" />
      <img
        src="/logo-text.png"
        alt="logo-text"
        className="w-40 translate-y-1.5"
      />
    </div>
  );
}

export default Logo;
