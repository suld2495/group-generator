'use client';

import useRegisterStore from '@/store/register';
import styled from './group.register.module.css';
import Display from '../../display/Display';
import useGeneratorStore from '@/store/generator';
import Button from '../../button/Button';
import RegisterContainer from '../RegisterContainer';
import GroupInput from '../../groupInput/GroupInput';

const GroupRegister = () => {
  const { 
    group,
    addGroup,
    deleteGroup
  } = useRegisterStore();
  const { addGroup: addGeneratorPerson } = useGeneratorStore();

  const handleClick = (index: number) => {
    addGeneratorPerson(group[index]);
  };

  const handleRegisterAll = () => {
    group.forEach(addGeneratorPerson);
  };

  return (
    <RegisterContainer
      input={(
        <>
          <GroupInput onAdd={addGroup} />
          <Button onClick={handleRegisterAll}>모두 등록하기</Button>
        </>
      )}
    >
      <Display 
        className={styled['register_display']} 
        data={group.map(({ count, name }) => `${name} - ${count}명`)} 
        close={deleteGroup} 
        onClick={handleClick} 
      />
    </RegisterContainer>
  )
};

export default GroupRegister;
