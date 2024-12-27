<script lang="ts" setup>
import { useSeoMeta } from '#imports';

useSeoMeta({
  title: 'kaokei',
});
</script>

<template>
  <div class="prose ps-6 pt-10 lg:prose-xl">
    <h1>常用工具</h1>
    <p>积累一些有趣的工具。纯前端实现，不依赖后端。不需要登录。</p>
    <p>
      网上的工具经常会出现停止维护，无法访问的情况，每次都需要寻找新的工具。
    </p>
    <p>
      <i-mdi-account />
      <i-fa-solid-user-secret />
      <i-fa6-solid:user-secret />
      <i-material-symbols:10k />
      <i-fa6-solid:apple-whole />
      <i-fa6-solid:candy-cane />
    </p>
  </div>
</template>
