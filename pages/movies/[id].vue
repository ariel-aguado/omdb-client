<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const id = $computed(() => route.params.id)
let item = $ref({})

onMounted(async () => {
  const data = await byId(id)
  item = data
})
</script>

<template>
  <div class="max-w-3xl mx-auto p-4">
    <button type="button" class="flex items-center space-x-2" @click="router.back">
      <Icon name="carbon:arrow-left" class="w-8 h-8 text-blue-900" />
      <span class="text-blue-900">Go Back</span>
    </button>
    <MovieDetails :item="item" />
  </div>
</template>
