function f(input:boolean) {
    let a = 100

    if (input) {
        let b = a + 1212121
        return b;
    }
    return a;
}

console.log(f(true))
console.log(f(false))