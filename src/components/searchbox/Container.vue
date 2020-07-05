<template>
    <div class="box">
        <div>
            <h1 class="title">
                Where did you see the character last?
            </h1>
            <app-query-selector />
            <div class="ampersand">
                &
            </div>
            <app-search />
            <app-search-button></app-search-button>
        </div>
    </div>
</template>

<script>
    import QuerySelector from '@/components/searchbox/QuerySelector'
    import Search from '@/components/searchbox/Search'
    import SearchButton from '@/components/searchbox/SearchButton'

    export default {
      name: 'SearchboxContainer',
      components: {
        'appQuerySelector': QuerySelector,
        'appSearch': Search,
        'appSearchButton': SearchButton
      }
    }
</script>

<style lang="scss" scoped>
    .box{
        max-width: 600px;
        width: 100%;
        margin: 50px auto;
        padding: 30px;
        box-shadow: $box-shadow-large;
        border: 1px solid #f7f7f7;
        border-radius: 3px;
        .title{
            text-align: center;
            margin-bottom: 20px;
        }
        .ampersand{
            position: relative;
            top: -20px;
            z-index: -1;
            margin: 0 auto;
            color: #e3ebf1;
            font-size: 180px;
            font-weight: 700;
            max-height: 200px;
            text-align: center;
        }
    }
</style>
