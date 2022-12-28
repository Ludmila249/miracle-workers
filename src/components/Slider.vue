<template>
  <div class="slider slider__margins">
    <div class="slider__pagination-wrap">
      <div class="slider__pagination">
        <span>{{ currentPage }}</span>
        <span>/</span>
        <span>{{ numberPages }}</span>
      </div>      
    </div>
    <slot></slot>
    <div class="slider__button-container">
      <div class="slider__button">
        <button 
          class="slider__arrow"
          @click="handlerClick('prev')"
        >
          <img class="slider__arrow-icon slider__arrow-icon--prev" src="@/assets/icons/Arrow.svg" />
        </button>
        <button
          class="slider__arrow"
          @click="handlerClick('next')"
        >
          <img class="slider__arrow-icon" src="@/assets/icons/Arrow.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    numberPages: {
      type: Number,
      default: 1
    }
  },
  
  methods: {
    handlerClick(str) {
      this.$emit('handlerClick', str);
    }, 
  },
}

</script>

<style lang="scss">

.slider {
  position: absolute;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 1;

  &__margins {
    padding-bottom: 100px;
    padding-top: 200px;
  }

  &__button-container {
    position: absolute;
    z-index: 3;
    width: 100%;
    top: 57%;

    @media(max-width: 900px) {
      top: 50%;
    }
  }

  &__button {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  &__arrow {
    position: relative;
    border: 1px solid #333333;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: inherit;
    cursor: pointer;    
  }

  &__arrow-icon {
    position: absolute;
    top: 17px;
    left: 8px;
    height: 4px;

    &--prev {
      transform: rotate(180deg);
    }
  }

  &__pagination-wrap {
    position: absolute;
    top: 21%;
    width: 100%;
    z-index: 1; 
  }

  &__pagination {
    width: 56px;
    height: 56px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "kinopoisk-bold";
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
}

</style>
