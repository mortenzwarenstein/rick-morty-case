<template>
    <div class="background" @click="close">
        <div class="popup">
            <h2>
                How a plumbus is made:
            </h2>
            <p>
                Everyone has a plumbus in their home. First they take the dingle bop and they smooth it out with a bunch of
                schleem. The schleem is then...repurposed for later batches.
            </p>
            <p>
                They take the dingle bop and they push it through the grumbo, where the fleeb is rubbed against it. It's important that the fleeb is rubbed, becasue the fleeb has all the fleeb juice.
            </p>
            <p>
                Then, a schlami shows up, and he rubs it...and spits on it.
            </p>
            <p>
                They cut the fleeb. There's several hizzards in the way.
            </p>
            <p>
                The blamfs rub against the chumbles, and the...plubis, and grumbo are shaved away.
            </p>
            <p>
                That leaves you with...a regular old plumbus.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PlumbusPopup',
        methods: {
            close(){
                // sends clicked event to parent: closes modal
                this.$emit('clicked');
            }
        },
    }
</script>

<style lang="scss">
    // container for background shade
    .background{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 9999;
        // actual popup
        .popup{
            margin: 50px auto;
            border-radius: 3px;
            padding: 20px;
            max-width: 400px;
            width: 100%;
            background-color: #fff;
            box-shadow: $box-shadow-large;
            h2{
                margin-bottom: 15px;
                margin-top: 10px;
            }
            p{
                font-size: 13px;
            }
        }
    }
</style>
