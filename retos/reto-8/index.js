export function checkPart(part) {

  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }
  // check if the string is already a palindrome 
  if (isPalindrome(part)) {
    return true;
  }
  
  // try removing one character at a time and check if the resulting string is a palindrome
  for (let i = 0; i < part.length; i++) {
    let newPart = part.slice(0, i) + part.slice(i + 1);
    console.log("nexpart",newPart);
    if (isPalindrome(newPart)) {
      return true;
    }
  }

  // if we reached here, it means that we could not make the string a palindrome by removing at most one character
  return false;
}



/*
function checkPart(part) {
  return [...part].some((x, i, arr) => {
    let w = arr.filter((_, y) => y != i)
    return w.join("") == w.reverse().join("")
  })
}

function checkPartOptimized(part) {
  let arr = [...part].slice(1);
  let rev = [...part].reverse();
  let x = arr.join("") == arr.reverse().join("");
  let y = [...part].reduce((x, y, i) => x + (rev[i] != y), 0);
  return x || y <= 2;
}*/