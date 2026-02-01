import React, { useEffect, useState } from 'react'
import { ThemeContext, THEME_KEY } from './themeContextValue'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === 'light' || saved === 'dark') return saved
    } catch (err) {
      // fallback to system preference if localStorage fails
      console.warn('Reading theme from localStorage failed', err)
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
    return 'dark'
  })

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch (err) {
      console.warn('Saving theme to localStorage failed', err)
    }
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

