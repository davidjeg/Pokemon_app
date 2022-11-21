'use client'
import { favoriteReducer } from '../reducers/favoriteReducer'
import { createContext, useMemo, useReducer } from 'react'

interface Props {
  children: React.ReactNode
}

export const GlobalContext = createContext<any>(null)
const init = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('pokemon') || '[]')
  }
}
export const MyContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(favoriteReducer, {}, init)
  const value = useMemo(() => {
    return [state, dispatch]
  }, [state, dispatch])
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}
