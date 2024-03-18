'use client';

import { useState } from 'react';
import Input from '../input/Input';
import styled from './person.input.module.css';
import Button from '../button/Button';
import useGeneratorStore from '@/store/generator';

const PersonInput = () => {
  const [value, setValue] = useState('');
  const { addPerson } = useGeneratorStore();
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (!value) return alert('이름을 입력해주세요');

    addPerson(value);
    setValue('');
  }

  return (
    <div className={styled['person-input']}>
     <div className={styled['person-input_label']}>
      인원 추가
     </div>
     <div className={styled['person-input_input']}>
      <Input value={value} onChange={handleChange} />
      <Button onClick={handleAdd}>추가</Button>
     </div>
    </div>
  )
};

export default PersonInput;
