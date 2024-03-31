'use client';

import useGeneratorStore from "@/store/generator";
import PersonInput from "../personInput/PersonInput";
import GroupInput from "../groupInput/GroupInput";
import styled from './input.display.module.css';

const InputDisplay = () => {
  const { addPerson } = useGeneratorStore();

  return (
    <div className={styled['input-container']}>
      <PersonInput onAdd={addPerson} />
      <GroupInput />
    </div>
  )
}

export default InputDisplay;