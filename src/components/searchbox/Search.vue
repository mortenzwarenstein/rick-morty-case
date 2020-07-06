<template>
    <div>
        <div v-if="selectedQuery">
            <div class="focus-container"
                 @click="closeOverlay"
                 :class="{'focussed': searchValue.length && !closed}">
            </div>
            <div class="form-box">
                <h2 class="title">
                    What's the name of the {{ selectedQuery.name }} where you wanna look?
                </h2>
                <input v-model="searchValue"
                       class="search" type="text"
                       @input="onType"
                       @keyup.enter="onType"
                       :placeholder="'Search by ' + selectedQuery.name.toLowerCase()">
                <app-search-results :search-results="searchResults" :closed="closed"/>
            </div>
        </div>
        <div v-else>
            <h2 class="title">
                First select where you want to search for your character!
            </h2>
        </div>
    </div>
</template>

<script>
    import {getFromApi} from '@/api/api';
    import SearchResults from '@/components/searchbox/SearchResults';

    export default {
        name: 'Search',
        data(){
            return{
                closed: true,
                searchValue: '',
                searchResults: [],
            }
        },
        components: {
            // component for the searchresults
            'appSearchResults': SearchResults,
        },
        computed: {
            // gets the current selected query
            selectedQuery(){
                return this.$store.getters.getSelectedQuery;
            },
        },
        methods: {
            onType(){
                this.closed = false;
                getFromApi(this.selectedQuery.value, this.searchValue).then(val => {
                    if(val.results) {
                        this.searchResults = val.results;
                    } else {
                        this.searchResults = []
                    }

                });
            },
            closeOverlay(){
                this.closed = true;
            },
        },
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
    .form-box{
        position: relative;
    }
    .focussed ~ .form-box{
        z-index: 2000;
    }
    // background shade for creating focus around the input
    .focus-container{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.30);
        &.focussed{
            z-index: 999;
            display: block;
        }
    }
</style>
