import { GenreGallery } from "../../components/MovieGallery/MovieGallery"
import { CleanPage } from "../../utils/utils"
import "./moviesStyle.css"

const app = document.querySelector("#app")

export const printMovies = () => {
    const section = document.createElement("section")
    section.classList.add("movies-container");
    CleanPage(app);
    app.appendChild(section)
    GenreGallery("Thriller")
    GenreGallery("Drama")
    GenreGallery("Cartoon")
}

export const Movies = () => {
    printMovies()
};