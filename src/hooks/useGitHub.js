import axios from 'axios';
import { useEffect, useState } from 'react';

let cachedData = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000;

export const useGitHub = (username) => {
  const [user, setUser] = useState(cachedData?.user || null);
  const [repos, setRepos] = useState(cachedData?.repos || []);
  const [isLoading, setIsLoading] = useState(!cachedData);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedData && Date.now() - cacheTimestamp < CACHE_DURATION) {
      setUser(cachedData.user);
      setRepos(cachedData.repos);
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
        ]);

        const userData = userResponse.data;

        const filteredRepos = reposResponse.data.filter(repo => {
          if (repo.fork) return false;

          const repoName = repo.name.toLowerCase();
          const excludedPatterns = [
            'readme', '.github.io', 'profile', 'config', 'setup',
            'dotfiles', 'settings', 'test', 'demo', 'example',
            'template', 'boilerplate', 'learning', 'tutorial'
          ];

          return !excludedPatterns.some(pattern => repoName.includes(pattern));
        });

        cachedData = { user: userData, repos: filteredRepos };
        cacheTimestamp = Date.now();

        setUser(userData);
        setRepos(filteredRepos);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { user, repos, isLoading, error };
};