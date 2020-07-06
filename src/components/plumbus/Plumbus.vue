<template>
    <div class="plumbus-footer">
        <div class=plumbus-button @click="openPopup" >
            <h1>?</h1>
        </div>
        <app-popup v-if="popup" @clicked="closePopup"/>
    </div>
</template>

<script>
    import Popup from './Popup'

    export default {
        name: 'PlumbusButton',
        data(){
            return{
                // popup-boolean: open or closed?
                popup: false,
            }
        },
        methods: {
            openPopup() {
                this.popup = true;
            },
            closePopup() {
                this.popup = false;
            },
        },
        // the popup with content for making a plumbus
        components: {
            'appPopup': Popup
        },
    }
</script>

<style lang="scss" scoped>
    .plumbus-footer{
        position: relative;
    }

    // absolute button
    div.plumbus-button{
        position: absolute;
        top: 0;
        right: 25px;
        background-color: white;
        box-shadow: $box-shadow-large;
        width: 75px;
        border-radius: 50%;
        height: 75px;
        margin-bottom: 30px;
        cursor: pointer;
        transition: ease-out .2s;
        &:hover{
            transform: scale(1.2);
        }
        h1{
            text-align: center;
            position: absolute;
            top: 50%;
            left: 48%;
            transform: translate(-50%, -50%);
        }
    }
</style>
