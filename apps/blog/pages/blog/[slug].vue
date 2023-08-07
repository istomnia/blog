<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const { data, error } = await useAsyncData('blog', () => queryContent(`/blog/${slug}`).findOne())
const { data: data1 } = await useAsyncData('blog-recommendations', () => queryContent(`/blog`).find())

if (data.value) {
  useContentHead(data.value)
}

console.log(data1)

if (error.value) {
  throw createError({ statusCode: 404 })
}
</script>

<template>
  <div>
    <ContentRenderer :value="data" />
  </div>
</template>
