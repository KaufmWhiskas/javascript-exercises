const removeFromArray = function(arr, ...filtered) {
    return arr.filter((num) => !filtered.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
