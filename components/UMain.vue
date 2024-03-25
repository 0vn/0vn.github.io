<template>
  <main class="main backdrop-blur border">
    <div class="box container p-4 grid gap-2 mx-auto">
      <div class="left">
        <slot name="left">#left</slot>
      </div>
      <div class="default">
        <slot name="default">#default</slot>
      </div>
      <div class="right">
        <slot name="right">#right</slot>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main {
  border-color: #0c4a6e80;
  background-color: #0f172a7d;
}

.box {
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 2cap;
  /* height: calc(100vh - 160px); */
  height: 100vh;
}

.left {
  border: 1px solid #0c4a6e80;
  display: flex;
  justify-content: center;
  align-items: center;
}

.default {
  border: 1px solid #0c4a6e80;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 4
}

.right {
  border: 1px solid #0c4a6e80;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
</style>