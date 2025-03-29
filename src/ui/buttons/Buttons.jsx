const baseStyles = "flex items-center gap-4";

const types = {
  default: "justify-center",
  pagination: "flex items-center justify-between gap-4 sm:justify-center",
  account: "xs:justify-end flex justify-center",
};

function Buttons({ children, type = "default" }) {
  const styles = `${baseStyles} ${types[type]}`;

  return (
    <div className={styles}>
      {type === "account" ? (
        <div className={baseStyles}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}

export default Buttons;
