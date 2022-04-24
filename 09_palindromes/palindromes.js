const palindromes = function (string) {
    let re = /[\W_]/g
    let lowString = string.toLowerCase().replace(re, '');
    let reverseString = lowString.split('').reverse().join('');
    return reverseString === lowString;
};

// Do not edit below this line
module.exports = palindromes;
