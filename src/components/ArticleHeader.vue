<style module>
.live {
    background-color: #b51800;
}
.feature {
    background-color: #951c55;
}
</style>

<template>
    <header :class="$style[tone]">
        <div class="content__header tonal__header">
            <div class="gs-container">
                <div class="content__main-column u-cf">
                    <div class="content__labels content__labels--not-immersive">
                        <div class="content__section-label ">
                            <a class="content__section-label__link" data-link-name="article section"
                               href="https://www.theguardian.com/sport/lions-tour-2017">
                                Lions tour 2017
                            </a>
                        </div>
                    </div>
                    <h1 class="content__headline" itemprop="headline">
                        Jack Nowell stars as Lions overpower Chiefs to maintain tour momentum
                    </h1>
                </div>
            </div>
        </div>
        <ArticleStandfirst></ArticleStandfirst>
    </header>
</template>

<script>
    import ArticleStandfirst from './ArticleStandfirst.vue';
    export default {
        props: ["tone"],
        components: {
            ArticleStandfirst,
        }
    }
</script>
