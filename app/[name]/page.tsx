import { Params } from '../../types'
import PokemonImage from '../components/PokemonInfo/PokemonImage'
import PokemonStats from '../components/PokemonInfo/PokemonStats'
import PokemonInfo from '../components/PokemonInfo/PokemonInfo'
import PokemonEvolution from '../components/PokemonInfo/PokemonEvolution'
import GridPokemonInfo from '../components/GridPokemonInfo'

async function fullPokemonInfo(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await res.json()

  return data
}

async function getEspecie(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`, {
    cache: 'force-cache'
  })
  const { evolution_chain } = await res.json()

  const chainRes = await fetch(evolution_chain.url)
  let { chain } = await chainRes.json()
  let collection = []

  do {
    let chainLength = chain['evolves_to'].length
    collection.push({
      species_name: chain?.species?.name,
      url: chain?.species?.url
    })

    if (chainLength > 1) {
      for (let i = 1; i < chainLength; i++) {
        collection.push({
          species_name: chain.evolves_to[i]?.species.name,
          url: chain.evolves_to[i]?.species.url
        })
      }
    }
    chain = chain['evolves_to'][0]
  } while (!!chain && chain.hasOwnProperty('evolves_to'))
  return collection
}
export default async function PokemonScreen({ params }: Params) {
  const { name } = params
  const pokemon = await fullPokemonInfo(name)
  const chain = await getEspecie(name)

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1
        className="pokemon_name"
        style={{ textTransform: 'uppercase', textAlign: 'center' }}
      >
        {pokemon.name}
      </h1>
      <GridPokemonInfo>
        <PokemonStats
          weight={pokemon.weight}
          height={pokemon.height}
          id={pokemon.id}
          abilities={pokemon.abilities}
          types={pokemon.types}
        />
        <PokemonImage
          name={pokemon.name}
          id={pokemon.id}
          types={pokemon.types}
        />

        <PokemonInfo stats={pokemon.stats} />
      </GridPokemonInfo>
      <PokemonEvolution chain={chain} />
    </div>
  )
}
