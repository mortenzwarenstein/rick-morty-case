<template>
    <nav id="nav">
        <div class="nav-container">
            <div>
                <div class="nav-item">
                    <router-link to="/" >
                        Back to home
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    nav#nav{
        background-color: $primary-color;
        color: white;
        // nav container using mixin
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
        a{
            text-decoration: none;
            color: #fff;
            &:hover{
                text-decoration: underline;
            }
        }
    }
</style>
