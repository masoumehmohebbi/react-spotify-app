const TextField = ({ label, value, id, type, placeholder, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>

      <input
        value={value}
        onChange={onChange}
        autoComplete="off"
        id={id}
        className="input__field"
        type={type}
        placeholder={placeholder}
        name={id}
      />
    </div>
  );
};

export default TextField;
