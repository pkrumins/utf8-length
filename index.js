module.exports = function (str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += nbytes(str.charCodeAt(i));
    }
    return sum;
};

function nbytes (c) {
    if (c >= 2048) return 3;
    if (c >= 128) return 2;
    return 1;
}
