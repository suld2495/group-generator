'use client';

import Button from "../button/Button";
import styled from './main.buttons.module.css';

const MainButtons = () => {
  return (
    <div className={styled['buttons']}>
      <Button className={styled['buttons_group-button']} onClick={() => {}}>그룹화</Button>
      <Button onClick={() => {}}>취소</Button>
    </div>
  )
};

export default MainButtons;
