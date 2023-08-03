<template>
  <div id="app">
    <NavBar/>
    <CulturePage />
    <FooterSection />
  </div>

</template>

<script>
import CulturePage from './components/CulturePage.vue'
import FooterSection from './components/FooterSection.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    CulturePage,
    FooterSection,
    NavBar,
  }
}
</script>

<style>

#app {
  margin: 0;
  top: 0;
  left: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-family: 'Inter';
  font-size: 14px;
}
</style>
