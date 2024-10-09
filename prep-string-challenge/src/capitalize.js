/* exported capitalize */
function capitalize(word) {
  const firstUpper = word[0].toUpperCase();
  const restLower = word.slice(1).toLowerCase();
  return firstUpper + restLower;
}
