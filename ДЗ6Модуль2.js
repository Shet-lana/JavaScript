// Задание 1

// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
// и следующие функции для работы с этим объектом. 
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// Создаем объект автомобиля
let car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2020,
    avgSpeed: 80 // км/ч
};

// Функция выводит информацию об автомобиле
function displayCarInfo(car) {
    console.log(`Производитель: ${car.manufacturer}`);
    console.log(`Модель: ${car.model}`);
    console.log(`Год выпуска: ${car.year}`);
    console.log(`Средняя скорость: ${car.avgSpeed} км/ч`);
}

// Функция вычисляет необходимое время движения для заданного расстояния
function calculateTravelTime(distance, speed) {
    let totalHours = distance / speed;
    
    // Количество остановок на отдых (каждые 4 часа пути)
    let breaksCount = Math.floor(totalHours / 4);
    
    // Общее время с учётом отдыха
    return totalHours + breaksCount;
}

displayCarInfo(car); // вывод информации об авто

// пример расчёта времени для маршрута длиной 400 км
console.log('Необходимое время:', calculateTravelTime(400, car.avgSpeed)); 

// Задание 2

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом.
//1. Функция сложения 2-х объектов-дробей.
//2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби


// Объект дроби
let fraction1 = { numerator: 1, denominator: 2 };
let fraction2 = { numerator: 1, denominator: 3 };

// Функция возвращает НОД двух чисел
function gcd(a, b) {
    while(b !== 0){
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

// Сокращение дроби
function reduceFraction(fraction) {
    const divisor = gcd(fraction.numerator, fraction.denominator);
    fraction.numerator /= divisor;
    fraction.denominator /= divisor;
}

// Складывает две дроби
function addFractions(frac1, frac2) {
    let resultNumerator = frac1.numerator * frac2.denominator + frac2.numerator * frac1.denominator;
    let resultDenominator = frac1.denominator * frac2.denominator;
    let result = {numerator: resultNumerator, denominator: resultDenominator};
    reduceFraction(result);
    return result;
}

// Вычитает одну дробь из другой
function subtractFractions(frac1, frac2) {
    let resultNumerator = frac1.numerator * frac2.denominator - frac2.numerator * frac1.denominator;
    let resultDenominator = frac1.denominator * frac2.denominator;
    let result = {numerator: resultNumerator, denominator: resultDenominator};
    reduceFraction(result);
    return result;
}

// Умножение дробей
function multiplyFractions(frac1, frac2) {
    let resultNumerator = frac1.numerator * frac2.numerator;
    let resultDenominator = frac1.denominator * frac2.denominator;
    let result = {numerator: resultNumerator, denominator: resultDenominator};
    reduceFraction(result);
    return result;
}

// Деление дробей
function divideFractions(frac1, frac2) {
    let resultNumerator = frac1.numerator * frac2.denominator;
    let resultDenominator = frac1.denominator * frac2.numerator;
    let result = {numerator: resultNumerator, denominator: resultDenominator};
    reduceFraction(result);
    return result;
}

// Примеры операций над дробями
console.log(addFractions(fraction1, fraction2));
console.log(subtractFractions(fraction1, fraction2));
console.log(multiplyFractions(fraction1, fraction2));
console.log(divideFractions(fraction1, fraction2));

// Задание 3

// Создать объект, описывающий время (часы, минуты, секунды), 
// и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество секунд.
// 3. Функция изменения времени на переданное количество минут.
// 4. Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. 
// Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
    hours: 20,
    minutes: 30,
    seconds: 45
};

// Функция добавления ведущего нуля
function padZero(num) {
    return num.toString().padStart(2, '0');
}

// Форматирует время для отображения на экране с правильным форматом (hh:mm:ss)
function formatTime(timeObj) {
    return `${padZero(timeObj.hours)}:${padZero(timeObj.minutes)}:${padZero(timeObj.seconds)}`;
}

// Изменяет время на указанное число секунд
function changeBySeconds(timeObj, sec) {
    timeObj.seconds += sec;
    if (timeObj.seconds >= 60) {
        timeObj.minutes += Math.floor(timeObj.seconds / 60);
        timeObj.seconds %= 60;
    }
    normalizeMinutesAndHours(timeObj);
}

// Изменяет время на указанное число минут
function changeByMinutes(timeObj, min) {
    timeObj.minutes += min;
    normalizeMinutesAndHours(timeObj);
}

// Изменяет время на указанное число часов
function changeByHours(timeObj, hrs) {
    timeObj.hours += hrs;
    normalizeMinutesAndHours(timeObj);
}

// Приводит часы и минуты к правильному виду (менее 24 часов)
function normalizeMinutesAndHours(timeObj) {
    if (timeObj.minutes >= 60) {
        timeObj.hours += Math.floor(timeObj.minutes / 60);
        timeObj.minutes %= 60;
    }
    if (timeObj.hours >= 24) {
        timeObj.hours %= 24;
    }
}

// Вывод текущего времени
console.log(formatTime(time));
changeBySeconds(time, 30); // добавляем 30 секунд
console.log(formatTime(time)); // проверяем новое значение времени
changeByMinutes(time, 30);   // добавляем 30 минут
console.log(formatTime(time)); // проверяем новое значение времени
changeByHours(time, 1);      // добавляем 1 час
console.log(formatTime(time)); // проверяем новое значение времени