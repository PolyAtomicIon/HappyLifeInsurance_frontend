import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import DaySpanVuetify from 'dayspan-vuetify-2'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import router from './router';
import store from './store';

Vue.config.productionTip = false

Vue.use(DaySpanVuetify, {
    // options is vue definition, the resulting reactive component is stored in components as this.$dayspan or Vue.$dayspan
    data: {
        // data or computed to override
    },
    computed: {
        // data or computed to override
    },
    methods: {
        // methods to override
    }
});

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')