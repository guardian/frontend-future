
<script>
    /* @flow */
    import HeaderVue from './Header.vue';
    export default {
        components: {
            HeaderVue,
        },
    };
</script>

<template>
    <p :class="$style.red">
        hi
        <HeaderVue tone="news" message="I am the header"></HeaderVue>
    </p>
</template>

<style module>
    .red {
        color: red
    }
</style>
