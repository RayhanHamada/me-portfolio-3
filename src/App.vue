<template>
  <Navbar />
  <div
    class="h-full flex flex-col pt-20 items-start lg:grid lg:grid-cols-2 lg:px-2 lg:grid-rows-2 lg:gap-y-20 lg:gap-x-4"
    :class="darkTheme ? 'bg-my-dark' : 'bg-my-light'"
  >
    <Intro />
    <projects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTheme } from './store/useTheme';

import Navbar from '@/components/Navbar.vue';
import Intro from '@/components/Intro.vue';
import Projects from '@/components/Projects.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Intro,
    Projects,
  },
  setup() {
    const { darkTheme } = useTheme();

    return {
      darkTheme,
    };
  },
});
</script>

<style>
#app {
  height: 100vh;
}

/* for scrollbar */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
