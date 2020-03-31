<template>
  <button
    class="text-copy-primary inline hover:text-gray-600"
    aria-label="Toggle theme"
    @click.prevent="toggleTheme"
  >
    <svg
      v-if="theme === 'light'"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-moon mx-auto"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-sun mx-auto"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
  </button>
</template>

<script>
const THEME = { LIGHT: "light", DARK: "dark" }
const DEFAULT_THEME = THEME.LIGHT

const getInitialTheme = () => {
  // First look for a user defined value in the local storage
  let theme = localStorage.getItem("theme")
  // If none is defined, check the prefers-color-scheme
  if (
    !theme &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme = THEME.DARK
  }
  // If no preferences, default to default theme
  return theme === THEME.LIGHT || theme === THEME.DARK ? theme : DEFAULT_THEME
}

export default {
  data() {
    return {
      theme: null
    }
  },
  mounted() {
    this.theme = getInitialTheme()
    document.documentElement.setAttribute("data-theme", this.theme)
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
      localStorage.setItem("theme", this.theme)
      document.documentElement.setAttribute("data-theme", this.theme)
    }
  }
}
</script>
