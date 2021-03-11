import { ref, watch } from 'vue';

const darkTheme = ref(true);

if (import.meta.env.DEV) {
  watch(darkTheme, function () {
    console.log('darkTheme berubah');
  });
}

export const useTheme = () => ({
  darkTheme,
});
