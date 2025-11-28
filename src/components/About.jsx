import Header from './Header'
import Navigation from './Navigation'
import SnowEffect from './SnowEffect'

const About = () => {
  const mainTech = ['C++', 'JavaScript', 'WebAssembly', 'WebGL', 'OpenGL', 'Vulkan', 'GLSL', 'HLSL']
  const otherTech = ['C', 'Rust', 'Python']

  const interests = [
    {
      category: 'Gaming & Graphics',
      items: ['Real-time rendering', 'Game engine architecture', 'Shader programming', 'Performance optimization']
    },
    {
      category: 'Reading & Learning',
      items: ['Technical literature', 'Science fiction', 'Psychology', 'Low-level programming books']
    },
    {
      category: 'Programming & Tech',
      items: ['Compiler design', 'Operating systems', 'Computer graphics', 'WebGPU', 'GPU']
    }
  ]

  const languages = [
    { language: 'Russian', level: 'Native' },
    { language: 'English', level: 'B1' },
  ]

  return (
    <div className="page">
      <SnowEffect />
      <Header />
      <Navigation />
      <div className="container">
        <div className="card">
          <h1 className="title">about me</h1>

          <div className="code-block">
            <span className="green">$</span> whoami
          </div>
          <p className="description">
            Passionate about computer graphics and low-level programming.
            Constantly learning new technologies and exploring the intersection
            of performance, mathematics, and visual art. Enjoy solving complex
            problems and creating efficient, elegant solutions.
          </p>

          <div className="code-block">
            <span className="green">$</span> cat tech_stack.md
          </div>

          <div className="tech-section">
            <h3 className="section-title">core technologies</h3>
            <div className="tech-grid">
              {mainTech.map((tech, index) => (
                <div key={index} className="tech-chip primary">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="tech-section">
            <h3 className="section-title">also work with</h3>
            <div className="tech-grid">
              {otherTech.map((tech, index) => (
                <div key={index} className="tech-chip secondary">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="code-block">
            <span className="green">$</span> cat languages.txt
          </div>

          <div className="languages-section">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-name">{lang.language}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>

          <div className="code-block">
            <span className="green">$</span> ls interests/
          </div>

          <div className="interests-section">
            {interests.map((interest, index) => (
              <div key={index} className="interest-category">
                <h4 className="interest-title">{interest.category}</h4>
                <div className="interest-items">
                  {interest.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="interest-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About