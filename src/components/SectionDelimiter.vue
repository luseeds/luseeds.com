<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="variation.viewBox"
      :class="`relative z-10 text-copy-accent -mb-1`"
    >
      <path :d="variation.path" class="fill-current" />
    </svg>
    <h2
      :class="
        `bg-background-accent text-center text-4xl text-copy-secondary uppercase relative z-20 -mt-1 sm:-mt-4`
      "
    >{{ title }}</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="variation.viewBox"
      :class="`relative z-10 text-copy-accent -mt-1 sm:-mt-4 transform rotate-180`"
    >
      <path :d="variation.path" class="fill-current" />
    </svg>
  </div>
</template>

<script>
const VARIANTS = {
  smooth: {
    viewBox: "0 0 1440 192",
    path:
      "M0 0l60 16c60 16 180 48 300 64s240 16 360 5.3C840 75 960 53 1080 42.7 1200 32 1320 32 1380 32h60v160H0z"
  },
  wavy: {
    viewBox: "0 0 1440 288",
    path:
      "M0 128l60-16c60-16 180-48 300-26.7C480 107 600 181 720 218.7c120 37.3 240 37.3 360-5.4C1200 171 1320 85 1380 42.7L1440 0v288H0z"
  }
}

export default {
  props: ["title", "variant"],
  computed: {
    variation() {
      return VARIANTS[this.variant] || VARIANTS.smooth
    }
  }
}
</script>
