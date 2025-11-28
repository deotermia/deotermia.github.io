import { FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa'
import Header from './Header'
import Navigation from './Navigation'
import SnowEffect from './SnowEffect'

const Contact = () => {
  const contacts = [
    {
      icon: <FaGithub size={32} />,
      name: 'GitHub',
      url: 'https://github.com/deotermia',
      username: '@deotermia'
    },
    {
      icon: <FaTelegram size={32} />,
      name: 'Telegram',
      url: 'https://t.me/deotermia',
      username: '@deotermia'
    },
    {
      icon: <FaDiscord size={32} />,
      name: 'Discord',
      url: 'https://discord.com/users/1395461934043631629',
      username: 'deotermia'
    }
  ]

  return (
    <div className="page">
      <SnowEffect />
      <Header />
      <Navigation />
      <div className="container">
        <div className="card">
          <h1 className="title">contacts</h1>

          <div className="code-block">
            <span className="green">$</span> find ./socials -type f
          </div>

          <div className="contacts-grid">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  {contact.icon}
                </div>
                <div className="contact-info">
                  <h3>{contact.name}</h3>
                  <p>{contact.username}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="code-block">
            <span className="green">$</span> echo "Let's create graphics!"
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact