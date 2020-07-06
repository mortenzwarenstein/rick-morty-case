<template>
    <div>
        <app-navbar></app-navbar>
        <div class="container">
            <div class="character-overview" >
                <app-character :key="character.id"
                               v-for="character in characters"
                               :character="character" />
            </div>
        </div>
    </div>
</template>

<script>
    import {getFromUrl} from '@/api/api';
    import Navbar from '@/components/Navbar';
    import Character from '@/components/characters/Character';

    export default {
        name: 'CharacterView',
        mounted() {
            // go back if there's no characters
            if(!this.characterUrls || !this.characterUrls.length) return this.$router.push('/');
            // do a request for every character
            this.characterUrls.forEach(url => {
                getFromUrl(url).then(val => {
                    this.$store.commit('ADD_CHARACTER', val);
                });
            });
        },
        components: {
            // using navbar for going back to home
            'appNavbar': Navbar,
            // character component
            'appCharacter': Character,
        },
        computed: {
            // get all urls of the found characters
            characterUrls () {
                return this.$store.getters.getCharacterUrls;
            },
            // get all found characters
            characters() {
                return this.$store.getters.getCharacters;
            }
        }

    }
</script>

<style lang="scss">
    .character-overview{
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: 899px){
            flex-direction: column;
        }
    }
</style>
