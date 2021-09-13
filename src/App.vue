<template>
  <div id="app" class="container-fluid">
    <div id="nav" class="row flex-nowrap">
      <NavBar></NavBar>
      <div class="col py-3 p-4">
        <Header></Header>
        <div class="d-flex">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e6e6e679;
}

#nav {
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  h6,
  h3,
  h1 {
    font-weight: bold;
    color: #3b5672;
  }
  h2 {
    font-weight: bold;
    color: #42b983 !important;
  }
}
</style>
