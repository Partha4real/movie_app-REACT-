import {ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES} from '../actions';
const initilaMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export default function movies (state= initilaMovieState, action) {
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,  // ... spreads the old state
    //         list: action.movies   // then the list array is updated here here
    //     };
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,  // ... spreads the old state
                list: action.movies   // then the list array is updated here here
            };
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }  
            case REMOVE_FROM_FAVOURITE:
                const filteredArray = state.favourites.filter(
                    movie => movie.Title !== action.movie.Title 
                );
                return {
                    ...state,
                    favourites: filteredArray
            }
            case SET_SHOW_FAVOURITES:
                return {
                    ...state,
                    showFavourites: action.val
            }   
        default:
            return state;
    }
}
