module.exports = function reverse(n) {
    const needNumber = Math.abs(n);
    const str = String(needNumber);
    const needStr = str.split("").reverse().join("");
    return Number(needStr);
};
