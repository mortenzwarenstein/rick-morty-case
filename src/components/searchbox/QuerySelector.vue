<template>
    <div class="query-selector">
        <app-query :key="i" v-for="i in 3"></app-query>
    </div>
</template>

<script>
    import Query from "./Query";

    export default {
      components: {
        'appQuery': Query
      }
    }
</script>

<style lang="scss">
    .query-selector{
        display: flex;
        justify-content: space-around;
    }
</style>
