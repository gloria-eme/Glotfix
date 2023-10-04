
import { printMovie } from "../../components/MovieGallery/MovieGallery";
import { savedMoviesList } from "../../components/SavedMovie/SavedMovie";
import { CleanPage } from "../../utils/utils"

export const MyList = () => {
    const movieCard = document.querySelector(".movie-card");
    const moviesContainer = document.querySelector(".movies-container")
    // const myListContainer = document.createElement("div")
    // myListContainer.classList.add("my-list-container")
    
    for (const item of savedMoviesList) { 
        printMovie(movieCard, item)
        CleanPage(moviesContainer)
        moviesContainer.appendChild(movieCard)
        console.log(moviesContainer)
        console.log(savedMoviesList)
    }
    

}


