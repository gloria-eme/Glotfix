import { getData } from "../../services/services"
import { displayMovieCard } from "../MovieCard/MovieCard";




export const GenreGallery = async (param) => {
        const movies = await getData(param)
        const genreGallery = document.createElement("div")
        genreGallery.classList.add("genre-gallery");
        genreGallery.innerHTML += `
            <div class="genre-title"> 
                <h1>${param} movies</h1>
            </div>
            
            `
        const genreContainer = document.createElement("div")
        genreContainer.classList.add("genre-container");
        genreGallery.appendChild(genreContainer)

        for (const item of movies) { 
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            printMovie(movieCard, item)
            genreContainer.appendChild(movieCard);
            
            movieCard.addEventListener("click", () => {
            const selectedMovie = movies.find((movie) => movie.id === item.id);
            displayMovieCard(selectedMovie)
            })
        };
        const gallery = document.querySelector(".movies-container");
        gallery.appendChild(genreGallery)
};

export const printMovie = (element, item) => {
    element.innerHTML = `
    <img src="${item.image}" alt="movie-cover" id="${item.id}" />
    `;
}






