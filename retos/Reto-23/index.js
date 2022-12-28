function executeCommands(commands) {
  // Creamos un array de 8 elementos para almacenar el estado de los registros
  const registers = new Array(8).fill(0);

  // Iteramos sobre las instrucciones
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    const parts = command.split(' ');
    const opcode = parts[0];
    const src = parts[1];
    const dst = parts[2];

    if (opcode === 'MOV') {
      // Si la instrucción es MOV, copiamos el valor del registro fuente al destino
      if (src.startsWith('V')) {
        // Si el valor fuente es un registro, copiamos su valor
        const srcIndex = parseInt(src.substring(1), 10);
        registers[dst] = registers[srcIndex];
      } else {
        // Si el valor fuente es un número, lo copiamos directamente
        const srcValue = parseInt(src, 10);
        registers[dst] = srcValue;
      }
    } else if (opcode === 'ADD') {
      // Si la instrucción es ADD, sumamos el valor de los registros fuente y destino y almacenamos el resultado en el destino
      const srcIndex = parseInt(src.substring(1), 10);
      const dstIndex = parseInt(dst.substring(1), 10);
      registers[dstIndex] = (registers[srcIndex] + registers[dstIndex]) % 256;
    } else if (opcode === 'DEC') {
      // Si la instrucción es DEC, decrementamos el valor del registro destino
      const dstIndex = parseInt(dst.substring(1), 10);
      registers[dstIndex] = (registers[dstIndex] - 1 + 256) % 256;
    } else if (opcode === 'INC') {
      // Si la instrucción es INC, incrementamos el valor del registro destino
      const dstIndex = parseInt(dst.substring(1), 10);
      registers[dstIndex] = (registers[dstIndex] + 1) % 256;
    } else if (opcode === 'JMP') {
      // Si la instrucción es JMP, saltamos a la instrucción indicada si V00 es distinto de 0
      if (registers[0] !== 0) {
        i = parseInt(src, 10) - 1;
      }
    }
  }

  // Devolvemos el estado final de los registros
  return registers;
}