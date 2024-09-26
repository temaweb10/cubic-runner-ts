import React, { useEffect, useState } from 'react';
import './App.css';
import { FloorsList } from './components/floorsList/FloorsList';

function App() {
  const [floors, setFloors] = useState<number[][]>([
    [1, 0, 1, 0, 0,0, 0, 1, 0, 0,1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0,2, 0, 0, 0, 0,0, 0, 0, 0,1],
    [0, 0, 1, 0, 0,1, 0, 0, 0, 0,1, 0, 1, 0, 0],
  ]);
  const generateNewObject = ()=>Math.round(Math.random())

  const shiftFloors = ()=>{

  
   
    
    // setFloors((prev)=> prev.map((fl)=>{
      
    //   let p = fl.slice(0,1)
    //   console.log(p);
    //   p.push(generateNewObject())
    //   return p
    // }))
   
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Генерация нового массива с рандомными значениями
      // const newFloors = [
      //   [1, 0, 1, 0, 0,0, 0, 1, 0, 0,1, 0, 0, 0,  Math.round(Math.random())],
      //   [1, 0, 0, 0, 0,2, 0, 0, 0, 0,0, 0, 0, 0, Math.round(Math.random())],
      //   [0, 0, 1, 0, 0,1, 0, 0, 0, 0,1, 0, 1, 0,  Math.round(Math.random())],
      // ]  ;
    
      // const a = floors.map((floor)=>1
      // )
  
      
      // setFloors(newFloors);
      shiftFloors()
    }, );

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []); // Пустой массив зависимостей

  return (
    <div className="App">
      <FloorsList floors={floors} setFloors={setFloors}/>
      <button>DOWN</button><button>UP</button>
    </div>
  );
}

export default App;
