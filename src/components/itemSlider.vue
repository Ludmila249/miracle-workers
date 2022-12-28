<template>
  <div class="item-sider">
    <img
      class="item-sider__background"
      src="@/assets/pictures/Group 4.png"
    />
    <div :class="{'item-sider__light': true, 'light-include': data.lightBackground}"></div>
    <div class="item-sider__wrap-img">
      <img
        class="item-sider__img"
        :src="arrayData.src"
        alt=""
      />
    </div>
    <p class="item-sider__text">{{ arrayData.text }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      },
    },

    computed: {
      arrayData() {
        return this.data;
      },
      indexID() {
        return this.data.id;
      }
    }
  }
</script>

<style scoped lang="scss">
  .item-sider {
    width: 100%;
    height: 100%;

    &__text {
      font-family: "kinopoisk-lite";
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #000000;
      width: 65%;
      margin: 0 auto;
      margin-top: -50px;
      position: relative;
      z-index: 3;

      @media(max-width: 1024px) {
        font-size: 18px;
      }

      @media(max-width: 770px) {
        font-size: 16px;
      }

    }

    &__wrap-img {
      position: relative;
      width: 500px;
      height: 400px;
      margin: 0 auto;
      overflow: hidden;

    }

    &__img {
      border: none;
      display: block;
      margin: 0 auto;

      @media(max-width: 1024px) {
        width: 270px;
        height: 370px;
      }
    }
    
    &__background {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 2;
    }

    &__light {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(@/assets/pictures/Shining.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

  }

  .light-include {
    display: block;
  }


  
</style>
