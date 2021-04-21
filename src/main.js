import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import DaySpanVuetify from 'dayspan-vuetify-2'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import router from './router';
import store from './store';

Vue.config.productionTip = false

Vue.use(DaySpanVuetify, {

    data: {
        features: {
            exclude: true,
            include: true,
            cancel: true,
            move: false,
            moveDuplicate: false,
            moveInstance: false,
            moveAll: false,
            drag: true,
            forecast: false,
            addDay: true,
            addTime: true,
            hideOnMove: false,
        },
    },
    methods: {
        getDefaultEventColor: () => '#6b52b7'
    },
    computed: {},
});

Vue.use(vuetify);

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')