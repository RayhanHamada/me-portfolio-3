<template>
  <nav
    class="fixed w-full flex flex-row justify-between items-center opacity-75 py-4 pl-2 sm:pl-4 md:pl-16 border-b-2 border-my-red"
    :class="darkTheme ? 'bg-my-dark-darker' : 'bg-my-light-darker'"
  >
    <p class="font-normal md:font-normal text-my-red text-sm md:text-xl">
      <a href=""> <b>Mocchapine</b> | Rayhan Hamada </a>
    </p>
    <div class="space-x-5">
      <theme-switch />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import { useTheme } from '@/store/useTheme';
export default defineComponent({
  name: 'Navbar',
  setup() {
    const { darkTheme } = useTheme();
    return {
      darkTheme,
    };
  },
  components: {
    ThemeSwitch,
  },
});
</script>

<style></style>
