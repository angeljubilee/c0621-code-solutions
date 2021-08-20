function filter(array, predicate) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      results.push(array[i]);
    }
  }
  return results;
}

const a = filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], num => num % 2 === 0);
console.log('a: ', a);
