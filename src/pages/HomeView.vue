<template>
  <div class="home">
    <Header />
    <BannerOnMain />
  </div>
</template>

<script>
import BannerOnMain from '@/components/bannerOnMain.vue';
import Header from '@/layouts/Header.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    BannerOnMain
}
}
</script>
