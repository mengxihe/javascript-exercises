const reverseString = function(str) {
    let splitString = str.split('');
    let reversedString = splitString.reverse();
    let joinString = reversedString.join('');
    return joinString;
};

// Do not edit below this line
module.exports = reverseString;
