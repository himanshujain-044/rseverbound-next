type ButtonProps = {
  text: string;
  bgColor: string;
  textColor: string;
  className?: string;
};

const Button = ({ text, bgColor, textColor, className = '' }: ButtonProps) => {
  return (
    <button
      className={`${bgColor} ${textColor} inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xs border-0 p-2.5 text-sm font-medium shadow-md transition-shadow duration-200 hover:shadow-lg sm:p-3 sm:text-base ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
