<template>
  <div class="notification column is-danger">
  <button class="delete" @click.prevent="close"></button>
  {{errorText}}
  </div>
</template>

<script>
  export default {
    props:['errorText'],
    methods: {
      close(){
        this.$emit('deleteErrors', false);
      }
    }
  }
</script>
