<template>
  <div id="app">
    <lottie
      :options="defaultOptions"
      :width="64"
      @animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from '../../lottie-vue.vue';
import * as animationData from '../../assets/ownership.json';

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
      this.animation.setSpeed(0); // Set initial speed to 0
    },
  }
};
</script>
