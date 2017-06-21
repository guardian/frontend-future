<style module>
</style>

<template>
    <div class="content__main tonal__main tonal__main--tone-news">
        <div class="gs-container">
            <div class="content__main-column content__main-column--article js-content-main-column ">
                <div class="js-score"></div>
                <div class="js-sport-tabs football-tabs content__mobile-full-width"></div>
                <ArticleMainMedia></ArticleMainMedia>
                <div class="mobile-only">
                    <ArticleHeaderMobile></ArticleHeaderMobile>
                </div>
                <ArticleMeta></ArticleMeta>
                <ArticleBody></ArticleBody>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleBody from './ArticleBody.vue';
    import ArticleHeaderMobile from './ArticleHeaderMobile.vue';
    import ArticleMeta from './ArticleMeta.vue';
    import ArticleMainMedia from './ArticleMainMedia.vue';

    export default {
        components: {
            ArticleBody,
            ArticleHead,
            ArticleMeta,
            ArticleMainMedia,
        },
    };
</script>
