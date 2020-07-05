<template>
    <div class="query">

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .query {
        flex: 1;
        width: 100px;
        max-width: 100px;
        max-height: 100px;
        height: 100px;
        border-radius: 50%;
        box-shadow: $box-shadow-large;
        transition: .3s ease-out;
        &:hover{
            cursor: pointer;
            transform: scale(1.2);
        }
    }
</style>
