import Vue from 'vue'
import {Time} from './time';

new Vue({
  el: '#app',
  data: {
    times: [
      new Time("América MG", require('./assets/america_mg_60x60.png')),
      new Time("Atlético MG", require('./assets/atletico_mg_60x60.png')),
      new Time("Cruzeiro", require('./assets/cruzeiro_60x60.png')),
    ],
    alfabeto: {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
    }
  }
})
