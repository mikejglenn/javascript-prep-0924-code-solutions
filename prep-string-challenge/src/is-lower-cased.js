/* exported isLowerCased */
function isLowerCased(word) {
  const compLower = word.toLowerCase();
  if (compLower === word) {
    return true;
  }
  return false;
}
