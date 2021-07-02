/* exported toObject */
function toObject(keyValuePair) {
  var result = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
}
