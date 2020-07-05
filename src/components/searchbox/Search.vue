<template>
    <div>
        <div v-if="selectedQuery">
            <h2 class="title">
                What's the name of the {{ selectedQuery.name }} where you wanna look?
            </h2>
            <input class="search" type="text" placeholder="Search by ...">
        </div>
        <div v-else>
            <h2 class="title">
                First select where you want to search for your character!
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
      computed: {
        selectedQuery(){
          return this.$store.getters.getSelectedQuery;
        }
      }
    }
</script>

<style lang="scss">
    h2.title{
        margin-top: 20px;
        margin-bottom: 10px;
        text-align: center;
    }
    input.search {
        width: 100%;
        padding: 8px 10px;
        display: block;
        border-radius: 3px;
        border: 1px solid #e3ebf1;
        &:focus, &:active{
            border-color: lighten($primary-color, 15%);
        }
    }
</style>
