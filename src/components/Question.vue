<template>
  <div :class="`question ${collapsed ? 'collapsed' : ''}`" >
    <div class="title" @click="() => collapsed = !collapsed">
      <div>{{q.title}}</div><div class="chevron"></div>
    </div>
    <div class="answer" v-html="q.answer_html" ></div>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    html: String,
    collapsed: {
      type: Boolean,
      default: true,
    }
  },

  computed: {
    q: function() {
      let element = document.createElement('section');
      element.innerHTML = this.html;
      
      let h2 = element.querySelector('h2');
      let title = h2.innerHTML;

      element.removeChild(h2);

      let answer_html = element.innerHTML.trim();
      

      return {title: title, answer_html: answer_html}
    }
  }
}
</script>



<style scoped lang="scss">
.question {
  padding: 1em 0;
  border-bottom: 1px solid black;

  .title {
    display: flex;
    justify-content: space-between;


    font-size: 1rem; 
    font-weight: 600;
    line-height: 1.2;
    cursor: pointer;
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
      transform: rotate(-135deg) translate(0, -0.5em);
    }
  }

  .chevron {
    width: 1.5em;
    height: 1.5em;

    transform: rotate(45deg) translate(-0.5em, 0);
    border: 1px solid var(--col-salmon);
    border-left: none;
    border-top: none;

    transition: transform .25s ease-in-out;
  }
  

}
</style>
