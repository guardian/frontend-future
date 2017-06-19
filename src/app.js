/* @flow */

const Vue = require('vue');

import Page from './components/Page.vue';

export const createApp = () => {
    const app = new Vue({
        render: h => h(Page),
    });

    return { app };
};
