<template>
  <div class="item-sider">
    <img class="item-sider__hsoigiorig" src="@/assets/pictures/Group 4.png" />
    <div class="item-sider__wrap-img">
      <img 
        class="item-sider__img"
        :src="src"
        alt=""
       />
    </div>
    <p class="item-sider__text">{{ text }}</p>
  </div>
  
</template>

<script>
  export default {
    props: {
      index: {
        type: Number,
        default: 1
      },
      src: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    },

    mounted() {

      console.log("src", this.src);

    },
  }
</script>

<style scoped lang="scss">
  .item-sider {
    width: 100%;
    height: 100%;


    &__text {
      font-family: "kinopoisk-medium";
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #000000;
      width: 70%;
      margin: 0 auto;
      margin-top: -100px;
      position: relative;
      z-index: 1;

    }

    &__wrap-img {
      position: relative;
      width: 240px;
      height: 400px;
      margin: 0 auto;
      margin-top: 50px;
    }

    &__img {
      position: absolute;
      padding-top: 50px;
      width: 100%;
      height: auto;
      top: 0;
      left: 0;
      z-index: -1;
    }
    
    &__hsoigiorig {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      
    }

  }
  
</style>
