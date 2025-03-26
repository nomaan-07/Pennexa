import { useState } from "react";
import { colors } from "../../data/colors";
import icons from "../../data/icons";
import Button from "../../ui/buttons/button";

function AddGroupForm() {
  const [type, setType] = useState(null);
  const [name, setName] = useState(null);
  const [icon, setIcon] = useState(null);
  const [color, setColor] = useState({});

  const isFieldsFilled = type && name && icon && color.textColor;

  console.log(isFieldsFilled);

  function handleSubmit(e) {
    e.preventDefault();

    const newGroup = {
      type,
      name,
      icon,
      textColor: color.textColor,
      bgColor100: color.bgColor100,
      bgColor600: color.bgColor600,
    };

    console.log(newGroup);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-white px-6 py-4 dark:bg-slate-800"
    >
      <div>
        <span>Choose the Group</span>
        <div>
          <span>Expense</span>
          <span>Income</span>
        </div>
      </div>
      <div>
        <label htmlFor="">Write category name</label>
        <input type="text" placeholder="4-10 char" />
      </div>
      <div>
        <span>Choose the Icon</span>
        <div>
          {icons.map((item) => (
            <span key={item.name}>{item.icon}</span>
          ))}
        </div>
      </div>
      <div>
        <span>Choose the Color</span>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              className={`size-10 rounded-full ${color.bgColor600}`}
              key={color.name}
            ></div>
          ))}
        </div>
      </div>
      <Button>Add Category</Button>
    </form>
  );
}

export default AddGroupForm;
