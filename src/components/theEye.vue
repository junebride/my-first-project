<template>
  <div class="eye">
    <div class="shut">
      <span></span>
      <div class="ball"></div>
    </div>
  </div>
</template>

<script>
import { setInterval, setTimeout, clearInterval } from "timers";
export default {
  name: "HelloWorld",
  data() {
    return { blinkInterval: null, bool_Looking: false };
  },
  props: {
    interactive: Boolean
  },
  mounted() {
    const _this = this;

    setTimeout(function() {
      _this.eyefullopen();
      _this.initEye();

      if (!/Mobi|Android/i.test(navigator.userAgent)) {
        setTimeout(function() {
          $(document).on("mousemove", _this.eyemove);
        }, 2500);
      }
    }, 2000);

    window.ondevicemotion = function(e) {
      console.log(e);
    };
  },
  methods: {
    initEye: function() {
      const _this = this;

      _this.blinkInterval = setInterval(function() {
        $(".shut span").css({ height: "100%", transition: "height 0.5s" });
        setTimeout(function() {
          $(".ball").css({
            width: "40px",
            height: "40px",
            borderWidth: "30px",
            left: "50%",
            top: "50%",
            transform: "translate( -50%, -50%)"
          });

          _this.bool_Looking = false;
          _this.toggleInputs();
        }, 500);

        setTimeout(function() {
          if (!_this.interactive || _this.bool_Looking) _this.eyefullopen();
          else _this.eyehalfopen();
        }, 800);
      }, 10000);
    },

    eyehalfopen: function() {
      $(".shut span").css({ height: "35%", transition: "height 0.5s" });
    },

    eyefullopen: function() {
      $(".shut span").css({ height: "0%", transition: "height 0.5s" });
    },

    eyeballshrink: function() {
      $(".ball").css({
        width: "30px",
        height: "30px",
        borderWidth: "20px"
      });
    },

    eyeclose: function() {
      $(".shut span").css({ height: "100%", transition: "height 0.5s" });
    },

    eyemove: function(e) {
      let x = (e.clientX * 100) / window.innerWidth;
      let y = 15 + (e.clientY * 100) / window.innerHeight;
      this.bool_Looking = y >= 65;
      $(".ball").css({
        width: "40px",
        height: "40px",
        borderWidth: "30px",
        left: x + "%",
        top: y + "%",
        transform: "translate( -" + x + "%, -" + y + "%)"
      });

      if (this.interactive) this.eyelooking();
    },

    eyelooking: function() {
      if (this.bool_Looking) {
        this.eyefullopen();
        this.eyeballshrink();
      } else {
        this.eyehalfopen();
      }

      this.toggleInputs();
    },

    toggleInputs: function() {
      $("input[type=email]").prop("readonly", this.bool_Looking);

      $("input[type=submit], input[type=reset]").prop(
        "disabled",
        this.bool_Looking
      );
    }
  },
  beforeDestroy() {
    $(document).off("mousemove", this.eyemove);
    clearInterval(this.blinkInterval);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.eye {
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 75% 0;
  transform: translate(-50%, -50%) rotate(45deg);
  overflow: hidden;
  margin-left: 50%;
}

.ball {
  width: 40px;
  height: 40px;
  background: #222f3e;
  border-radius: 50%;
  border: 30px solid #ff0000;
  box-sizing: content-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: width 0s, height 0s, border-width 0s;
}

.shut {
  width: 300px;
  height: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  z-index: 999;

  span {
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 0 0 60% 60%;
  }
}
</style>
