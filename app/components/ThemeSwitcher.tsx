'use client'
import styles from '../../styles/components/ThemeSwitcher.module.css'
import { useState, useEffect } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5/index.js'

const themes = ['light', 'dark']
export default function ThemeSwitcher() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    setIsLoading(true)
  }, [])
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    const t = theme
    const root = document.documentElement
    if (t === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  const themeSwitcher = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  return isLoading ? (
    <div className={`${styles.icon_container} theme_switcher`}>
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            className={` ${checked ? styles.active : styles.disabled} ${
              styles.button
            }`}
            key={t}
            onClick={themeSwitcher}
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}
