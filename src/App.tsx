// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { FloorsList } from './components/floorsList/FloorsList';

// function App() {
//   const [floors, setFloors] = useState<number[][]>([
//     [1, 0, 1, 0, 0,0, 0, 1, 0, 0,1, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0,2, 0, 0, 0, 0,0, 0, 0, 0,1],
//     [0, 0, 1, 0, 0,1, 0, 0, 0, 0,1, 0, 1, 0, 0],
//   ]);
//   const generateNewObject = ()=>Math.round(Math.random())

//   const shiftFloors = ()=>{
//     setFloors((prev)=> prev.map((fl)=>{
      
//       let p = fl.slice(0,1)
//       console.log(p);
//       p.push(generateNewObject())
//       return p
//     }))
   
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {

//       shiftFloors()
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     }
//   }, []); 

//   return (
//     <div className="App">
//       <FloorsList floors={floors} setFloors={setFloors}/>
//       <button>DOWN</button><button>UP</button>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useRef, useState } from 'react';
import { FloorBlock } from './components/floorBlock/FloorBlock';

type FloorType = 0 | 1 | 2;
type Floor = FloorType[];
type Floors = Floor[];
const generateNewObject = (): FloorType => { 
  const randomValue = Math.random();

  if (randomValue < 0.07) {
    return 1;
  } else if (randomValue < 0.9) {
    return 0;
  } else {
    return 0;
  }}
const initial:Floors = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(), generateNewObject(), generateNewObject(),  generateNewObject()],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(), generateNewObject(), generateNewObject(),  generateNewObject()],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(), generateNewObject(), generateNewObject(),  generateNewObject()],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(), generateNewObject(), generateNewObject(),  generateNewObject()],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(), generateNewObject(), generateNewObject(),  generateNewObject()],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(),  generateNewObject(), generateNewObject(), generateNewObject(),  generateNewObject()],

]

const App: React.FC = () => {
  const [floors, setFloors] = useState<Floors>(initial);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [playerPosition, setPlayerPosition] = useState<[number, number]>([4, 5]);
  const [isGameOver,setIsGameOver] = useState<boolean>(false)
  const [gameStats,setGameStats] = useState(
    {
      playerPosition:[4, 5],
      score:0
    }
  )
 


  const gameOver = ()=>{
    // console.log("gameover")
    // setFloors(initial)
    // setIsGameOver(true) 
  };
  

  const shiftFloors = () => {
    setFloors((prev) =>
      prev.map((floor,indexFloor) => {
        const [firstElement, ...rest] = floor;
        let newArr = [...rest, generateNewObject()]
        if(indexFloor === gameStats.playerPosition[0]){
          if( newArr[gameStats.playerPosition[1]] === 1){
            gameOver()
            // setIsGameOver(true)
          }
          newArr[gameStats.playerPosition[1]-1] =0
          newArr[gameStats.playerPosition[1]]=2
          
          return newArr;

        } else {
           return newArr;
        }
      })
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
   if(!isGameOver){
    switch (e.key) {
      case 'ArrowUp':
        movePlayer(-1 );
        break;
      case 'ArrowDown':
        movePlayer(1 );
        break;
    }
   }
  };

  const movePlayer = ( dy: number) => {
    const [y,x] = gameStats.playerPosition
    const newY = y+dy
   
    if(newY <= floors.length){
      // setFloors((prev)=>{
      //   prev[y][x] = 0
      //    prev[newY][x] = 2
      //    return prev
      //  })
      if (newY >= 0 && newY < floors.length) {
        setGameStats({ ...gameStats, playerPosition: [newY, x] });
      }
      console.log(`newY - ${newY}   Y = ${y}`);
      console.log(`newY <= floors.length - ${newY <= floors.length}   floors.length: ${floors.length}`);
    } 
  };

  // useEffect(() => {
  //   const interval = setInterval(()=> {
  //     console.log(isGameOver);
  //       setIsGameOver((prev)=>{
  //         if(prev === false){
  //           shiftFloors()
  //           setGameStats({...gameStats,score:gameStats.score+1})
  //         }else{
  //           clearInterval(interval)
  //         }
  //         return prev
  //       })
        
  //   }, 90);
  //   return () => {
  //     clearInterval(interval)
  //   };
  // }, [gameOver]);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsGameOver((prev) => {
        if (prev === false) {
          shiftFloors();
          setGameStats({ ...gameStats, score: gameStats.score + 1 });
        } else {
          clearInterval(intervalRef.current!);
        }
        return prev;
      });
    }, 60);
  
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [gameOver, shiftFloors, gameStats]);
  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} style={{ outline: 'none',    background: "url(https://acregames.files.wordpress.com/2013/03/space-bg2.png)",
      backgroundSize: "cover" }}>
     <h1 style={{color:"#fff"}}>{gameStats.score}</h1>
      {isGameOver === true ? <div>
        <h1>game over</h1>
      
        <button onClick={()=>{
          setIsGameOver(false)
          console.log("ONCLICK");
          setFloors(initial)
      
        }}>начать заново</button>
      </div> : floors.map((floor, index) => (
        <div key={index} style={{ display: 'flex' }}>
          {floor.map((tile, tileIndex) => (
           <FloorBlock int={tile}/>
          ))}
        </div>
      ))}
      
    </div>
  );
};

export default App;
