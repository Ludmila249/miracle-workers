import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayItems: [],
  },
  getters: {
    arraySlide: (state) => state.arrayItems,
  },
  mutations: {
    getArraySlide(state, array) {
      state.arrayItems = array;
    }
  },
  actions: {
    getArraySlide({ commit }) {
      const arraySlide = [
        {
          id: 1,
          src: require('@/assets/pictures/racer.png'),
          text: 'Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.',
        },
        {
          id: 2,
          src: require('@/assets/pictures/Buschemi.png'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo esse molestias vitae id quo, dicta earum animi veniam pariatur itaque hic nulla maxime odio necessitatibus nemo, inventore reprehenderit doloremque?',
          lightBackground: true,
        },
        {
          id: 3,
          src: require("@/assets/pictures/racer.png"),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod perferendis dolor! Tempore alias impedit officiis quidem aspernatur, harum non soluta deserunt aliquam, deleniti vitae sunt neque amet provident nobis.',
          lightBackground: true,
        },
        {
          id: 4,
          src: require('@/assets/pictures/Buschemi.png'),
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo esse molestias vitae id quo, dicta earum animi veniam pariatur itaque hic nulla maxime odio necessitatibus nemo, inventore reprehenderit doloremque?',
        },
      ];
      commit('getArraySlide', arraySlide);
    }
  },
})
