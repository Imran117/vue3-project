<template>
  <nav class="header__nav">
    <ul class="header__nav-list">
      <li v-for="(link, index) in links" :key="index">
        <a class="header__nav-link" :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>


<script>
import { links } from "@/_config";
export default {
  name: "Footer-vue",
  data() {
    return {
      links: links,
    };
  },
};
</script>

<style>
</style>