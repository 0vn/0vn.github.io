<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UNotifications />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar{background-color:transparent;height:.6em;width:.6em}
::-webkit-scrollbar-track{--tw-bg-opacity:1;background-color:rgb(var(--color-gray-100)/1);background-color:rgb(var(--color-gray-100)/var(--tw-bg-opacity))}
::-webkit-scrollbar-thumb{border-radius:.6em;--tw-bg-opacity:1;background-color:rgb(var(--color-gray-300)/1);background-color:rgb(var(--color-gray-300)/var(--tw-bg-opacity))}
::-webkit-scrollbar-thumb:hover{--tw-bg-opacity:1;background-color:rgb(var(--color-gray-400)/1);background-color:rgb(var(--color-gray-400)/var(--tw-bg-opacity))}
.dark ::-webkit-scrollbar-track{--tw-bg-opacity:1;background-color:rgb(var(--color-gray-800)/1);background-color:rgb(var(--color-gray-800)/var(--tw-bg-opacity))}
.dark ::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(var(--color-gray-700)/1);background-color:rgb(var(--color-gray-700)/var(--tw-bg-opacity))}
.dark ::-webkit-scrollbar-thumb:hover{--tw-bg-opacity:1;background-color:rgb(var(--color-gray-600)/1);background-color:rgb(var(--color-gray-600)/var(--tw-bg-opacity))}
</style>