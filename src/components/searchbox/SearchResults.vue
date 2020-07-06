<template>
    <div class="result-container" v-if="!closed">
        <ul>
            <li :key="searchResult.id"
                @click="onClick(searchResult.url)"
                class="search-result"
                v-if="searchResults && searchResults.length"
                v-for="(searchResult) in searchResults">
                {{searchResult.name}}
            </li>
            <li v-if="!searchResults.length">
                We can't find any {{ selectedQuery.name.toLowerCase() }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { getFromUrl } from '@/api/api';

    export default {
        name: 'SearchResults',
        props: {
            searchResults: Array,
            closed: Boolean
        },
        computed: {
            selectedQuery() {
                return this.$store.getters.getSelectedQuery;
            }
        },
        methods: {
            onClick(url){
                getFromUrl(url)
                    .then( value => {
                        this.$store.commit('RESET_CHARACTERS');
                        if(this.selectedQuery.value === 'episode'){
                            this.$store.commit('SET_CHARACTER_URLS', value.characters);
                        } else {
                            this.$store.commit('SET_CHARACTER_URLS', value.residents);
                        }
                        this.$router.push('/characters')
                    });
            }
        }
    }
</script>

<style lang="scss">
    .result-container{
        background-color: white;
        box-shadow: $box-shadow-large;
        position: absolute;
        left: 0;
        right: 0;
        padding: 0;
        border-radius: 3px;
        ul li {
            list-style-type: none;
            font-size: 14px;
            border-radius: 3px;
            transition: .1s ease-out;
            padding: 10px 20px;
            user-select: none;
            &.search-result:hover{
                cursor: pointer;
                background-color: $primary-color;
                color: white;
            }
        }
    }
</style>
