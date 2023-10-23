import { CleanPage } from "../../utils/utils"
import "./movieCardStyle.css"
import { savedMovies } from "../SavedMovie";
import { isMovieSaved } from "../../pages/MyList/myList";

const movieCardContainer = document.createElement("div");
    movieCardContainer.classList.add("movie-card-container");

export const displayMovieCard = (item) => {   
    
    printCardMovie(movieCardContainer, item)
    const section = document.querySelector("#app")
    section.appendChild(movieCardContainer);
    const closeButton = movieCardContainer.querySelector(".close-button");
    closeButton.addEventListener('click', () => {
        CleanPage(movieCardContainer); 
    });
   
    const savedButton = document.querySelector(".saveButton")
    savedButton.addEventListener("click", () => {
        savedMovies(item)
        savedButton.textContent = "Guardada";
    })
    
    PlayMovie();
};

export const printCardMovie = (element, item) => {
    element.innerHTML = `
    <div class="active">
        <img class="img-card" src="${item.image}" alt="movie-cover"/>
        <h2 class="h2-card">${item.name}</h2>
        <button class="close-button">X</button>
        <div class="author-card">
            <h3>Director/a: ${item.author}</h3>
            <h3>Año: ${item.year}</h3>
        </div>
        <p class="p-card">Snopsis: ${item.description}</p>
        <button class="watch">Ver</button>
        <button class="saveButton"> ${isMovieSaved(item.id) ? "Guardada" : "Guardar"} </button>
    </div>`;
}

const PlayMovie = () => {
const watch = document.querySelector(".watch")
    watch.addEventListener("click", () => {
        CardPLay()
    
    });
};

const CardPLay = () => {
    const trailerCard = document.createElement("div")
    trailerCard. classList.add("trailer-card")
    trailerCard.innerHTML = `
        <button class="close-trailer">Volver</button>
        <iframe class="iframe" src="https://www.youtube.com/embed/MVDpzRpkIA0" allowfullscreen frameborder="0"></iframe>
        `
    movieCardContainer.appendChild(trailerCard)
    const closeTrailer = document.querySelector(".close-trailer")
    
    closeTrailer.addEventListener("click", () => {
    movieCardContainer.removeChild(trailerCard)  
    });
};