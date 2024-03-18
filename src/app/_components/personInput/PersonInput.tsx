'use client';

import { useState } from 'react';
import Input from '../input/Input';
import styled from './person.input.module.css';

const PersonInput = () => {
  const [value, setValue] = useState('');
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styled['person-input']}>
     <div className={styled['person-input_label']}>
      인원 추가
     </div>
     <div className={styled['person-input_input']}>
      <Input value={value} onChange={handleChange} />
     </div>
    </div>
  )
};

export default PersonInput;
