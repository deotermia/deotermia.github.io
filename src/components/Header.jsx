import { FaCodeBranch, FaFolder, FaStar } from 'react-icons/fa'
import { useGitHub } from '../hooks/useGitHub'

const Header = () => {
  const { user, repos } = useGitHub('deotermia')

  if (!user) return null

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0)

  return (
    <header className="header">
      <div className="header-container">
        <div className="user-info">
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="avatar"
          />
          <div className="user-details">
            <h1 className="username">@{user.login}</h1>
            <p className="bio">
              He/him • INTJ-T • Russia • Bisexual
            </p>
            <div className="stats">
              <span><FaFolder size={14} /> {user.public_repos} repos</span>
              <span><FaStar size={14} /> {totalStars} stars</span>
              <span><FaCodeBranch size={14} /> {totalForks} forks</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header