<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeModal"><button class="modal-close is-large" aria-label="close" @click="closeModal"></button></div>
    <div class="modal-content">
      <figure class="image">
        <img :src="require('../../../assets/trello_short_link_help.png')" style="max-width:500px;">
      </figure>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        display: false
      };
    },
    props: ['show'],
    methods:{
      closeModal(){
        this.$emit('closeModal', false);
      }
    }
  }
</script>
