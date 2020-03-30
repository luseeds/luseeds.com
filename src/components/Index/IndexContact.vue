<template>
  <div class="bg-background-tertiary">
    <div class="container-inner mx-auto py-8 sm:py-16 pb-12 text-center">
      <h2 class="text-2xl font-bold mb-8">Contact</h2>
      <div class="text-lg sm:text-xl">
        The prefered way is via email.
        <br />Write us at
        <a href="mailto:hello@luseeds.com">
          hello
          <span class="hidden">antispam?</span>
          <span>@</span>
          <span class="hidden">dunnoletstry</span>luseeds.com
        </a>
      </div>
    </div>

    <div class="container-inner mx-auto -mt-32 pb-4 overflow-x-hidden pointer-events-none">
      <RectangleDots />
    </div>
  </div>
</template>
<script>
import RectangleDots from "~/../content/assets/rectangle-dots.svg"
export default {
  components: {
    RectangleDots
  }
}
</script>