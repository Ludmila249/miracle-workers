<template>
  <div class="item-sider">
    <div class="">
      <img 
        class=""
        :src="src"
        alt=""
      >
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
    }
  }
</script>

<style scoped lang="scss">
  .item-sider {
    width: 100%;
    height: auto;

    &__text {
      font-family: "kinopoisk-medium";
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #000000;

    }

  }
  
</style>
