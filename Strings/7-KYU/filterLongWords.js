// https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript 

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(el => el.length > n)
}

module.exports = {
  filterLongWords,
}