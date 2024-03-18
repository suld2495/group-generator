import { useState } from 'react';
import Input from '../input/Input';
import styled from './group.input.module.css';

const GroupInput = () => {
  const [value, setValue] = useState('');
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styled['group-input']}>
     <div className={styled['group-input_label']}>
      그룹 추가
     </div>
     <div className={styled['group-input_input']}>
      <Input value={value} onChange={handleChange} />
     </div>
    </div>
  )
};

export default GroupInput;
