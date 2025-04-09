// Задание 1: Написать функцию, которая принимает 2 числа и возвращает -1, 
// если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function compareNumbers(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

console.log(compareNumbers(5, 10)); // Возвращает -1 (5 меньше 10)
console.log(compareNumbers(15, 10)); // Возвращает 1 (15 больше 10)
console.log(compareNumbers(7, 7)); // Возвращает 0 (оба числа равны)


// Задание 2: Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // Результат: 120 (1*2*3*4*5)
console.log(factorial(3)); // Результат: 6 (1*2*3)
console.log(factorial(1)); // Результат: 1 (1)


// Задание 3: Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.

function combineDigits(a, b, c) {
    return Number(`${a}${b}${c}`);
}

console.log(combineDigits(1, 4, 9)); // Выведет: 149
console.log(combineDigits(2, 0, 1)); // Выведет: 201

// Задание 4: Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function calculateArea(length, width) {
    if (width === undefined) {
        // Один аргумент передан — считаем квадрат
        return length * length;
    }
    // Два аргумента — считаем прямоугольник
    return length * width;
}


console.log(calculateArea(5)); // Вернёт 25
console.log(calculateArea(3, 4)); // Вернёт 12


// Задание 5: Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

function isPerfectNumber(num) {
    let sumDivisors = 0;
    
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumDivisors += i;
        }
    }
    
    return sumDivisors === num;
}

console.log(isPerfectNumber(6)); // Вернёт true
console.log(isPerfectNumber(7)); // Вернёт false

// Задание 6: Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее 
// функцию, чтобы узнавать, совершенное число или нет.

function findPerfectNumbers(min, max) {
    const perfectNumbers = [];
    
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    
    return perfectNumbers;
}

console.log(findPerfectNumbers(1, 12)); // Вернёт 6 (Делителями числа 6 являются: 1, 2, 3 - в сумме 6)
console.log(findPerfectNumbers(6, 100)); // Вернёт 6, 28 (Делителями числа 28 являются: 1, 2, 4, 7, 14 - в сумме 28)

// Задание 7: Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран 
// в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, 
// то выводить их как 00.


function formatTime(hours, minutes = 0, seconds = 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

console.log(formatTime(23, 59, 59)); // Вывод: "23:59:59"
console.log(formatTime(5));          // Вывод: "05:00:00"
console.log(formatTime(11, 30));     // Вывод: "11:30:00"
console.log(formatTime(0, 45, 22));  // Вывод: "00:45:22"

// Задание 8: Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

console.log(timeToSeconds(1, 30, 45)); // Вывод: 5445 (1 час, 30 минут и 45 секунд в секундах)


// Задание 9: Написать функцию, которая принимает количество секунд, переводит их в часы, 
// минуты и секунды и возвращает в виде строки «чч:мм:сс».

function secondsToTimeString(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    
    const minutes = Math.floor(totalSeconds / 60);
    totalSeconds %= 60;
    
    const seconds = totalSeconds;
    
    return formatTime(hours, minutes, seconds);
}

console.log(secondsToTimeString(3800));   // Вывод: 01:03:20 

// Задание 10: Написатьфункцию, которая считает разницу между датами. Функция принимает 6 параметров, 
// которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания 
// используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу 
// в секундах, а потом разницу переведите обратно в «чч:мм:сс».

function dateDifference(y1, m1, d1, h1, min1, sec1, y2, m2, d2, h2, min2, sec2) {
    const date1InSeconds = timeToSeconds(h1, min1, sec1);
    const date2InSeconds = timeToSeconds(h2, min2, sec2);
    
    const differenceInSeconds = Math.abs(date1InSeconds - date2InSeconds);
    
    return secondsToTimeString(differenceInSeconds);
}

const result = dateDifference(2023, 10, 15, 12, 34, 56, 2023, 10, 16, 13, 37, 58);
console.log(result); // Вывод: "01:03:02"

