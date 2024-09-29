import React from 'react'
import cls from './FloorBlock.module.scss'
export const FloorBlock = ({int}:{int:number}) => {
  return (
    <div className={cls.floorBlock} style={
      int === 0 ? {backgroundColor:"#fff"}  : int === 1 ?  {backgroundColor:"#222"} : {backgroundColor:"#ffdc00"}
     }></div>
  )
}

