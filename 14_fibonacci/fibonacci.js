const fibonacci = function(index) {
    if(index < 0){
        return "OOPS"
    }
    let fibonacci = [0, 1, 1]
    for(let i = 2; i <= index; i++){
        fibonacci.push(fibonacci.at(-1) + fibonacci.at(-2))
    };
    return fibonacci[index]
};

// Do not edit below this line
module.exports = fibonacci;
