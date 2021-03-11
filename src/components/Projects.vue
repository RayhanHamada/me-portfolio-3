<template>
  <div class="flex flex-col w-full items-center space-y-3">
    <p class="text-my-red text-2xl">Projects</p>
    <div class="flex flex-col w-full">
      <div
        class="grid grid-cols-1 w-full items-center gap-y-3 md:gap-x-4 md:grid-cols-2 md:grid-rows-3"
      >
        <a
          class="md:w-60 lg:w-full md:place-self-center border border-my-red"
          v-for="p in projects"
          :key="p.name"
          :href="p.html_url"
        >
          <img
            :src="`https://github-readme-stats.vercel.app/api/pin/?username=rayhanhamada&repo=${
              p.name
            }&show_owner=true&theme=${
              darkTheme ? 'monokai' : ''
            }&title_color=e41749`"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useGithub } from '@/store/useGithub';
import { useTheme } from '@/store/useTheme';

export default defineComponent({
  name: 'Projects',
  setup() {
    const { fetchProjects, projects } = useGithub();
    const { darkTheme } = useTheme();

    onMounted(fetchProjects);

    const toProject = (repo: string) => window.open(repo, '_blank');

    return {
      projects,
      toProject,
      darkTheme,
    };
  },
});
</script>

<style></style>
