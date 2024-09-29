import React, { FC } from 'react';
import cls from './WordActionInfo.module.scss';
type WordActionInfoProps = {
   word: string;
   info: string;
};

export const WordActionInfo:FC<WordActionInfoProps> = ({word,info}) => {
  return (
    <div className={cls.wordBlock}>
      <span className={cls.word}>{word}</span>
      <span className={cls.wordInfo}>{info}</span>
    </div>
  )
}
