/* exported pick */

/* object result

   Iterate through source
    Check if key of source is in keys array
      If so, add key, value pair to result object
   return result
*/

function pick(source, keys) {
  var result = {};
  for (var key in source) {
    if (keys.indexOf(key) > -1) {
      if (source[key] !== undefined) {
        result[key] = source[key];
      }
    }
  }
  return result;
}
