a = 3; // creating a number primitive
b = new Number(3); // using the "new" operator to create a new Number object (3)
console.log(a == b); // using == to make a coercion
console.log(a === b); // not using coercion

c = Number(3); // not using the "new" operator, it will just execute the function Number, c will be a primitive number 3
console.log(a === c); // checking if it's true