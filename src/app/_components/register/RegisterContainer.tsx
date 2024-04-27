'use client';

import styled from './register.container.module.css';

type Props = {
  input: React.ReactNode;
  children: React.ReactNode;
}

const RegisterContainer = ({ input, children }: Props) => {
  return (
    <div className={styled['register-cotainer']}>
      <div className={styled['register-cotainer_input']}>
        {input}
      </div>
      {children}
    </div>
  )
};

export default RegisterContainer;
