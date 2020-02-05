<template>
  <div class="circle">
    <svg class="arrow" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L26.4128 20L47 3" stroke="#DCDCDC" stroke-width="7"/>
</svg>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "./assets/main.scss";
  .circle{
    @include neuSmall;
    width: calc(3vh + 3vw);
    height: calc(3vh + 3vw);
    border-radius: 50%;
    background: #406270;
    display: flex;
    align-items: center;
    justify-content: center;
    & .arrow{
      width: 60%;
      height: 80%;
    }
  }
</style>