import { mapActions } from 'vuex';
import * as navigator from './navigator.js';

export default {
  methods: {
    ...mapActions([
      'fetchApi' // 映射 this.fetchApi() 到 this.$store.dispatch('fetchApi')
    ]),
    ...navigator
  }
};
