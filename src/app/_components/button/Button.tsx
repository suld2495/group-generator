import classNames from 'classnames';
import styled from './button.module.css'

type Props = {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ className = '', children, onClick, type = "button" }: Props) => {
  return (
    <div className={classNames(styled.button, className)}>
      <button type={type} onClick={onClick}>{children}</button>
    </div>
  )
};

export default Button;
