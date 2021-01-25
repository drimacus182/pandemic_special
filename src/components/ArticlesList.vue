<template> 

<section class="list-page">
    <section class="header-section">
        <h2 v-for="(f, index) in feeds" :key="index" :class="`${f.active ? 'active' : '' }`" @click="click(f)">{{ f.name }}</h2>
    </section>

    <section id="articles_list">
        <section v-if="active_feed" v-html="active_feed.feed_html"> </section>
    </section>

</section>
</template>

<script>
const BOTTOM_GAP = 500;

export default {
    
    data: function() {
        return {
            feeds: [
                {
                    name: "Що в Україні",
                    url: "/theme/covidpage_ukraine/",
                    active: false,
                    last_page: 0,
                    feed_html: "",
                    pending: false,
                },
                {
                    name: "Що кажуть вчені",
                    url: "/theme/covidpage_science/",
                    active: false,
                    last_page: 0,
                    feed_html: "",
                    pending: false,
                }
            ],
            active_feed: null,
        }
    },

    mounted() {
        this.active_feed = this.feeds[0];
        this.active_feed.active = true;

        // прелоад. Тут затримка, щоб не було задохуя запитів
        this.loadHtml(this.feeds[0]);
        window.setTimeout(() => this.loadHtml(this.feeds[1]), 2000);
        
        window.addEventListener('scroll', this.onscroll);
    },

    destroyed() {
      window.removeEventListener("scroll", this.onscroll);
    },

    methods: {
        loadHtml: function(feed) {
          if (feed.pending) return;

          feed.pending = true;
          let page = feed.last_page + 1;
          let url = feed.url;
          
          return fetch(`${url}?page=${page}`, {
              headers: { "X-Requested-With": "XMLHttpRequest" }
          })

          .then(function(response) {
              if (!response.ok) {
                  if (response.status === 404) throw "end of list";

                  feed.pending = false;
                  throw "error while fetching";

              } else return response;
          })

          .then(response => response.text())
          .then(html => (feed.feed_html += html))
          .then(() => feed.last_page++)
          .then(() => feed.pending = false)
        },


        click: function(f) {
            this.feeds.forEach(ff => ff.active = false)
            f.active = true;
            this.active_feed = f;
        },

        onscroll: function(e) {
          if ((window.innerHeight + window.scrollY + BOTTOM_GAP) >= document.body.offsetHeight) {
            this.loadHtml(this.active_feed);
          }
        }
    },

    watch: {
        active_feed: function(val) {

        }
    }
}

</script>

<style lang="scss" scoped>
section.list-page {
    grid-column: start/end;
    margin-top: 4em;
    
    .header-section {
        display: flex;
        grid-column: title-start/title-end;
        margin-bottom: 2em;

        h2 {
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 0.02em;
            margin: 0;
            padding: 10px 15px;
            width: max-content;
            
            color: var(--col-salmon);
            background-color: white;
            border: 1px solid var(--col-salmon);

            cursor: pointer;

            &.active {
                color: white;
                background-color: var(--col-salmon);
            }
        }
    }
}

section#articles_list {
}
</style>


<style lang="scss">
 .rubric-pointer {
    display: block !important;
  }


// Текстівські стилі 
.list-page {
  display: grid;
  max-width: 1400px;
  margin: 0 auto;
  grid-template-columns: [start article-start] 13fr [title-start pagination-start] 39fr [title-end article-end pagination-end] 9fr [right-side-start] 12fr [right-side-end] 3fr [end];
  
  @media(max-width: 800px) {
    display: block;
    margin: 0 1em;
  }
}


$mq-narrow: 800px;
$texty-salmon: var(--col-salmon);

#articles_list {
  grid-column: article-start/article-end;

  /*  ------- стаття ------- */
  article {
    margin: 0;
    display: grid;
    grid-template-columns: [tags-start] 11fr [tags-end] 2fr [article-body-start] 39fr [article-body-end];
    margin-bottom: 50px;
    @media(max-width: $mq-narrow) {
      display: block;
    }

    //кнопка з назвою рубрики
    .rubric-pointer {
      grid-column: article-body-start/article-body-end;;
      width: max-content;
      height: max-content;
      margin-bottom: 10px;
      padding: 5px;
      background-color: black;
      color: white;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;

      display: none; // Тільки у тегах ми його потім вмикаємо
    }

    .article_body {
      grid-row-start: 2;
      display: inline-block;
      grid-column: article-body-start/article-body-end;
      @media(max-width: $mq-narrow) {
        order: 1;
      }

      //заг новини
      h3 {
        font-size: 25px;
        font-weight: 800;
        margin: 0 0 0.75em 0;
        display: inline-block;
      }      
    }

    .lead {
      position: relative;
      max-height: 100px;
      overflow: hidden;
      font-size: 18px;
      margin-bottom: 20px;

      //h3 в середині ліду
      h3 {
        font-size: 18px;
        font-weight: 800;
        margin: 0 0 0.75em 0;
      }

      i {
        font-style: normal;
      }

      > p:last-child:after {
        content: " >>";
        color: $texty-salmon;
        padding-left: 5px;
      }

      span {
        color: $texty-salmon;
        font-size: 18px;
        display: inline-block;
      }

      .fadeout {
        position: absolute;
        bottom: 0em;
        width:100%;
        height: 70%;
        pointer-events: none;
        background-image: linear-gradient(
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
      }
    }

    // мета-інфа 
    .published_at {
      font-weight: 400;
      font-size: 0.85em;
      padding-right: 10px;
      border-right: 1px solid black;
      @media(max-width: $mq-narrow) {
        width: max-content;
        display: none;
      }
    }

    .published_at_time {
      padding-left: 10px;
    }

    .view-amount {
      font-weight: 100;
      font-size: 0.85em;
      padding-left: 10px;
      @media(max-width: $mq-narrow) {
        display: none;
      }
    }

    //іконки вказівники на контент - відео, графіка 
    img.content-category-icon {
      display: inline-block;
      width: 15px;
      margin: 0 0 -3px 10px;
      @media(max-width: $mq-narrow) {
        margin: 0 10px -3px 0;
      }
    }

    .desktop-only {
      @media(max-width: $mq-narrow) {
        display: none !important;
      }
    }

    /* ------- теги мобілка і десктоп ------- */
    .published_tags {
      grid-column: tags-start/tags-end;
      grid-row: 2/3;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      font-size: 0.85em;
      line-height: 1.8;
      @media(max-width: 800px) {
        display: inline-block;
        align-items: flex-start;
      }

      .tags {
        text-align: end;
        @media(max-width: $mq-narrow) {
          display: none;
        }

        a {
          display: block;
          margin-bottom: 2px;
          text-align: right;
          text-transform: uppercase;
          font-size: 12px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
          hyphens: auto;

          &.active {
            color: $texty-salmon;
          }
        }


      }

      .tags.mobile-tags {
        display: none;
        @media(max-width: 800px) {
          display: inline-block;
        }

        a {
          display: inline-block;
          font-size: 15px;
          margin-right: 10px;
          text-transform: uppercase;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
