<template>
  <div id="app">
    <top-stripe class="h-padding v-padding"/>
    <hot v-if="page_data.hot" class="h-padding v-padding" :page="page_data.hot"/>
    <section class="questions h-padding v-padding">

      <div class="badge">Найчастіші питання:</div>
      <div class="list">
        <question v-for="(q, index) in page_data.questions" :key="index" :q="q" @title_click="question_click(index)"> </question>
      </div>
    </section>

    <articles-list />

    <!-- {{ page_data }} -->


  </div>
</template>



<script>
import TopStripe from './components/TopStripe'
import Hot from './components/Hot'
import Question from './components/Question.vue'
import ArticlesList from './components/ArticlesList'


export default {
  name: 'App',
  components: {
    TopStripe,
    Hot,
    Question,
    ArticlesList,
  },

  data: function(){
    return {
      page_data: {},
    }
  },

  mounted() {
    window.addEventListener("load", () => {
      this.page_data = prepare_data(JSON.parse(document.getElementById('data').innerHTML));
    });
  },

  methods: {
    question_click(clicked_idx) {
      this.page_data.questions.forEach((q, index) => {
        if (index != clicked_idx) q.collapsed = true;
        else q.collapsed = !q.collapsed;
      })
      
    }
  }
}

function prepare_data(data) {
  let obj = data.reduce((o, v, i) => {o[v.name] = v.items; return o;}, {})

  if (obj.hot.length) obj.hot = obj.hot[0];
  else obj.hot = null;

  let questions_html = obj.questions[0];
  

  
  let parent = document.createElement('section');
  parent.innerHTML = obj.questions;
  
  let elements = parent.children;

  let questions = [];
  let q = null;

  for (let i=0; i<elements.length; i++) {
    let el = elements[i];

    if (el.tagName === "H2") {
      if (q) questions.push(q);

      q = {title: el.innerHTML.trim(), answer: "", collapsed: true};
    } else {
      q.answer += el.outerHTML.trim();
    }
  }

  questions.push(q);
  obj.questions = questions;
  return obj;
}
</script>

<style lang="scss">
@import './assets/basics.scss';

:root {
  --col-salmon: #e26849;
  --main-grid: [start] 1fr [middle] 1fr [end];
}

body, html, p {margin: 0; padding: 0;}
* {
  box-sizing: border-box;

}






#app {
  font-family: ProximaNova, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  max-width: 1400px;
  margin: 0 auto;

  @include for-desktop {
    display: grid;
    grid-template-columns: var(--main-grid);
    // grid-column-gap: 3em;
  }

}





.h-padding {
  padding-left: 2rem;
  padding-right: 2rem;
}

.v-padding {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.vr {
  width: 1px;
  height: 100%;
  background: white;
}

.badge {
  text-transform: uppercase;
  font-size: 1rem;
}

.questions {
  grid-row: 2/4;

  .badge {
    color: var(--col-salmon);
  }
}

</style>
