<template>
    <nav id="nav">
        <div class="nav-container">
            <div>
                <div class="nav-item">LOGO</div>
            </div>
            <div class="right menu">
                <div class="nav-item">Home</div>
                <div class="nav-item">Contact</div>
                <div class="nav-item">Menu</div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    nav#nav{
        background-color: $primary-color;
        color: white;
        .nav-container{
            @include container;
            display: flex;
            .right{
                margin-left: auto;
            }
            .menu{
                display: flex;
            }
        }
    }

    nav#nav .nav-container .nav-item{
        padding: 10px 15px;
        &:first-of-type{
            padding-left: 0;
        }
        &:last-of-type{
            padding-right: 0;
        }
    }
</style>
