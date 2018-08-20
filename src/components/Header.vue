<template>
  <div>
    <section class="hero is-primary ">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Data Integration
          </h1>
          <h2 class="subtitle">
            Simple UI for testing <a style="color:darkblue" href="https://gitlab.com/theodor_g/data_integ_api" target="_blank">Data Integration Project</a>
          </h2>
        </div>
      </div>
    </section>
    <div class="tabs is-centered">
      <ul>
        <router-link tag="li" active-class="is-active" class="tabs-buttons" :to="{name: 'trello'}" exact><a>Trello</a></router-link>
        <router-link tag="li" active-class="is-active" class="tabs-buttons" :to="{name: 'jira'}"><a>JIRA</a></router-link>
        <router-link tag="li" active-class="is-active" class="tabs-buttons" :to="{name: 'wrike'}"><a>Wrike</a></router-link>
        <router-link tag="li" active-class="is-active" class="tabs-buttons" :to="{name: 'asana'}"><a>Asana</a></router-link>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
