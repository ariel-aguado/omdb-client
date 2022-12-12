<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col mt-10">
    <div class="flex flex-col sm:space-x-6 sm:flex-row sm:items-end">
      <img
        class="w-48 h-auto rounded-md"
        :src="item.Poster"
        :alt="item.Title"
        width="192"
        height="260"
      >
      <div class="mt-6 sm:mt-0">
        <h3 class="text-2xl font-bold text-black">
          {{ item.Title }}
        </h3>
        <div class="flex items-center space-x-8 mt-2">
          <p>{{ item.Year }}</p>
          <p>{{ item.Type }}</p>
          <p>{{ item.Runtime }}</p>
        </div>
      </div>
    </div>
    <p class="prose mt-6">
      {{ item.Plot }}
    </p>
  </div>
</template>
