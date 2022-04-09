const sumAll = function(num1, num2) {
    if (num1<0 ||num2<0){
        return 'ERROR';
    }
    if (typeof num1 !== 'number' ||typeof num2 !== 'number'){
        return 'ERROR'
    }
    let sum = 0;
    let temp = 0;
    for (let i = 0; i<=(Math.abs((num2-num1))); i++){
        temp += 1;
        sum = sum+temp;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
