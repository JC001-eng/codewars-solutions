function isPalindrome(line) {
  line = line.toString();
  
  return line.split('').reverse().join('') === line ? true : false;
}

isPalindrome(".!!.")

// https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript git 