export function createCube(size) {
  let head = []
  let tail = []
  for(let i = 1; i <= size; i++) {
    console.log("head",head);
    console.log("tail",tail);
    head.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size))
    tail.push(" ".repeat(i - 1) + "\\/".repeat(size - (i - 1)) + "_/".repeat(size))
  }
  return [...head, ...tail].join("\n")
}


