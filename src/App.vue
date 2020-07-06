<template>
    <div id="app">
        <router-view/>
        <app-plumbus />
    </div>
</template>

<script>
    import Plumbus from '@/components/plumbus/Plumbus.vue'

    export default {
        components: {
            'appPlumbus': Plumbus,
        },
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        font-family: $content-font-family;
        box-sizing: border-box;
    }

    #app{
        position: relative;
    }

    h1, h2, h3, h4, h5, h6{
        color: $secondary-color;
        font-family: $title-font-family;
    }
</style>
