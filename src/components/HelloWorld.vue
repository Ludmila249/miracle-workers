<template>
  <div class="">
    <Header />
    <h1 class="banner__title">они должны что-то знать</h1>
    <div class="">
      <div class="slider banner__wrap-slider">
          

          <Slider></Slider>
          
          <!-- <template>
            <splide-slide>
              <item-slider
                :index="slide.id"
                :src="slide.src"
                :text="slide.text"
              >
              </item-slider>
            </splide-slide>
          </template> -->
        
        
        
        
      </div>
      <!-- <div class="">
        <router-link 
          class=""
          to=""
        >
        Искать промокод
        <img 
          class="" 
          src="@/assets/icons/Arrow.svg" 
          alt=""
        >
        </router-link>
      </div> -->
    </div>

  </div>
</template>

<script>
  import Header from '@/components/layout/Header.vue';
  import { Splide } from '@splidejs/splide';
  import Slider from '@/components/Slider.vue';
  import ItemSlider from './itemSlider.vue';

  export default {
    components: { 
      Slider,
      Header,
      Splide,
      ItemSlider,
    },

    data() {
      return {
        options: {
          rewind : true,
          width  : '100%',
          autoplay: 5000,
          type   : 'loop',
          padding: '20%',
          pagination: true,
          arrows: true,
        },
        arraySlide: [
          {
            id: 1,
            src: './../assets/pictures/racer.png',
            text: 'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.'
          },
          {
            id: 2,
            src: '',
            text: ''
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
      background-color: #FFCC64;
      height: 300px;
    }
  }

</style>
