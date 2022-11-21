'use client'
import {
  AddFavorite,
  RemoveFavorite
} from '../../../reducers/actions/PokemonActions'
import { GlobalContext } from '../../../context/ContextWrapper'
import { useContext, useEffect } from 'react'
import { convertNumber } from '../../../utils/PokemonUtilities'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md/index.js'
import Image from 'next/image'
interface PokemonImage {
  name: string
  id: number
  types: {
    type: Array<{ name: string }>
  }
}
export default function PokemonImage({ name, id, types }: PokemonImage) {
  const [state, dispatch] = useContext(GlobalContext)

  useEffect(() => {
    localStorage.setItem('pokemon', JSON.stringify(state))
  }, [state])

  const pokemonIsFavorite = (id: number) => {
    return state?.find((p: any) => p.id === id)
  }

  const getFavorite = pokemonIsFavorite(id)

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: '.8rem', fontSize: '2rem' }}>
        {getFavorite?.isFavorite ? (
          <span onClick={() => dispatch(RemoveFavorite(id))}>
            <MdFavorite />
          </span>
        ) : (
          <span onClick={() => dispatch(AddFavorite(id, name, types, true))}>
            <MdOutlineFavoriteBorder />
          </span>
        )}
      </div>
      <div style={{ padding: '.8rem' }}>
        <Image
          alt={name}
          width={350}
          height={350}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${convertNumber(
            id
          )}.png`}
        />
      </div>
    </div>
  )
}
