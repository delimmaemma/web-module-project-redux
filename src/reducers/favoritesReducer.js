import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case(TOGGLE_FAVORITES): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        case(ADD_FAVORITE): {
            if (!state.favorites.some(movie => movie.id === action.payload.id)) { // .some checks to see if at least one instance is present. If it is, returns true
                return {
                  ...state,
                  favorites: [...state.favorites, action.payload]
                };
              }
              return state;
        }
        case(REMOVE_FAVORITE): {
            return {
                ...state,
                favorites: state.favorites.filter(item => (item.id !== action.payload))
            }
        }
        default:
            return(state)
    }
}

export default favoritesReducer