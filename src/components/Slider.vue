<template>
  <div class="banner">
    <splide :options="options">
      <slot></slot>
    </splide>
  </div>
</template>

<script>
  import { Splide } from '@splidejs/vue-splide';
  export default {
    props: {
      options: {
        type: Object,
        default: {
          rewind : true,
          width  : '100%',
          autoplay: 5000,
          type   : 'loop',
          padding: '20%',
          pagination: true,
          arrows: true,
        }
      }
    },

    components: {
      Splide,
    },
  }

</script>

<style scoped lang="scss">

</style>
