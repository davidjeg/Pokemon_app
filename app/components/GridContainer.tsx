import styles from '../../styles/components/GridContainer.module.css'
interface Props {
  children: React.ReactNode
}
export default function GridContainer({ children }: Props) {
  return <section className={styles.grid_container}>{children}</section>
}
