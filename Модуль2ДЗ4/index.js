 
/* Задание 2
 Реализовать класс, описывающий html элемент.
 Класс HtmlElement должен содержать внутри себя:
 ■ название тега;
 ■ самозакрывающийся тег или нет;
 ■ текстовое содержимое;
 ■ массив атрибутов;
 ■ массив стилей;
 ■ массив вложенных таких же тегов;
 ■ метод для установки атрибута;
 ■ метод для установки стиля;
 ■ метод для добавления вложенного элемента в конец текущего элемента;
 ■ метод для добавления вложенного элемента в начало текущего элемента;
 ■ метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов.
 С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().
 Обратите внимание. Чтобы получить весь этот html в виде строки должно быть достаточно вызвать 
 метод getHtml только у тега с идентификатором wrapper.  */



 class HtmlElement {
    constructor(tagName, selfClosing = false, textContent = '') {
        this.tagName = tagName;       // Название тега
        this.selfClosing = selfClosing; // Самозакрывающийся тег или нет
        this.textContent = textContent; // Текстовое содержимое
        this.attributes = [];          // Массив атрибутов
        this.styles = [];              // Массив стилей
        this.children = [];           // Массив вложенных элементов
    }

    setAttribute(name, value) {
        this.attributes.push({ name, value }); // Метод для установки атрибута
    }

    setStyle(name, value) {
        this.styles.push({ name, value }); // Метод для установки стиля
    }

    appendChild(element) {
        this.children.push(element); // Метод для добавления вложенного элемента в конец
    }

    prependChild(element) {
        this.children.unshift(element); // Метод для добавления вложенного элемента в начало
    }

    getHtml() {
        let attributesString = this.attributes.map(attr => `${attr.name}="${attr.value}"`).join(' ');
        let stylesString = this.styles.map(style => `${style.name}: ${style.value};`).join(' ');
        let stylesAttribute = stylesString ? ` style="${stylesString}"` : '';
    
        const startTag = `<${this.tagName}${this.selfClosing ? '/' : ''}${attributesString ? ' ' + attributesString : ''}${stylesAttribute}>`;
        const endTag = this.selfClosing ? '' : `</${this.tagName}>`;
        let innerHtml = this.textContent;

        for (const child of this.children) {
            innerHtml += child.getHtml(); // Генерация HTML для вложенных элементов
        }

        return `${startTag}${innerHtml}${endTag}`;
    }
}

// Использование класса для реализации заданного блока HTML

// Создаем контейнер верхнего уровня (#wrapper)
const wrapperDiv = new HtmlElement("div");
wrapperDiv.setAttribute("id", "wrapper");
wrapperDiv.setStyle("display: flex;");

// Внутри него размещаем два контейнера
const firstContainer = new HtmlElement("div");
firstContainer.setStyle("width: 300px; margin: 10px;");

// Устанавливаем заголовок
const titleH3 = new HtmlElement("h3");
titleH3.textContent = "What is Lorem Ipsum?";
firstContainer.appendChild(titleH3);

// Размещаем изображение
const image = new HtmlElement("img");
image.setAttribute("src", "lipsum.jpg");
image.setAttribute("alt", "Lorem Ipsum");
image.setStyle("width", "100%");
firstContainer.appendChild(image);

// Подготавливаем абзац с текстом и ссылкой
const paragraph = new HtmlElement("p");
paragraph.setStyle("text-align", "justify");
paragraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

// Добавляем анкорную ссылку
const link = new HtmlElement("a");
link.setAttribute("href", "https://www.lipsum.com/");
link.setAttribute("target", "_blank");
link.textContent = "More...";
paragraph.appendChild(link);

firstContainer.appendChild(paragraph);

// Теперь создаем второй контейнер идентичный первому
const secondContainer = new HtmlElement("div");
secondContainer.setStyle("width: 300px; margin: 10px;");

// Создаем копии элементов вручную
const clonedTitleH3 = new HtmlElement("h3");
clonedTitleH3.textContent = titleH3.textContent;

const clonedImage = new HtmlElement("img");
clonedImage.setAttribute("src", image.attributes.find(attr => attr.name === "src").value);
clonedImage.setAttribute("alt", image.attributes.find(attr => attr.name === "alt").value);
clonedImage.setStyle("width", "100%");

const clonedParagraph = new HtmlElement("p");
clonedParagraph.setStyle("text-align", "justify");
clonedParagraph.textContent = paragraph.textContent;

// Копируем ссылку
const clonedLink = new HtmlElement("a");
clonedLink.setAttribute("href", link.attributes.find(attr => attr.name === "href").value);
clonedLink.setAttribute("target", link.attributes.find(attr => attr.name === "target").value);
clonedLink.textContent = link.textContent;
clonedParagraph.appendChild(clonedLink);

secondContainer.appendChild(clonedTitleH3);
secondContainer.appendChild(clonedImage);
secondContainer.appendChild(clonedParagraph);

// Оба контейнера помещаются в родительский wrapper
wrapperDiv.appendChild(firstContainer);
wrapperDiv.appendChild(secondContainer);

// Получаем финальный HTML-код
document.write(wrapperDiv.getHtml()); 

