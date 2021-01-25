<template> 
<section class="charts">
  <div class="badge">Графіки:</div>

  <a :href="active_chart.caption" class="chart-container" v-if="active_chart" target="_blank">
    <img :src="`https://texty.org.ua${active_chart.image}`" :alt="active_chart.caption">
  </a>
  <p class="caption">Клікніть на графіку, щоб дізнатись більше</p>
  <div class="buttons">
    
    <div class="chevron-container" @click="slidePrev">
      <div class="chevron prev"></div>
    </div>

    <div class="chevron-container" @click="slideNext">
      <div class="chevron next"></div>
    </div>
  </div>

</section>
</template>

<script>
export default {
    
    props: {
      charts: Array,
    },

    data: function() {
        return {
          active_chart_index: 0,
        }
    },

    computed: {
      active_chart() {
        return this.charts[this.active_chart_index];
      }
    },

    methods: {
      slideNext: function() {
        this.active_chart_index = (this.active_chart_index + 1) % this.charts.length ;
      },

      slidePrev: function() {
        this.active_chart_index = (this.active_chart_index + this.charts.length- 1) % this.charts.length ;
      }
    }
}



</script>

<style lang="scss" scoped>
.charts {
  position: relative;

  .caption {
    text-align: center;
    font-size: 0.8em;
    color: #333;;
  }

  .badge {
    color: var(--col-salmon);
  }

  .chart-container {
    width: 100%;
    position: relative;
    // border: 1px solid fuchsia;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    img {
      position: absolute;
      max-width: 100%;
      max-height: 100%;

      transition: transform 0.25s ease-in-out;;
    }

    &:hover {
      img {
        transform: scale(1.015)
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 1em;

    @media screen and (max-width: 800px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      
      .chevron-container {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .chart-container {
      z-index: 1000;
    }
  }

  .chevron-container {
    cursor: pointer;
    &:hover {
      .chevron{
        border-color: var(--col-salmon);
      }
    }
  }

  .chevron {
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid black;


    &.prev {
      transform: rotate(45deg) scale(0.7);
      border-top: none;
      border-right: none;
      margin-right: -0.5em
    }

    &.next {
      transform: rotate(45deg) scale(0.7);
      border-bottom: none;
      border-left: none;
      margin-left: -0.5em
    }
  }


}

</style>
