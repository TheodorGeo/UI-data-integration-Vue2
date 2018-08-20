<template>
  <div id="app">
    <app-header></app-header>
    <router-view :server="server"></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    data(){
      return {
        server: 'http://127.0.0.1:8000/'
      };
    },
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  form{
    margin-top: 20px;
  }
  .form_help{
  font-size: 0.8rem;
  }

  .form-col{
  max-width: 600px;
  }

  .results{
    max-width: 600px;
  }
  .is-grouped{
  margin-top: 16px;
  }
</style>
