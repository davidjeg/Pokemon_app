import styles from '../../../styles/components/PokemonEvolution.module.css'
import { regexNumber } from '../../../utils/PokemonUtilities'
import Image from 'next/image'
interface Props {
  chain: Array<{
    species_name: string
    url: string
  }>
}
export default function PokemonEvolution({ chain }: Props) {
  return (
    <div className={styles.evolution_container}>
      <h3 className="evolution_chain_title">EVOLUTION CHAIN</h3>
      <div className={styles.evolution_images}>
        {chain.map(c => {
          return (
            <div key={c.species_name}>
              <Image
                alt={c.species_name}
                width={60}
                height={60}
                src={`https://pokedex.hybridshivam.com/assets/thumbnails-compressed/${regexNumber(
                  c.url
                )}.png`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
