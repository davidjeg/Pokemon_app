export interface MainLayout {
  children: React.ReactNode
  title: string
  description: string
}

export interface CardProps {
  pokemonName: string
}
export interface Pokemon {
  name: string
  id: number
  types: Array<{
    type: {
      name: string
    }
  }>
}

export interface Params {
  params: {
    name: string
  }
}

export interface PokemonType {
  slot: string
  type: {
    name: string
    url: string
  }
}
export interface PokemonCardInfo {
  name: string
  id: string
  types: PokemonType[]
}

export interface PokemonSimpleData {
  results: Array<{
    name: string
    url: string
  }>
}
