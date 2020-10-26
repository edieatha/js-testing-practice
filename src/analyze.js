const analyze = (array) => {
  let min = array[0];
  let max = array[0];
  const { length } = array;
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  const average = sum / length;
  for (let i = 1; i < length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    } else {
      min = array[i];
    }
  }

  return {
    average,
    min,
    max,
    length,
  };
};
module.exports = analyze;
