<template>
    <button>Find character in {{selectedQuery.name}}</button>
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

<style lang="scss" scoped>
    button{
        background-color: $primary-color;
        color: white;
        border-radius: 3px;
        width: 100%;
        display: block;
        border: none;
        margin-top: 15px;
        padding: 8px 20px;
        transition: .2s ease-out;
        cursor: pointer;
        font-family: $title-font-family;
        font-size: 18px;
        &:hover{
            background-color: darken($primary-color, 15%);
        }
    }
</style>
