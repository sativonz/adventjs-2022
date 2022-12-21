export default function sortToys(toys, positions) {
   // Crea un array de objetos que asocia cada juguete con su posición
   const toyPositions = toys.map((toy, i) => ({ toy, position: positions[i] }));

   // Ordena el array de objetos por la posición de cada juguete
   toyPositions.sort((a, b) => a.position - b.position);

   // Devuelve un array con los juguetes ordenados
   return toyPositions.map(toyPosition => toyPosition.toy);
}