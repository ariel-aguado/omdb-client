<script setup lang="ts">
const input = $ref()
const error = $ref()
let count = $ref()
let currentPage = $ref(1)
const totalPages = $computed(() => Math.ceil(count / 10))

let isLoading = $ref(false)
let items = $ref([])
let currentSearch = $ref()

async function getMovies(page = 1) {
  if (!input)
    return
  try {
    isLoading = true
    currentSearch = input
    const data = await bySearch(currentSearch, page)
    count = data.totalResults ?? count
    items = [...data.Search]
    console.log('items :>> ', items)
  }
  catch (e: any) {
    error = e
  }
  finally {
    isLoading = false
  }
}

function loadMovies() {
  currentPage = 1
  getMovies()
}

function loadBack() {
  if (currentPage > 1) {
    currentPage = currentPage - 1
    getMovies(currentPage)
  }
}

function loadNext() {
  if (currentPage < totalPages) {
    currentPage = currentPage + 1
    console.log('Hello!!!')
    getMovies(currentPage)
  }
}

const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
}

useHead({
  title: computed(() => `Search: ${currentSearch}`),
})
</script>

<template>
  <div class="max-w-3xl mx-auto p-4">
    <div class="flex items-center space-x-2 mt-20">
      <input
        v-model="input"
        v-focus
        type="text"
        placeholder="Find your favorite movie..."
        class="
        h-12
        w-min
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        @keyup.enter="loadMovies"
      >
      <button
        type="button"
        class="h-12 btn rounded-md w-min flex items-center space-x-2 px-3 sm:px-10"
        :disabled="isLoading"
        @click="loadMovies"
      >
        <Icon name="carbon:search" class="w-6 h-6 text-white block sm:hidden" />
        <span class="hidden sm:block">Search</span>
      </button>
    </div>

    <div>
      <div v-if="isLoading" class="p-10 animate-pulse flex justify-center">
        <Icon name="carbon:circle-dash" class="text-6xl text-blue-900 animate-spin" />
      </div>
      <div v-else class="py-10">
        <div v-if="items.length">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h2>Search Results</h2>
            <div class="flex items-center justify-between sm:space-x-8 mt-4 sm:mt-0">
              <button class="btn-secondary" :disabled="currentPage === 1" @click="loadBack">
                Back
              </button>
              <button class="btn-secondary" :disabled="currentPage === totalPages" @click="loadNext">
                Next
              </button>
            </div>
          </div>
          <div class="divide-y mt-8">
            <div v-for="item in items" :key="item.imdbID">
              <NuxtLink :to="`/movies/${item.imdbID}`">
                <p class="p-4">
                  {{ `${item.Title} (${item.Year})` }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
