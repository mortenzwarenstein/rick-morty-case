<template>
  <div id="app">
    <app-navbar/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    components: {
      'appNavbar': Navbar
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    font-family: $content-font-family;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6{
    color: $secondary-color;
    font-family: $title-font-family;
  }
</style>
