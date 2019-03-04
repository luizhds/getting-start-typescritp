function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1212121;
        return b;
    }
    return a;
}
console.log(f(true));
console.log(f(false));
