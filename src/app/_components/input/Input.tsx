import styled from './input.module.css';

type Props = {
  value: string | number;
  placeholder?: string;    
  onChange: React.ChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
}

const Input = ({ value, onChange, onKeyDown, placeholder = '' }: Props) => {
  return (
    <div className={styled.input}>
      <input 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
};

export default Input;
