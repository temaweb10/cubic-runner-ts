import React from 'react'
import { WordActionInfo } from '../WordActionInfo/WordActionInfo'
import cls from './WordsActionsList.module.scss'
export const WordsActionsList = ({title}:{title:string}) => {
  return (
    <div className={cls.wordsActionsList}>

      <h3 className={cls.title}>{title}</h3>
      <WordActionInfo word='w' info='Вверх'/>
      <WordActionInfo word='s' info='Вниз'/>
      <WordActionInfo word='↑' info='Вверх'/>
      <WordActionInfo word='↓' info='Вниз'/>
    </div>
  )
}
