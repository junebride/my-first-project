<template>
  <div class="align-center fixed">
    <div class="container">
      <the-eye :interactive="true"></the-eye>
    </div>
    <div id="main">
      <form method="post" action="#">
        <div class="row gtr-uniform">
          <div class="col-12 col-12-xsmall">
            <input
              type="email"
              name="demo-email"
              id="demo-email"
              value
              placeholder="Email"
            />
          </div>
          <div class="col-12">
            <ul class="actions">
              <li>
                <input type="submit" value="Send Message" class="primary" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import theEye from "@/components/theEye";

export default {
  name: "registration",
  data: function() {
    return {};
  },
  mounted() {
    $("#navPanelToggle").css({ display: "none" });
  },
  components: { "the-eye": theEye }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}

.container {
  margin-top: 15em;
}
</style>
