import Vue from 'vue'
import {Time} from './time';

new Vue({
  el: '#app',
  data: {
    time: new Time("Time X", "valor")
  }
})
