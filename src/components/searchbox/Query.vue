<template>
    <div class="query-container" :class="{'selected': query.selected}" @click="selectQuery(query)">
        <div class="caption">
            <span>
                {{ query.name }}
            </span>
        </div>
        <div class="query">
            <img :src="query.img" :alt="query.name">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchQuery',
        props: {
            query: Object,
        },
        methods: {
            selectQuery(query) {
                // selects query in store
                this.$store.commit('SELECT_QUERY', query);
            },
        },
    }
</script>

<style lang="scss" scoped>
    // set animations in the container
    .query-container{
        transition: .3s ease-out;
        &:hover, &.selected{
            cursor: pointer;
            transform: scale(1.2);
        }
        .query {
            position: relative;
            flex: 1;
            width: 100px;
            height: 100px;
            max-width: 100px;
            max-height: 100px;
            @media screen and (max-width: 899px) {
                width: 75px;
                height: 75px;
                max-width: 75px;
                max-height: 75px;
            }
            border-radius: 50%;
            box-shadow: $box-shadow-large;
            img{
                left: 10%;
                right: 10%;
                top: 10%;
                bottom: 10%;
                width: 80%;
                position: absolute;
                display: block;
                margin: 0 auto;
            }
        }
        .caption{
            position: relative;
            text-align: center;
            span{
                color: $primary-color;
                font-family: $title-font-family;
            }
        }
    }
</style>
