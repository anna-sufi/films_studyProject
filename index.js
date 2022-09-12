const searchInp = document.querySelector('#search');
const movies = document.querySelectorAll('.movie');

searchInp.addEventListener('keyup', (event)=> {
    const word = event.target.value.toLocaleLowerCase();
    movies.forEach(movie=> {
        movie.querySelector('p').textContent.toLocaleLowerCase().includes(word) ? (movie.style.display = 'block') : (movie.style.display = 'none');
    })
})


