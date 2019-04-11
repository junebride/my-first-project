<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const blank_layout = "blank-layout";

export default {
  mounted() {},
  computed: {
    layout() {
      return this.$route.meta.layout || blank_layout;
    }
  }
};
</script>
