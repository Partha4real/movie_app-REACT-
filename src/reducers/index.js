import {combineReducers} from 'redux';
import {ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES, ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST} from '../actions';

const initilaMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
};
export function movies (state= initilaMovieState, action) {
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
            case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]  
            }  
        default:
            return state;
    }
}

const initialSearchState = {
    result: {}, 
    showSearchResult: false,
};
export function search (state = initialSearchState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResult: true,
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResult: false,
            }
        default:
            return state;
    }
}

const initialRootState = {
    movies: initilaMovieState,
    search: initialSearchState
};
// export default function rootReducer (state = initialRootState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search (state.search, action)
//     }
// };

export default combineReducers({
    movies,
    search
})