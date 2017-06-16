<style module>
    .news {
        color: blue;
    }
    .sport {
        color: green;
    }
    /* this class should not be shipped */
    .rogueElement {
        color: red;
    }
</style>

<template>
    <h1 :class="{tone}">{{ remixedMessage }}
        <span v-if="showRogueElement" :class="$style.rogueElement">
      this should not appear
    </span>
    </h1>
</template>

<script>
    export default {
        props: ["message", "tone"],
        computed: {
            longerMessage: function() {
                return this.message + 'longer'
            }
        },
        data: function() {
            return {
                remixedMessage: this.message + 'remixed',
                showRogueElement: false
            }
        }
    }
</script>