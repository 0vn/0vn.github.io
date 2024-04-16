<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
    <a
      v-for="item in list"
      :key="item.name"
      class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group flex flex-col overflow-hidden group hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 cursor-pointer"
      :href="item.href"
      target="_blank"
      rel="noopener"
    >
      <div class="flex justify-center px-4 py-5 sm:p-6">
        <h1 class="font-bold text-lg">{{ item.name }}</h1>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
interface Website {
  name: string
  href: string
  src: string
}

const list: Website[] = [
  {
    name: '百度',
    href: 'http://www.baidu.com',
    src: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
  },
  {
    name: '谷歌',
    href: 'http://www.google.com',
    src: 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png',
  },
  {
    name: '文心一言',
    href: 'https://yiyan.baidu.com/',
    src: 'https://nlp-eb.cdn.bcebos.com/static/eb/asset/logo.8a6b508d.png',
  },
  {
    name: 'ChatGPT',
    href: 'https://chat.openai.com/',
    src: 'https://raw.githubusercontent.com/nuxt/modules/main/icons/chatgpt.svg',
  },
]
</script>

<style scoped>

</style>
