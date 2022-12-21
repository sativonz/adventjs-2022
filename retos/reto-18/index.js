export default function dryNumber(dry, numbers) {
  if(dry > 9 || dry < 0) return []
  let result = [];

  for (let i = 1; i <= numbers; i++){
    const currentNumber = i.toString();
    if (currentNumber.split("").includes(dry.toString())) result.push(i); 
  }

  return result
}