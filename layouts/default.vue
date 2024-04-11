<template>
  <div id="layout" class="min-h-screen relative">
    <header class="h-16 p-4 bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800">
      <UHorizontalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative" @click="click(link.label)">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
    </header>
    <main class="pt-4 pb-16">
      <UContainer>
        <slot />
      </UContainer>
    </main>
    <footer class=" w-full h-16 p-4 bg-background/75 backdrop-blur border -mt-px absolute bottom-0 z-50 border-gray-200 dark:border-gray-800">
      <UPlaceholder />
    </footer>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const links = [
  [{
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Horizontal Navigation',
    icon: 'i-heroicons-chart-bar'
  }, {
    label: 'CSS',
    icon: 'i-heroicons-command-line',
    to: '/css'
  }],
  [{
    label: 'theme',
    icon: isDark.value ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle'
  }]
]

const click = (label: string) => {
  if (label == 'theme') {
    isDark.value = !isDark.value;
  }
};
</script>