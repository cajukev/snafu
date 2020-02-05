<template>
  <div class="ControlsTemplate">
    <div class="controlsTitle">
      <p><b>Controls</b></p>
    </div>
    <div class="controlsItem move">
      <p>
        <b>Move Left and Move Right</b>
      </p>
      <p>Left and Right Arrow Keys / A - D</p>
      <img src='MoveSmall.jpg' alt class="lazyload"/>
    </div>
    <div class="controlsItem jump">
      <p>
        <b>Jump</b>
      </p>
      <p>Space Bar</p>
      <img src='JumpSmall.jpg' alt class="lazyload"/>
    </div>
    <div class="controlsItem tip">
      <p>
        <b>Tip:</b>
      </p>
      <p>Jumping and moving is amazing at getting away from glitches... </p>
      <img src='JumpMoveSmall.jpg' alt class="lazyload"/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang = 'scss'>
@import "./assets/main.scss";
.ControlsTemplate {
  padding-top: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 1fr 1fr;
  grid-row-gap: 5vh;
  & .controlsTitle{
      font-size: $calc3-5;
      align-self: center;
      grid-row: 1 / span 1;
      grid-column: 1 / span 2;
      color: #406270;
  }
  & .controlsItem{
      font-size: $calc1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      & img{
          @include neuShadows;
          margin-top: 1em;
          max-width: 90%;
      }
  }
}
@media (orientation: landscape) {
  
}
@media (orientation: portrait) {
  .ControlsTemplate{
    margin-left: 0vw;
    margin-right: 0vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10vh;
    & .controlsTitle{
      font-size: $calc4;
    }
    & .controlsItem{
      font-size: $calc1-75;
      margin-top: 5vh;
      align-items: center;
      text-align: center;
      & p{
        margin-top: 2vh;
        margin-left: 5vw;
        margin-right: 5vw;
      }
    }
  }
}
</style>