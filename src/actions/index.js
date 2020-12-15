
// action typres
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

// action creators
export function addMovies(movies) {
    return {
        type: 'ADD_MOVIES',
        movies
      }
}


// action creators
export function addFavourites(movie) {
  return {
      type: 'ADD_TO_FAVOURITE',
      movie
    }
}

// action creators
export function removeFromFavourites(movie) {
  return {
      type: 'REMOVE_FROM_FAVOURITE',
      movie
    }
}

// action creators
export function setShowFavourites(val) {
  return {
      type: 'SET_SHOW_FAVOURITES',
      val
    }
}