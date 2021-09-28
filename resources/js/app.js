import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index';
import BootstrapVue from 'bootstrap-vue';
import VueToastr2 from 'vue-toastr-2';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'vue-toastr-2/dist/vue-toastr-2.min.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
window.toastr = require('toastr')
Vue.use(VueToastr2);

new Vue({
    router,
    store,
    VueToastr2,
    render: (h) => h(App),
  }).$mount('#app');
