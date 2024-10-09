/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  char = char.toLowerCase();
  for (const i in vowels) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
