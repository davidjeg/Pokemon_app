'use client'
import GridContainer from '../components/GridContainer'
import { useEffect, useState } from 'react'
import { GlobalContext } from '../../context/ContextWrapper'
import Card from '../components/Card'
import { useContext } from 'react'
export default function FavoriteScreen() {
  const [state] = useContext(GlobalContext)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
  }, [])
  return isLoading ? (
    <GridContainer>
      {state?.map((pokemon: any) => {
        return <Card key={pokemon.name} pokemonName={pokemon.name} />
      })}
    </GridContainer>
  ) : (
    <div />
  )
}
