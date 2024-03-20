'use client';

import useGeneratorStore from "@/store/generator";
import styled from './result.module.css';

const Result = () => {
  const { result } = useGeneratorStore();

  if (!result.length) return;

  return (
    <div className={styled.result}>
      <div className={styled['result_label']}>결과</div>
      <div className={styled['result_display']}>
        {result.map((result) => (
          <div key={result}>{result}</div>
        ))}
      </div>
    </div>
  )
};

export default Result;
