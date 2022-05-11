const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function filter(array, predicate) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
}

function predicate(num) {
  if (num === 0) {
    return true;
  }
  if (num % 2 === 0) {
    return num;
  }
}

console.log(filter(numbersArr, predicate));
