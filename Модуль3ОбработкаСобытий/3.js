/*Создать html-страницу с футбольным полем, которое занимает всю ширину и высоту экрана, и мячом размером 100 на 100
пикселей.
Сделать так, чтобы при клике мышкой по полю, мяч плавно
перемещался на место клика. Учтите: необходимо, чтобы центр
мяча останавливался именно там,где был совершен клик мышкой.
Также предусмотрите, чтобы мяч не выходил за границы поля*/

document.addEventListener('DOMContentLoaded', () => {
    const field = document.querySelector('#field');
    const ball = document.createElement('div');
    ball.id = 'ball';
    field.appendChild(ball);
    
    // Функция обработки кликов
    function handleClick(event) {
        let x = event.clientX - window.scrollX;
        let y = event.clientY - window.scrollY;
        
        // Вычисляем положение центра мяча относительно края окна браузера
        let ballRadius = ball.offsetWidth / 2;
        let newLeft = Math.max(ballRadius, Math.min(x - ballRadius, field.offsetWidth - ballRadius));
        let newTop = Math.max(ballRadius, Math.min(y - ballRadius, field.offsetHeight - ballRadius));
        
        // Устанавливаем новое положение мяча
        ball.style.transform = `translate(${newLeft}px, ${newTop}px)`;
    }
    
    // Обработчик события click
    field.addEventListener('click', handleClick);
});