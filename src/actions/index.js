
// action typres
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// action creators
export function addMovies(movies) {
  // return async function (dispatch) {
  //   const resoponse = await fetch('http://localhost:5000/doctors/kuchv')
  //     .then((res)=> {
  //       return res.json();
  //     })
  //   if(resoponse) {
  //     console.log(resoponse);
  //   }
  //   dispatch({
  //     type: 'ADD_MOVIES',
  //     movies
  //   })
  // }
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

// action creators
export function addMovieToList(movie) {
  return {
      type: ADD_MOVIE_TO_LIST,
      movie
    }
}

// action creators
export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=149ac4b1%20&t=${movie}`;
    return function (dispatch) {
      fetch(url)
        .then(response => response.json())
        .then(movie => {
          console.log(movie);
          // dispatch an action
          dispatch(addMovieSearchResult(movie));
        })
    }
  
}

// action creators
export function addMovieSearchResult(movie) {
  return {
      type: ADD_SEARCH_RESULT,
      movie
    }
}

