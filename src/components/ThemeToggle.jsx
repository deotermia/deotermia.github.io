import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState('dark')

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  )
}

export default ThemeToggle