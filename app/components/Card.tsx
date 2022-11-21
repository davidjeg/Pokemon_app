import styles from '../../styles/components/Card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { CardProps } from '../../types'
import useSWR from 'swr'
import { convertNumber } from '../../utils/PokemonUtilities'
import { fetcher } from '../../utils/fetchers'
import { Pokemon } from '../../types'

export default function Card({ pokemonName }: CardProps) {
  const { data: pokemon, error } = useSWR<Pokemon>(
    `https://pokeapi.co/api/v2/
pokemon/${pokemonName}`,
    fetcher
  )

  return pokemon ? (
    <Link href={`/${pokemonName}`} className={`${styles.card} darkc`}>
      <div className={styles.text_container}>
        <span className={styles.pokemon_number}>{pokemon.id}</span>
        <span className={styles.pokemon_name}>{pokemon.name}</span>
      </div>
      <div className={styles.pokemon_img_container}>
        <Image
          alt={pokemon.name}
          width={100}
          height={100}
          src={`https://pokedex.hybridshivam.com/assets/thumbnails-compressed/${convertNumber(
            pokemon.id
          )}.png`}
        />
      </div>
      <div className={styles.pokemon_types_container}>
        {pokemon?.types.map(t => {
          return (
            <div className={`icon ${t.type.name}`} key={t.type.name}>
              <Image
                width={20}
                height={20}
                alt={t.type.name}
                src={`/icons/${t.type.name}.svg`}
              />
            </div>
          )
        })}
      </div>
      <div className={styles.pokemon_image}></div>
      <div className={styles.pokemon_types}></div>
    </Link>
  ) : (
    <div />
  )
}
