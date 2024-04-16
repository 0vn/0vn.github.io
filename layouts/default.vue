<template>
  <div
    id="layout"
    class="min-h-screen relative"
  >
    <header class="backdrop-blur border-b -mb-px sticky top-0 z-50 border-primary-200/75 dark:border-primary-900/50 bg-gray-500/10 dark:bg-gray-800/10">
      <UHeader>
        <template #left>
          <img src="/favicon.ico">
        </template>
        <template #center>
          <UTabs
            :items="items"
            :default-index="currentTab"
            @change="changeTabs"
          />
        </template>
        <template #right>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
        </template>
      </UHeader>
    </header>
    <main class="pt-4 pb-20">
      <UContainer>
        <slot />
      </UContainer>
    </main>
    <footer class=" w-full h-16 p-4 backdrop-blur border -mt-px absolute bottom-0 z-50 border-primary-200/75 dark:border-primary-900/50">
      <UFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    index: 0,
    label: '首页',
    path: '/',
  },
  {
    index: 1,
    label: '开机启动',
    path: '/work',
  },
  {
    index: 2,
    label: '文档资料',
    path: '/doc',
  },
  {
    index: 3,
    label: '上班摸鱼',
    path: '/happy',
  },
  {
    index: 4,
    label: '杂七杂八',
    path: '/z7z8',
  },
]

const router = useRouter()
const currentTab = items.filter(item => item.path == router.currentRoute.value.path)[0].index

const changeTabs = (index: number) => {
  const item = items[index]

  router.push({
    path: item.path,
  })
}

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<style>
#layout > header > div > div.items-center.gap-x-8.hidden.lg\:flex > div > div:nth-child(2) {
  display: none;
}
</style>
