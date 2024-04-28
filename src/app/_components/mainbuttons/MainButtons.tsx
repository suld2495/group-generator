'use client';

import useGeneratorStore from "@/store/generator";
import Button from "../button/Button";
import styled from './main.buttons.module.css';
import { useEffect, useState } from "react";
import { group } from "@/app/_lib/group";
import useUserStore from "@/store/user";

const MainButtons = () => {
  const { required } = useUserStore();
  const { isReady, save, reset, groups, persons } = useGeneratorStore();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!isReady());
  }, [groups, persons, isReady]);

  const handleClick = () => {
    save(group({ groups: [...groups], persons: [...persons], user: required }));
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className={styled['buttons']}>
      <Button 
        className={styled['buttons_group-button']} 
        onClick={handleClick} 
        disabled={disabled}
      >그룹화</Button>
      <Button onClick={handleReset}>초기화</Button>
    </div>
  )
};

export default MainButtons;
