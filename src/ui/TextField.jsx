const TextField = ({
  label,
  id,
  type,
  placeholder,
  name,
  register,
  required,
  validationSchema,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-bold" htmlFor={id}>
        {label} {required && <span className="text-error">*</span>}
      </label>

      <input
        {...register(name, validationSchema)}
        autoComplete="off"
        id={id}
        className="input__field"
        type={type}
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className="mt-2 block text-error text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
