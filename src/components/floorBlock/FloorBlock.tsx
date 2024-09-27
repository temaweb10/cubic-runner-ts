import React from 'react'
import cls from './FloorBlock.module.scss'
export const FloorBlock = ({int}:{int:number}) => {
  return (
    <div className={cls.floorBlock} style={
      int === 0 ? {}  : int === 1 ?  {backgroundImage:"url(https://image.pngaaa.com/316/849316-middle.png)",    backgroundSize: "cover"} : {backgroundImage:"url(https://s1.piq.land/2013/05/30/er7lkyxEz35UAt7KnMeC2sdD_400x400.png)",    backgroundSize: "cover", transform: "rotate(90deg)"}
     }></div>
  )
}

