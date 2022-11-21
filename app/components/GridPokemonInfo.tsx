import styles from '../../styles/components/GridPokemonInfo.module.css'
interface Props {
  children: React.ReactNode
}
export default function GridPokemonInfo({ children }: Props) {
  return (
    <div className={`${styles.container} info_container`}>
      <div className={styles.grid_pokemon}>{children}</div>
    </div>
  )
}
