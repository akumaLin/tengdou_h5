<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import leftNav from './components/left-nav/left-nav.vue'
  import jwTop from './components/jw-top/jw-top.vue'
  import jwContent from './components/jw-content/jw-content.vue'
  import jwglPage from './pages/jwgl-page.vue'
  export default {
    name: 'app',
    components: {
      leftNav,
      jwTop,
      jwContent
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;

  }
  html{
    -webkit-text-size-adjust: 100%;
  }
  html, p {
    font-size: 1.2vmin;

  }
  a,button,input{
    tap-highlight-color:transparent;
    -webkit-tap-highlight-color:transparent;
    outline: none;
  }
  a,a:link,a:active,a:hover,a:visited{
    text-decoration:none;
  }
  body {
    width: 100vw;
    height: 100vh;

  }

  ul {
    list-style: none;
  }

  .top {
    float: right;
  }

  .left {
    float: left;
  }

  .content {
    float: right;
  }
</style>
