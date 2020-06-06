<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">Probb</a>
        </div>

        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
          

        <div class="nav-right nav menu">

          <router-link to="/" class="nav-item r-item">Теория</router-link>
          <router-link to="Practice" class="nav-item r-item">Практика</router-link>
          <router-link to="Tests" class="nav-item r-item">Тесты</router-link>
          <router-link to="Extra" class="nav-item r-item">Экстра</router-link>
          <router-link to="LandingPage" class="nav-item r-item">Информация</router-link>
        
        <div class="nav-item">
          <p class="control">
            <a class="button is-primary is-outlined">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Join Now</span>
            </a>
          </p>
        </div>


          
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<!--
<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="nav-left">
        <a class="nav-item">Probb</a>

        <div class="columns">
          <div class="column">
            First column
          </div>
          <div class="column">
            Second column
          </div>
          <div class="column">
            Third column
          </div>
          <div class="column">
            Fourth column
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
-->

<script>
  export default {
    name: 'proba'
  }
</script>

<style lang="sass">

.nav
  background-color: #383838
  a: hover
    color: gray
  
.nav-left a
  color: #fff
  font-weight: bold

a.r-item
  color: #c1c1c1
  padding: 0.5rem 1.75rem

</style>
