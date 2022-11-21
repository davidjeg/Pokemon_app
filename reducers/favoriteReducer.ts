import { PokemonType } from '../types'
import { favoriteActions } from './types'
interface Action {
  type: string
  payload: {
    id?: number
    isFavorite?: boolean
    name?: string
    types?: PokemonType
  }
}
interface State {
  id?: number | string
  isFavorite?: boolean
  name?: string
  types?: PokemonType
}
export const favoriteReducer = (state: State[], action: Action) => {
  switch (action.type) {
    case favoriteActions.ADD_FAVORITE:
      return [...state, action.payload]

    case favoriteActions.REMOVE_FAVORITE:
      return state.filter(p => p.id !== action.payload.id)

    default:
      return state
  }
}
