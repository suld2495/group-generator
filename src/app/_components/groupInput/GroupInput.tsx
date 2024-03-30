'use client';

import { useState } from 'react';
import Input from '../input/Input';
import styled from './group.input.module.css';
import Button from '../button/Button';
import useGeneratorStore from '@/store/generator';

const GroupInput = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const { addGroup } = useGeneratorStore();
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleChangeCount: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');

    setCount(Number(value));
  }

  const handleAdd = () => {
    if (!name) return alert('이름을 입력해주세요');
    if (!count) return alert('인원을 입력해주세요');

    const result = addGroup({ name, count });

    if (!result) {
      alert('이미 존재하는 그룹입니다.');
      return;
    }

    setName('');
    setCount(0);
  }

  return (
    <div className={styled['group-input']}>
      <div className={styled['group-input_label']}>
        그룹 추가
      </div>
      <div className={styled['group-input_input']}>
        <Input 
          value={name} 
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <Input 
          value={count} 
          onChange={handleChangeCount}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <Button onClick={handleAdd}>추가</Button>
     </div>
    </div>
  )
};

export default GroupInput;
