<template>
  <div id="app">
    <!-- <div class="layer"></div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate: function() {
    this.$store.dispatch("fetchEvents");
  }
}
</script>


<style lang="scss">
@import './src/style/base';
html {
  height: 100%;
  overflow-x: hidden;
  font-weight: 200;
  scroll-behavior: smooth;
  text-align: center;
}
#app {
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #000000;
//   background: url(../assets/werchterbg.jpg) no-repeat 50% 50% fixed;
//   /* Full height */
//   height: 100%;
// background-size: cover;
// -moz-background-size: cover;
// -o-background-size: cover;
// -webkit-background-size: cover;
}
// .layer{
// 	background-color: rgba(0, 0, 0, 0.4);
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
// }
</style>