//  1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), 
// подростком (12–18), взрослым (18_60) или пенсионером (60– ...).


let age = prompt('Укажите ваш возраст');
age = parseInt(age);

if (age < 0 || age > 100) {
    alert('Некорректный возраст!');
} else if (age >= 0 && age <= 2) {
    alert('Вы ребенок.');
} else if (age >= 12 && age <= 18) {
    alert('Вы подросток.');
} else if (age >= 18 && age <= 60) {
    alert('Вы взрослый.');
} else {
    alert('Вы пенсионер.');
}


// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).


let keyNumber = prompt('Укажите номер клавиши от 0 до 9:');
keyNumber = parseInt(keyNumber);

switch (keyNumber) {
    case 1:
        alert('Символ: !');
        break;
    case 2:
        alert('Символ: @');
        break;
    case 3:
        alert('Символ: #');
        break;
    case 4:
        alert('Символ: $');
        break;
    case 5:
        alert('Символ: %');
        break;
    case 6:
        alert('Символ: ^');
        break;
    case 7:
        alert('Символ: &');
        break;
    case 8:
        alert('Символ: *');
        break;
    case 9:
        alert('Символ: (');
        break;
    default:
        alert('Неверно введенный символ.');
}


// 3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.

let num = prompt('Введите трехзначное число:');
num = parseInt(num);

const firstDigit = Math.floor(num / 100);
const secondDigit = Math.floor((num % 100) / 10);
const thirdDigit = num % 10;

if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
    alert('Число содержит одинаковые цифры.');
} else {
    alert('Все цифры разные.');
}


// 4. Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let y = prompt('Введите год:');
year = parseInt(y);

if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
    alert('Год високосный.');
} else {
    alert('Год невисокосный.');
}

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let number = prompt('Введите пятиразрядное число:');

// Преобразуем число в строку и переворачиваем её
let reversedNumber = String(number).split('').reverse().join('');

// Используем тернарный оператор для проверки
let res = (number === reversedNumber) ? 'Это палиндром.' : 'Это не палиндром.';

// Вывод результата
alert(res);


// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, 
// в какую валюту хочет перевести: EUR, UAN илиAZN, и получает в ответ соответствующую сумму

let usdAmount = prompt('Введите сумму в долларах:');
let targetCurrency = prompt('Выберите валюту для перевода (EUR, UAH, AZN):').toUpperCase();

// Примерные курсы валют
const rates = {
    EUR: 0.85,
    UAH: 28,
    AZN: 1.75
};

let result = 0;

switch(targetCurrency) {
    case 'EUR':
        result = usdAmount * rates.EUR;
        break;
    case 'UAH':
        result = usdAmount * rates.UAH;
        break;
    case 'AZN':
        result = usdAmount * rates.AZN;
        break;
    default:
        console.log('Неверная валюта.');
        break;
}

console.log(result.toFixed(2));


// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%. 

let purchaseSum = +prompt('Введите сумму покупки:');

let discountRate = 0;

if (purchaseSum >= 500) {
    discountRate = 7;
} else if (purchaseSum >= 300 && purchaseSum < 500) {
    discountRate = 5;
} else if (purchaseSum >= 200 && purchaseSum < 300) {
    discountRate = 3;
} else {
    discountRate = 0;
}

let finalPrice = purchaseSum * (1 - discountRate / 100);

console.log(`Сумма к оплате со скидкой: ${finalPrice.toFixed(2)}`);

// 8. Запросить у пользователя длину окружности и периметр квадрата. 
// Определить, может ли такая окружность поместиться в указанный квадрат

let circleCircumference = +prompt('Введите длину окружности:');
let squarePerimeter = +prompt('Введите периметр квадрата:');

// Радиус окружности r = C / (2 * π)
let radius = circleCircumference / (2 * Math.PI);

// Сторона квадрата a = P / 4
let sideLength = squarePerimeter / 4;

if (radius <= sideLength / 2) {
    console.log('Окружность помещается в квадрат.');
} else {
    console.log('Окружность не помещается в квадрат.');
}

// 9. Задать пользователю 3 вопроса, 
// в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.


let score = 0;

const questions = [
    { question: 'Какой город является столицей Франции?', answers: ['Париж', 'Берлин', 'Рим'], correctAnswer: 0 },
    { question: 'Какое животное является символом Австралии?', answers: ['Кенгуру', 'Коала', 'Дельфин'], correctAnswer: 0 },
    { question: 'Сколько планет в Солнечной системе?', answers: ['8', '9', '10'], correctAnswer: 0 }
];

for (let i = 0; i < questions.length; i++) {
    let answerIndex = +prompt(`${questions[i].question}\n${questions[i].answers.join("\n")}\nВаш ответ (введите номер):`);

    if (answerIndex === questions[i].correctAnswer) {
        score += 2;
        console.log('Правильно!');
    } else {
        console.log('Неправильно.');
    }
}

console.log(`Вы набрали ${score} балла.`);


//10 . Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год.

let day = parseInt(prompt('Введите день (число от 1 до 31):'));
let month = parseInt(prompt('Введите месяц (число от 1 до 12):'));
let year = parseInt(prompt('Введите год (например, 2023):'));

// Обработка високосного года
let leapYear = false;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    leapYear = true;
}

// Месяцы с количеством дней
const daysInMonth = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Проверка на допустимость введённых значений
if (day <= 0 || day > daysInMonth[month - 1]) {
    console.error('Недопустимый день!');
} else if (month <= 0 || month > 12) {
    console.error('Недопустимый месяц!');
} else {
    // Вычисление следующей даты
    if (day < daysInMonth[month - 1]) {
        // Просто увеличиваем день
        day += 1;
    } else if (month < 12) {
        // Переход на следующий месяц
        day = 1;
        month += 1;
    } else {
        // Переход на следующий год
        day = 1;
        month = 1;
        year += 1;
    }

    // Вывод результата
    console.log(`Следующая дата: ${day}/${month}/${year}`);
}

