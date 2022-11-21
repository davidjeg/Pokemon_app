import { favoriteActions } from '../types'

interface PokemonTypes {
  type: Array<{ name: string }>
}
export const AddFavorite = (
  id: number,
  name: string,
  types: PokemonTypes,
  isFavorite: boolean
) => {
  return {
    type: favoriteActions.ADD_FAVORITE,
    payload: {
      name,
      id,
      types,
      isFavorite
    }
  }
}

export const RemoveFavorite = (id: number) => {
  return {
    type: favoriteActions.REMOVE_FAVORITE,
    payload: { id }
  }
}
