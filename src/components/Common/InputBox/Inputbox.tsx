type Props = {
  onChange: (newValue: string) => void;
};

const Inputbox: React.FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Enter crypto name"
      onChange={handleChange}
      aria-label="Enter crypto name"
    />
  );
};

export default Inputbox;
