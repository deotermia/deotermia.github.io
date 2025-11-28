import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import SnowEffect from './components/SnowEffect'
import './styles/gruvbox.css'

function App() {
  const [isAppReady, setIsAppReady] = useState(false)

  useEffect(() => {
    const preloadData = async () => {
      try {
        const avatar = new Image()
        avatar.src = 'https://avatars.githubusercontent.com/u/234096221?v=4'

        await new Promise(resolve => setTimeout(resolve, 300))

        setIsAppReady(true)
      } catch (error) {
        setIsAppReady(true)
      }
    }

    preloadData()
  }, [])

  if (!isAppReady) {
    return (
      <div style={{
        background: '#1d2021',
        minHeight: '100vh',
        width: '100%'
      }}>
        <SnowEffect />
      </div>
    )
  }

  return (
    <Router>
      <div className="app">
        <SnowEffect />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App