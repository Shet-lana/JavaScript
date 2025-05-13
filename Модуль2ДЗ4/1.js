/* Задание 1
 Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
 ■ поле, хранящее радиус окружности;
 ■ get-свойство, возвращающее радиус окружности;
 ■ set-свойство, устанавливающее радиус окружности;
 ■ get-свойство, возвращающее диаметр окружности;
 ■ метод, вычисляющий площадь окружности;
 ■ метод, вычисляющий длину окружности.
 Продемонстрировать работу свойств и методов */

class Circle {
    constructor(radius = 0) {
        this._radius = radius;
    }

    // Get-свойство для радиуса
    get radius() {
        return this._radius;
    }

    // Set-свойство для радиуса
    set radius(value) {
        if (value >= 0) {
            this._radius = value;
        } else {
            throw new Error("Радиус не может быть отрицательным");
        }
    }

    // Get-свойство для диаметра
    get diameter() {
        return 2 * this.radius;
    }

    // Метод для вычисления площади
    area() {
        return Math.PI * this.radius ** 2;
    }

    // Метод для вычисления длины окружности
    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Тестируем класс
const circle = new Circle();
circle.radius = 5;
console.log(`Радиус: ${circle.radius}`); // Радиус: 5
console.log(`Диаметр: ${circle.diameter}`); // Диаметр: 10
console.log(`Площадь: ${circle.area()}`); // Площадь: ~78.54
console.log(`Длина окружности: ${circle.circumference()}`); // Длина окружности: ~31.42