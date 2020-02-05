<template>
  <div class="TeamTemplate">
    <div class="TeamTitle ">
      <p>
        <b>Team</b> <br> <span>Les Petits Amis</span>
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
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;
  & .TeamTitle {
    padding-top: 5vh;
    font-size: $calc3;
    color: #406270;
    & span{
      font-size: $calc3
    }
  }
  & .teamMember {
    margin-top: 10vh;
    & .titleName {
        font-size: $calc1;
    }
    & .contactInfo {
        font-size: $calc1;
      color: #406270;
      margin-top: 0.5em;
    }
    & .quote {
        font-size: $calc1-5;
      margin-top: 1.5em;
    }
  }
}
@media (orientation: portrait ) {
  .TeamTemplate{
    & .TeamTitle{
      text-align: center;
      font-size: $calc3-5;
    }
    & .teamMember {
    margin-top: 10vh;
    & .titleName {
        font-size: $calc2;
    }
    & .contactInfo {
        font-size: $calc1-5;
      color: #406270;
      margin-top: 0.5em;
    }
    & .quote {
        font-size: $calc2;
      margin-top: 1.5em;
    }
  }
  }
}
</style>