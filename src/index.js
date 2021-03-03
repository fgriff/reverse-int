module.exports = function reverse (n) {
    const absN = Math.abs(n);
    return +String(absN).split('').reverse().join('');
}
