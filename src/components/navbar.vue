<template>
  <div>
    <nav id="nav">
      <ul class="links">
        <router-link active-class="active" exact to="/" tag="li">
          <a>Home</a>
        </router-link>
        <router-link active-class="active" exact to="/about" tag="li">
          <a>About</a>
        </router-link>
        <router-link active-class="active" exact to="/registration" tag="li">
          <a>Registration</a>
        </router-link>
      </ul>

      <ul class="icons">
        <li>
          <a href="#" class="icon fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon fa-facebook">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon fa-github">
            <span class="label">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>

    <a href="#navPanel" id="navPanelToggle">Menu</a>
    <div id="navPanel">
      <nav>
        <ul class="links">
          <router-link active-class="active" exact to="/" tag="li">
            <a>Home</a>
          </router-link>
          <router-link active-class="active" exact to="/about" tag="li">
            <a>About</a>
          </router-link>
          <router-link active-class="active" exact to="/registration" tag="li">
            <a>Registration</a>
          </router-link>
        </ul>

        <ul class="icons">
          <li>
            <a href="#" class="icon fa-twitter alt">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon fa-facebook alt">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon fa-instagram alt">
              <span class="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon fa-github alt">
              <span class="label">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
      <a href="#navPanel" class="close"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    msg: String
  },
  methods: {},
  mounted() {
    // let $nav = $("#nav");
    // let $navPanel = $("#navPanel");
    // let $navContent = $nav.children();
    // let $navPanelInner = $navPanel.children("nav");
    // $navContent.clone().appendTo($navPanelInner);

    $("#navPanel").panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "right",
      target: $("body"),
      visibleClass: "is-navPanel-visible"
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  margin: 0 auto 0 auto;
}
</style>
