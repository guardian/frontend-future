<style module>

</style>

<template>
    <article>
        <div class="hide_on_mobile">
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
