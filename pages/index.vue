<template>
  <div class="page1" scroll-behavior="smooth">
    <div class="topHalfIntersect"></div>
    <div class="mainBG"></div>

    <div class="mainContent" @click="menuback">
      <Landing class="section snafu" />
      <Controls class="section controls" />
      <Team class="section team" />
      <More class="section more" />
    </div>
    <VerticalNavigation class="appNavComponent" />
  </div>
</template>

<script>
//import Hero from '~/components/Hero.vue';
import VerticalNavigation from "~/components/VerticalNavigation.vue";
import Landing from "~/components/Landing.vue";
import Controls from "~/components/Controls.vue";
import Team from "~/components/Team.vue";
import More from "~/components/More.vue";
import smoothscroll from "smoothscroll-polyfill";
export default {
  components: {
    VerticalNavigation,
    Landing,
    Controls,
    Team,
    More
  },
  mounted() {
    smoothscroll.polyfill();
    //LAZYLOAD OBSERVER
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          /* Placeholder replacement */
          if (entry.isIntersecting) {
            console.log(entry);
            entry.target.style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px -20px 0px 0px" }
    );
    document.querySelectorAll(".lazyload").forEach(img => {
      observer.observe(img);
    });

    //Section OBSERVER
    let hobserver = new IntersectionObserver(
      (entries, hobserver) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.5) {
            if (entry.target.classList[2] != "snafu") {
              document.querySelector('.liens').style.opacity='1';
              const antennae = document.querySelectorAll('.antenna');
              console.log(antennae)
              antennae.forEach(function(antenna, index) {
                antenna.style.transition = "opacity 0.75s "+ 0.5 * index + "s ease"
                antenna.style.opacity='0.25';
              })
            }
            document.querySelectorAll(".link").forEach(link => {
              if (link.style.fontWeight != "400") {
                link.style.fontWeight = "400";
                link.style.transform = "scale(1)";
              }
            });

            document.querySelector(
              ".link." + entry.target.classList[2]
            ).style.fontWeight = "800";
            document.querySelector(
              ".link." + entry.target.classList[2]
            ).style.transform = "scale(1.2)";
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".section").forEach(section => {
      hobserver.observe(section);
    });
  },
  methods: {
    menuback() {}
  },
  meta: {
    depth: 1
  }
};
</script>

<style lang="scss" scoped>
.page1 {
  margin-top: 0;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  width: 100%;
}
.topHalfIntersect {
  height: 45vh;
  width: 100%;
  position: absolute;
}
.mainBG {
  position: fixed;
  top: 0vh;
  height: 150vh;
  width: 100%;
  background: #dcdcdc;
  z-index: -1;
}
.mainContent {
  position: absolute;
  right: 0vw;
  width: 80vw;

}
@media (orientation: landscape) {
  /*Landscape tablet, Laptop, Desktop*/
}
@media (orientation: portrait) {
  /* Phones,  Portrait tablets */
  .mainContent {
    width: 100%;
    left: 0;
    z-index: 1;
      overflow-x: hidden;

  }
  .appNavComponent {
    z-index: 2;
  }
  .arrowCircle {
    position: fixed;
    bottom: 0;
    left: 50vw;
    transform: translateX(-50%);
  }
}
</style>
