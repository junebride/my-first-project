<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "app",
  props: {
    msg: String
  }
};
</script>

<style lang="scss"></style>
