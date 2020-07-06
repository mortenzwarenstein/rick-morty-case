<template>
    <div class="query-selector">
        <app-query :key="i"
                   v-for="(query, i) in queries"
                   :query="query"></app-query>
    </div>
</template>

<script>
    import Query from '@/components/searchbox/Query';

    export default {
        name: 'SearchQueryContainer',
        components: {
            'appQuery': Query,
        },
        computed: {
            queries(){
                // get fixed queries from store
                return this.$store.getters.getQueryParameters;
            },
        },
    }
</script>

<style lang="scss">
    .query-selector{
        display: flex;
        justify-content: space-around;
    }
</style>
