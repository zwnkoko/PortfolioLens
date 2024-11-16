interface Props {
  value: string;
  prefix?: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = ({ value, prefix, onClick, variant = "primary" }: Props) => {
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-hover active:bg-primary-active",
    secondary:
      "bg-secondary hover:bg-secondary-hover active:bg-secondary-active",
    tertiary: "bg-tertiary hover:bg-tertiary-hover active:bg-tertiary-active",
  };

  return (
    <button
      type="button"
      className={`text-white font-bold rounded-md py-3 px-4 ${variantClasses[variant]}`}
      id={value}
      onClick={onClick}
    >
      <div className="flex items-center">
        {prefix && (
          <img src={prefix} alt={prefix} className="h-6 lg:h-10 pr-2" />
        )}
        <p className="text-xs lg:text-base">{value}</p>
      </div>
    </button>
  );
};

export default Button;
