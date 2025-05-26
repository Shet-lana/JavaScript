// Функция для генерации календаря
function generateCalendar() {
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const calendarDiv = document.getElementById('calendar');

    // Получаем введённые значения
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    if (!isNaN(month) && !isNaN(year)) {
        // Создание нового Date объекта
        let firstDayOfMonth = new Date(year, month - 1, 1); // Месяц начинается с нуля
        let lastDayOfMonth = new Date(year, month, 0).getDate(); // Последний день текущего месяца

        // Название месяцев
        const monthsNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        // День недели первого числа месяца
        let startDay = firstDayOfMonth.getDay();
        if(startDay === 0){ // воскресенье
            startDay = 7;
        }

        // Начало таблицы
        let table = `<table style="width:100%">
                        <caption>${monthsNames[month - 1]}, ${year}</caption>
                        <tr>
                            <th>Пн</th>
                            <th>Вт</th>
                            <th>Ср</th>
                            <th>Чт</th>
                            <th>Пт</th>
                            <th>Сб</th>
                            <th>Вс</th>
                        </tr>`;

        // Заполнение пустых клеток перед первым числом
        let emptyCellsBeforeFirst = startDay - 1;
        while(emptyCellsBeforeFirst > 0){
            table += '<td></td>';
            emptyCellsBeforeFirst--;
        }

        // Генерируем дни месяца
        for(let i = 1; i <= lastDayOfMonth; i++){
            table += `<td>${i}</td>`;
            
            // После каждого седьмого дня добавляем новую строку
            if((startDay + i) % 7 === 0 || i === lastDayOfMonth){
                table += '</tr><tr>';
            }
        }

        // Закрытие последней строки и всей таблицы
        table += '</tr></table>';

        // Отображение результата
        calendarDiv.innerHTML = table;
    } else {
        alert("Ошибка! Пожалуйста, введите корректные данные.");
    }
}