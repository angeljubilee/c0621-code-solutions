/* exported invert */

/*
   object result
   for keys in source
   result[ source value ] = key
*/

function invert(source) {
  if (!source) {
    return {};
  }

  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}
