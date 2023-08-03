<template>
    <div class="about-page">
      <!-- <img
        src="../images/about-bg.png"
        alt="Culture Page Background"
        class="page-bg"
      > -->
    <h1 class="landing-header">UNDER CONSTRUCTION </h1>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/index";

.about-page {
  margin: 9rem 0;
  padding: 0;
  background: #fff;
  color: $accent;
  padding: 1rem;
  font-size: 2rem;
}


    $grey-transparent: rgba(246, 246, 246, 0.5);
    $light-blue-grey: #B3CFDD;
    $floating-card: 0px 6px 16px rgba(11, 13, 14, 0.12),
        0px 1px 4px rgba(11, 13, 14, 0.06);
    $dark-blue: #03183F;

    // Type specs
    .t-tagline {
        font-size: 60px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.005em;

        @media #{$tablet} {
            font-size: 50px;
        }

        @media #{$mobile} {
            font-size: 40px;
        }
    }

    .t-text {
        font-size: 14px;
        margin: 15px auto;
        line-height: 1.5;
        letter-spacing: -0.005em;
        column-fill: balance;
        color: $tertiary;
    }

    .t-header {
        font-size: 24px;
        margin: 16px auto;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.005em;
    }

    .t-section-header {
        font-weight: 600;
        font-size: 36px;
        line-height: 125%;
        letter-spacing: -0.014em;

        @media #{$tablet} {
            font-size: 36px;
        }

        @media #{$mobile} {
            font-size: 28px;
        }
    }

    .t-section-description {
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -0.005em;
        color: $tertiary;

        @media #{$mobile} {
            font-size: 16px;
        }
    }

    .t-copy {
        font-size: 17px;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.005em;

        &--footer {
            font-size: 14px;

            &.error {
                color: $error;
            }

            @media #{$mobile} {
                font-size: 13px;
            }
        }

        @media #{$mobile} {
            font-size: 15px;
        }
    }

    .t-action {
        font-size: 15px;
        font-weight: 600;
        line-height: 1.5;
        text-decoration: none;
    }

    .m-h1 {
        line-height: 150%;
    }

    .landing-header {
        grid-column: 1/13;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        gap: 16px;
    }

    .landing-page {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;

        &.mobile-menu-on {
            overflow: hidden;
            height: 100vh;
        }

        @media #{$mobile} {
            overflow-x: hidden;
        }

        .wave {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 0;
            max-height: 490px;
        }

        .page-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 0;
            max-height: 350px;

            @media screen and (min-width: 6248px) {
                max-height: 450px;
            }
        }

        .ellipse {
            position: absolute;
            right: auto;
            left: -375px;
            top: 1586px;

            @media screen and (max-width: 1184px) {
                width: 0%;
            }

            @media #{$tablet} {
                top: 2765px;
            }

            @media #{$mobile} {
                left: auto;
                right: -368px;
                top: 1303px;
                width: 650px;
            }
        }

        .pattern-2 {
            position: absolute;
            width: 100%;
        }

        .footer-bg {
            position: absolute;
            width: 100%;
            top: auto;
            bottom: 205px;

            @media #{$mobile} {
                bottom: 534px;
            }
        }

        footer {
            z-index: 1;
        }
    }

    .content-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1120px;
        margin: 0px auto;
        scroll-behavior: smooth;

        @media screen and (max-width: 1184px) {
            padding: 0 32px;
        }

        @media #{$desktop-small} {
            max-width: 840px;
        }

        @media #{$mobile} {
            padding: 0 20px;
        }
    }

    .main {
        margin-top: 144px;
        flex: 1 0 auto;
        overflow: hidden;

        @media #{$mobile} {
            margin-top: 100px;
        }

        .content-wrapper {
            position: relative;
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            column-gap: 16px;

            @media #{$mobile} {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                column-gap: unset;
            }
        }
    }

    .hero-intro {
        display: flex;
        flex-direction: column;
        grid-column: 1/7;
        grid-row: 1;
        margin-top: -60px;

        @media screen and (min-width: 6248px) {
            margin-top: 50px;
        }

        @media #{$desktop-small} {
            grid-column: 1/8;
        }

        @media #{$mobile} {
            margin-top: 0;
            text-align: center;
        }

        & > * + * {
            margin-top: 40px;
        }

        &__text {
            & > * + * {
                margin-top: 40px;
            }

            h2 {
                max-width: 450px;
                color: $landing-primary;

                @media #{$mobile} {
                    max-width: unset;
                }

                @media #{$mobile-small} {
                    max-width: 200px;
                    margin: 0 auto;
                }
            }

            p {
                max-width: 430px;
                color: $secondary;

                @media #{$mobile} {
                    max-width: unset;
                }
            }
        }

        &__action {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 32px;
            color: $secondary;
            text-decoration: none;

            @media #{$mobile} {
                justify-content: center;
            }

            &:hover {
                span, i {
                    color: darken($secondary, 15%);
                }

                i {
                    transform: translateX(5px);
                }
            }

            i {
                font-size: 24px;
                transition: transform .3s;
            }

            & > * + * {
                margin-left: 16px;
            }
        }
    }

    .img-container {
        width: 1024px;
        grid-column: 8/-1;

        @media #{$mobile} {
            grid-column: unset;
            width: 720px;
            margin: 40px 0 0 -20px;
        }

        img {
            width: 100%;
        }
    }

    .affiliate-bg {
        position: absolute;
        top: 5165px;
        left: -280px;

        @media screen and (max-width: 1184px) {
            top: 5445px;
        }

        @media screen and (max-width: 900px) {
            top: 5000px;
        }

        @media #{$tablet} {
            top: 4890px;
        }

        @media #{$mobile} {
            top: 5650px;
        }
    }

    .affiliate-pattern {
        position: absolute;
        top: 5525px;
        left: auto;
        right: 1px;

        @media screen and (max-width: 1184px) {
            top: 5930px;
        }

        @media screen and (max-width: 900px) {
            top: 5356px;
        }

        @media #{$tablet} {
            top: 5272px;
        }

        @media #{$mobile} {
            display: none;
        }
    }

    .faq-bg {
        position: absolute;
        right: 1px;
        left: auto;

        @media #{$mobile} {
            right: -70px;
            width: 150px;
        }
    }

    .platform-bg-1 {
        position: absolute;
        left: auto;
        right: -80;

        @media screen and (max-width: 1184px) {
            right: 21px;
            top: 255px;
            width: 345px;
        }

        @media screen and (max-width: 900px) {
            right: 1px;
            top: 265px;
            width: 40%;
        }

        @media #{$tablet} {
            right: 1px;
            top: 265px;
            width: 50%;
        }

        @media #{$mobile} {
            right: auto;
            top: 400px;
            width: 85%;
        }
    }

    .platform-bg-2 {
        position: absolute;
        right: auto;
        left: -60px;

        @media screen and (max-width: 1184px) {
            left: 1px;
            top: 750px;
            width: 545px;
        }

        @media screen and (max-width: 900px) {
            left: 1px;
            top: 600px;
            width: 325px;
        }

        @media #{$tablet} {
            left: 1px;
            top: 755px;
        }

        @media #{$mobile} {
            top: 1070px;
            width: 85%;
            left: auto;
        }
    }

    .platform {
        grid-column: 1/13;
        display: flex;
        flex-direction: column;
        margin-top: 96px;
        margin-bottom: 90px;

        @media #{$tablet} {
            margin-top: 96px;
            margin-bottom: 0px;
        }


        @media #{$mobile} {
            margin-top: 24px;
            margin-bottom: 0;
        }

        &-content {
            display: flex;
            align-items: center;
            margin-top: 114px;

            @media #{$mobile} {
                flex-direction: column;
                margin-top: 64px;
            }

            &__details {
                margin-right: 52px;
                z-index: 1;

                p {
                    margin: 16px 0px;
                    width: 456px;

                    @media #{$tablet} {
                        width: 300
                    }

                    @media #{$mobile} {
                        width: auto;
                    }
                }

                button {
                    margin-top: 12px;
                    color: $white;
                    background: $dark-blue;
                    padding: 12px 40px;
                    font-weight: 600;
                    font-size: 15px;
                }

                @media #{$mobile} {
                    text-align: center;
                    margin: 0;
                    margin-bottom: 40px;
                }
            }

            .image img {
                position: relative;
                z-index: 1;
                margin-left: 60px;

                @media screen and (max-width: 1184px) {
                    width: 100%;
                    margin: auto;
                }

                @media #{$tablet} {
                    margin: 0;
                    width: 95%;
                }

                @media #{$mobile} {
                    margin: 0;
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    margin: 36px auto;
                }
            }

            &.mobile {
                text-align: right;

                .platform-content__details {
                    margin-right: 0px;
                    margin-left: 52px;

                    @media screen and (max-width: 1184px) {
                        margin-right: auto;
                        margin-left: 100px;
                    }

                    @media #{$mobile} {
                        margin: 0;
                    }
                }

                .image img {
                    margin: 80px 216px 80px 100px;

                    @media screen and (max-width: 1184px) {
                        width: 50%;
                        margin: auto 80px;
                    }

                    @media #{$tablet} {
                        margin: 80px 200px 80px 50px;
                        width: 60%;
                    }

                    @media #{$mobile} {
                        margin: 0;
                        width: 80%;
                        display: flex;
                        justify-content: center;
                        margin: 36px auto -1em;
                    }
                }

                @media #{$mobile} {
                    flex-direction: column-reverse;
                }
            }
        }
    }

    .affiliates {
        grid-column: 2/13;
        display: flex;
        flex-direction: column;
        gap: 60px;
        margin-top: 64px;
        margin-bottom: 92px;

        @media #{$tablet} {
            grid-column: 1/13;
        }

        .header {
            display: flex;
            flex-direction: column;
            gap: 24px;

            p {
                font-weight: 400;
                font-size: 20px;
                line-height: 150%;
                letter-spacing: -0.005em;
            }
        }

        &__content {
            display: flex;
            flex-direction: row;
            align-items: center;

            &.bposeats {
                .header {
                    margin-right: 160px;

                    @media #{$tablet} {
                        margin-right: 50px;
                    }

                    @media #{$mobile} {
                        text-align: center;
                        margin: 0;
                    }
                }

                @media #{$mobile} {
                    flex-direction: column;
                    gap: 48px;
                }
            }

            &.scalema {
                .header {
                    margin-left: 140px;

                    @media #{$tablet} {
                        margin-left: 50px;
                    }

                    @media #{$mobile} {
                        text-align: center;
                        margin: 0;
                    }
                }

                @media #{$mobile} {
                    flex-direction: column-reverse;
                    gap: 48px;
                }
            }
        }

        .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: $white;
            box-shadow: $floating-card;
            border-radius: 8px;
            padding: 52px 24px;
            max-width: 320px;
            max-height: 489px;
            height: 489px;
            gap: 20px;

            hr {
                width: 100%;
                border: none;
                border-top: 1px solid $light-blue-grey;
            }

            &__details {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;

                img {
                    width: 80px;
                }

                h1 {
                    text-align: center;
                }
            }

            &__extras ul {
                list-style: none;
                padding: 0px;

                li {
                    margin-bottom: 12px;
                }

                i {
                    color: $accent;
                    font-size: 20px;
                }
            }
        }
    }

    .faq-container {
        display: flex;
        flex-direction: row;
        grid-column: 1/13;
        align-items: flex-start;
        margin-top: 56px;

        &__content {
            margin-left: 80px;
            display: flex;
            gap: 16px;
            flex-direction: column;

            details {
                summary {
                    display: flex;
                    justify-content: space-between;
                    gap: $sp-8;
                    padding: $sp-16;
                    cursor: pointer;

                    .icon {
                        @include width-height($sp-24);
                        @include flex-align-justify-center;
                        border-radius: 50%;
                        border: 1px solid $quaternary;
                        background-color: $white;
                        margin-top: $sp-4;
                        transition: transform 250ms;

                        i {
                            font-size: 24px;
                        }
                    }

                    &::-webkit-details-marker {
                        display: none;
                    }
                }

                .answer {
                    padding: $sp-16 $sp-36 !important;
                    display: flex;
                    flex-direction: column;
                    gap: $sp-8;

                    .link {
                        color: $accent;

                        &:hover {
                            color: darken($color: $accent, $amount: 15%);
                            text-decoration: underline;
                            cursor: pointer;
                        }
                    }
                }

                &[open] summary .icon {
                    transform: rotate(180deg);
                }
            }

            .list {
                background: $grey-transparent;
                width: 580px;
                border-radius: 4px;

                &__header {
                    display: flex;
                    padding: 16px;

                    h1 {
                        flex: 1;
                    }
                }

                @media #{$tablet} {
                    width: 100%;
                }

                @media #{$mobile} {
                    width: auto;
                }
            }

            @media #{$tablet} {
                margin: 20px;
            }

            @media #{$mobile} {
                margin: 0;
            }
        }

        button {
            width: 24px !important;
            height: 24px !important;
        }

        img {
            @media #{$tablet} {
                width: 45%;
            }

            @media #{$mobile} {
                display: none;
            }
        }
    }

    .contact-card {
        display: flex;
        justify-content: center;
        padding: 56px;
        margin: 180px 0 92px 0;
        grid-column: 4/-4;
        width: 100%;
        border-radius: 4px;
        background-color: $white;
        box-shadow: 0px 2px 6px rgba(11, 13, 14, 0.15),
                    0px 0px 2px rgba(11, 13, 14, 0.1);

        .section-header {
            text-align: center;

            &__title {
                margin-bottom: 24px;

                h1 {
                    font-size: 40px;
                    font-weight: 500;
                    line-height: 125%;
                    letter-spacing: 0.006em;
                    color: $landing-primary;

                    &.bold {
                        font-weight: 600;
                    }

                    @media #{$mobile} {
                        font-size: 32px;
                    }
                }
            }

            &__description {
                font-size: 18px;
                font-style: normal;
                line-height: 110%;
                letter-spacing: -0.005em;
                color: $secondary;
                width: 100%;
            }
        }

        @media #{$desktop-small} {
            grid-column: 3/-3;
        }

        @media #{$tablet} {
            grid-column: 2/-2;
            margin: 70px 0 92px 0;
        }

        @media #{$mobile} {
            grid-column: 1/-1;
            padding: 36px;
            margin: 80px 0 140px;
        }

        @media #{$mobile-small} {
            padding: 24px;
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 380px;
            width: 100%;
            gap: 40px;

            .text-container {
                position: relative;

                i.check-icon {
                    position: absolute;
                    font-size: 17px;
                    right: -24px;
                    top: -3px;
                    transform: translateX(-12px);
                    transition: transform .3s ease-out, opacity .3s ease-out;
                    opacity: 0;

                    &.success {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            }
        }

        &__input-container {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 32px;

            p {
                position: absolute;
                left: 0;
                top: 44px;
                max-width: unset !important;
                width: unset !important;
                font-weight: 600;
            }
        }

        button.error {
            animation: shake .2s ease-in-out;
        }
    }

    a {
        color: $primary;
        text-decoration: none;
        transition: color .2s ease-out;
    }

    @keyframes shake {
        0% {
            transform: translateX(0);
        }

        25% {
            transform: translateX(5px);
        }

        50% {
            transform: translateX(0);
        }

        75% {
            transform: translateX(-5px);
        }

        100% {
            transform: translateX(0);
        }
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        grid-column: 1/13;
        padding: 16px;

        .sm-text {
            font-size: 20px;
            font-weight: bold;
            color: $accent;
            margin: 20px;
        }

        .t-tiny-text {
            font-size: 14px;
            color: $tertiary;
        }

        &__text {
            margin: 20px;
            padding: 8px;
        }
    }

    .card {
        border: none;
    }

    .card-grid {
        display: flex;
        grid-column: 1/13;
        align-items: center;
        margin: auto;
        z-index: 1;

        @media #{$mobile} {
            flex-direction: column;
            gap: 36px;
        }
    }

    .card-item{
        background: $white;
        justify-content: center;
        padding: 0px 20px;
        margin: 10px;
        border: 2px solid $landing-bg;
        box-shadow: $shadow-low;
        width: 100%;
        height: 240px;
        border-radius: 4px;

        p {
            font-size: 14px;
            color: $tertiary;
        }

        @media screen and (max-width: 1184px) {
            height: 350px;
        }

        @media #{$tablet} {
           height: 350px;
        }

        @media #{$mobile} {
            height: 250px;
            width: 90%;
        }
    }

    .card-icon {
        position: relative;
        background-color: lighten($accent, 35%);
        border-radius: 4px;
        color: $accent;
        font-size: 40px;
        text-align: center;
        padding: 8px;
        top: -24px;
    }

    .details-container{
        position: relative;
        display: flex;
        flex-direction: column;
        grid-column: 1/13;
        justify-content: center;
        align-items: center;
        margin-bottom: 84px;

        &__img {
            width: 560px;
            margin: 20px;

            @media #{$mobile} {
                width: 100%;
            }
        }

        &__content {
            margin: 140px auto auto 80px;
            display: flex;
            grid-column: 1/7;
            justify-content: center;
            align-content: center;

            @media screen and (max-width: 1184px) {
                margin: 40px auto;
                flex-direction: column;
                align-items: center;
            }

            @media #{$tablet} {
                margin: 40px auto;
                flex-direction: column;
            }

            @media #{$mobile} {
                margin: 32px auto;
                flex-direction: column;
            }

            &.reverse {
                @media #{$mobile} {
                    flex-direction: column-reverse;
                }
            }
        }

        &__description {
            justify-content: center;
            margin: auto;
            padding: 35px;

            @media #{$tablet} {
                padding: 0;
            }

            @media #{$mobile} {
                padding: 0;
            }

            h3 {
                text-align: left;

                @media #{$tablet} {
                    text-align: center;
                }

                @media #{$mobile} {
                    text-align: center;
                }
            }

            p {
                margin: 16px auto;

                @media #{$tablet} {
                    font-size: 16px;
                    text-align: center;
                }

                @media #{$mobile} {
                    text-align: center;
                }
            }
        }

        @media screen and (max-width: 1184px) {
            margin: 20px auto;
        }

        @media #{$tablet} {
            margin: 0;
        }

        @media #{$mobile} {
            margin: 0;
        }
    }

    .carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        grid-column: 3/-3;
        padding: 16px;

        p {
            font-size: 18px;
            color: $tertiary;

            @media #{$mobile} {
                font-size: 14px;
            }
        }

        &__container {
            max-width: 100vw;

            @media #{$mobile} {
                width: 70%;
            }

            ::v-deep .vuecarousel-dot-container {
                margin-top: 0 !important;

                button {
                    margin-top: 0px !important;
                }
            }
        }

        &__text {
            margin-bottom: 32px;
        }

        &__img {
            width: 850px;
            height: 561px;
            border: 2px solid $landing-bg;
            box-shadow: $shadow-low;
            border-radius: 12px;

            @media #{$tablet} {
                width: 550px;
                height: 360px;
            }

            @media #{$mobile} {
                width: 100%;
                height: 50%;
            }
        }

        &__description {
            margin: 64px auto;

            @media #{$tablet} {
            }

            @media #{$mobile} {
                margin-top: 0;
            }
        }

        &__title{
            font-weight: bold;
            font-size: 36px;
            line-height: 1;
            letter-spacing: -0.005em;

            @media #{$mobile} {
                font-size: 28px;
            }

            @media #{$tablet} {
                margin: 32px auto;
            }
        }

        .slide-details {
            justify-content: center;
            text-align: center;
            margin: 12px 20px;

            @media #{$tablet} {
                margin: 20px 64px;
            }
            @media #{$mobile} {
                margin: 20px auto;
            }
        }

        @media #{$tablet} {
            grid-column: 1/13;
            padding: 0;
        }

        @media #{$mobile} {
            width: 100%;
            padding: 0;
        }
    }


</style>