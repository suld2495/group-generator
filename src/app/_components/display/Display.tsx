'use client';

import styled from './display.module.css';

type Props = {
  data: string[];
}

const Display = ({ data }: Props) => (
  <div className={styled['display']}>
    {data.map((item) => (
      <div key={item}>{item}</div>
    ))}
  </div>
)

export default Display;
