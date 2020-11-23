function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num <= 1000 && num % i === 0 && num !== 0) { return `${num} - не является простым числом!` }

        else if (num <= 1000 && num % i !== 0 && num !== 0) { return `${num} - простое число!` }
        else if (num > 1000 && num !== 0) { return `Данные не верны.` }
    }
    if (num === 1) { return `1 - не является простым числом` }
    else if (num === 0) {return `Введите число больше 0.`}
}
    
console.log (isPrime (5))

    


