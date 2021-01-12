<template>
  <section class="top-stripe">
    <div class="corona-with-msg">
      <img class="corona-logo" src="../assets/corona.svg" />
      <p class="message-box"> Тексти у цьому розділі відрізняються від новин хоча б тим, що містять забагато оціночних суджень</p>
    </div>

    <div class="numbers">
      <div class="number-pane">
        <div class="title">Кількість чогось</div>
        <div class="number">71 231 767</div>
      </div>
      <div class="vr"/>

      <div class="number-pane">
        <div class="title">Індекс RT</div>
        <div class="number">2.5</div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'TopStripe',
  props: {
    msg: String
  }
}
</script>



<style scoped lang="scss">
@import '../assets/basics.scss';

.top-stripe {
  @include for-desktop {
    display: grid;
    grid-template-columns: var(--main-grid);
    grid-column-gap: 3em;
  }

  grid-column: start/end;

  background-color: black;
  color: white;

  display: flex;
  flex-wrap: wrap;

  .numbers {
    display: flex;
    gap: 3em;
  }

  .number-pane {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.3em;

    .title {
      color: var(--col-salmon);
      text-transform: uppercase;
    }

    .number{
      font-weight: 800;
      font-size: 3em;
      min-width: max-content;
    }
  }

  .corona-with-msg {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 1em;
    min-width: 30em;
    .corona-logo {
      width: 6em;
    }
  }


}
</style>
