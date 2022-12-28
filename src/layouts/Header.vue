<template>
  <header class="header banner__header">
    <button 
      class="header__button"
      type="button"
      @click="handlerClick('open')"
    >
      <span class="header__burger"></span>
    </button>
    <div class="header__logo-wrap">
      <router-link 
        class="header__logo"
        to="/"
        >
        <picture>
          <source 
            media="(max-width: 1024px)" 
            srcset="../assets/icons/kinopoisk.svg"
          >
          <img 
            class="header__logo-img"
            src="@/assets/icons/KinoPoisk HD logo H Dark Grey.svg" 
            alt="KinoPoisk"
          >
        </picture>
      </router-link>
    </div>

    <nav 
      class="header__menu" 
      ref="menu"
      >
      <ul class="header__menu-list">
        <li class="header__menu-item">
          <p class="header__menu-numbering">01</p>
          <a 
            class="header__menu-link"
            href="#"
            >
            У Бога новый проект
          </a>
        </li>
        <li class="header__menu-item">
          <p class="header__menu-numbering">02</p>
          <a 
            class="header__menu-link"
            href="#"
            >
            Подсказки
          </a>
        </li>
        <li class="header__menu-item">
          <p class="header__menu-numbering">03</p>
          <a 
            class="header__menu-link"
            href="#"
            >
            Больше подсказок
          </a>
        </li>
        <li class="header__menu-item">
          <p class="header__menu-numbering">04</p>
          <a 
            class="header__menu-link"
            href="#"
            >
            Вопросы и ответы
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>


export default {
  methods: {
    handlerClick(className) {
      if(this.$refs.menu.classList.contains(className)) {
        this.$refs.menu.classList.remove(className);
      } else {
        this.$refs.menu.classList.add(className);
      }
    }
  },
}

</script>

<style scoped lang="scss">

$--color-yellow-hover: #f2af4a;
  .header {
    position: relative;
    padding-top: 21px;
    padding-bottom: 24px;
    z-index: 2;

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

    &__logo-img {
      display: flex;
      margin: 0 auto;
    }

    &__menu {
      display: none;
      position: absolute;
      top: 178px;
      left: 37px;
      width: 152px;
    }

    &__menu-link {
      cursor: pointer;
      color: #333333;
      transition: all 0.3s ease;

      &:hover {
        font-size: 15px;
        color: $--color-yellow-hover;
      }
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
      transition: all 0.3s ease;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 109px;
        background-color: #000;
        transition: all 0.3s ease;
      }

      &:hover {
        font-size: 15px;
        color: $--color-yellow-hover;
        .header__menu-numbering {
          color: $--color-yellow-hover;
        }

        &::after {
          width: 90%;
          background-color: $--color-yellow-hover;
        }
      }
    }

    &__menu-numbering {
      display: flex;
      font-family: 'kinopoisk-bold';
      font-size: 16px;

      color: #2E332A;
      margin-right: 19.7px;
      align-items: center;
      transition: all 0.3s ease;

    }


  }

  .open {
    display: block;
  }
</style>
