<template>
  <!-- <img ref="theEye" alt="Vue logo" src="../assets/logo.png" /> -->
  <div id="eyelid">
    <img class="eyeball" ref="theEye2" src="../assets/eyeball-2.png" />
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "HelloWorld",
  data() {
    return { bool_Looking: true, bool_Hide: false };
  },
  props: {
    interactive: Boolean
  },
  beforeMount() {
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      setTimeout(() => {
        this.bool_Hide = true;
        $("body").on("mousemove", this.imageFollowMouse);
      }, 3000);
    }
  },
  methods: {
    imageFollowMouse(evt) {
      let img = $(".eyeball");
      let offset = img.offset();

      var center_x = offset.left + img.width() / 2;
      var center_y = offset.top + img.height() / 2;
      var mouse_x = evt.pageX;
      var mouse_y = evt.pageY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree = radians * (180 / Math.PI) * -1 + 1;
      img.css("-moz-transform", "rotate(" + degree + "deg)");
      img.css("-webkit-transform", "rotate(" + degree + "deg)");
      img.css("-o-transform", "rotate(" + degree + "deg)");
      img.css("-ms-transform", "rotate(" + degree + "deg)");

      this.isLooking = degree <= 55 && degree >= -55;
      $("html")
        .find("input")
        .prop("readonly", this.interactive && this.isLooking);
    }
  },
  beforeDestroy() {
    $("html").off("mousemove", this.imageFollowMouse);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#eyelid {
  background: url("../assets/eyelid.png") no-repeat center center;
  background-size: contain;
  padding-top: 10px;
}

.eyeball {
  height: 25%;
  width: 25%;
}
</style>
