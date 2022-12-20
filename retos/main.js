//import { countHours } from "./reto-2/index.js";
//import { distributeGifts } from "./reto-3/index.js";
//import { fitsInOneBox } from "./reto-4/index.js";
//import { getGiftsToRefill } from "./reto-7/index.js";
//import { createCube } from "./reto-6/index.js";
//import { countTime } from "./reto-9/index.js";
// import { checkPart } from "./reto-8/index.js";
// import { checkJump } from "./reto-10/index.js";
// import { selectSleigh } from "./reto-12/index.js";
//import getFilesToBackup from "./reto-13/index.js";
// import wrapping from "./reto-1/index.js";
// import fixLetter from "./reto-16/index.js";
 import getOptimalPath from "./reto-14/index.js";


//Reto 1
const gifts = ['cat', 'game', 'socks']
//const wrapped = wrapping(gifts)

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
console.log(getOptimalPath([[1], [2, 3]])) // 2
// 0 -> 2

//console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5
// 0 -> 4 -> 1

//console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8
// 1 -> 1 -> 5 -> 1


// Reto 16
//console.log(fixLetter("   Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?  "))