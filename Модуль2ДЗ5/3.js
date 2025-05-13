/* Задание 3
Реализовать класс Employee, описывающий работника, и создать массив работников банка.
Реализовать класс EmpTable для генерации html кода таблицы
со списком работников банка. Массив работников необходимо
передавать через конструктор, а получать html код с помощью
метода getHtml().
Создать объект класса EmpTable и вывести на экран результат
работы метода getHtml().*/

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }
    
    // Метод возвращает строку HTML-кода таблицы
    getHtml() {
        let tableHTML = '<table border="1">';
        
        // Заголовок таблицы
        tableHTML += `
            <tr>
                <th>Имя</th>
                <th>Должность</th>
                <th>Зарплата</th>
            </tr>
        `;
        
        // Заполнение строк таблицы сотрудниками
        for(let employee of this.employees) {
            tableHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary}</td>
                </tr>
            `;
        }
        
        tableHTML += '</table>';
        return tableHTML;
    }
}



/*Задание 4
Реализовать класс StyledEmpTable, который наследуется от
класса EmpTable. Добавить метод getStyles(), который возвращает
строку со стилями для таблицы в тегах style. Переопределить
метод getHtml(), который добавляет стили к тому, что возвращает
метод getHtml() из родительского класса.
Создать объект класса StyledEmpTable и вывести на экран
результат работы метода getHtml().*/

class StyledEmpTable extends EmpTable {
    // Возвращает строку со стилями для таблицы
    getStyles() {
        return `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                
                th, td {
                    padding: 8px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                
                tr:nth-child(even){background-color: #f2f2f2;}
            
                th {
                    background-color: #4CAF50;
                    color: white;
                }
            </style>
        `;
    }

    // Переопределяем метод getHtml()
    getHtml() {
        const styles = this.getStyles();
        const htmlContent = super.getHtml(); // получаем исходную таблицу от базового класса
        return `${styles}${htmlContent}`;
    }
}

// Создаем объекты сотрудников
const employees = [
    new Employee("Иван Иванов", "Менеджер", 70000),
    new Employee("Анна Петрова", "Кассир", 50000),
    new Employee("Сергей Смирнов", "Бухгалтер", 60000)
];

// Генерируем объект StyledEmpTable
const styledEmpTable = new StyledEmpTable(employees);

// Получаем HTML-код таблицы с стилями
document.write(styledEmpTable.getHtml());