import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDate', function (value: undefined, format: string) {
    if (value && format) {
        moment.locale('fr')
        return moment(String(value)).format(format)
    } else {
        throw new Error('Vous devez passer la valeur de la date et du format voulu')
    }
})
