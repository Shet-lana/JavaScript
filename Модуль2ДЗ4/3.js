// Задание 3
// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде строки. 

class CssClass {
    constructor(className) {
        this.className = className;
        this.styles = [];
    }
    
    // Добавление/обновление стили
    setStyle(property, value) {
        const existingIndex = this.styles.findIndex(style => style.property === property);
        
        if (existingIndex !== -1) { // Если такой стиль уже существует, обновляем его
            this.styles[existingIndex].value = value;
        } else { // Иначе добавляем новый стиль
            this.styles.push({ property, value });
        }
    }
    
    // Удаление стиля по названию свойства
    removeStyle(property) {
        this.styles = this.styles.filter(style => style.property !== property);
    }
    
    // Получаем готовый CSS-код
    getCss() {
        let result = `.${this.className} {\n`;
        
        for (const style of this.styles) {
            result += `\t${style.property}: ${style.value};\n`;
        }
        
        return `${result}}\n`;
    }
}


// Пример использования:

// Создаем экземпляр класса
let myCssClass = new CssClass('my-class');

// Устанавливаем стили
myCssClass.setStyle('background-color', '#f0f0f0');
myCssClass.setStyle('font-size', '18px');
myCssClass.setStyle('padding', '10px');

console.log(myCssClass.getCss());

// Обновляем существующий стиль
myCssClass.setStyle('font-size', '20px');

console.log(myCssClass.getCss());

// Убираем один из стилей
myCssClass.removeStyle('padding');

console.log(myCssClass.getCss());
