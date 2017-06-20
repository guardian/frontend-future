<style module>
</style>

<template>
    <article>
        <ArticleHeader tone="news"></ArticleHeader>
        <ArticleContent></ArticleContent>
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
