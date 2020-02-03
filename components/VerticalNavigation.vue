<template>
  <div class="nav_cont" key="nav_cont">
    <div class="antennae">
      <svg viewBox="0 0 241 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          class="antenna"
          d="M7.62939e-06 7.68472C63.5686 4.71105 100.291 10.4165 169.313 44.9596L178.633 26.3221M178.633 26.3221L215.913 26.3221L233 57.3845L215.913 90H178.633L163.1 57.3845L178.633 26.3221Z"
          stroke="#406270"
          stroke-width="13"
        />
      </svg>
      <svg class="right" viewBox="0 0 242 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          class="antenna"
          d="M241 7.68472C177.431 4.71105 140.709 10.4165 71.6867 44.9596L62.3667 26.3221M62.3667 26.3221L25.0867 26.3221L8 57.3845L25.0867 90H62.3667L77.9 57.3845L62.3667 26.3221Z"
          stroke="#406270"
          stroke-width="13"
        />
      </svg>
      <svg viewBox="0 0 242 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          class="antenna"
          d="M1.00001 89.3153C64.5686 92.2889 101.291 86.5835 170.313 52.0404L179.633 70.6779M179.633 70.6779H216.913L234 39.6155L216.913 7H179.633L164.1 39.6155L179.633 70.6779Z"
          stroke="#406270"
          stroke-width="13"
        />
      </svg>
      <svg class="right" viewBox="0 0 242 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          class="antenna"
          d="M241 89.3153C177.431 92.2889 140.709 86.5835 71.6867 52.0404L62.3667 70.6779M62.3667 70.6779H25.0867L8 39.6155L25.0867 7H62.3667L77.9 39.6155L62.3667 70.6779Z"
          stroke="#406270"
          stroke-width="13"
        />
      </svg>
    </div>
    <div class="liens">
      <div v-on:click="scrollTo(0)" class="link snafu">
        <p>SN:AFU</p>
      </div>
      <div v-on:click="scrollTo(1)" class="link controls">
        <p>Controls</p>
      </div>
      <div v-on:click="scrollTo(2)" class="link team">
        <p>Team</p>
      </div>
      <div v-on:click="scrollTo(3)" class="link more">
        <p>More</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  computed: mapState(["page"]),
  methods: {
    scrollTo(target) {
      var scrollTargets = document.querySelectorAll(".section");
      var toScroll = scrollTargets[target].offsetTop;
      window.scrollTo(0, toScroll);
    },
    menuEnter() {
      var navcont = document.querySelector(".nav_cont");
      navcont.style.transform = "translatex(45vw)";
      document.querySelector(".hamburger").style.opacity = "0";
    }
  },
  mounted() {}
};
</script>

<style lang="scss" >
@import "./assets/main.scss";
@mixin introFade {
  opacity: 0;
  animation: fadeIn 2s 2s ease forwards;
}
$off-black: #282828;
.nav_cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 20vw;
  z-index: 2;
  height: 100vh;
  background: #2e2e2e;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.233);
  transition: transform 0.5s ease;
  & .antennae {
    width: 20vw;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    & svg {
      width: 80%;
      &:nth-of-type(1) {
        opacity: 1;
      }
      &.right {
        align-self: flex-end;
      }
    }
  }
  & .liens {
    @include neuSmall;
    width: 100%;
    height: 40%;
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-weight: 400;
    //font-size:calc(1.2vw + 1.2vh);
    opacity: 0;
    //animation: fadeIn 2s 2s ease forwards;
    transition: opacity 0.5s 1s ease;
  }
}
.link {
  transition: transform 0.2s ease;
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin-top: 1em;
  & p {
    font-family: "Montserrat";
  }
}

@media (orientation: landscape) {
  /*Landscape tablet, Laptop, Desktop*/
  .hamburger {
    display: none;
  }
  .nav_cont {
    transform: translateX(0) !important;
  }
  .liens {
    font-size: calc(1.2vw + 1.2vh);
  }
}
@media (orientation: portrait) {
  /* Phones,  Portrait tablets */
  .nav_cont {
    position: fixed;
    top: 0;
    width: 55vw;
    transform: translateX(100vw);
    box-shadow: -4px 0px 4px rgba(0, 61, 118, 0.233);
  }
  .liens {
    font-size: calc(2.2vw + 2.2vh);
  }
}
</style>
