'use client';

import { useState } from 'react';
import Input from '../input/Input';
import styled from './group.input.module.css';
import Button from '../button/Button';
import useGeneratorStore from '@/store/generator';

const GroupInput = () => {
  const [value, setValue] = useState('');
  const { addGroup } = useGeneratorStore();
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (!value) return alert('이름을 입력해주세요');
    
    addGroup(value);
    setValue('');
  }

  return (
    <div className={styled['group-input']}>
      <div className={styled['group-input_label']}>
        그룹 추가
      </div>
      <div className={styled['group-input_input']}>
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

export default GroupInput;
