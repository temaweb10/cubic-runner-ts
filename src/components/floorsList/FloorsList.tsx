import React from 'react';
import { FloorBlock } from '../floorBlock/FloorBlock';
import cls from './FloorList.module.scss';
export const FloorsList = ({floors,setFloors}:{floors:number[][],setFloors:React.Dispatch<React.SetStateAction<number[][]>>}) => {


  return (
    <div className={cls.floorsList}>
    {floors.map((floorRow, index) => (
      <div key={Math.random()} style={{ display: 'flex' }}>
        {floorRow.map((int) => (
          <FloorBlock key={Math.random()} int={int} />
        ))}
      </div>
    ))}
  </div>
  )
}
