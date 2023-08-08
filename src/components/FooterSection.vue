<template>
    <footer class="footer">
        <article class="content-wrapper">
            <section class="footer-left">
                <img
                    class="logo-link"
                    src="../images/HQZen.svg"
                    alt="HQZen logo"
                >
                <p class="t-copy--footer">
                    Managed Productivity Engine: An entire ecosystem of tools for engaged custom solutions for the
                    individual or scaling teams.
                </p>
                <p class="t-copy--footer">
                    1st floor of JDN Square Residential Suites and IT Center, P. Remedio St.,
                    Mandaue City, Cebu, 6014
                </p>
                <p class="t-copy--footer">
                    © Channel Information Technology Support and Leasing Services Corporation
                </p>
            </section>
            <div class="footer-column">
                <section class="footer-center">
                    <h4 class="t-footer-header">
                        Contact Us
                    </h4>
                    <ul>
                        <li>
                            <p
                                href="/"
                                target="_blank"
                                class="image-link-wrapper"
                            >
                                <EmailIcon/>
                                <span class="t-copy--footer">amanda@bposeats.com</span>
                            </p>
                        </li>
                        <li>
                            <p
                                href="/"
                                target="_blank"
                                class="image-link-wrapper"
                            >
                                <PhoneIcon/>
                                <span class="t-copy--footer">+63 915 950 7909</span>
                            </p>
                        </li>
                    </ul>
                </section>
                <section class="footer-center">
                    <h4 class="t-footer-header">
                        Resources
                    </h4>
                    <ul>
                        <li>
                            <a
                                href="/help-center/"
                                target="_blank"
                                class="image-link-wrapper"
                            >
                                <HelpIcon />
                                <span class="t-copy--footer">Help Center</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/release-notes/"
                                target="_blank"
                                class="image-link-wrapper"
                            >
                                <InfoIcon />
                                <span class="t-copy--footer">Release Notes</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://lordicon.com/">Icons by Lordicon.com</a>
                            <br>
                        </li>
                    </ul>
                </section>
            </div>
            <section class="footer-right">
                <h4 class="t-footer-header">
                    Affiliate Sites
                </h4>
                <ul>
                    <li>
                        <a
                            href="/"
                            target="_blank"
                            class="image-link-wrapper"
                        >
                            <img
                                src="../images/BPOSeats.svg"
                                alt="ApplyBPO icon"
                                class="applybpo-icon"
                            >
                            <span class="t-copy--footer">BPOSeats</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            target="_blank"
                            class="image-link-wrapper"
                        >
                            <img
                                src="../images/Scalema.svg"
                                alt="Scalema icon"
                                class="applybpo-icon"
                            >
                            <span class="t-copy--footer">Scalema</span>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    </footer>

</template>

<script>
    import PhoneIcon from 'vue-material-design-icons/Phone.vue'
    import EmailIcon from 'vue-material-design-icons/Email.vue'
    import HelpIcon from 'vue-material-design-icons/HelpCircleOutline.vue'
    import InfoIcon from 'vue-material-design-icons/InformationOutline.vue'
    

    export default {
        name: 'FooterSection',
        components: {
            PhoneIcon,
            EmailIcon,
            HelpIcon,
            InfoIcon,
        },
    };
</script>

<style lang="scss" scoped>
    @import "../scss/index";

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

    .t-section-header {
        font-size: 44px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.005em;

        @media #{$tablet} {
            font-size: 36px;
        }

        @media #{$mobile} {
            font-size: 24px;
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

    .t-footer-header {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        letter-spacing: 0;
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

    .footer {
        bottom: 0;
        background-color: rgba(220,228,241,0.7);
        padding: 60px 0;

        @media #{$mobile} {
            padding: 40px 0;
        }

        .content-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            @media #{$mobile} {
                flex-direction: column;
            }
        }

        &-left, &-center, &-right {
            & > * + * {
                margin-top: 20px;
            }
        }

        &-left {
            max-width: 400px;

            img {
                height: 36px;
            }

            @media #{$tablet} {
                max-width: 350px;
            }

            @media #{$mobile} {
                max-width: unset;
                margin-bottom: 36px;
            }
        }

        &-column {
            section + section {
                margin-top: 36px;
            }
        }

        ul {
            margin-left: 0;
            margin-right: 0;
            padding: 0;
            list-style: none;

            & > * + * {
                margin-top: 8px;
            }
        }

        li a {
            display: flex;
            align-items: center;
            color: $landing-primary;
            text-decoration: none;

            &:hover {
                color: darken($landing-primary, 15%);
            }

            & > * + * {
                padding-left: 14px;
            }
        }

        li p {
            display: flex;
            align-items: center;
            color: $landing-primary;
            text-decoration: none;

            & > * + * {
                padding-left: 14px;
            }
        }

        i {
            font-size: 20px;
        }

        h4 {
            color: $landing-primary;
        }

        p {
            color: $landing-primary;
            max-width: 520px;

            &:nth-child(4) {
                margin-top: 36px;
            }
        }

    }

    a {
        color: $primary;
        text-decoration: none;
        transition: color .2s ease-out;
    }

    .applybpo-icon {
        max-width: 20px;
        max-height: 20px;
    }

</style>
