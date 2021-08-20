function map(array, transform) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(transform(array[i]));
  }
  return results;
}

console.log('a: ', map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], x => x * 2));
