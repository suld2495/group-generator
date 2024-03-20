'use client';

import useGeneratorStore from "@/store/generator";
import Button from "../button/Button";
import styled from './main.buttons.module.css';
import { useEffect, useState } from "react";
import { group } from "@/app/_lib/group";

const MainButtons = () => {
  const { isReady, save, groups, persons } = useGeneratorStore();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!isReady());
  }, [groups, persons, isReady]);

  const handleClick = () => {
    save(group({ groups: [...groups], persons: [...persons] }));
  };

  return (
    <div className={styled['buttons']}>
      <Button 
        className={styled['buttons_group-button']} 
        onClick={handleClick} 
        disabled={disabled}
      >그룹화</Button>
      <Button onClick={() => {}}>취소</Button>
    </div>
  )
};

export default MainButtons;
