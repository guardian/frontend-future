/* @flow */

import Vue from 'vue';
import Page from './components/Page.vue';

export const createApp = () => {
    const app = new Vue({
        render: h => h(Page),
    });

    return { app };
};
