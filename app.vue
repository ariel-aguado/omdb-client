<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  charset: 'utf-8',
  title: 'OMDb Client',
  titleTemplate: title => title !== 'OMDb Client' ? `${title} · OMDb Client` : title,
  meta: [
    { name: 'description', content: 'Client for The Open Movie Database API' },
    { name: 'Keywords', content: 'movies, series, episode' },
    { name: 'Robots', content: 'all' },
    { property: 'og:image', content: 'https://omdb-client.vercel.app/social-card.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@omdbclient' },
    { name: 'twitter:creator', content: '@omdbclient' },
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
