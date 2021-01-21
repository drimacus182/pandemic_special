<template>
  <div :class="`question ${q.collapsed ? 'collapsed' : ''}`" >
    <div class="title" @click="$emit('title_click')">
      <div class="heading">{{q.title}}</div><div class="chevron"></div>
    </div>
    <div class="answer" v-html="q.answer" ></div>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    q: Object,
  },

  computed: {
  }
}
</script>



<style scoped lang="scss">
.question {
  padding: 0;
  border-bottom: 1px solid black;

  .title {
    padding: 1em 0;
    display: flex;
    justify-content: space-between;

    font-size: 1rem; 
    font-weight: 700;
    line-height: 1.2;
    cursor: pointer;

    &:hover {
      background-color: #e2684971;
      .chevron {border-color: white !important;}
    }
  }

  .heading {
    margin-right: 1em;
    
  }
  .answer {
    overflow: hidden;
    transition: max-height .25s ease-in-out;

  }

  &.collapsed {
    .answer {
      max-height: 0;
    }

    .chevron {
      transform: rotate(45deg) translate(-0.5em, 0);
    }
  }

  .chevron {
    padding-left: 1.4em;
    width: 1.5em;
    height: 1.5em;
    
    transform: rotate(-135deg) translate(0, -0.5em);
    
    border: 2px solid var(--col-salmon);
    border-left: none;
    border-top: none;

    transition: transform .1s ease-in-out;
  }
  

}
</style>

<style lang="scss">
.question {
  line-height: 1.3;

  p {
    margin-bottom: 1em;
  }

  a {
    border-bottom: 1px solid var(--col-salmon);
    margin-bottom: 1em;
  }
}
</style>
