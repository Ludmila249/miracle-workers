<template>
  <div class="banner">
    <Header />
    <h1 class="banner__title">они должны что-то знать</h1>
    <div class="">
      <div class="slider banner__wrap-slider">
        <!-- <div class="lhsgilahgpiehagop">
          <img 
            class="lhsgilahgpiehagop__background" 
            src="@/assets/pictures/Group 4.png" 
            alt=""
          />
        </div> -->
        <Slider>
          <slide 
            v-for="slide in arraySlide" 
            :key="slide.id"
          >
            <item-slider
              :src="slide.src"
              :index="slide.id"
              :text="slide.text"
            >
            </item-slider>
          </slide>
        </Slider>
      </div>
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
    
  </div>
</template>

<script>
  import Header from '@/components/layout/Header.vue';
  import ItemSlider from './itemSlider.vue';
  import Slider from '@/components/Slider.vue';

  import  { Slide } from 'hooper';

  export default {
    components: {
      Header,
      ItemSlider,
      Slider,
      Slide,
      
    },

    data() {
      return {
        // options: {
        //   rewind : true,
        //   width  : '100%',
        //   autoplay: 5000,
        //   type   : 'loop',
        //   padding: '20%',
        //   pagination: true,
        //   arrows: true,
        // },
        arraySlide: [
          {
            id: 1,
            src: require('@/assets/pictures/racer.png'),
            text: 'Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.'
          },
          {
            id: 2,
            src: require('@/assets/pictures/Buschemi.png'),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo esse molestias vitae id quo, dicta earum animi veniam pariatur itaque hic nulla maxime odio necessitatibus nemo, inventore reprehenderit doloremque?'
          },
          {
            id: 3,
            src: '',
            text: ''
          }
        ]
      }
    }
  }
</script>


<style scoped lang="scss">
  $--color-white: #ffffff;
  .banner {
    width: 100%;
    height: 1000px;
    box-sizing: border-box;
    background-image: url(@/assets/pictures/Sky.png);
    background-repeat: no-repeat;
    background-size: cover;

    &__header {
      margin-bottom: 20px;
    }

    &__title {
      font-family: 'Futura';
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 72px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 34px;
      color: #FFCC64;

      @media (max-width: 1024px) {
        font-size: 30px;
      }
    }

    &__wrap-slider {
      width: 63%;
      margin: 0 auto;
      background-color: inherit;
      min-height: 418px;
    }
    

    &__search-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 230px;
      height: 58px;
      margin: 0 auto;

      font-family: 'kinopoisk-lite';
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      color: #333333;
      transition: all 0.3s;

      &:hover {
        .banner__search-arrow {
          width: 30px;
          height: 5px;
        }
      }
    }

    &__search-arrow {
      margin-left: 20px;
      width: 26px;
      height: 3.4px;
    }
  }

  .slider {
    position: relative;
  }

  // .lhsgilahgpiehagop {
  //   position: absolute;
  //   top: 0;
  //   height: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 1;

  //   &__background {
  //     width: 100%;
  //     height: 100%;
  //   }
  // }
    


</style>
