import {configureStore} from '@reduxjs/toolkit'

const initialState = {
  favourites: [],
}

const favouriteReducer = (state = initialState, action) => {
      if(action.type == "ADD_FAVOURITE"){
        const newFavourites = [...state.favourites, action.payload]
        
        return {
          favourites: newFavourites
        }
      } else {
        return state
      }
}


const store = configureStore({
  reducer: favouriteReducer
})

export default store