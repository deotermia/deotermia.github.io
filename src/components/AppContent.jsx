import { Route, Routes } from 'react-router-dom'
import { useGitHubData } from '../context/GitHubContext'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import SnowEffect from './SnowEffect'

const AppContent = () => {
  const { isLoading } = useGitHubData()

  if (isLoading) {
    return (
      <div className="app-loading">
        <SnowEffect />
        <div style={{
          background: '#1d2021',
          minHeight: '100vh',
          width: '100%'
        }}></div>
      </div>
    )
  }

  return (
    <>
      <SnowEffect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default AppContent