/*function distributeGifts(packOfGifts, reindeers) {
    let pesoRegalos = [],
        pesoRenos = [];
    packOfGifts.map(function(regalo) {
        pesoRegalos.push(regalo.length);
        return pesoRegalos;
    });
    reindeers.map(function(reno) {
        pesoRenos.push(reno.length * 2);
        return pesoRenos;
    });
    const pesoRegalosTotal = pesoRegalos.reduce((a, c) => a + c);
    const pesoRenosTotal = pesoRenos.reduce((a, c) => a + c);
  

    return Math.floor(pesoRenosTotal/pesoRegalosTotal, 1);
  }

  module.exports = distributeGifts;*/

  function distributeGifts(packOfGifts, reindeers) {
    let pesoMax = reindeers.join("").length * 2
    let pesoCaja = packOfGifts.join("").length
    return (pesoMax / pesoCaja) >> 0
  }
  
  module.exports = distributeGifts