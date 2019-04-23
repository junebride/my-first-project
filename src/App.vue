<template>
  <component :is="layout">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </component>
</template>

<script>
export default {
  mounted() {},
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
