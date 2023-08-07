<template>
  <div :class="['landing', scrollHandler ? 'mobile-menu-on' : '']">
    <main>
      <section class="hero">
        <div class="wrapper">
            <div class="hero__left">
                <p class="section__subtitle">About Us</p>
                <h1 class="section__title">
                    Meet the 
                    <br><span class="emphasis">Development Team</span>
                </h1>
                <p class="section__copy">
                    Get to know the faces behind our projects and witness our commitment to 
                    pushing boundaries and embracing progress.
                </p>

                <a
                    href="https://hqzen.com/job-postings/"
                    class="action"
                >
                    Join the team!
                </a>
            </div>
        
            <div class="hero__right">
            <img
                src="../images/hero.png"
                alt="HQZen Hero"
                class="hero-image"
            >
            </div>
        </div>
      </section>
      <section class="mission">
            <div class="mission__header">
            <p class="section__subtitle white">Our mission and vision</p>
            <h1 class="section__title white">
                What Drives Us
            </h1>
            </div>
            <div class="wrapper">
                <div class="mission__left white">
                    We are driven by our dedication to excellence, 
                    growth and passion for technological innovation.
                </div>
                <div class="mission__center">
                    <img
                    src="../images/mission-team.png"
                    alt="HQZen Team"
                    class="team-image"
                >
                </div>
                <div class="mission__right white">
                    We aim to create products that leave a lasting impact, 
                    and shape the future of tech in the BPO industry.
                </div>
            </div>
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
            line-height: 100%;
            margin-bottom: $sp-24;

            @media #{$tablet} {
                font-size: 12px;
                text-align: center;
            }
        }
      
        &__title {
                font-weight: 800;
                font-size: $sp-52;
                color: $landing-primary;
                line-height: 100%;
                margin-bottom: 24px;

                @media #{$tablet} {
                    font-size: $sp-24;
                    text-align: center;
                }

                & > .emphasis {
                color: $accent;
                font-weight: 800;
                font-size: $sp-52;
                margin-bottom: 24px;
                @media #{$tablet} {
                    font-size: $sp-24;
                    text-align: center;
                }

                }
            }


        &__copy{
            font-weight: 400;
            font-size: $sp-20;
            color: $secondary;
            letter-spacing: -0.1px;
            line-height: 150%;
            margin-bottom: 24px;

            @media #{$tablet} {
                font-size: $sp-16;
                text-align: center;
            }
        }
    }

    .hero {
        background-image: url("../images/hero-background.png");
        background-size: cover;

        height:100vh;
        width:100%;
        padding: $sp-36 $sp-80;
        margin-top: $sp-32;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // align-self: flex-end;

        &__left{
            max-width:572px;  
        }

        &__right{
            margin-left:$sp-100;

            @media #{$tablet} {
                margin-left: $sp-20;
                margin-top: $sp-20;
            }
        }

        &__right img{
            @include flex-align-center(column);
            height: calc(100vw * 0.40);
            width: calc(100vw * 0.35);
            vertical-align: middle;

            @media #{$tablet} {
                height: calc(100vw * 0.60);
                width: calc(100vw * 0.55);
            }
        }

        @media #{$tablet} {
            padding:0 32px;
        }
    }

    .mission{
        background-image: url("../images/mission-bg.png");
        background-size: cover;
        height:100vh;
        width:100%;
        padding: $sp-80;
        justify-content: space-between;
        

        &__header{
            @include flex-align-center(column);

            @media #{$tablet} {
                margin-bottom: $sp-8;
            }

            h1 {
                margin-bottom:0
            }
        }

        &__left{
            font-size:$sp-32;
            // max-width:268px;
            text-align: left;
            line-height: 150%;

            @media #{$tablet} {
                font-size: $sp-16;
                text-align: center;
            }
        }

        &__center img{
            @include flex-align-center(column);
            height: calc(100vw * 0.30);
            width: calc(100vw * 0.40);
            vertical-align: middle;
            align-content: center;
            margin:$sp-40;

            @media #{$tablet} {
                margin: 10px 0;
                height: calc(100vw * 0.65);
                width: calc(100vw * 0.90);
            }
        }

        &__right{
            font-size:$sp-32;
            text-align: right;
            line-height: 150%;

            @media #{$tablet} {
                font-size: $sp-16;
                text-align: center;
            }
        }

        @media #{$tablet} {
            padding: 80px 20px;
        }
    }


    section {

        .action {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $accent;
            padding: 12px 24px !important;
            color: $white;
            margin-top:$sp-48;
            border-radius:64px;
            height: 48px;
            width:148px;
            
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            transition: background-color .2s ease-out;
            border-radius: 48px;
            line-height: 1.5;
            cursor: pointer;

            @media #{$tablet} {

                margin: 24px 88px 24px 104px;
                padding: 8px 12px !important;
                font-size: 12px;
                height: 44px;
                width: 132px;
            }

            &:hover {
                background-color: #0374C7;
                color: $white;
            }

            
        }

        p {
            font-size: 20px;
            line-height: 150%;
            color: $secondary;
        }

        .white {
            color:$white;
        }

        @media #{$tablet} {
            gap: 40px;
            padding: 80px 30px;
        }

        .wrapper{
            display: flex;
            align-items: center;
            justify-content: center;

            @media #{$tablet} {
                display: block;
            }
        }
    }

    ::v-deep button.l-primary {
        background: $accent;
        color: $white;
        border: none;

        &:hover {
            background: darken($accent, 7.5%);
        }

        p {
            font-size: 16px;
            color: $white;
            font-weight: 700;
            width: 100%;
        }
    }

</style>