import { useState } from "react";

type Props = {
  defaultOption: string;
  options: string[];
  onChange: (newValue: string) => void;
};

const Selectbox: React.FC<Props> = ({ defaultOption, options, onChange }) => {
  const [value, setValue] = useState(defaultOption);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <select
      className="form-select"
      value={value}
      onChange={handleChange}
      aria-label="select currency"
    >
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Selectbox;
