<template>
  <div id="app">
    <HomePage msg="Welcome to Your Vue.js App"/>
    <CulturePage />
    <FooterSection />
  </div>

</template>

<script>
import HomePage from './components/HomePage.vue'
import CulturePage from './components/CulturePage.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    CulturePage,
    FooterSection,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
