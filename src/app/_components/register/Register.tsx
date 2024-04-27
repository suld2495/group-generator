'use client';

import GroupRegister from './groupRegister/GroupRegister';
import PersonRegister from './personRegister/PersonRegister';
import styled from './register.module.css';

const Register = () => {
  return (
    <div className={styled['register-box']}>
      <h1>미리 등록하기</h1>
      <div className={styled.register}>
        <PersonRegister />
        <GroupRegister />
      </div>
    </div>
  )
};

export default Register;
