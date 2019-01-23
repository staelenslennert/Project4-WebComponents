import Vue from 'vue'
import VueMapbox from 'vue-mapbox';
import Mapbox from 'mapbox-gl';
import Tabs from 'vue-tabs-component';

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueMapbox, { mapboxgl: Mapbox });
Vue.use(Tabs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')