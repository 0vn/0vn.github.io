<template>
  <header class="header border-b sticky top-0 z-50">
    <div class="box container p-4 grid gap-2 mx-auto h-16">
      <div class="left">
        <slot name="left">#left</slot>
      </div>
      <div class="center">
        <slot name="center">#center</slot>
      </div>
      <div class="right">
        <slot name="right">#right</slot>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  border-color: #0c4a6e80;
  background-color: #0f172a7d;
}

.box {
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 2cap;
}

.left {
  border: 1px solid #0c4a6e80;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.center {
  border: 1px solid #0c4a6e80;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  border: 1px solid #0c4a6e80;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>