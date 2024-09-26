import React from 'react'
import cls from './FloorBlock.module.scss'
export const FloorBlock = ({int}:{int:number}) => {
  return (
    <div className={cls.floorBlock} style={{backgroundColor:int === 0 ? "#eee" : int === 1 ? "#000" : "red"}}></div>
  )
}

