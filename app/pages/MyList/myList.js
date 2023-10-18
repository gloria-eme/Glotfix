import "./myList.css"
import { printMovie } from "../../components/MovieGallery/MovieGallery";
import { savedMoviesList } from "../../components/SavedMovie/SavedMovie";
import { CleanPage } from "../../utils/utils"
import { displayMovieCard } from "../../components/MovieCard/MovieCard";

export const MyList = () => {
    const moviesContainer = document.querySelector(".movies-container")
    CleanPage(moviesContainer);
    const myListContainer = document.createElement("div")
    myListContainer.classList.add("myList-container")
    moviesContainer.appendChild(myListContainer)
    
    const savedMoviesCard = []
  
    for (const item of savedMoviesList) {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        printMovie(movieCard, item)
        savedMoviesCard.push(movieCard)
        myListContainer.appendChild(movieCard)
        
        movieCard.addEventListener("click", () => {
            const selectedMovie = savedMoviesList.find((movie) => movie.id === item.id);
            displayMovieCard(selectedMovie)
            })
    }
}
export  const isMovieSaved = (movieId) => {
    return savedMoviesList.some(movie => movie.id === movieId);
} 

