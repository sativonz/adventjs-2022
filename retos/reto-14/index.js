//[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]
export default function getOptimalPath(pyramid) {
  // Recorremos la pirámide de abajo hacia arriba
  for (let i = pyramid.length - 2; i >= 0; i--) {
    const level = pyramid[i];
    const nextLevel = pyramid[i + 1];
    // Calculamos el tiempo mínimo necesario para llegar a cada posición
    for (let j = 0; j < level.length; j++) {
      level[j] += Math.min(nextLevel[j], nextLevel[j + 1]);
    }
  }
  // Devolvemos el tiempo mínimo necesario para llegar al nodo superior (la primera posición de la pirámide)
  return pyramid[0][0];
}