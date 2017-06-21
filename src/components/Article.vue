<style module>
    .hide_on_mobile {
        display: none;
    }

    @media (min-width: 1024px) {
        .hide_on_mobile {
            display: block;
        }
    }
</style>

<template>
    <article>
        <div :class="$style.hide_on_mobile">
            <ArticleHeader tone="feature"></ArticleHeader>
        </div>
        <ArticleContent tone="feature"></ArticleContent>
    </article>
</template>

<script>
    /* @flow */
    import ArticleHeader from './ArticleHeader.vue';
    import ArticleContent from './ArticleContent.vue';

    export default {
        components: {
            ArticleHeader,
            ArticleContent,
        },
    };
</script>
