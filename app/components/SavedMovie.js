export const savedMoviesList = []

export const savedMovies = (item) => {
    const nonRepeat = savedMoviesList.find((movie) => movie.id === item.id);
    if (!nonRepeat) {
        savedMoviesList.push(item)
       }   
}