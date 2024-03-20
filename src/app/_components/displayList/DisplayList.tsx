'use client';

import useGeneratorStore from "@/store/generator";
import Display from "../display/Display";
import styled from './display.list.module.css';

const DisplayList = () => {
  const { persons, groups } = useGeneratorStore();

  return (
    <div className={styled['display-list']}>
      <Display data={persons} />
      <Display data={groups} />
    </div>
  )
};

export default DisplayList;
