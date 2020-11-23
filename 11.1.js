function getAmountOfNumbers () {const array = [6, 0, 7, 13, 96, 105, 107, ""]
let zero = 0;
let oddNumbers = 0;
let evenNumber = 0;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i]) && array[i] === 0) { zero++ }
    else if (typeof array[i] === "number" && !isNaN(array[i]) && array[i] % 2 === 0 && array[i] !== 0 && array[i] !== "") { evenNumber++ }
    else if (typeof array[i] === "number" && !isNaN(array[i]) && array[i] % 2 !== 0 && array[i] !== "") {oddNumbers++}
}
console.log(`Number of zero is ${zero}`);
console.log(`Number of odd numbers is ${oddNumbers}`);
console.log(`Number of even numbers is ${evenNumber}`);
}

getAmountOfNumbers ();
