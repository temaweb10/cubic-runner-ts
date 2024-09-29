import { FloorType } from "../types/IFloor";

export  const generateNewObject = (): FloorType => { 
   const randomValue = Math.random();
 
   if (randomValue < 0.025) {
     return 1;
   } else if (randomValue < 0.9) {
     return 0;
   } else {
     return 0;
 }}