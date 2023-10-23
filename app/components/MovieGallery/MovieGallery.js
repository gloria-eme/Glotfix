import { getData } from "../../services/services"
import { displayMovieCard } from "../MovieCard/MovieCard";
import { searchMovie } from "../SearchMovie";
import { Scroll } from "./carousel";




export const GenreGalery = async (genre) => {
        const movies = await getData()
        const filterGenre = movies.filter((movie) => movie.genre == genre)
    
        const genreGalery = document.createElement("div")
        genreGalery.classList.add("genre-galery");
        genreGalery.innerHTML += `
            <div class="genre-title"> 
                <h1>${genre} movies</h1>
            </div>
            
            `
        const genreContainer = document.createElement("div")
        genreContainer.classList.add("genre-container");
        searchMovie(movies)

        const prevButton = document.createElement("button")
        prevButton.classList.add("carousel-button", "prev-button")
        const carousel = document.createElement("div")
        carousel.classList.add("carousel")
    
        const nextButton = document.createElement("button")
        nextButton.classList.add("carousel-button", "next-button")
        
        for (const item of filterGenre) { 
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
           
           printMovie(movieCard, item)
            carousel.appendChild(movieCard);
            movieCard.addEventListener("click", () => {
            const selectedMovie = movies.find((movie) => movie.id === item.id);
            displayMovieCard(selectedMovie)
            })
           Scroll()
        };
        genreContainer.appendChild(prevButton)
        genreContainer.appendChild(carousel)
        genreContainer.appendChild(nextButton)
       
        genreGalery.appendChild(genreContainer)
        
        const moviesContainer = document.querySelector(".movies-container");
        moviesContainer.appendChild(genreGalery)
    
};

export const printMovie = (element, item) => {
    element.innerHTML = `
    <img class="img-carousel" src="${item.image}" alt="movie-cover" id="${item.id}" />
    `;
    
}






