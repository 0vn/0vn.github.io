<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
    <div class="lg:flex-1 flex items-center gap-1.5">
      <slot name="left">
        <div class="border border-primary-200/75 dark:border-primary-900/50 w-full text-center">
          <span>#left</span>
        </div>
      </slot>
    </div>
    <ul class="items-center gap-x-8 hidden lg:flex">
      <slot name="center">
        <div class="border border-primary-200/75 dark:border-primary-900/50 w-full text-center">
          <span>#center</span>
        </div>
      </slot>
    </ul>

    <div class="flex items-center justify-end lg:flex-1 gap-1.5">
      <slot name="right">
        <div class="border border-primary-200/75 dark:border-primary-900/50 w-full text-center">
          <span>#right</span>
        </div>
      </slot>
    </div>
  </div>
</template>
