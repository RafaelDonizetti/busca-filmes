let nomeFilmeRef = document.getElementById('movie-name');
let buscaBtn = document.getElementById('busca-btn');
let resultado = document.getElementById('resultado');
const key = "99309150"

let getMovie = () => {
    let movieName = nomeFilmeRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`

    // se o input estiver vazio
    if (movieName.lenght <= 0) {
        resultado.innerHTML = `<h3 class = 'msg'>Escreva algum nome de filme ou série para fazer a busca...</h3>`
    }
    // Se o input não estiver vazio
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
                if (data.Response == 'True') {
                    resultado.innerHTML = `
                <div class = "info">
                  <img src = ${data.Poster} class = "poster">
                  <h2>${data.Title}</h2>
                    <div class = "rating">
                      <img src = "star-icon.svg">
                      <h4>${data.imdbRating}</h4>
                    </div>

                    <div class = "details">
                      <span><h3>indicada:</h3> ${data.Rated}</span>
                      <span><h3>Ano de lançamento:</h3> ${data.Year}</span>
                      <span><h3>Tempo de duração:</h3> ${data.Runtime}</span>
                    </div>

                    <div class = "genre">
                    <h3>Genêro</h3>  
                      <div>
                      ${data.Genre.split(",").join
                      ("<div><div>")}
                      </div>
                    </div>
                </div>
                <div class = "second-info">
                    <div class = "sinopse">
                    <h3>Sinopse:</h3>
                    <p>${data.Plot}</p>
                    </div>

                    <div class = "elenco">
                    <h3>Elenco:</h3>
                    <p>${data.Actors}</p>
                    </div>
                  </div>
                `;

                } else {
                    resultado.innerHTML = `<h3 class = 'msg'>nenhum filme com esse nome encontrado ou não escreveu...</h3>`
                };
            })
            // Se acontecer algum erro
            .catch(() => {
                resultado.innerHTML = `<h3 class = 'msg'>Aconteceu algum erro...</h3>`
            })
    }
}

buscaBtn.addEventListener("click", getMovie)
window.addEventListener("load", getMovie)