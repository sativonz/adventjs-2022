function checkStepNumbers(systemNames, stepNumbers) {
    // Creamos un diccionario para almacenar los pasos de cada sistema
    const systemSteps = {};
  
    // Iteramos sobre los elementos de systemNames
    for (let i = 0; i < systemNames.length; i++) {
      const systemName = systemNames[i];
      const stepNumber = stepNumbers[i];
  
      // Si no tenemos una entrada para este sistema en el diccionario, la añadimos
      if (!systemSteps[systemName]) {
        systemSteps[systemName] = [];
      }
  
      // Añadimos el número de paso al array de pasos para este sistema
      systemSteps[systemName].push(stepNumber);
    }
  
    // Iteramos sobre las entradas del diccionario
    for (const [systemName, steps] of Object.entries(systemSteps)) {
      // Iteramos sobre los pasos de este sistema
      for (let i = 1; i < steps.length; i++) {
        // Si el paso actual es menor o igual al paso anterior, devolvemos false
        if (steps[i] <= steps[i - 1]) {
          return false;
        }
      }
    }
  
    // Si hemos llegado hasta aquí, es porque todos los pasos están en orden estrictamente creciente, por lo que devolvemos true
    return true;
  }