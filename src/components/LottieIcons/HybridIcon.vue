<template>
  <div id="app">
    <lottie
      :options="defaultOptions"
      :width="44"
      @animCreated="handleAnimation"
      @mouseover="startAnimationAfterDelay"
      @mouseleave="pauseAnimation"
    />
  </div>
</template>

<script>
import Lottie from '../../lottie-vue.vue';
import * as animationData from '../../assets/hybridsetup.json';

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
    },
    startAnimationAfterDelay() {
      if (this.animation) {
        setTimeout(() => {
          this.animation.setSpeed(1); // Play animation after delay
        }, this.animationDelay);
      }
    },
    pauseAnimation() {
      if (this.animation) {
        this.animation.setSpeed(0); // Pause animation by setting speed to 0
      }
    }
  }
};
</script>

<style lang="scss" scoped>
    lottie {
        margin: 0;
    }
</style>
