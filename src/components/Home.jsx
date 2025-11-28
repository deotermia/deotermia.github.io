import Header from './Header'
import Navigation from './Navigation'
import SnowEffect from './SnowEffect'

const Home = () => {
  return (
    <div className="page">
      <SnowEffect />
      <Header />
      <Navigation />
      <div className="container">
        <div className="card">
          <h1 className="title">Welcome</h1>
          <div className="code-block">
            <span className="green">$</span> whoami
          </div>
          <p className="description">
            I'm studying graphics engineering and systems programming.
          </p>

          <div className="code-block">
            <span className="green">$</span> cat skills.txt
          </div>

          <div className="tech-grid">
            <span className="tech-chip primary">C++</span>
            <span className="tech-chip primary">JavaScript</span>
            <span className="tech-chip primary">WebAssembly</span>
            <span className="tech-chip secondary">C</span>
            <span className="tech-chip secondary">Rust</span>
            <span className="tech-chip secondary">Python</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home