<template>
  <div id="app">
    <header id="header">
      <router-link to="/" class="logo">Massively</router-link>
    </header>
    <navbar></navbar>
    <div id="main">
      <slot />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "app",
  props: {
    msg: String
  },
  components: { navbar }
};
</script>

<style lang="scss"></style>
