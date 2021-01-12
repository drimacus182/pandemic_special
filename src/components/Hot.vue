<template>
  <section class="hot">
    <span class="badge">Гарячі новини</span>
    <p class="title">{{page.title}}</p>
  </section>
</template>

<script>

export default {
  name: 'Hot',
  props: {
    page: Object
  }
}
</script>



<style scoped lang="scss">
@import '../assets/basics.scss';



.hot {
  @include for-desktop {
    grid-column: middle/end;
  }

  background-color: var(--col-salmon);
  color: white;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title { 
    text-align: left;
    font-size: 2em;
    font-weight: 600;
  } 

}
</style>
