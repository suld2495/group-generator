'use client';

import usePersonRegisterStore from '@/store/personRegister';
import PersonInput from '../personInput/PersonInput';
import styled from './person.register.module.css';
import Display from '../display/Display';
import useGeneratorStore from '@/store/generator';
import Button from '../button/Button';

const PersonRegister = () => {
  const { addPerson, persons, deletePerson } = usePersonRegisterStore();
  const { addPerson: addTempPerson } = useGeneratorStore();

  const handleClick = (name: string) => {
    addTempPerson(name)
  };

  const handleRegisterAll = () => {
    persons.forEach(addTempPerson);
  };

  return (
    <div className={styled['person-register']}>
      <div className={styled['person-register_input']}>
        <PersonInput onAdd={addPerson} />
        <Button onClick={handleRegisterAll}>모두 등록하기</Button>
      </div>
      <Display 
        className={styled['person-register_display']} 
        data={persons} 
        close={deletePerson}
        onClick={handleClick} 
      />
      
    </div>
  )
};

export default PersonRegister;
