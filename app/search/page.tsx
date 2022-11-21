'use client'
import useSWR from 'swr'
import Card from '../components/Card'
import GridContainer from '../components/GridContainer'
import { useSearchParams } from 'next/navigation'
import { fetcher } from '../../utils/fetchers'

export default function SeachScreen() {
  let searchParams = useSearchParams()
  let name = searchParams.get('name')
  let { data: pokemonSearch, error: pokemonSearchError } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?limit=905`,
    fetcher
  )
  let results: any = []
  if (pokemonSearch) {
    results = pokemonSearch.results.filter((p: any) =>
      p.name.toLowerCase().match(name)
    )
  }
  return (
    <GridContainer>
      {results.map((p: any) => {
        return <Card pokemonName={p.name} key={p.name} />
      })}
    </GridContainer>
  )
}
