'use client';

import classNames from 'classnames';
import styled from './display.module.css';

type Props = {
  data: string[];
  className?: string;
  close: (index: number) => void;
}

const Display = ({ data, className, close }: Props) => (
  <div className={classNames(styled['display'], className)}>
    {data.map((item, i) => (
      <div key={item}>{item}<span className={styled.close} onClick={() => close(i)}>X</span></div>
    ))}
  </div>
)

export default Display;
