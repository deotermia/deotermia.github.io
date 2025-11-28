import { FaCalendar, FaCodeBranch, FaFile, FaStar, FaThumbtack } from 'react-icons/fa'
import { useGitHub } from '../hooks/useGitHub'
import Header from './Header'
import Navigation from './Navigation'

const Projects = () => {
  const { repos } = useGitHub('deotermia')

  const formatLicense = (license) => {
    if (!license || !license.spdx_id) return null

    const licenses = {
      'mit': 'MIT',
      'apache-2.0': 'Apache 2.0',
      'gpl-3.0': 'GPLv3',
      'bsd-2-clause': 'BSD 2-Clause',
      'bsd-3-clause': 'BSD 3-Clause',
      'unlicense': 'Unlicense'
    }

    return licenses[license.spdx_id.toLowerCase()] || license.spdx_id
  }

  const pinnedProjects = ['SimpleRender', 'Website-Blocker']

  const sortedRepos = [...repos].sort((a, b) => {
    const aPinned = pinnedProjects.includes(a.name)
    const bPinned = pinnedProjects.includes(b.name)
    if (aPinned && !bPinned) return -1
    if (!aPinned && bPinned) return 1
    return 0
  })

  return (
    <div className="page">
      <Header />
      <Navigation />
      <div className="container">
        <div className="card">
          <h1 className="title">projects</h1>

          <div className="code-block">
            <span className="green">$</span> ls -la ./projects/
          </div>

          {repos.length === 0 ? (
            <div className="no-projects">
              <p>No projects found.</p>
            </div>
          ) : (
            <div className="projects-scroll-container">
              <div className="projects-scroll">
                {sortedRepos.map(repo => (
                  <ProjectCard
                    key={repo.id}
                    repo={repo}
                    formatLicense={formatLicense}
                    isPinned={pinnedProjects.includes(repo.name)}
                  />
                ))}
              </div>
              <div className="scroll-hint">
                <span className="hint-arrow">→</span>
                Scroll horizontally to view more projects
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ repo, formatLicense, isPinned }) => {
  const license = formatLicense(repo.license)

  return (
    <div className={`project-card-horizontal ${isPinned ? 'pinned' : ''}`}>
      {isPinned && (
        <div className="pin-badge">
          <FaThumbtack size={12} />
          Pinned
        </div>
      )}
      <div className="project-header">
        <h3>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </h3>
        {repo.language && (
          <span className="project-language">{repo.language}</span>
        )}
      </div>
      <p className="project-description">
        {repo.description || 'No description provided'}
      </p>
      <div className="project-meta">
        <span className="meta-item">
          <FaStar size={14} />
          {repo.stargazers_count}
        </span>
        <span className="meta-item">
          <FaCodeBranch size={14} />
          {repo.forks_count}
        </span>
        <span className="meta-item">
          <FaCalendar size={14} />
          {new Date(repo.updated_at).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
          })}
        </span>
        {license && (
          <span className="meta-item">
            <FaFile size={14} />
            {license}
          </span>
        )}
      </div>
      <div className="project-tech">
        {repo.language && (
          <span className="tech-tag">{repo.language}</span>
        )}
        {license && (
          <span className="tech-tag license-tag">{license}</span>
        )}
        {repo.topics && repo.topics.slice(0, 2).map(topic => (
          <span key={topic} className="tech-tag">{topic}</span>
        ))}
      </div>
    </div>
  )
}

export default Projects