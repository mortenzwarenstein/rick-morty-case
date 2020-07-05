<template>
  <div class="container">
    <app-searchbox/>
  </div>
</template>

<script>
  import Searchbox from '@/components/searchbox/Container';

  export default {
    name: 'Home',
    components: {
      'appSearchbox': Searchbox
    }
  }
</script>

<style lang="scss">
  .container {
    @include container;
  }
</style>
