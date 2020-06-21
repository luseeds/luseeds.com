<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h1 class="text-6xl text-center mb-8 text-green-900">Projects</h1>
      <div
        v-for="project in $page.projects.edges"
        :key="project.id"
        class="project border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold mb-4">
          <g-link :to="project.node.path" class="text-primary">{{
            project.node.title
          }}</g-link>
        </h2>
        <g-link :to="project.node.path">
          <g-image
            :src="project.node.cover || project.node.screenshot"
            :alt="project.node.title"
          />
        </g-link>

        <div class="text-lg mt-8 mb-4">{{ project.node.summary }}</div>

        <div class="mb-8">
          <g-link :to="project.node.path" class="font-bold uppercase"
            >Read More</g-link
          >
        </div>
      </div>
      <!-- end project -->

      <pagination-projects
        v-if="$page.projects.pageInfo.totalPages > 1"
        base="/projects"
        :totalPages="$page.projects.pageInfo.totalPages"
        :currentPage="$page.projects.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Projects ($page: Int) {
  projects: allProject (sortBy: "order", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        summary
        path
        cover
        screenshot
      }
    }
  }
}
</page-query>

<script>
import PaginationProjects from "~/components/PaginationProjects"

export default {
  metaInfo: {
    title: "Projects"
  },
  components: {
    PaginationProjects
  }
}
</script>
