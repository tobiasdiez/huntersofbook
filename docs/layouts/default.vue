<script setup lang="ts">
const { trackEvent } = usePlausible()
</script>

<template>
  <DocsPageContent class="min-h-page">
    <slot />
    <a
      href="https://github.com/sponsors/productdevbook"
      target="_blank"
      class="fixed px-4 hover:bg-red-400 flex shadow shadow-red-100 font-semibold items-center justify-center bottom-14 right-10 py-2 bg-red-500 row-span-full text-lg text-white rounded-full"
      @click="trackEvent('sponsor')"
    >
      <Icon name="uil:github" size="24" class="mr-2" />
      <p>sponsor us</p>
    </a>
  </DocsPageContent>
</template>
