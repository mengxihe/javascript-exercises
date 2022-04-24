const fibonacci = function(num) {
    let number = Number(num);
    if (number<0) {
        return 'OOPS'
    } else if (number == 0 || number == 1) {
        return number;
    }

    return fibonacci (number-1) + fibonacci (number-2);
};

// Do not edit below this line
module.exports = fibonacci;
