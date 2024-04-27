'use client';

import classNames from 'classnames';
import styled from './display.module.css';

type Props<T> = {
  data: string[];
  className?: string;
  close: (index: number) => void;
  onClick?: (index: number) => void;
}

const Display = <T extends Object>({ data, className, close, onClick }: Props<T>) => (
  <div className={classNames(styled['display'], className)}>
    {data.map((item, i) => (
      <div key={item} onClick={() => onClick?.(i)}>{item}<span className={styled.close} onClick={(e) => {
        e.stopPropagation();
        close(i)
      }}>X</span></div>
    ))}
  </div>
)

export default Display;
