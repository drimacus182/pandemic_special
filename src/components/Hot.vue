<template>
  <a :href="page.url" class="hot">  
    
      <span class="badge">Гарячі новини</span>
      <p class="title">{{page.title}}</p>
    </a>

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
  transition: color,background-color .125s ease-in-out;


  @include for-desktop {
    grid-column: middle/end;
  }

  min-height: 18em;

  background-color: var(--col-salmon);
  color: white;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title { 
    margin-top: 0.5em;
    
    font-size: 2em;
    font-weight: 600;

    display: inline-block;
    

  } 

  &:hover {
    color: var(--col-salmon);
    background-color: black;

    .title {
      text-decoration: underline;
    }
  }

}
</style>
