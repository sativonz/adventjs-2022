export default function getFilesToBackup(lastBackup, changes) {
  let result = [];
  changes.forEach(element => {
    if (element[1] > lastBackup ) result.push(element[0]);
    return result.sort((a, b) => a - b);
  });
return result = [...new Set(result)];
}

//module.exports = selectSleigh;
