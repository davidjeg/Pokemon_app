import styles from '../../../styles/components/PokemonStats.module.css'
import Image from 'next/image'
import {
  convertNumber,
  convertWeigth,
  convertHeight
} from '../../../utils/PokemonUtilities'
interface Props {
  weight: string
  height: string
  id: string
  abilities: Array<{
    ability: {
      name: string
    }
    slot: string
  }>
  types: Array<{
    slot: string
    type: {
      name: string
    }
  }>
}
export default function PokemonStats({
  weight,
  height,
  id,
  abilities,
  types
}: Props) {
  return (
    <table className={styles.stats}>
      <tbody>
        <tr>
          <td className={styles.left}> ID</td>
          <td className={styles.right}>{`${convertNumber(id)}`}</td>
        </tr>
        <tr>
          <td className={styles.left}> Height</td>
          <td className={styles.right}>{`${convertHeight(height)}`}</td>
        </tr>
        <tr>
          <td className={styles.left}> Weight</td>
          <td className={styles.right}>{`${convertWeigth(weight)}`}</td>
        </tr>
        <tr>
          <td className={styles.left}>Abilities</td>
          <td
            style={{ textTransform: 'capitalize' }}
            className={`${styles.right} ${styles.ability_container}`}
          >
            {abilities.map(abilitie => {
              return <span key={abilitie.slot}>{abilitie.ability.name}</span>
            })}
          </td>
        </tr>
        <tr>
          <td className={styles.left}>Types</td>
          <td
            style={{ textTransform: 'capitalize' }}
            className={`${styles.right} ${styles.types_container}`}
          >
            {types.map(type => {
              return (
                <span
                  key={type.slot}
                  className={`${type.type.name} ${styles.type_icon}`}
                >
                  <span className={type.type.name}>{type.type.name}</span>
                  <Image
                    src={`/icons/${type.type.name}.svg`}
                    alt={type.type.name}
                    width={15}
                    height={15}
                  />
                </span>
              )
            })}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
