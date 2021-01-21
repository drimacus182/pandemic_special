<template>
  <section class="top-stripe">
    <div class="corona-with-msg">
      <img class="corona-logo" src="../assets/corona.svg" />
      <p class="message-box"> Все, що варто знати про COVID-19: відповіді на найважливіші запитання; результати наукових досліджень, перебіг епідемії в Україні</p>
    </div>

    <div class="numbers">
      <div class="number-pane">
        <div class="title">Випадків в Україні</div>
        <div class="number" v-if="d.cases">{{ format(d.cases) }}</div>
      </div>
      <div class="vr"/>

      <div class="number-pane">
        <div class="title">Померлих в Україні</div>
        <div class="number" v-if="d.deaths">{{ format(d.deaths) }}</div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'TopStripe',
  props: {
    d: Object,
  },

  methods: {
    format: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }
}
</script>



<style scoped lang="scss">
@import '../assets/basics.scss';

.top-stripe {
  @include for-desktop {
    display: grid;
    grid-template-columns: var(--main-grid);
    // grid-column-gap: 3em;
  }

  grid-column: start/end;

  background-color: black;
  color: white;

  display: flex;
  flex-wrap: wrap;

  .numbers {
    display: flex;
  
    @media screen and (max-width: 800px) {
      gap: 3em;
    }

  }

  .number-pane {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (max-width: 800px) {
      padding: 1em 0;
    }


    gap: 0.3em;

    .title {
      color: var(--col-salmon);
      text-transform: uppercase;
      font-weight: 500;
    }

    .number{
      font-weight: 800;
      font-size: 2em;
      min-width: max-content;
    }
  }

  .corona-with-msg {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 1em;
    max-width: 30em;
    .corona-logo {
      width: 6em;
    }
  }

  .message-box {
    font-size: 0.85em;
    letter-spacing: -0.05em;
    margin-right: 2em;
  }


}
</style>
