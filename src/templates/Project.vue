<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">
        {{ $page.project.title }}
      </h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.project.date }}</div>
      <div class="markdown-body mb-8" v-html="$page.project.content" />
      <div class="mb-8">
        <g-link to="/projects" class="font-bold uppercase"
          >Back to all project</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  }
}
</script>

<style src="../css/github-markdown.css" />
