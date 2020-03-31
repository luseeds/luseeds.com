<template>
  <div>
    <section-delimiter title="Projects" variant="wavy" class="-mt-16" />
    <div class="overflow-x-hidden">
      <div
        class="container-inner mx-auto text-xl border-border-accent border-dotted border-b-8 pb-24 mb-16 relative"
      >
        <h3 class="font-bold mb-6" id="projects">Here are some projects we've released:</h3>

        <dots-triangle variant="right" class="text-green-400" />

        <div class="grid md:grid-cols-2 gap-12 justify-center">
          <project
            v-for="project in projects"
            :key="project.key"
            :path="project.path"
            :image="project.image"
            :imageAlt="project.title"
            :title="project.title"
            :excerpt="project.excerpt"
            :inProgress="project.inProgress"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query allFeaturedProjects {
  projects: allProject (sortBy: "order", order: DESC) {
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
import SectionDelimiter from "~/components/SectionDelimiter"
import DotsTriangle from "~/components/DotsTriangle"
import Project from "~/components/Project"

export default {
  components: {
    SectionDelimiter,
    DotsTriangle,
    Project
  },
  computed: {
    projects() {
      const yourProject = {
        key: "yourProject",
        path: "#",
        image: "/plus.svg",
        imageAlt: "Your project",
        title: "Your project?",
        excerpt: "Feel free to submit your project idea",
        inProgress: true
      }
      return [
        ...this.$static.projects.edges.map(project => project.node),
        yourProject
      ]
    }
  }
}
</script>
