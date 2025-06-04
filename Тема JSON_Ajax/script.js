// API ключ для OMDB
const apiKey = 'faf7125f';
let currentPage = 1;

// Обработчик формы поиска
document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.trim();
    const type = document.getElementById('typeSelect').value;
    if (!searchTerm) return;
    await fetchMovies(searchTerm, type);
});

// Получение списка фильмов
async function fetchMovies(title, type) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(title)}&type=${type}&page=${currentPage}&apikey=${apiKey}`);
        const data = await response.json();
        
        // Проверяем наличие фильмов
        if (data.Response === 'False') {
            alert("Нет найденных фильмов");
            clearResults(); // Очищаем предыдущие результаты
            return;
        }
        
        renderResults(data.Search || []);
        createPagination(data.totalResults);
    } catch (error) {
        console.error('Ошибка загрузки фильмов:', error);
    }
}

// Отображение результатов поиска
function renderResults(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // очищаем старые данные
    if (movies.length === 0) {
        resultsDiv.textContent = 'Фильмы не найдены.';
        return;
    }
    const ul = document.createElement('ul');
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${movie.Title}</strong> (${movie.Year}) <button onclick="showDetails('${movie.imdbID}')">Подробнее</button>`;
        ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
}

// Показ подробностей о фильме
function showDetails(imdbID) {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = `
                <h2>${data.Title}</h2>
                <img src="${data.Poster}" alt="${data.Title} Постер"><br>
                Год выпуска: ${data.Year}<br>
                Жанр: ${data.Genre}<br>
                Сюжет: ${data.Plot}<br>
                Актёры: ${data.Actors}<br>
                Режиссёр: ${data.Director}<br>
                Рейтинг IMDb: ${data.imdbRating}
            `;
        })
        .catch(error => console.error('Ошибка загрузки деталей:', error));
}

// Создание навигации страниц
function createPagination(totalResults) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';
    const totalPages = Math.ceil(totalResults / 10);
    for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = i.toString();
        link.addEventListener('click', () => {
            currentPage = i;
            fetchMovies(document.getElementById('searchInput').value.trim(), document.getElementById('typeSelect').value);
        });
        if (i === currentPage) link.classList.add('active');
        paginationDiv.appendChild(link);
    }
}

// Очистка предыдущих результатов
function clearResults() {
    document.getElementById('results').innerHTML = '';
    document.getElementById('pagination').innerHTML = '';
    document.getElementById('details').innerHTML = '';
}