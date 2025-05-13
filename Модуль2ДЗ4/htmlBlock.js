// Задание 4
// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■ коллекцию стилей, описанных с помощью класса CssClass;
// ■ корневой элемент, описанный с помощью класса HtmlElement;
// ■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, 
// а потом все html содержимое из корневого тега и его вложенных элементов).
// С помощью написанных классов реализовать блок и добавить его на страницу с помощью document.write()


// Класс для описания одного CSS-класса
class CssClass {
    constructor(name, rules = {}) {
        this.name = name;
        this.rules = rules;
    }
    
    // Метод для вывода CSS-кода
    render() {
        let cssRules = '';
        for (let rule in this.rules) {
            cssRules += `${rule}: ${this.rules[rule]};\n`;
        }
        return `.${this.name} {\n${cssRules}\n}`;
    }
}

// Класс для описания одного HTML-элемента
class HtmlElement {
    constructor(tagName, attributes = {}, children = []) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.children = children;
    }
    
    // Метод для рендеринга HTML элемента
    render() {
        let attrsStr = Object.keys(this.attributes).map(attr => `${attr}="${this.attributes[attr]}"`).join(' ');
        
        if (!attrsStr.length) {
            attrsStr = '';
        } else {
            attrsStr = ' ' + attrsStr;
        }
        
        const startTag = `<${this.tagName}${attrsStr}>`;
        const endTag = `</${this.tagName}>`;
        
        const innerContent = this.children.map(child => child.render ? child.render() : child).join('');
        
        return startTag + innerContent + endTag;
    }
}

// Основной класс для блока HTML-документа
class HtmlBlock {
    constructor(styles = [], rootElement) {
        this.styles = styles;
        this.rootElement = rootElement;
    }
    
    // Генерируем полный HTML-код
    getCode() {
        let styleSection = '<style>\n';
        this.styles.forEach(style => {
            styleSection += style.render();
        });
        styleSection += '</style>';
        
        const content = this.rootElement.render();
        
        return styleSection + '\n' + content;
    }
}

// Создание объектов для нашего примера
const wrapStyle = new CssClass('wrap', {display: 'flex'});
const blockStyle = new CssClass('block', {width: '300px', margin: '10px'});
const imgStyle = new CssClass('img', {width: '100%'});
const textStyle = new CssClass('text', {'text-align': 'justify'});

// Создаем два одинаковых блока текста
const blocks = [];
for(let i = 0; i < 2; i++) {
    const h3 = new HtmlElement('h3', {}, ['What is Lorem Ipsum?']);
    const img = new HtmlElement('img', {src: 'loremipsum.jpg', alt: 'Lorem Ipsum', class: 'img'});
    const pText = `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "` +
                  `<a href="https://www.lipsum.com/" target="_blank">More...</a>`;
    const paragraph = new HtmlElement('p', {class: 'text'}, [pText]);
    const div = new HtmlElement('div', {class: 'block'}, [h3, img, paragraph]);
    blocks.push(div);
}

// Оборачиваем блоки в общий контейнер
const wrapperDiv = new HtmlElement('div', {id: 'wrapper', class: 'wrap'}, blocks);

// Собираем весь блок вместе
const blockStyles = [wrapStyle, blockStyle, imgStyle, textStyle];
const htmlBlock = new HtmlBlock(blockStyles, wrapperDiv);

// Получение финального HTML-кода
document.write(htmlBlock.getCode());