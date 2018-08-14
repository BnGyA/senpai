const square = function(x) {
    return x*x;
};

// ES6
const squareArrow = (x) =>{
    return x*x;
};



const multiplier = {
    multiplyBy: 2,
    numbers: [1, 6],
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};


console.log(multiplier.multiply());