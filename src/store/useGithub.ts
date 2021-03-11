import { ref } from 'vue';
import axios from 'redaxios';

type Project = {
  name: string;
  html_url: string;
  topics: string[];
  description: string;
};

const profilePic = ref('');
const projects = ref<Project[]>([]);

const fetchProfilePic = () =>
  axios
    .get<{ avatar_url: string }>('https://api.github.com/users/rayhanhamada', {
      auth: `bearer ${import.meta.env.VITE_GITHUB_SECRET}`,
    })
    .then(p => {
      profilePic.value = p.data.avatar_url;
      console.log(`profile pic fetched`);
    })
    .catch(() => {
      if (import.meta.env.DEV) console.log('error fetching profile');
    });

const fetchProjects = () =>
  axios
    .get<Project[]>('https://api.github.com/users/rayhanhamada/repos?per_page=100', {
      auth: `bearer ${import.meta.env.VITE_GITHUB_SECRET}`,
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    })
    .then(p => {
      p.data.forEach(proj => {
        if (proj.topics.includes('for-portfolio')) {
          projects.value.push(proj);
        }
      });
      console.log(`projects fetched !`);
    })
    .catch(() => {
      if (import.meta.env.DEV) console.log('error fetching projects');
    });

export const useGithub = () => ({
  profilePic,
  fetchProfilePic,
  projects,
  fetchProjects,
});
