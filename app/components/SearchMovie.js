import { CleanPage } from "../utils/utils";
import { printMovie } from "./MovieGallery/MovieGallery";

// const app = document.querySelector("#app")
const moviesContainer = document.querySelector(".movies-container")

export const searchMovie = (movies) => {
    const search = document.querySelector(".search-movie");

    search.innerHTML = `
        <input type="text" id="search-input" placeholder="Buscar por nombre o director">
        <button id="search-button">Buscar</button>
    `;
    
    const searchInput = document.querySelector("#search-input");
    const searchButton = document.querySelector("#search-button");

    searchButton.addEventListener ("click", () => {
       const searchTerm = searchInput.value.toLowerCase(); 
       CleanPage(moviesContainer)
        const filteredMovies = movies.filter((movie)=> {
            const lowerCaseName = movie.name.toLowerCase();
            return lowerCaseName.includes(searchTerm)
        });
        displaySearching(filteredMovies);
    })
};

const displaySearching = (results) => {
    const searchMovie = document.querySelector(".search-movie")
   const carousel = document.createElement("div")
   carousel.classList.add("carousel")
   
    if (results.length === 0) {
        searchMovie.innerHTML = "No se encontraron resultados"
       
    } else {
        for (const movie of results) {
            
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-car");
            printMovie(movieCard, movie)
            carousel.appendChild(movieCard)
            moviesContainer.appendChild(carousel)
        }
    };
};