var nameVar = "Ben";
var nameVar = "Yo";

// In JS you can redeclare a var
//nameVar = 'Mike';


// In ES6 you cant redeclare a var
console.log('nameVar :', nameVar);

let nameLet = 'Ju';
nameLet = 'Bro';
//let nameLet = 'Yo'; -> error
console.log('nameLet :', nameLet);

const nameConst = 'Frank';
console.log('nameConst :', nameConst);


var fullName = 'Benjamin Rochez';
if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

//console.log(firstName); // -> wont work because const & let are also tied to