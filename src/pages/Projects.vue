<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="project in $page.projects.edges"
        :key="project.id"
        class="project border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="project.node.path" class="text-copy-primary">{{ project.node.title }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ project.node.date }}</span>
          <span>&middot;</span>
          <span>{{ project.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">{{ project.node.summary }}</div>

        <div class="mb-8">
          <g-link :to="project.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div>
      <!-- end project -->

      <pagination-projects
        v-if="$page.projects.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.projects.pageInfo.totalPages"
        :currentPage="$page.projects.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Projects ($page: Int) {
  projects: allProject (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationProjects from "../components/PaginationProjects"

export default {
  metaInfo: {
    title: "Projects"
  },
  components: {
    PaginationProjects
  }
}
</script>

