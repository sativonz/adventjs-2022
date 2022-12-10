//import { countHours } from "./reto-2/index.js";
//import { distributeGifts } from "./reto-3/index.js";
//import { fitsInOneBox } from "./reto-4/index.js";
import { getGiftsToRefill } from "./reto-7/index.js";

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



// Reto 7
const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3));