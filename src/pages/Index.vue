<template>
  <Layout>
    <section class="hero">
      <div class="py-16 relative">
        <div
          class="container-inner mx-auto text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left relative z-10 p-8 bg-white"
        >
          <div class="leading-tight">Luseeds.</div>
          <div
            class="text-green-700 leading-tight"
          >Seeds of knowledge on a healthy, ethical and sustainable lifestyle.</div>
        </div>
        <div class="absolute top-0 right-0 w-1/2">
          <g-image src="../../static/cover.jpg" alt="hero" class="mx-auto sm:mx-0" />
        </div>
      </div>
    </section>
    <!-- end hero -->
    <section-delimiter title="Mission" color="green-400" />
    <div class="container-inner mx-auto mt-12">
      <div class="text-lg sm:text-xl text-justify">
        The mission of Luseeds is to develop a collection of impactful projects that all have in common strong core values. Environment, sustainability, radicality, honesty, freedom, ethics are some of them.
        Each project is considered as a seed of knowledge whose goal is to make you discover and question a subject or an information.
        <br />
        <br />Sharing knowledge, raising awarness, taking action are the best way to improve our world.
        <br />Let's act now.
      </div>

      <div class="flex justify-between items-center py-6">
        <div class="max-w-lg mx-auto p-8 sm:py-0">
          <g-image src="../../static/walking.svg" alt="browser" />
        </div>
      </div>
    </div>
    <section-delimiter title="Projects" color="green-500" variant="wavy" />
    <div class="overflow-x-hidden">
      <div
        class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative"
      >
        <h2 class="font-bold mb-6" id="projects">Here are some projects we've developped:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <ul class="text-lg sm:text-xl">
          <li class="checkmark mb-6">
            <div>Project One</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark mb-6">
            <div>Project Two</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark mb-6">
            <div>Project Three</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark mb-6">
            <div>Project Four</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../../static/logo.png"
              alt="logo"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div
            class="flex-1 text-lg sm:text-xl ml-6"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>
      </div>
      <!-- end get-to-know me -->
    </div>

    <div class="newsletter bg-background-tertiary">
      <div class="container-inner mx-auto py-16 pb-8 text-center textl-xl">
        <h2 class="text-2xl font-bold mb-8">More text</h2>

        <div class="w-4/5 mx-auto mb-8">
          <p
            class="mb-8 text-lg sm:text-xl"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum. Quam, deleniti nulla.</p>
        </div>
      </div>

      <div class="container-inner mx-auto -mt-32 pb-4 overflow-x-hidden">
        <g-image src="../../content/assets/rectangle-dots.svg" alt="rectangle dots" />
      </div>
    </div>
  </Layout>
</template>

<script>
import SectionDelimiter from "../components/SectionDelimiter"

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    SectionDelimiter
  }
}
</script>

