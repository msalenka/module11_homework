// Задание 3.

// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает
// сумму этих двух чисел.Выведите в консоль результат.


function getNum(num1) {

    return function getNum2(num2) {
        console.log(num1 + num2);
    }

}
const getSum = getNum(2);
getSum(55);

