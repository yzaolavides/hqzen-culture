<template>
  <div id="app">
    <NavBar/>
    <CulturePage />
  </div>

</template>

<script>
import CulturePage from './components/CulturePage.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    CulturePage,
    NavBar,
  },
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

}
</style>
