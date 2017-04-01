<template>
  <div id="jwpg">
    <left-nav></left-nav>
    <div class="tran">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
      <transition name="slide-fade">
        <router-view name="a"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import leftNav from '@/components/left-nav/left-nav.vue'
  export default {
    name: 'jwglPage',
    components: {
      leftNav
    }
  }
</script>

<style>

  .router-view {
    float: right;
    width: 90vw;
  }

  .slide-fade-enter-active {
    transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-leave-active {
    transform: translateX(-90.1vw);


  }

  .slide-fade-enter {
    transform: translateX(90.1vw);
  }
</style>
