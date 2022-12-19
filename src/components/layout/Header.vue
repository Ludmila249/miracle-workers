<template>
  <header class="header banner__header">
    <button 
      class="header__button"
      type="button"
      >
      <span class="header__burger"></span>
    </button>
    <div class="header__logo-wrap">
      <router-link 
        class="header__logo"
        to="/">
        <img 
          src="@/assets/pictures/KinoPoisk HD logo H Dark Grey.svg" 
          alt=""
          >
      </router-link>
    </div>

    <nav class="header__menu">
      <ul class="header__menu-list">
        <li class="header__menu-item">
          <p class="header__menu-numbering">01</p>
          <a 
            class="header__menu-link"
            >
            У Бога новый проект
          </a>
        </li>
        <li class="header__menu-item">
          <p class="header__menu-numbering">02</p>
          <a 
            class="header__menu-link"
            >
            Подсказки
          </a>
        </li>
        <li class="header__menu-item">
          <p class="header__menu-numbering">03</p>
          <a 
            class="header__menu-link"
            >
            Больше подсказок
          </a>
        </li>
        <li class="header__menu-item">
          <p class="header__menu-numbering">04</p>
          <a 
            class="header__menu-link"
            >
            Вопросы и ответы
          </a>
        </li>
        
      </ul>
    </nav>
  </header>
</template>

<script>

</script>





<style scoped lang="scss">

  .header {
    position: relative;
    padding-top: 21px;
    padding-bottom: 24px;

    &__button {
      position: absolute;
      top: 37.5px;
      left: 35px;
      width: 30px;
      height: 30px;
      background-color: inherit;
      border: none;
      cursor: pointer;
    }

    &__burger {
      display: block;
      position: relative;
      width: 20px;
      height: 1px;
      border: 1px solid #000;
      margin-left: 4px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 20px;
        height: 1px;
        border: 1px solid #000;
        left: -1px;        
      }

      &::before {
        top: -8px;
      }

      &::after {
        top: 6px;
      }

    }

    &__logo-wrap {
      width: 100%;
    }

    &__logo {
      display: block;
      width: 183px;
      margin: 0 auto;
    }

    &__menu {
      position: absolute;
      top: 178px;
      left: 37px;
      width: 152px;
    }

    &__menu-item {
      position: relative;
      display: flex;
      width: 100%;
      height: auto;
      padding-bottom: 7.7px;
      margin-bottom: 11.5px;
      font-family: 'kinopoisk-light';
      font-size: 14px;
      line-height: 15px;
      color: #333333;
      // border-bottom: 1px solid #000;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 109px;
        background-color: #000;
      }
    }

    &__menu-link {
      cursor: pointer;
    }

    &__menu-numbering {
      display: flex;
      font-family: 'kinopoisk-bold';
      font-size: 16px;

      color: #2E332A;
      margin-right: 19.7px;
      align-items: center;
    }


  }
</style>


<script>


export default {

}
</script>
