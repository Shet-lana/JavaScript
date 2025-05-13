/* Задание 1
Реализовать класс, описывающий простой маркер. 
В классе должны быть следующие компоненты:
■ поле, которое хранит цвет маркера;
■ поле, которое хранит количество чернил в маркере (в процентах);
■ метод для печати (метод принимает строку и выводит
текст соответствующим цветом; текст выводится до тех
пор, пока в маркере есть чернила; один не пробельный
символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер,
унаследовав его от простого маркера и добавив метод для заправки
маркера.
Продемонстрировать работу написанных методов */


class Marker {
    constructor(color, inkLevel = 100) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        let outputText = '';
        for (let char of text) {
            if (!char.trim() || this.inkLevel <= 0) break;
            
            // Уменьшаем уровень чернил на 0.5%
            this.inkLevel -= 0.5;
            
            // Добавляем символ к выходному тексту
            outputText += `%c${char}`;
        }
        
        console.log(outputText, `color:${this.color}`);
    }
}

// Класс наследуется от базового класса Marker
class RefillableMarker extends Marker {
    refill(amount) {
        this.inkLevel += amount;
        if (this.inkLevel > 100) this.inkLevel = 100;
    }
}

const marker = new Marker('blue');
marker.print("Hello World!");
console.log(`Остаток чернил: ${marker.inkLevel}%`);

const refillableMarker = new RefillableMarker('green', 50); // Начинаем с половины уровня чернил
refillableMarker.print("This is a test.");
console.log(`Остаток чернил: ${refillableMarker.inkLevel}%`);

// Заправка маркера
refillableMarker.refill(30);
console.log(`Уровень чернил после заправки: ${refillableMarker.inkLevel}%`);

// Повторная печать
refillableMarker.print("After refilling");
console.log(`Остаток чернил: ${refillableMarker.inkLevel}%`);


