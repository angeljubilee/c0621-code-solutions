/* exported defaults */
/*  for each key in source
      check if target[key] has value, including null
      if NOT, then set target[key] to source[key]
*/

function defaults(target, source) {
  for (var key in source) {
    if (!target[key] && target[key] !== null) {
      target[key] = source[key];
    }
  }
}
