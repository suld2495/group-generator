'use client';

import { useState } from 'react';
import Input from '../input/Input';
import styled from './person.input.module.css';
import Button from '../button/Button';
import useGeneratorStore from '@/store/generator';

type Props = {
  onAdd: (value: string) => boolean;
};

const PersonInput = ({ onAdd }: Props) => {
  const [value, setValue] = useState('');
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (!value) return alert('이름을 입력해주세요');

    const result = onAdd(value);

    if (!result) {
      alert('이미 존재하는 이름입니다.');
      return;
    }

    setValue('');
  }

  return (
    <div className={styled['person-input']}>
      <div className={styled['person-input_label']}>
        인원 추가
      </div>
      <div className={styled['person-input_input']}>
        <Input 
          value={value} 
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <Button onClick={handleAdd}>추가</Button>
      </div>
    </div>
  )
};

export default PersonInput;
