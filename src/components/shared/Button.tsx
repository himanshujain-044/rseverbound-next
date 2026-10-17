type ButtonProps = {
  text: string;
  bgColor: string;
  textColor: string;
};

const Button = ({ text, bgColor, textColor }: ButtonProps) => {
  return (
    <button className={`${bgColor} ${textColor} rounded-[2px] p-3 font-medium`}>
      {text}
    </button>
  );
};

export default Button;
