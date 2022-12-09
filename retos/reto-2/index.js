function countHours(year, holidays) {
  return holidays.map(holiday => {
    let date = new Date(`${year}/${holiday}`)
    return(
      [1, 2, 3, 4, 5].includes(
        date.getDay()
      ) ? 1 : 0
    )
  }).reduce((count, horaExtra) => count + horaExtra) * 2;
}

module.exports = countHours;