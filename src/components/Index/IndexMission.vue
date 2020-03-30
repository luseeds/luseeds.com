<template>
  <div>
    <section-delimiter
      title="Mission"
      color="green-600"
      unpurgecss="text-green-600 bg-green-600"
      class="-mt-8 sm:mt-auto md:-mt-16 lg:mt-16"
    />
    <div class="container-inner mx-auto mt-12">
      <div class="text-lg sm:text-xl text-justify">
        The mission of Luseeds is to develop a collection of impactful projects
        that all have in common strong core values. Environment, sustainability,
        radicality, honesty, freedom, ethics are some of them. Each project is
        considered as a seed of knowledge whose goal is to make you discover and
        question a subject or an information.
        <br />
        <br />Sharing knowledge, raising awarness, taking action are the best
        way to improve our world. <br />Let's act now.
      </div>

      <div class="flex justify-between items-center py-6">
        <div class="max-w-lg mx-auto p-8 sm:py-0 w-full">
          <WalkingSvg class="w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionDelimiter from "~/components/SectionDelimiter"
import WalkingSvg from "~/../static/walking.svg"

export default {
  components: {
    SectionDelimiter,
    WalkingSvg
  }
}
</script>
