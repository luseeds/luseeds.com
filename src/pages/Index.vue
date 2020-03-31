<template>
  <Layout>
    <index-hero />
    <index-mission />
    <index-projects />
    <index-contribute />
    <index-contact />
  </Layout>
</template>

<script>
import IndexHero from "~/components/Index/IndexHero"
import IndexMission from "~/components/Index/IndexMission"
import IndexProjects from "~/components/Index/IndexProjects"
import IndexContribute from "~/components/Index/IndexContribute"
import IndexContact from "~/components/Index/IndexContact"

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    IndexHero,
    IndexMission,
    IndexProjects,
    IndexContribute,
    IndexContact
  }
}
</script>
