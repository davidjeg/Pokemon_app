import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
export default function Navbar() {
  return (
    <header className={styles.navbar_container}>
      <div className={styles.navbar}>
        <nav className={styles.navlinks}>
          <Link href="/">Home</Link>
          <Link href="/favorites">Favorites </Link>
        </nav>
        <div className={styles.separator}></div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
