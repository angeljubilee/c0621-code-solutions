function reduce(array, reducer, initialValue) {
  let result = initialValue;
  for (var i = 0; i < array.length; i++) {
    result = reducer(array[i], result);
  }
  return result;
}

console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (x, y) => x + y, 0));
