import styled from './input.module.css';

type Props = {
  value: string;
  placeholder?: string;    
  onChange: React.ChangeEventHandler;
}

const Input = ({ value, onChange, placeholder = '' }: Props) => {
  return (
    <div className={styled.input}>
      <input value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  )
};

export default Input;
