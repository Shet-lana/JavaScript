// 1. Написать функцию возведения числа в степень.

// Функция возведения числа x в степень n
function power(x, n) {
    if (n === 0)
        return 1;
    else if (n > 0)
        return x * power(x, n - 1);
}

console.log(power(2, 3)); // вывод 8

// 2. Написать функцию поиска наибольшего общего делителя

// Нахождение НОД с использованием алгоритма Евклида
function gcd(a, b) {
    if (b === 0)
        return a;
    else
        return gcd(b, a % b); // Рекурсия продолжается пока остаток от деления != 0
}

console.log(gcd(48, 18)); // вывод 6

// 3. Написать функцию для поиска максимальной цифрыв числе.

// Поиск максимального символа среди цифр числа num
function maxDigit(num) {
    const strNum = String(num);
    if (strNum.length === 1)
        return Number(strNum);
    
    let firstDigit = Number(strNum.charAt(0));
    let restDigitsMax = maxDigit(Number(strNum.slice(1)));
    
    return Math.max(firstDigit, restDigitsMax);
}

console.log(maxDigit(739)); // вывод 9

// 4. Написать функцию, которая определяет простое ли переданное число.

function isPrime(num, divisor = 2) {
    if (num <= 2)
        return num === 2 ? true : false;
    if (num % divisor === 0)
        return false;
    if (divisor * divisor > num)
        return true;
    return isPrime(num, divisor + 1);
}

console.log(isPrime(17)); // вывод true

// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке. 
// Например: число 18 – множители 2 * 3 * 3.

// Разложение числа на простые множители
function primeFactors(n, factor = 2, result = []) {
    if (n === 1)
        return result.join(" * ");
    while (n % factor !== 0 && factor * factor <= n)
        factor++;
    result.push(factor);
    return primeFactors(n / factor, factor, result);
}

console.log(primeFactors(18));  // вывод '2 * 3 * 3'

// 6. Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру. 
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том, что каждое число равно сумме 
// двух предыдущих чисел. Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.

// Вычисление числа Фибоначчи по индексу index
function fibonacci(index) {
    if (index <= 1)
        return index;
    return fibonacci(index - 1) + fibonacci(index - 2);
}

console.log(fibonacci(6)); // вывод 8
