import { FC } from 'react';
import { Floor, Floors } from '../../types/IFloor';
import { FloorBlock } from '../floorBlock/FloorBlock';
import cls from './Game.module.scss';
interface GameProps {
  
  floors:Floors
}

export const Game:FC<GameProps> = ({floors}) => {
  return (
   <div  className={cls.gameContainer} >
    
 
      <div className={cls.game}>{floors.map((floor:Floor, index) => (
        <div  key={index} style={{ display: 'flex' }}>
          {floor.map((tile, tileIndex) => (
           <FloorBlock int={tile}/>
          ))}
        </div>
      ))}</div>


    </div>
  )
}
