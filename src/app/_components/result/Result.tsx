'use client';

import useGeneratorStore from "@/store/generator";
import styled from './result.module.css';

const Result = () => {
  const { result } = useGeneratorStore();

  if (!Object.keys(result).length) return;

  return (
    <div className={styled.result}>
      <div className={styled['result_label']}>결과</div>
      <div className={styled['result_display']}>
        {Object.entries(result).map(([key, value]) => (
          <div key={key}>{`[${key}] : ${value.join(', ')}`}</div>
        ))}
      </div>
    </div>
  )
};

export default Result;
