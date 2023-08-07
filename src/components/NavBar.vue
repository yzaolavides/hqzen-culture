<template>
    <header :class="['main-header', openMobileMenu ? 'menu-open' : '']">
        <nav
            class="nav-container"
            v-mousedown-outside="mouseDownOutsideHandler"
        >
            <nav class="left">
                <a
                    href="https://hqzen.com/"
                    title="HQZen.com"
                    class="logo"
                >
                    <img
                        src="../images/HQZen.svg"
                        alt="HQZen logo"
                    >
                </a>
                <ul class="actions">
                    <li>
                        <a
                            href="https://hqzen.com/"
                            class="medium semibold"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://yzaolavides.github.io/hqzen-culture"
                            class="medium semibold"
                        >
                            Culture
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://hqzen.com/job-postings/"
                            class="medium semibold"
                        >
                            Look for Jobs
                        </a>
                    </li>
                    <li>
                        <a
                            class="medium semibold"
                            :class="{'active': showProductDropdown}"
                            @click="showProductDropdownHandler"
                        >
                            Products
                        </a>
                    </li>
                    <li>
                        <a
                            class="medium semibold"
                            :class="{'active': showHelpDropdown}"
                            @click="showHelpDropdownHandler"
                        >
                            Support
                        </a>
                    </li>
                </ul>
            </nav>
            <nav class="right">
                <ul
                    v-if="!isLoggedIn"
                    class="actions"
                >
                    <li>
                        <a
                            href="https://hqzen.com/signup/get-started"
                            class="action"
                        >
                            Get Started
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://hqzen.com/signin"
                        >
                            <span class="medium semibold">
                                Sign in
                            </span>
                        </a>
                    </li>
                </ul>
                <ul v-else>
                    <li>
                        <router-link
                            :to="goToBoard"
                            class="action"
                        >
                            Go to Board
                        </router-link>
                    </li>
                </ul>
                <div
                    v-if="breakpoint == 'mobile' || breakpoint == 'tablet'"
                    class="icon-container"
                    ref="icon"
                    @click="openMobileMenu = !openMobileMenu, $emit('toggle-mobile-menu', openMobileMenu)"
                >
                    <div class="line top"></div>
                    <div class="line bottom"></div>
                </div>
            </nav>
            <nav
                v-if="showProductDropdown"
                class="list-dropdown"
                @click="toggleProductList = !toggleProductList"
            >
                <a href="https://hqzen.com/release-notes">
                    <div class="list-dropdown__item">
                        <p class="p-h3">
                            Desktop App
                        </p>
                        <p class="regular">
                            With our proprietary time tracking technology, make sure that you
                            know how your employees spend their logged time.
                        </p>
                        <img
                            src="../images/desktop.png"
                            alt="Desktop App Graphic"
                        >
                    </div>
                </a>
                <a
                    href="https://play.google.com/store/apps/details?id=com.bposeats.applybpo"
                    target="__blank"
                >
                    <div class="list-dropdown__item">
                        <p class="p-h3">
                            Mobile Application
                        </p>
                        <p class="regular">
                            Track productivity, schedule tasks, manage employee
                            payrolls, and more using the mobile application.
                        </p>
                        <img
                            src="../images/mobile.png"
                            alt="Mobile App Graphic"
                        >
                    </div>
                </a>
            </nav>
            <nav
                v-if="showHelpDropdown == true"
                class="list-dropdown"
                @click="toggleHelpList = !toggleHelpList"
            >
                <a href="https://hqzen.com/concerns">
                    <div class="list-dropdown__item">
                        <p class="p-h3">
                            Concerns
                        </p>
                        <p class="regular">
                            Have a concern to report to our team? Or perhaps an issue within
                            your team that you want to report to other departments.
                        </p>
                        <img
                            src="../images/concerns.png"
                            alt="Concerns Graphic"
                        >
                    </div>
                </a>
                <a href="https://hqzen.com/help-center/">
                    <div class="list-dropdown__item">
                        <p class="p-h3">
                            Help Center
                        </p>
                        <p class="regular">
                            Read our internal documentation on how to
                            fully utilize HQZen to its full potential and capabilities.
                        </p>
                        <img
                            src="../images/feedback.png"
                            alt="Help Center Graphic"
                        >
                    </div>
                </a>
            </nav>
            <nav
                v-if="breakpoint == 'mobile' || breakpoint == 'tablet' && breakpoint != 'null'"
                class="mobile-menu"
                :class="openMobileMenu ? 'show' : ''"
            >
                <ul>
                    <li>
                        <a
                            href="https://hqzen.com/"
                            class="medium semibold"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://yzaolavides.github.io/hqzen-culture"
                            class="medium semibold"
                        >
                            Culture
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://hqzen.com/job-postings/"
                            class="medium semibold"
                        >
                            Look for Jobs
                        </a>
                    </li>
                    <li>
                        <a
                            class="medium semibold"
                            @click="toggleProductList = !toggleProductList"
                        >
                            Products
                        </a>
                        <i
                            class="mdi mdi-chevron-right c-white t-regular chevron"
                            :class="toggleProductList ? 'rotate' : ''"
                        ></i>
                        <div
                            class="list"
                            :class="{'show': toggleProductList}"
                        >
                            <a href="https://hqzen.com/release-notes">
                                <div class="list__item">
                                    <p class="p-h3">
                                        Desktop Application
                                    </p>
                                    <p class="t-sm">
                                        Track producitvity in your workforce by
                                        downloading the HQZen Desktop Time Tracker. Available
                                        to use on Windows, macOS, and Linux.
                                    </p>
                                    <img
                                        src="../images/desktop.png"
                                        alt="Desktop App Graphic"
                                        class="list__item-graphic"
                                    >
                                </div>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.bposeats.applybpo"
                                target="__blank"
                            >
                                <div class="list__item">
                                    <p class="p-h3">
                                        Mobile Application
                                    </p>
                                    <p class="t-sm">
                                        With our Android application, employees can time in
                                        to their assigned tasks via their mobile phone.
                                    </p>
                                    <img
                                        src="../images/mobile.png"
                                        alt="Mobile App Graphic"
                                        class="list__item-graphic"
                                    >
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="support">
                        <a
                            class="medium semibold"
                            @click="toggleHelpList = !toggleHelpList"
                        >
                            Support
                        </a>
                        <i
                            class="mdi mdi-chevron-right c-white t-regular chevron"
                            :class="toggleHelpList ? 'rotate' : ''"
                        >
                        </i>
                        <div
                            class="list"
                            :class="{'show': toggleHelpList}"
                        >
                            <a href="https://hqzen.com/concerns">
                                <div class="list__item">
                                    <p class="p-h3">
                                        Concerns
                                    </p>
                                    <p class="t-sm">
                                        Have a concern to report to our team? Or perhaps an issue within
                                        your team that you want to report to other departments.
                                    </p>
                                    <img
                                        src="../images/concerns.png"
                                        alt="Desktop App Graphic"
                                        class="list__item-graphic"
                                    >
                                </div>
                            </a>
                            <a href="https://hqzen.com/help-center/">
                                <div class="list__item">
                                    <p class="p-h3">
                                        Help Center
                                    </p>
                                    <p class="t-sm">
                                        Read our internal documentation on how to
                                        fully utilize HQZen to its full potential and capabilities.
                                    </p>
                                    <img
                                        src="../images/feedback.png"
                                        alt="Mobile App Graphic"
                                        class="list__item-graphic"
                                    >
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <hr>
                    </li>
                    <template v-if="!isLoggedIn">
                        <li class="medimum semibold">
                            <a :href="{name: 'get-started'}">
                                Get Started
                            </a>
                        </li>
                        <li class="medimum semibold">
                            <a :href="{name: 'signin'}">
                                Sign in
                            </a>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <router-link
                                :to="goToBoard"
                                class="medium"
                            >
                                Go to Board
                            </router-link>
                        </li>
                    </template>
                </ul>
            </nav>
        </nav>
    </header>
</template>

<script>
    import { MousedownOutside } from '../directives/MousedownOutside.js';

    export default {
        name: 'ExternalNav',

        data() {
            return {
                showMenu: false,
                windowWidth: window.innerWidth,
                openMobileMenu: false,
                toggleProductList: false,
                toggleHelpList: false,
                showProductDropdown: false,
                showHelpDropdown: false
            };
        },

        directives: {
            MousedownOutside
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu;
            },

            onResize() {
                this.windowWidth = window.innerWidth;
                if (this.breakpoint == 'desktop') {
                    this.showMenu = false;
                }
            },

            hideDropdownsHandler() {
                this.showProductDropdown = false;
                this.showHelpDropdown = false;
            },

            showProductDropdownHandler() {
                this.showProductDropdown = !this.showProductDropdown;
                this.showHelpDropdown = false;
            },

            showHelpDropdownHandler() {
                this.showHelpDropdown = !this.showHelpDropdown;
                this.showProductDropdown = false;
            },

            mouseDownOutsideHandler() {
                this.showProductDropdown = false;
                this.showHelpDropdown = false;
            }
        },

        watch: {
            breakpoint: {
                handler() {
                    this.openMobileMenu = false;
                    this.$emit('toggle-mobile-menu', this.openMobileMenu);
                    this.showProductDropdown = false;
                    this.showHelpDropdown = false;
                }
            },
        },
        mounted() {
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize);
            });
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.onResize);
        },


        computed: {
            breakpoint() {
                if (this.windowWidth <= 360) {
                    return 'mobile-small';
                } else if (this.windowWidth <= 576) {
                    return 'mobile';
                } else if (this.windowWidth <= 768) {
                    return 'tablet';
                } else if (this.windowWidth <= 1024) {
                    return 'desktop';
                } else {
                    return null;
                }
            },
        }
    };
</script>

<style lang="scss" scoped>
    @import "../scss/bpo-variables";
    @import "../scss/reset";

    a {
        color: $accent;
        text-decoration: none;
        transition: color .2s ease-out;

        &:hover {
            color: #0374C7;
        }
    }

    .left,
    .right {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 32px;

        nav {
            flex-grow: 1
        }

        ul {
            @include clear-list-formatting();
            display: flex;
            align-items: center;
            gap: 4px;

            @media #{$tablet} {
                display: none;
            }
        }

        i {
            font-size: 24px;
            color: $accent;
            cursor: pointer;
            display: none;

            @media #{$tablet} {
                display: block;
            }
        }

        a {
            padding: 8px 16px;
        }

        .active {
            border-radius: 8px;
            padding: 8px 16px;
            background: $accent;
            color: $white;
        }

        .logo {
            padding: 0px;
        }
    }

    .main-header > nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $white;
        padding: 18px 0;
        z-index: 2;
        height: 76px;
        position: fixed;
        top: 0;
        width: 100%;

        img {
            height: 36px;
        }

        a {
            cursor: pointer;
        }

        .list-dropdown {
            background: $accent;
            position: absolute;
            top: 76px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 16px;
            padding: 16px;


            &__item {
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                color: $white;
                width: min-content;
                border-radius: 8px;
                transition: all .2s;
                cursor: pointer;

                &:hover {
                    background: #01589b;
                }

                img {
                    width: 300px;
                    height: auto;
                }

                p {
                    line-height: 150%;
                }
            }
        }
    }

    .action {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $accent;
        padding: 8px 16px !important;
        border: 0;
        height: 40px;
        color: $white;
        font-size: 15px;
        font-weight: 600;
        transition: background-color .2s ease-out;
        border-radius: 8px;
        line-height: 1.5;
        cursor: pointer;

        &:hover {
            background-color: #0374C7;
            color: $white;
        }
    }

    .mobile-menu {
        position: absolute;
        top: 76px;
        height: 0px;
        width: 100%;
        background: $accent;
        transition: all 0.3s ease-out, background 0.2s ease-out;
        z-index: 1;

        .chevron {
            display: inline-block;
            transition: all 0.3s ease-out;
            font-size: 18px;

            &.rotate {
                transform: rotate(90deg) !important;
            }
        }

        hr {
            border: none;
            border-bottom: 1px solid white;
            margin-top: -12px;
        }

        ul {
            @include clear-list-formatting();
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 30px;

            li {
                transition: opacity 0.1s cubic-bezier(0.4, 0.01, 0.165, 0.99),
                -webkit-transform 0.1s cubic-bezier(0.4, 0.01, 0.165, 0.99);
                opacity: 0;

                &:nth-child(7) {
                    transition-delay: 0.02s;
                }

                &:nth-child(6) {
                    transition-delay: 0.05s;
                }

                &:nth-child(5) {
                    transition-delay: 0.08s;
                }

                &:nth-child(4) {
                    transition-delay: 0.12s;
                }

                &:nth-child(3) {
                    transition-delay: 0.15s;
                }

                &:nth-child(2) {
                    transition-delay: 0.18s;
                }

                &:nth-child(1) {
                    transition-delay: 0.22s;
                }
            }

            .support {
                margin-top: -18px;
            }

            a {
                color: $white;
                font-size: 18px;
                cursor: pointer;
            }
        }

        &.show {
            height: calc(100vh - 76px);
            overflow-y: auto;
            transition: all 0.3s ease-out, background 0.2s ease-out;

            ul {
                li {
                    opacity: 1;

                    &:nth-child(1) {
                        transition-delay: 0.05s;
                    }

                    &:nth-child(2) {
                        transition-delay: 0.1s;
                    }

                    &:nth-child(3) {
                        transition-delay: 0.15s;
                    }

                    &:nth-child(4) {
                        transition-delay: 0.2s;
                    }

                    &:nth-child(5) {
                        transition-delay: 0.25s;
                    }

                    &:nth-child(6) {
                        transition-delay: 0.3s;
                    }

                    &:nth-child(7) {
                        transition-delay: 0.35s;
                    }
                }
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            background: #0063AF;
            color: white;
            margin-top: 18px;
            border-radius: 4px;
            max-height: 0px;
            max-width: 450px;
            overflow: hidden;
            transition: max-height 0.5s ease-out, background 0.8s ease-out;

            &__item {
                display: flex;
                flex-direction: column;
                gap: 12px;
                padding: 18px;
                cursor: pointer;
                transition: all .2s;

                &:hover {
                    background: #004c86;
                }

                img {
                    max-width: 400px;
                    height: auto;
                }
            }

            &.show {
                max-height: 1000px;
                background: #01589b;
                transition: max-height 0.5s ease-out, background 0.8s ease-out;
                margin-bottom: 12px;
            }
        }
    }

    .icon-container {
        position: relative;
        display: inline-block;
        z-index: 2;
        // float: right;
        height: 24px;
        width: 24px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
        padding-top: 2px;

        .line {
            width: 100%;
            height: 3px;
            border-radius: 12px;
            display: block;
            position: relative;
            background: $accent;
            transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);

            &.top {
                -webkit-transform: translateY(6px) rotate(0deg);
                transform: translateY(12px) rotate(0deg);
            }

            &.bottom {
                -webkit-transform: translateY(0px) rotate(0deg);
                transform: translateY(0px) rotate(0deg);
            }
        }
    }

    .menu-open {
        .line {
            transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            transition-delay: 0.1s;

            &.top {
                -webkit-transform: translateY(10px) rotate(45deg);
                transform: translateY(10px) rotate(45deg);
            }

            &.bottom {
                -webkit-transform: translateY(7px) rotate(-45deg);
                transform: translateY(7px) rotate(-45deg);
            }
        }
    }
</style>
