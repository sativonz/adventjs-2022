// import { countHours } from "./reto-2/index.js";
// import { distributeGifts } from "./reto-3/index.js";
// import { fitsInOneBox } from "./reto-4/index.js";
// import { getGiftsToRefill } from "./reto-7/index.js";
// import { createCube } from "./reto-6/index.js";
// import { countTime } from "./reto-9/index.js";
// import { checkPart } from "./reto-8/index.js";
// import { checkJump } from "./reto-10/index.js";
// import { selectSleigh } from "./reto-12/index.js";
// import getFilesToBackup from "./reto-13/index.js";
// import wrapping from "./reto-1/index.js";
// import fixLetter from "./reto-16/index.js";
// import getOptimalPath from "./reto-14/index.js";
// import carryGifts from "./reto-17/index.js";
// import dryNumber from "./reto-18/index.js";
//  import sortToys from "./reto-19/index.js";
// import howManyReindeers from "./reto-20/index.js";
import printTable from "./Reto-21/index.js"


//Reto 1
const gifts1 = ['cat', 'game', 'socks']
//const wrapped = wrapping(gifts1)

//console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */

// Reto 2
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD
//console.log(countHours(year, holidays));


// Reto 3
const packOfGifts = ["book", "doll", "ball","book", "doll", "ball"];
const reindeers = ["dasher", "dancer","dasher", "dancer", "dancer"];
//distributeGifts(packOfGifts, reindeers);


// Reto 4
const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 4, h: 4 },
    { l: 6, w: 5, h: 5 },
    { l: 13, w: 14, h: 12 }
];
//console.log(fitsInOneBox(boxes));


// Reto 6
//console.log(createCube(1));
//console.log(createCube(2));

// Reto 7
const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
//console.log(getGiftsToRefill(a1, a2, a3));



// Reto 8
//console.log(checkPart("muojium"));

// Reto 9
const leds = [0, 0, 1, 0, 0]
//console.log(countTime(leds))



// Reto 10
// const heights = [1, 3, 8, 5, 2]
const heights = [1, 2, 3, 2, 1, 2, 3]
//console.log("check", checkJump(heights)) //true



// Reto 12
const distance = 10
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]
const sleighs2 = [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
]
//console.log(selectSleigh(distance, sleighs2)) // => "Dancer"



// Reto 13
const lastBackup = 1546300800
const changes = [
  [ 2, 1546300800 ],
  [ 3, 1546301100 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ],
]
//console.log(getFilesToBackup(lastBackup, changes));




//Reto 14
//console.log(getOptimalPath([[1], [2, 3]])) // 2
// 0 -> 2

//console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5
// 0 -> 4 -> 1

//console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8
// 1 -> 1 -> 5 -> 1


// Reto 16
//console.log(fixLetter("   Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?  "))



// Reto 17
//console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10))
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

//console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7))
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg
//console.log(carryGifts(['game', 'bike', 'book'], 12))



// Reto 18

//console.log(dryNumber(1, 15)) // [1, 10, 11, 12, 13, 14, 15]
// no tenemos tinta para el dígito 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

//console.log(dryNumber(2, 100)) // [2, 12, 20]
// no tenemos tinta para el dígito 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20


// Reto 19
const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]
//console.log(sortToys(toys, positions))
// ['puzzle', 'car', 'ball', 'doll']
const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]
//console.log(sortToys(moreToys, morePositions))
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
//console.log(sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]))


// Reto 20
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

//howManyReindeers(reindeerTypes, gifts)
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]




//Ret 21

const giftsPrint1 = [
  { name: 'Game', quantity: 2 },
  { name: 'Biketike', quantity: 123123 },
  { name: 'Book', quantity: 325589854145 }
];
const giftsPrint2 = [
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
];
//console.log(printTable(giftsPrint1));
console.log('');
console.log(printTable(giftsPrint2));