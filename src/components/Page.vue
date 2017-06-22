<style>
    .mobile_only {
        display: block;
    }

    .hide_on_mobile {
        display: none;
    }

    @media (min-width: 1024px) {
        .hide_on_mobile {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        .mobile_only {
            display: none;
        }
    }
</style>

<template>
    <GuArticle></GuArticle>
</template>

<script>
    /* @flow */
    import GuArticle from './GuArticle.vue';

    export default {
        components: {
            GuArticle,
        },
    };
</script>
