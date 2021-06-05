import Vue from 'vue'
import RedaForm from '@/components/RedaForm.vue';
import DataTableCRUD from '@/components/DataTableCRUD.vue';
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.component('RedaForm', RedaForm);
Vue.component('DataTableCRUD', DataTableCRUD);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
