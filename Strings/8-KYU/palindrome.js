function isPalindrome(line) {
  if (line === undefined) return false;
  line = line.toString();
  
  return line.split('').reverse().join('') === line ? true : false;
}

isPalindrome(".!!.")

module.exports = {
  isPalindrome,
}

// https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript git 