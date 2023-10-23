import { GenreGalery } from "../../components/MovieGallery/MovieGallery"
import { Nav } from "../../components/Nav/nav"
import { isLogged } from "../../components/Register/register"

import { CleanPage } from "../../utils/utils"
import "./moviesStyle.css"



export const printMovies = () => {
   
    const moviesContainer = document.querySelector(".movies-container")
    CleanPage(moviesContainer);
    GenreGalery("Thriller")
    GenreGalery("Drama")
    GenreGalery("Cartoons")
}

export const Movies = () => {
    Nav()
    printMovies()
    isLogged()
};