<template>
  <div class="columns is-centered">
    <div class="column form-col is-half">
      <form action="/" class="form" autocomplete="off">
        <div class="field">
          <label class="label">User's Token <a class="form_help" href="https://gitlab.com/theodor_g/data_integ_api#asana" target="_blank">Click Here</a></label>
          <div class="control has-icons-left">
            <input class="input" type="text" name="asana_token" placeholder="Please enter the user's token following the steps above" v-model="token" @blur="$v.token.$touch()" :class="{'is-danger' : $v.token.$error}">
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Project's Id <a class="form_help" id="asana_help" href='#' @click.prevent="show = true">Need Help ?</a></label>
          <div class="control has-icons-left">
            <input class="input" type="text" name="asana_project_id" placeholder="Please enter your project's name" v-model="project" @blur="$v.project.$touch()" :class="{'is-danger' : $v.project.$error}">
            <span class="icon is-small is-left">
              <i class="fas fa-folder"></i>
            </span>
          </div>
        </div>
        <label class="laber">Choose the fields you want to get:</label>
        <div id="asana_checkboxes" :class="{error: $v.fields.$error}">
          <div>
              <input type="checkbox" id="asana_tasks" name="fields"
                     value="tasks" checked v-model="fields" @change="$v.fields.$touch()" :class="{'is-danger' : $v.fields.$error}" />
              <label for="asana_tasks">Tasks</label>
          </div>
          <div>
              <input type="checkbox" id="asana_users" name="fields"
                     value="users" v-model="fields" @change="$v.fields.$touch()" :class="{'is-danger' : $v.fields.$error}" />
              <label for="asana_users">Users</label>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" type="submit" id="asana_submit" @click.prevent="submit">Submit</button>
          </div>
          <div class="control">
            <button class="button is-danger" type="reset">Reset</button>
          </div>
        </div>
        <app-errors @deleteErrors="errors = $event" :errorText="errorText" v-if="errors"></app-errors>
      </form>
      <app-modal v-if="show" @closeModal="show = false"></app-modal>
      <app-result v-if="result" :results="results" @hide="result = $event"></app-result>
    </div>
  </div>
</template>

<script>
  import AsanaModal from './modals/AsanaModal.vue';
  import Result from './../Result.vue';
  import Errors from './../Errors.vue';
  import axios from 'axios';
  import {required} from 'vuelidate/lib/validators';
  export default {
    data(){
      return {
        token: '',
        project: '',
        fields: ['tasks'],
        show: false,
        errors: false,
        errorText: '',
        result: false,
        results: null
      }
    },
    validations: {
      token: { required },
      project: {required},
      fields: {required}
    },
    components:{
      appModal: AsanaModal,
      appErrors: Errors,
      appResult: Result
    },
    props: ['server'],
    methods:{
      submit(){
        this.result = false;
        this.errors = false;
        if (this.checkErrors()) {
          this.errorText = 'Please complete the form correctly !';
          return this.errors = true;
        }
        axios.get(this.server+'/api/asana/project/'+this.project+'?token='+this.token+'&fields='+this.fields.join())
        .then(response =>{
          this.results = response.data;
          if (this.results.errorBoolean) {
            this.errorText = this.results.messages[0];
            return this.errors = true;
          }
          this.result = true;
        })
        .catch(error => {
          this.errorText = 'Ooops something went wrong while connecting to the server !';
          return this.errors = true;
        });
      },
      checkErrors(){
        if (this.$v.token.$invalid || this.$v.project.$invalid || this.$v.fields.$invalid) {
          return true
        }else{
          return false;
        }
      }
    }
  }
</script>

<style scoped>
</style>
