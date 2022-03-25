<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import myLayout from './layout/index.vue'

export default {
  name: 'app',
  components: {
    myLayout,
  }
}
</script>

<style>
#app{
  margin:0!important;
}
*{
  margin:0;
  padding:0;
}
</style>
