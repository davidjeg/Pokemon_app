import styles from '../../../styles/components/PokemonInfo.module.css'
interface Props {
  stats: Array<{
    base_stat: string
    stat: {
      name: string
    }
  }>
}
export default function PokemonInfo({ stats }: Props) {
  return (
    <table className={styles.info_container}>
      <tbody>
        {stats.map(stat => {
          return (
            <tr key={stat.stat.name}>
              <td className={styles.bar_left} style={{ textAlign: 'right' }}>
                {stat.stat.name}
              </td>
              <td className={styles.bar_right}>
                <div className={`${styles.bar} bar_dark`}>
                  <div
                    style={{
                      width: `${stat.base_stat}%`
                    }}
                    className={`${styles.bar_fill} bar_full_d`}
                  >
                    {stat.base_stat}
                  </div>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
