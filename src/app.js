/* @flow */

import Vue from 'vue';
import Article from './components/Article.vue';

export const createApp = () => {
    const app = new Vue({
        render: h => h(Article),
    });

    return { app };
};
