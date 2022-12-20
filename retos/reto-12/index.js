function selectSleigh(distance, sleighs) {
  let sleigh = sleighs
    .filter((sleigh) => 20 / sleigh.consumption >= distance)
    .at(-1);

  return sleigh ? sleigh.name : null;
}

module.exports = selectSleigh;
