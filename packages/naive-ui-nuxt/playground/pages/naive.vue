<script setup lang="ts"></script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NGlobalStyle />
    <div class="mx-auto mt-4 max-w-sm">
      <NButton>Default</NButton>
      <NButton>Default</NButton>
      <NInput>Default</NInput>
    </div>
  </NConfigProvider>
</template>
