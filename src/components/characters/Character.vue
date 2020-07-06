<template>
    <div class="character-flex-wrap">
        <div class="character-container">
            <div class="profile-picture" :style="{'backgroundImage': `url(${character.image})`}"></div>
            <div class="info-container">
                <div class="title-container">
                    <h2>{{ character.name }}</h2>
                    <span>{{character.status}}</span>
                </div>
                <div class="persona-container">
                    <div>
                        <span class="label">Species</span>
                        <span>{{ character.species }}</span>
                    </div>
                    <div>
                        <img src="../../assets/img/icon/gender.svg" alt="Gender"><span>{{character.gender}}</span>
                    </div>
                </div>
                <div class="locations-container">
                    <div class="location">
                        <span class="label">From</span>
                        <span class="info">{{character.origin.name}}</span>
                    </div>
                    <div class="location">
                        <span class="label">Last seen at</span>
                        <span class="info">{{character.location.name}}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Character',
        props: {
            // Character JSON from the api
            character: Object,
        }
    }
</script>

<style lang="scss">
    // wrapper for flexbox
    .character-flex-wrap{
        flex: 1;
        min-width: 50%;
        width: 100%;
        @media screen and (min-width: 899px){
            max-width: 50%;
        }
        // actual container
        .character-container{
            border: 1px solid #f7f7f7;
            background-color: white;
            box-shadow: $box-shadow-large;
            border-radius: 3px;
            margin: 20px;
            padding: 20px;
            display: flex;
            // left part - contains profile picture
            .profile-picture{
                flex: 1;
                max-width: 100px;
                border-radius: 50px;
                width: 100px;
                min-width: 75px;
                height: 100px;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }
    }

    // right part - contains all remaining info
    .info-container{
        flex: 1;
        min-width: 200px;
        font-size: 13px;
        padding-left: 20px;
        // contains name and status (eg. alive)
        .title-container{
            display: flex;
            margin-bottom: 15px;
            span {
                display: block;
                margin-left: auto;
                color: #a7a7a7;
                font-style: italic;
            }
        }
        // contains gender and species
        .persona-container{
            margin-bottom: 15px;
            img{
                width: 15px;
                height: 15px;
                position: relative;
                top: 3px;
                margin-right: 5px;
            }
        }
    }

    // general label class for the card of a character
    .label {
        color: $secondary-color;
        display: block;
        font-size: 13px;
        font-weight: 700;
        font-family: $title-font-family;
    }

    // contains locations of requested character
    .locations-container {
        .location {
            margin-bottom: 10px;
            .info {
                font-size: 13px;
            }
        }
    }
</style>
