'use client';

import usePersonRegisterStore from '@/store/register';
import PersonInput from '../../personInput/PersonInput';
import styled from './person.register.module.css';
import Display from '../../display/Display';
import useGeneratorStore from '@/store/generator';
import Button from '../../button/Button';
import RegisterContainer from '../RegisterContainer';

const PersonRegister = () => {
  const { addPerson, persons, deletePerson } = usePersonRegisterStore();
  const { addPerson: addGeneratorPerson } = useGeneratorStore();

  const handleClick = (index: number) => {
    addGeneratorPerson(persons[index]);
  };

  const handleRegisterAll = () => {
    persons.forEach(addGeneratorPerson);
  };

  return (
    <RegisterContainer
      input={(
        <>
          <PersonInput onAdd={addPerson} />
          <Button onClick={handleRegisterAll}>모두 등록하기</Button>
        </>
      )}
    >
      <Display 
        className={styled['person-register_display']} 
        data={persons} 
        close={deletePerson}
        onClick={handleClick} 
      />
    </RegisterContainer>
  )
};

export default PersonRegister;
