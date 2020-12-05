// Задание 1.

// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

function getAmountOfNumbers() {
    const array = [6, 0, 7, 13, 96, 105, 107, ""]
let zero = 0;
let oddNumbers = 0;
let evenNumber = 0;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
        if (array[i] === 0) { zero++ }
        else if (array[i] % 2 === 0 && array[i] !== 0 && array[i] !== "") { evenNumber++ }
        else if (array[i] % 2 !== 0 && array[i] !== "") {oddNumbers++}
    }
}
console.log(`Number of zero is ${zero}`);
console.log(`Number of odd numbers is ${oddNumbers}`);
console.log(`Number of even numbers is ${evenNumber}`);
}

getAmountOfNumbers ();
