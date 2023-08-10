<template>
  <div id="app">
    <lottie
      :options="defaultOptions"
      :width="44"
      :height="44"
      @animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from '../../lottie-vue.vue';
import * as animationData from '../../assets/teamevent.json';

export default {
  name: 'app',
  components: {
    'lottie': Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animation: null,
      animationDelay: 500 // Delay in milliseconds
    };
  },
  methods: {
    handleAnimation(anim) {
      this.animation = anim;
      this.animation.setSpeed(1); // Set initial speed to 0
    }
  }
};
</script>
