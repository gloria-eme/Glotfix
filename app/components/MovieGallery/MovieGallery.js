import { getData } from "../../services/services"
import { displayMovieCard } from "../MovieCard/MovieCard";
import { Scroll } from "./carousel";




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
       

        const prevButton = document.createElement("button")
        prevButton.classList.add("carousel-button", "prev-button")
        const carousel = document.createElement("div")
        carousel.classList.add("carousel")
    
        const nextButton = document.createElement("button")
        nextButton.classList.add("carousel-button", "next-button")

        for (const item of movies) { 
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
        
        genreGallery.appendChild(genreContainer)
        
        const gallery = document.querySelector(".movies-container");
        gallery.appendChild(genreGallery)
    
       
};

export const printMovie = (element, item) => {
    element.innerHTML = `
    <img class="img-carousel" src="${item.image}" alt="movie-cover" id="${item.id}" />
    `;
}






