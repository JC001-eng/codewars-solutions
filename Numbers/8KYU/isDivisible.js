function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) return true;
    return false;
}

isDivisible(3, 3, 4)
// should return false

module.exports = {
    isDivisible,
}