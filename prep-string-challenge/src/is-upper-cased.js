/* exported isUpperCased */
function isUpperCased(word) {
  const compUpper = word.toUpperCase();
  if (compUpper === word) {
    return true;
  }
  return false;
}
