<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <div class="mb-8">
        <g-link
          to="/projects"
          class="font-bold uppercase text-sm text-gray-600"
        >Back to all projects</g-link>
      </div>
      <h1 class="text-4xl font-bold leading-tight">{{ $page.project.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.project.date }}</div>
      <a
        :href="$page.project.url"
        class="inline-block text-white p-4 bg-green-500 mb-4 mx-auto rounded"
      >Visit {{ $page.project.title }} website &rarr;</a>
      <a :href="$page.project.url">
        <g-image :src="$page.project.image" :alt="$page.project.title" />
      </a>
      <div class="markdown-body my-8" v-html="$page.project.content" />
      <div class="mb-8">
        <g-link to="/projects" class="font-bold uppercase">Back to all project</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    date (format: "MMMM D, Y")
    url
    content
    image
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

<style src="~/css/github-markdown.css" />
