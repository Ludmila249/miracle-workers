<template>
  <div class="banner">
    <h1 class="banner__title">они должны что-то знать</h1>
    <Slider 
      @handlerClick="overlapSlider"
      :currentPage="arrayData.id"
      :numberPages="arrayLength"
      >
      <item-slider
        :data="arrayData"
      />
    </Slider>
    <div class="banner__right-side-menu">
      <p class="banner__link">
        hd.kinopoisk.ru
      </p>
    </div>
    <div class="banner__wrap-search-link">
      <router-link
        class="banner__search-link"
        to=""
      >
        Искать промокод
        <img 
          class="banner__search-arrow" 
          src="@/assets/icons/Arrow.svg" 
          alt=""
        >
      </router-link>
    </div>
    <div class="banner__scroll">
      <p class="banner__scroll-text">
        Скрольте вниз
      </p>
      <p class="banner__scroll-text banner__scroll-text--flipping ">
        Листайте вниз
      </p>
      <div class="">
        <img 
          class="banner__scroll-arrow" 
          src="@/assets/icons/Arrow-scroll.svg" 
          alt="" 
        /> 
      </div>
    </div>
  </div>
</template>

<script>
  import ItemSlider from './itemSlider.vue';
  import Slider from '@/components/Slider.vue';

  export default {
    components: {
      ItemSlider,
      Slider,
    },

    mounted() {
      this.$store.dispatch('getArraySlide');
      this.overlapSlider();
    },

    data() {
      return {
        flipTo: '',
        index: 0,
        arrayLength: 0,
        arrayData: {},
      }
    },

    methods: {
      overlapSlider(str = '') {
        const array = this.$store.getters.arraySlide;

        this.arrayLength = array.length;
        if(str === 'next') {
          if(this.index < (array.length - 1) && this.index >= 0) {
            this.index = this.index + 1;
          }
        } else if(str === 'prev') {
          if(this.index > 0 && this.index <= (array.length - 1)) {
            this.index = this.index - 1;
          }
        }
        this.arrayData = array[this.index];
      }
    }
  }
</script>


<style scoped lang="scss">
  $--color-white: #ffffff;
  $--color-gray-text: #333333;

  .banner {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-image: url(@/assets/pictures/Sky.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -70px;
    z-index: 1;

    &__header {
      margin-bottom: 20px;
    }

    &__title {
      position: relative;
      padding-top: 70px;
      z-index: 2;
      font-family: 'Futura';
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 72px;
      text-transform: uppercase;
      text-align: center;
      color: #FFCC64;

      @media (max-width: 1024px) {
        font-size: 30px;
      }

      @media (max-width: 770px) {
        font-size: 26px;
      }
    }

    &__wrap-slider {
      background-color: inherit;
      min-height: 418px;
    }

    &__wrap-search-link {
      width: 100%;
      height: auto;
      background-color: $--color-white;
      padding-bottom: 20px;
    }
    

    &__search-link {
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 230px;
      height: 58px;
      margin: 0 auto;
      background: $--color-white;
      box-shadow: 0px 5px 26px rgba(11, 75, 92, 0.0975713);
      border-radius: 8px;

      font-family: 'kinopoisk-lite';
      font-size: 15px;
      line-height: 18px;
      color: $--color-gray-text;
      background-color: inherit;

      margin-top: 220px;
      margin-bottom: 20px;

      &:hover {
        box-shadow: 0px 20px 30px rgba(30, 24, 11, 0.098);
      }

      @media(max-width: 1600px) {
        margin-top: 280px;
      }
    }

    &__search-arrow {
      margin-left: 5px;
      width: 26px;
      height: 3.4px;
    }

    &__right-side-menu {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: right;
      margin-top: 250px;
    }

    &__link {
      display: block;
      font-family: 'kinopoisk-lite';
      font-size: 14px;
      line-height: 15px;
      text-align: center;
      color: $--color-gray-text;
      transform: rotate(90deg);
    }

    &__scroll {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
    }

    &__scroll-text {
      display: block;
      font-family: 'kinopoisk-lite';
      font-size: 14px;
      line-height: 15px;
      color: $--color-gray-text;
      transform: rotate(-90deg);

      @media(max-width: 1024px) {
        display: none;
      }

      &--flipping{
        display: none;

        @media(max-width: 1024px) {
          display: block;
        }
      }
    }

    &__scroll-arrow {
      margin-left: 44px;
      margin-top: 53px; 
    }
  }


    


</style>
