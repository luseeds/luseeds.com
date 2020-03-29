<template>
  <div>
    <section-delimiter
      title="Projects"
      color="green-500"
      variant="wavy"
      class="-mt-16"
      unpurgecss="text-green-500 bg-green-500"
    />
    <div class="overflow-x-hidden">
      <div
        class="container-inner mx-auto text-xl border-gray-300 border-dotted border-b-8 pb-16 mb-16 relative"
      >
        <h2 class="font-bold mb-6" id="projects">
          Here are some projects we've developed:
        </h2>

        <dots-triangle variant="right" class="text-green-400" />

        <div class="grid sm:grid-cols-2 gap-4">
          <div
            class="group hover:shadow-xl max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 mx-auto sm:mx-0 cursor-pointer"
          >
            <g-image
              src="../../../content/assets/cover.jpg"
              class="w-full h-40 object-cover"
              alt="wysba"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-1">WYSBA</div>
              <p class="text-sm mt-2 tracking-tight font-bold text-gray-600">
                Will you still be alive?
              </p>
            </div>
          </div>
          <div
            class="group hover:shadow-xl max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 mx-auto sm:mx-0 cursor-pointer"
          >
            <g-image
              src="../../../content/assets/cover.jpg"
              class="w-full h-40 object-cover"
              alt="wysba"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-1">Animal Kill Counter</div>
              <p class="text-sm mt-2 tracking-tight font-bold text-gray-600">
                See how many animals die every seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionDelimiter from "../SectionDelimiter"
import DotsTriangle from "../DotsTriangle"

export default {
  components: {
    SectionDelimiter,
    DotsTriangle
  }
}
</script>
