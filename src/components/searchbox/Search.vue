<template>
    <div>
        <h2 class="title">
            What's the name of the ... where you wanna look?
        </h2>
        <input class="search" type="text" placeholder="Search by ...">
    </div>
</template>

<script></script>

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
</style>
