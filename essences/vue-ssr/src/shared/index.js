import { createSSRApp, h } from 'vue';

import App from './components/App.vue';

export default () => {
    const app = createSSRApp({
        render: () => h(App),
    });

    return {
        app,
    };
};
