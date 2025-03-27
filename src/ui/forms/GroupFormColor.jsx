function GroupFormColor({ color, isActive, register, colorValidation }) {
  return (
    <div
      key={color.name}
      className={`size-8 ${isActive ? "brightness-110" : "p-0.5"} `}
    >
      <label
        htmlFor={color.name}
        className={`block size-full rounded-full md:cursor-pointer ${color.bgColor600}`}
      ></label>
      <input
        type="radio"
        id={color.name}
        value={color.name}
        className="hidden"
        {...register("color", colorValidation)}
      />
    </div>
  );
}

export default GroupFormColor;
