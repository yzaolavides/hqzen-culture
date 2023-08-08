<template>
    <div id="app">
        <lottie :options="defaultOptions" :width="50" @animCreated="handleAnimation" @mouseover="play" @mouseleave="close"/>
    </div>
</template>

<script>
  import Lottie from '../../lottie-vue.vue';
  import * as animationData from '../../assets/heart.json';

  export default {
    name: 'app',
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },
    }
  }
</script>
