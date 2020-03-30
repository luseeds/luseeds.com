<template>
  <div class="overflow-x-hidden">
    <div class="container-inner mx-auto text-xl mb-16 relative">
      <h2 class="font-bold mb-6" id="about">Want to join / contribute / create?</h2>

      <dots-triangle class="text-green-400" />

      <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
        <div>
          <g-image
            src="../../../static/logo.png"
            alt="logo"
            class="w-32 h-32 rounded-full mb-8 lg:mb-0"
          />
        </div>
        <div class="flex-1 text-lg sm:text-xl sm:ml-6 text-justify">
          If you like what you've seen here, feel free to reach out. It's only
          the beginning and luseeds is constantly evolving. You can be a
          creator, a developer, a designer, a writer or any profile at all,
          there will be a place for you.
          <br />If you have any project idea let's make it real.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DotsTriangle from "~/components/DotsTriangle"

export default {
  components: {
    DotsTriangle
  }
}
</script>
