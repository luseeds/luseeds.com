<template>
  <g-link
    :to="path"
    :class="
      `blob-shadow ${
        inProgress ? 'grayscale pointer-events-none' : ''
      }`
    "
  >
    <div
      class="group hover:shadow-xl border-green-300 border max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 mx-auto sm:mx-0 cursor-pointer"
    >
      <g-image :src="image" class="w-full h-64 p-4" :alt="imageAlt" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-1">{{ title }}</div>
        <p class="text-sm mt-2 tracking-tight font-bold text-gray-700">{{ excerpt }}</p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["path", "image", "imageAlt", "title", "excerpt", "inProgress"]
}
</script>
