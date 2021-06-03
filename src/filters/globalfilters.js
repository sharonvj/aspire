import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDateTime' ,function(value) {
    if (value) {
      return moment(Number(value)).format('MM/DD/YYYY HH:mm:ss')
    }
});