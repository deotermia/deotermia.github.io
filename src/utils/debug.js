export const debug = {
  log: (message, data = '') => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`%c[DEBUG ${timestamp}]%c ${message}`, 'color: #b8bb26; font-weight: bold', 'color: inherit', data);
  },

  error: (message, error = '') => {
    const timestamp = new Date().toLocaleTimeString();
    console.error(`%c[ERROR ${timestamp}]%c ${message}`, 'color: #fb4934; font-weight: bold', 'color: inherit', error);
  },

  warn: (message, data = '') => {
    const timestamp = new Date().toLocaleTimeString();
    console.warn(`%c[WARN ${timestamp}]%c ${message}`, 'color: #fabd2f; font-weight: bold', 'color: inherit', data);
  },

  info: (message, data = '') => {
    const timestamp = new Date().toLocaleTimeString();
    console.info(`%c[INFO ${timestamp}]%c ${message}`, 'color: #83a598; font-weight: bold', 'color: inherit', data);
  }
};