const repeatString = function(str, amount) {
    if (amount < 0){
        return "ERROR"
    }
    outputString = ""
    for (let i = 0; i < amount; i++){
        outputString += str
    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
