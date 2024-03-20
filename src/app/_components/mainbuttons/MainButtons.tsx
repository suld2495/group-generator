'use client';

import useGeneratorStore from "@/store/generator";
import Button from "../button/Button";
import styled from './main.buttons.module.css';
import { useEffect, useState } from "react";

const MainButtons = () => {
  const { isReady, groups, persons } = useGeneratorStore();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!isReady());
  }, [groups, persons, isReady]);

  return (
    <div className={styled['buttons']}>
      <Button className={styled['buttons_group-button']} onClick={() => {}} disabled={disabled}>그룹화</Button>
      <Button onClick={() => {}}>취소</Button>
    </div>
  )
};

export default MainButtons;
