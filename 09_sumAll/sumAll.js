const sumAll = function(num1, num2) {
    sum = 0
    if (num1 < 0 || num2 < 0){
        return "ERROR"}
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"}
    if (typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR"}
    if (num1 < num2){
        lower = num1
        higher = num2}
    else if (num1 > num2){
        lower = num2
        higher = num1
    }
    
    for (let i = lower; i <= higher; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;