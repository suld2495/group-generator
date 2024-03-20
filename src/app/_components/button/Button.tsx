'use client';

import classNames from 'classnames';
import styled from './button.module.css'

type Props = {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button = ({ 
  className = '', 
  children, 
  onClick, 
  type = "button", 
  disabled = false 
}: Props) => {

  return (
    <div className={classNames(styled.button, className)}>
      <button type={type} onClick={onClick} disabled={disabled}>{children}</button>
    </div>
  )
};

export default Button;
