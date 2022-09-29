import { createApp } from 'vue'
import App from './App.vue'
import LogRocket from 'logrocket';
import UserbackPlugin from '@userback/vue';

LogRocket.init('vtonhp/sidd_vue_sandbox');

createApp(App)
    .use(UserbackPlugin, {
        token: '37770|73921|WwixkuxkemJCeqK33XKzmN6lP'
    })
    .mount('#app');


