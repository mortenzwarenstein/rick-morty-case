<template>
    <div class="query-selector">
        <app-query :key="i"
                   v-for="(query, i) in queries"
                   :query="query"></app-query>
    </div>
</template>

<script>
    import Query from "./Query";

    export default {
      components: {
        'appQuery': Query
      },
      computed: {
        queries(){
          return this.$store.getters.getQueryParameters;
        }
      }
    }
</script>

<style lang="scss">
    .query-selector{
        display: flex;
        justify-content: space-around;
    }
</style>
