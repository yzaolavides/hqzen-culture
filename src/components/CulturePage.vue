<template>
  <div :class="['landing', scrollHandler ? 'mobile-menu-on' : '']">
    <main>
      <section class="hero">
        <img 
            src="../images/hero-background.png"
            class="hero__background"
            />
        <p class="section__subtitle">About Us</p>
        <h1 class="section__title">Meet the 
          <span class="emphasis">Development Team</span>
        </h1>

        <div class="hero__graphic">
          <img
              src="../images/temp-team.png"
              alt="HQZen Team"
              class="hero-image"
          >
        </div>
      </section>

      <section>
          
      </section>

    </main>
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from './FooterSection.vue'

export default {
  name: 'CulturePage',
  components: {
    FooterSection,
  }
}
</script>



<style lang="scss" scoped>
  @import "../scss/index";

  $landing-heading: #03183F;
  $l-blue: $accent;
  $accent-solid: #008FF5;
  $l-light-blue: #EEF7FE;

    .landing {
        &.mobile-menu-on {
            overflow: hidden;
            height: 100vh;
        }
    }

    .section {
      &__subtitle{
            font-weight: 700;
            font-size: $sp-16;
            text-transform: uppercase;
            color: $tertiary;

            @media #{$tablet} {
                font-size: 12px;
            }
        }
      
      &__title {
            font-weight: 800;
            font-size: $sp-52;
            color: $landing-primary;

            @media #{$tablet} {
                font-size: 24px;
            }
            & > .emphasis {
              color: $accent;
              font-weight: 800;
              font-size: $sp-52;
              @media #{$tablet} {
                  font-size: 24px;
              }

            }
        }
    }

    .hero {
        @include flex-align-justify-center(column);
        gap: 24px;
        margin-top: 72px;
        text-align: center;

        @media #{$tablet} {
            padding: 80px 16px;
        }

        &__background {
            width: 100%;
            position: absolute;
            inset: 0;
            z-index: -1;
            user-select: none;
        }

        &__graphic {
            @include flex-align-center(column);
            width: calc(100vw * 0.55);
            height: calc(100vw * 0.33);
            margin-top: 20px;

            @media #{$desktop-small} {
                width: calc(100vw * 0.95);
                height: calc(100vw * 0.56);
            }

        }
    }


    section {
        @include flex-align-center(column);
        gap: 52px;
        padding: 80px 140px;

        .header {
            @include flex-align-center(column);
            gap: 20px;
            text-align: center;

            .white {
                color: $white;
            }

            h1 {
                font-weight: 600;
                font-size: 32px;
                color: $landing-heading;
            }

            &__actions {
                display: flex;
                gap: 12px;
            }
        }

        .content {
            @include flex-align-center(column);
            gap: 20px;
            width: fit-content;
        }

        .content {
            @include flex-align-center(column);
            gap: 20px;
            width: fit-content;
        }

        p {
            font-size: 20px;
            line-height: 150%;
            color: $secondary;
        }

        @media #{$tablet} {
            gap: 40px;
            padding: 80px 30px;
        }
    }

    ::v-deep button.l-primary {
        background: $accent-solid;
        color: $white;
        border: none;

        &:hover {
            background: darken($accent-solid, 7.5%);
        }

        p {
            font-size: 16px;
            color: $white;
            font-weight: 700;
            width: 100%;
        }
    }

    input {
        height: 50px;
        width: 370px;
        padding: 0px 12px;
        outline: none;
        font-size: 14px;
        color: $primary;
        border-radius: 4px;
        border: 1px solid $quaternary;
        transition-duration: .2s;

        &:hover {
            border-color: $gray;
        }

        &:focus {
            border-color: $accent;
            box-shadow: 0 0 0 4px rgba($white, .25);
        }
    }
</style>