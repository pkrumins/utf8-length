module.exports = function (str) {
    var sum = 0;
    for (var i = 0, b = 0; i < str.length; i += b) {
        b = nbytes(str.charCodeAt(i));
        sum += b;
    }
    return sum;
};

function nbytes (b) {
    if (b >= 252) return 6;
    else if (b >= 248) return 5;
    else if (b >= 240) return 4;
    else if (b >= 224) return 3;
    else if (b >= 192) return 2;
    else return 1;
}
