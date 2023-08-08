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
      <section class="values">
        <div class="values__header">
            <p class="section__subtitle">Our values</p>
            <h1 class="section__title">
                Code We Work By
            </h1>
        </div>
        
        <ul>
            <li> 
                <!-- <img
                    src="../images/collaboration.gif"
                    alt="Collaboration"
                    class="collab-image"
                > -->
                <CollabIcon />
                <h3>Collaboration</h3>
                <p>Be open to everyone’s thoughts and ideas.</p>
            </li>
            <li> 
                <GrowthIcon />
                <h3>Growth</h3>
                <p>Cultivate a culture of continuous learning.</p>
            </li>
            <li>
                <InnovationIcon />
                <h3>Innovation</h3>
                <p>Foster a future-focused mindset.</p>
            </li>
            <li>
                <CommunicationIcon />
                <h3>Collaboration</h3>
                <p>Proactive sharing ensures informed decisions.</p>
            </li>
        </ul>

      </section>
      <section class="team">

      </section>

      <section class="join">
        <div class="wrapper">
            <div class="join__left">
                <h1 class="section__title white">
                    Ready to join the team?
                </h1>
                <p class="section__copy white">
                    We're looking for passionate individuals 
                    who are eager to make an impact and contribute to our tech!
                </p>

                <a
                    href="https://hqzen.com/job-postings/"
                    class="action reverse"
                >
                    Let's go!
                </a>
            </div>
        
            <div class="join__right">
                <img
                    src="../images/join.png"
                    alt="HQZen Team"
                    class="join-the-team-image"
                >
            </div>
        </div>
      </section>
    </main>
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from './FooterSection.vue'
import CollabIcon from '../components/LottieIcons/CollaborationIcon.vue'
import GrowthIcon from '../components/LottieIcons/GrowthIcon.vue'
import InnovationIcon from '../components/LottieIcons/InnovationIcon.vue'
import CommunicationIcon from '../components/LottieIcons/CommunicationIcon.vue'


export default {
  name: 'CulturePage',
  components: {
    FooterSection,
    CollabIcon,
    GrowthIcon,
    InnovationIcon,
    CommunicationIcon,
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
                    font-size: $sp-28;
                    text-align: center;
                    margin-bottom: 16px;
                }

                & > .emphasis {
                color: $accent;
                font-weight: 800;
                font-size: $sp-52;
                margin-bottom: 24px;
                @media #{$tablet} {
                    font-size: $sp-28;
                    text-align: center;
                    margin-bottom: 16px;
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
                margin-bottom: 16px;
            }
        }
    }

    .hero {
        background-image: url("../images/hero-bg.svg");
        background-size: cover;
        
        height:100vh;
        width:100%;
        padding: $sp-36 $sp-80;
        margin-top: $sp-40;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__left{
            max-width:572px;

            @media #{$tablet} {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        &__right{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left:$sp-100;

            @media #{$tablet} {
                margin-left: 0;
            }
        }

        &__right img{
            height: calc(100vw * 0.40);
            width: calc(100vw * 0.35);
            vertical-align: middle;

            @media #{$tablet} {
                height: calc(100vw * 0.60);
                width: calc(100vw * 0.55);
            }
        }

        @media #{$tablet} {
            padding:8px 32px;
        }
    }

    .mission{
        background-image: url("../images/mission-bg.svg");
        background-size: cover;
        height:100;
        width:100%;
        padding: $sp-80;
        justify-content: space-between;
        align-items: center;
        
        &__header{
            @include flex-align-center(column);

            @media #{$tablet} {
                margin: $sp-12;
            }

            h1 {
                margin-bottom:0
            }
        }

        &__left{
            font-size:$sp-32;
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

    .values {
        background-color: $accent-container;
        height: 100%;
        width: 100%;
        padding: $sp-80;
        justify-content: space-between;
        align-items: center;

        &__header{
            text-align: center;
            margin-bottom: $sp-40;

            @media #{$tablet} {
                margin: $sp-28;
            }
            
            h1 {
                margin-bottom:0
            }
        }

        > ul {
            display: grid;
            list-style-type: none;
            padding: 0;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 2rem;

            li {
                padding: 0;
            }


            h3 {
            font-size:$sp-28;
            text-transform: uppercase;
            color:$accent;
            text-align: center;
            font-weight: 900;

                @media #{$tablet} {
                font-size:$sp-20;
                }
            }

            p {
                margin-top: $sp-8;
                font-size: $sp-16;
                font-style: normal;
                font-weight: 400;
                color: $secondary;
                line-height: 150%;
                letter-spacing: -0.1px;
                text-align: center;
            }
        }

        
    }

    .join {
        background-image: url("../images/join-bg.svg");
        background-size: cover;
        
        height:100;
        width:100%;
        padding: $sp-36 0 0 $sp-80;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;

        &__left{
            max-width:600px;
            letter-spacing: -0.1px;

            @media #{$tablet} {
                max-width:400px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        &__right{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left:$sp-20;

            @media #{$tablet} {
                margin-left: 0;
            }
        }

        &__right img{
            position: relative;
            right: -52px;
            height: calc(100vw * 0.27);
            width: calc(100vw * 0.48);
            vertical-align: middle;

            @media #{$tablet} {
                right: 0;
                height: calc(100vw * 0.56);
                width: calc(100vw * 0.98);
            }
        }

        @media #{$tablet} {
            padding: 120px $sp-8 0 $sp-8;
        }

    }

    section {

        .action {
            background-color: $accent;
            padding: 12px 24px !important;
            color: $white;
            margin: 16px 0;
            border-radius:64px;
            height: 48px;
            width:148px;
            
            font-size: $sp-16;
            font-weight: 700;
            text-decoration: none;
            transition: background-color .2s ease-out;
            border-radius: 48px;
            line-height: 1.5;
            cursor: pointer;

            @media #{$tablet} {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 16px 0;
                padding: 8px 12px !important;
                font-size: $sp-12;
                height: 44px;
                width: 132px;
            }

            &:hover {
                background-color: #0374C7;
                color: $white;
            }
            
        }

        .white {
            color:$white;
        }

        .reverse {
            background: $white;
            color: $accent;
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
                @include flex-align-center(column);
            }
        }
    }

</style>