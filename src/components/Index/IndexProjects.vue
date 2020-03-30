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
        <h2 class="font-bold mb-6" id="projects">Here are some projects we've released:</h2>

        <dots-triangle variant="right" class="text-green-400" />

        <div class="grid md:grid-cols-2 gap-12 justify-center">
          <project
            v-for="project in $static.projects.edges"
            :key="project.node.key"
            :path="project.node.path"
            :image="project.node.image"
            :imageAlt="project.node.title"
            :title="project.node.title"
            :excerpt="project.node.excerpt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query allFeaturedProjects {
  projects: allProject {
    edges {
      node {
        id
        title
        excerpt
        image
        path
      }
    }
  }
}
</static-query>

<script>
import SectionDelimiter from "../SectionDelimiter"
import DotsTriangle from "../DotsTriangle"
import Project from "../Project"

export default {
  components: {
    SectionDelimiter,
    DotsTriangle,
    Project
  }
}
</script>
