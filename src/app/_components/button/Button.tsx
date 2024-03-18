import styled from './button.module.css'

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick, type = "button" }: Props) => {
  return (
    <div className={styled.button}>
      <button type={type} onClick={onClick}>{children}</button>
    </div>
  )
};

export default Button;
