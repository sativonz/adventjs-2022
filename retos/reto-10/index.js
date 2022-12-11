export function checkJump(heights) {
  const left = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const conditionLeft = left.slice(1).every((l, i) => l >= left[i]);
  const conditionRight = heights.slice(1).every((h, i) => h <= heights[i]);

  return conditionLeft && conditionRight && !!left.length && heights.length > 1;
}

/*
function checkJump(heights) {
  let masAlto = Math.max(...heights),
      heightsLength = heights.length,
      parteBaja1, parteBaja2, posMasAlto,
      max = Math.max(...heights),
      allEqual = heights.every(val => val === heights[0]),
      lastNumberIsHigher = max === heights[heights.length - 1] ? true : false;
  if(allEqual || lastNumberIsHigher){
    return false
  } else {
    heights.map((height, i) => {
      if(height == masAlto){
        posMasAlto = i;
        parteBaja1 = heights.slice(0, posMasAlto);
        parteBaja2 = heights.slice(posMasAlto +1, heightsLength);
        return true;
      }
    });
    if(parteBaja1.every((current, index) => {if (index === 0) {return true;}
      return current >= parteBaja1[index - 1];
    })){return parteBaja2.every((current, index) => {
        if (index === 0) {return true;}
          return current <= parteBaja2[index - 1];
      });} else { return false}
  }
}
*/

//module.exports = checkJump;
