<template>
  <div class="">
    <hooper :settings="hooperSettings">
      <slot></slot>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons" mode="fraction"></hooper-pagination>
      <!-- <hooper-progress slot="hooper-addons"></hooper-progress> -->
    </hooper>
  </div>
</template>

<script>
import itemSlider from './itemSlider.vue';
  import  { 
    Hooper, 
    Slide,
    // Progress as HooperProgress,
    Pagination as HooperPagination,
    Navigation as HooperNavigation
  } 
  from 'hooper';
  
export default {
  components: { 
    itemSlider,
    Hooper,
    Slide,
    // HooperProgress,
    HooperPagination,
    HooperNavigation
  },

  data() {
    return {
      hooperSettings: {
        centerMode: true,
        rewind : true,
        width  : '100%',
        autoplay: 5000,
        type   : 'loop',
        padding: '20%',
        pagination: true,
        arrows: true,
      },
    };
  }
}

</script>

<style lang="scss">
  // .hooper-progress {
  //   // display: none;
  // }
  .hooper {
    position: relative;
    height: auto;
  }

  .hooper-next,
  .hooper-prev {
    border: 1px solid #000;
    border-radius: 50%;
  }

  .hooper-pagination {
    position: absolute;
    top: 15px;
    width: 56px;
    height: 56px;
    background-color: #fff;
    border-radius: 50%;
    padding: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "kinopoisk-bold";
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #000000;
  }

  .hooper-slide {
    display: flex;
    align-items: flex-end;
    min-height: 418px;
  }

</style>
