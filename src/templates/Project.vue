<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <div class="mb-8">
        <g-link to="/projects" class="font-bold uppercase text-sm text-gray-700"
          >Back to all projects</g-link
        >
      </div>
      <h1 class="text-4xl font-bold leading-tight mb-8">
        {{ $page.project.title }}
      </h1>
      <a
        :href="$page.project.url"
        target="_black"
        rel="noopener"
        class="visit-site-link inline-block text-copy-secondary p-4 mb-8 mx-auto rounded shadow-lg hover:shadow-xl"
        >Visit {{ $page.project.title }} website &rarr;</a
      >
      <a :href="$page.project.url" target="_black" rel="noopener">
        <g-image :src="$page.project.screenshot" :alt="$page.project.title" />
      </a>
      <div class="markdown-body my-8" v-html="$page.project.content" />
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
    url
    content
    screenshot
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
