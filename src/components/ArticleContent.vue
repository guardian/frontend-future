<style module>
    .mobile_only {
        display: none;
    }

    @media (max-width: 1024px) {
        .mobile_only {
            display: block;
        }
    }
</style>

<template>
    <div class="content__main tonal__main tonal__main--tone-news">
        <div class="gs-container">
            <div class="content__main-column content__main-column--article js-content-main-column ">
                <div class="js-score"></div>
                <div class="js-sport-tabs football-tabs content__mobile-full-width"></div>
                <ArticleMainMedia></ArticleMainMedia>
                <div :class="$style.mobile_only">
                    <ArticleHeader :tone="tone"></ArticleHeader>
                </div>
                <ArticleMeta></ArticleMeta>
                <ArticleBody></ArticleBody>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleBody from './ArticleBody.vue';
    import ArticleHeader from './ArticleHeader.vue';
    import ArticleMeta from './ArticleMeta.vue';
    import ArticleMainMedia from './ArticleMainMedia.vue';

    export default {
        props: ['tone'],
        components: {
            ArticleBody,
            ArticleHeader,
            ArticleMeta,
            ArticleMainMedia,
        },
    };
</script>
