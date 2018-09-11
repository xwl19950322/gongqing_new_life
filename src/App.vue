<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/ShopHeader/FooterGuide";
export default {
  name: "App",
  components: {
    FooterGuide
  }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
</style>
