<template>
  <div class="wrapper">
    <HeaderVue />
    <router-view />
    <FooterVue />
  </div>
</template>

<script>
  import HeaderVue from "@/components/Header.vue";
  import FooterVue from "@/components/Footer.vue";
  export default {
    components: { HeaderVue, FooterVue },
  };
</script>


<style lang="scss">
</style>
