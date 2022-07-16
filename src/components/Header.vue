<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link class="header__nav-logo" to="/">Logo</router-link>
        <ul class="header__nav-list">
          <li v-for="(link, index) in links" :key="index">
            <router-link class="header__nav-link" :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { links } from "@/_config";
export default {
  name: "Header-vue",
  data() {
    return {
      links: links,
    };
  },
};
</script>