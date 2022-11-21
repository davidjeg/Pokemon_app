'use client'
import { useState } from 'react'
import Card from './components/Card'
import useSWRInfinite from 'swr/infinite'
import { fetcher } from '../utils/fetchers'
import { VirtuosoGrid } from 'react-virtuoso'
import styled from 'styled-components'

const PAGE_SIZE = 905

export default function Home() {
  const [search, setSearch] = useState('')

  const { data, error, size, setSize } = useSWRInfinite(
    index =>
      `https://pokeapi.co/api/v2/pokemon/?offset=${
        PAGE_SIZE * index
      }&limit=${PAGE_SIZE}`,
    fetcher
  )

  let results: any = []
  if (data) {
    results = data[0].results
  }

  const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `

  const ItemWrapper = styled.div`
    flex: 1;
    text-align: center;
    padding: 1rem 1rem;
  `

  const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
  `

  if (search.length > 0) {
    results = results.filter((p: any) =>
      p.name.toLowerCase().match(search.toLowerCase())
    )
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '.8rem',
          marginBottom: '.8rem'
        }}
      >
        <input
          style={{ width: '32rem', height: '2.4rem', padding: '.8rem' }}
          placeholder="Search..."
          type="text"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <VirtuosoGrid
        style={{ height: '100vh' }}
        totalCount={results?.length}
        overscan={300}
        components={{
          Item: ItemContainer,
          List: ListContainer,
          ScrollSeekPlaceholder: ({ height, width, index }) => (
            <ItemContainer></ItemContainer>
          )
        }}
        itemContent={index => <Card pokemonName={results[index]?.name} />}
        scrollSeekConfiguration={{
          enter: velocity => Math.abs(velocity) > 1000000,
          exit: velocity => Math.abs(velocity) < 30
        }}
      />
    </>
  )
}
