<template>
  <div class="TeamTemplate">
    <div class="TeamTitle">
      <p>
        <b>Team - Les Petits Amis</b>
      </p>
    </div>
    <div class="teamMember">
      <p class="titleName">
        <b>Visual Asset Creator: Ezrie</b>
      </p>
      <p class="contactInfo">
        <b>ezriemail@yahoo.why</b>
      </p>
      <p
        class="quote"
      >“ QUOTE Lorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafc “</p>
    </div>
    <div class="teamMember">
      <p class="titleName">
        <b>Main Programmer: William</b>
      </p>
      <p class="contactInfo">
        <b>Williboi@gmail.lit</b>
      </p>
      <p
        class="quote"
      >“ QUOTE Lorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafc “</p>
    </div>
    <div class="teamMember">
      <p class="titleName">
        <b>Tools Programmer: Philippe</b>
      </p>
      <p class="contactInfo">
        <b>philbillkoy@cool.dude</b>
      </p>
      <p
        class="quote"
      >“ QUOTE Lorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafc “</p>
    </div>
    <div class="teamMember">
      <p class="titleName">
        <b>Filler + Website: Kevin</b>
      </p>
      <p class="contactInfo">
        <b>kbweb@gmail.com | www.kb2c.com</b>
      </p>
      <p
        class="quote"
      >“ QUOTE Lorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafcLorem Impsom isfpisafc “</p>
    </div>
    <div class="teamMember">
      <p class="titleName">
        <b>Music: Julien</b>
      </p>
      <p class="contactInfo">
        <b>Please don’t contact me</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang = 'scss'>
@import "./assets/main.scss";
.TeamTemplate {
  margin-top: 10vh;
  margin-bottom: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;
  & .TeamTitle {
    @include textBig;
    color: #406270;
  }
  & .teamMember {
    margin-top: 10vh;
    & .titleName {
        @include textSmall;
    }
    & .contactInfo {
        @include textSmall;
      color: #406270;
      margin-top: 0.5em;
    }
    & .quote {
        @include textMed;
      margin-top: 1.5em;
    }
  }
}
</style>