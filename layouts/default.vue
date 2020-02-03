<template>
  <div class="Main-container" scroll-behavior="smooth">
    <transition mode="out-in" :name="$store.state.routeTransitionDirection">
      <nuxt :key="$route.fullPath" scroll-behavior="smooth"/>
    </transition>    
  </div>
</template>

<script>

export default {
  components: {
  },
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    
  }
};
</script>

<style lang="scss">
.page1,
.page2,
.page3 {
  //scrollbar-width: none;
  scroll-behavior: smooth;
  transform-origin: center 30%;
  scroll-snap-type: y proximity;
}

</style>
