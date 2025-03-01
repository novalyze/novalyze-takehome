interface InputProps {
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  required = false,
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-secondary"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
