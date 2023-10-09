
import { printMovie } from "../../components/MovieGallery/MovieGallery";
import { savedMoviesList } from "../../components/SavedMovie/SavedMovie";
import { CleanPage } from "../../utils/utils"

export const MyList = () => {
    const moviesContainer = document.querySelector("#app")
    const genreGallery = document.querySelector(".genre-gallery")
    CleanPage(moviesContainer);
    const savedMoviesCard = []
  
    for (const item of savedMoviesList) {
       
        CleanPage(genreGallery)
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        printMovie(movieCard, item)
        savedMoviesCard.push(movieCard)
    }

    for (const card of savedMoviesCard) {
        genreGallery.appendChild(card)
    }
    moviesContainer.appendChild(genreGallery)
    
}


