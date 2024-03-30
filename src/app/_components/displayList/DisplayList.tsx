'use client';

import useGeneratorStore from "@/store/generator";
import Display from "../display/Display";
import styled from './display.list.module.css';

const DisplayList = () => {
  const { persons, groups, deletePerson, deleteGroup } = useGeneratorStore();

  return (
    <div className={styled['display-list']}>
      <Display className={styled['display-list_person']} data={persons} close={deletePerson} />
      <Display data={groups.map(({ count, name }) => `${name} - ${count}명`)} close={deleteGroup} />
    </div>
  )
};

export default DisplayList;
