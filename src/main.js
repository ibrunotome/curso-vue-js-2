import Vue from 'vue'
import {Time} from './time';

new Vue({
  el: '#app',
  data: {
    time: new Time("América MG", require('./assets/america_mg_60x60.png'))
  }
})
