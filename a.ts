type Floor = number[]; // Тип для этажа
type Floors = Floor[]; // Тип для массива этажей

const generateNewElement = (): number => {
  return Math.random() < 0.5 ? 0 : 1; // 50% шанс на 0 или 1
};

const shiftFloors = (floors: Floors): Floors => {
  // Удаляем первый элемент каждого этажа
  const newFloors = floors.map(floor => floor.slice(1));

  // Генерируем новый элемент для каждого этажа и добавляем его в конец
  newFloors.forEach((floor, index) => {
    floor.push(generateNewElement());
  });

  return newFloors;
};

const movePlayerDown = (floors: Floors, playerPosition: number): [Floors, number] => {
  if (playerPosition < floors.length - 1) {
    const nextFloor = floors[playerPosition + 1];
    const currentFloor = floors[playerPosition];

    // Проверка на Game Over
    if (nextFloor[currentFloor.indexOf(2)] === 1) {
      console.log('Game Over!');
      return [floors, playerPosition]; // Игрок не перемещается
    }

    // Перемещение игрока
    currentFloor[currentFloor.indexOf(2)] = 0; // Убираем игрока с текущего этажа
    nextFloor[currentFloor.indexOf(2)] = 2; // Перемещаем игрока на следующий этаж

    return [floors, playerPosition + 1]; // Возвращаем новые этажи и новую позицию игрока
  }

  return [floors, playerPosition]; // Игрок не может двигаться дальше
};

// Пример использования
let floors: Floors = [
  [0, 0, 2, 0, 0, 0],
  [0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0],
];

let playerPosition = 0;

// Генерация нового состояния этажей
floors = shiftFloors(floors);
console.log('New Floors:', floors);

// Перемещение игрока вниз
[floors, playerPosition] = movePlayerDown(floors, playerPosition);
console.log('Floors after moving down:', floors);
