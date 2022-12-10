function getMaxGifts(giftsCities, maxGifts, maxCities) {

  let combinaciones = [];
  combinaciones.push([], [giftsCities[0]]);
  giftsCities.shift()

  giftsCities.map(x => {
    const newList = combinaciones.map(combinacion => {
      let _combinacion = [...combinacion]
      if(_combinacion.length < maxCities) {
        _combinacion.push(x)
      }
      return _combinacion
    })
    combinaciones = combinaciones.concat(newList)
  })

  combinaciones.shift()

  return Math.max(
    ...combinaciones.map(x => {
      let sum = x.reduce((total, num) => total + num)
      return sum > maxGifts ? 0 : sum
    })
  )

}