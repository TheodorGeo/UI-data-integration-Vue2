<template>
  <div>
    <div class="columns" style="margin-top:20px;">
      <div class="column">
        <button class="button is-primary is-fullwidth" type="button" @click="toggleReview">Review</button>
      </div>
      <div class="column">
        <button class="button is-danger is-fullwidth" type="button" @click="download">Download</button>
      </div>
    </div>
    <div class="modal is-active" v-if="review">
      <div class="modal-background" @click="toggleReview"><button class="modal-close is-large" aria-label="close" @click="toggleReview"></button></div>
      <div class="modal-content">
        <pre>{{JSON.stringify(results, undefined, 2)}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        review: false,
      };
    },
    methods:{
      toggleReview(){
        this.review = !this.review;
      },
      download(){
        var element = document.createElement("a");
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.results));
        element.setAttribute('download', 'data.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
    },
    props: ['results']
  }
</script>
