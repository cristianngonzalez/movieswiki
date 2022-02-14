//Traer las peliculas desde la api
export function getMovies(titulo) {

  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?s=${titulo}&apikey=e7549ca3`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };

      
  
};



//Traer detalles especifico de alguna pelicula
export function getMovieDetail(movie){

  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?i=${movie}&apikey=e7549ca3`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };

}

//Agregar como favoritas
export function addMovieFavorite(idMovie){
  return{
    type: 'ADD_MOVIE_FAVORITE',
    payload: idMovie
  }
}

//Eliminar de favoritos
export function removeMovieFavorite(idMovie){
  return{
    type: 'REMOVE_MOVIE_FAVORITE',
    payload: idMovie
  }
}