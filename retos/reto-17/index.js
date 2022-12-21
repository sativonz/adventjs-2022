export default function carryGifts(gifts, maxWeight) {
  // Si el peso de algún regalo es mayor al límite, devolvemos un array vacío
  if (gifts.some(gift => gift.length > maxWeight)) {
    return [];
  }

  const result = [];
  let currentSack = "";
  let currentWeight = 0;

  for (const gift of gifts) {
    if (currentWeight + gift.length > maxWeight) {
      // Si el peso acumulado más el peso del regalo supera el límite,
      // agregamos el regalo al siguiente saco
      result.push(currentSack.trim());
      currentSack = gift;
      currentWeight = gift.length;
    } else {
      // Si el peso acumulado más el peso del regalo no supera el límite,
      // agregamos el regalo al saco actual
      currentSack += ` ${gift}`;
      currentWeight += gift.length;
    }
  }

  // Añadimos el último saco al resultado
  if (currentSack) {
    result.push(currentSack.trim());
  }

  return result;
}
