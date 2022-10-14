import "./Button.scss";

const Button = (props) => {
  const buttonText = props.buttonText;

  return <button className="button">{buttonText}</button>;
};

export default Button;
