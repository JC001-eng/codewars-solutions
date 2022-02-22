function sumStr(a, b) {
    const toNum = (str) => {
        return !str.length ? 0 : parseInt(str)
    }

    let result = toNum(a) + toNum(b);
    return result.toString();
}

sumStr("4", "5")
//   should return '9';
// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript