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
                <OwnershipIcon />
                <h3>Ownership</h3>
                <p>Be accountable for one’s actions and responsibilities.</p>
            </li>
            <li>
                <CommunicationIcon />
                <h3>Communication</h3>
                <p>Proactive sharing ensures informed decisions.</p>
            </li>
        </ul>
      </section>
      <section class="team">
        <div class="team__header">
            <p class="section__subtitle">Our team</p>
            <h1 class="section__title">
                People Behind the Tech
            </h1>
            <p class="section__copy">
                Our diverse team is a blend of tech wizards, creative thinkers, and problem-solving maestros. 
                <br>Together, we innovate to redefine the way the BPO industry work and operate.
            </p>
        </div>
        <ul>
            <li>
                <figure>
                    <figcaption>
                        <h3>Developers</h3>
                    </figcaption>
                </figure>
            </li>
            <li>
                <figure>
                    <figcaption>
                        <h3>Designers</h3>
                    </figcaption>
                </figure>
            </li>
            <li>
                <figure>
                    <figcaption>
                        <h3>QA Testers</h3>
                    </figcaption>
                </figure>
            </li>
        </ul>

        <div class="section__copy reverse blurb">
            We built a vibrant community of amazing teams and talented individuals, 
            spanning across multiple countries.
        </div>
      </section>
      <section class="team-slider">
        <!-- ROW 1 -->
        <div class="slider">
            <div class="row">
                <div class="avatar">
                    <img src="../images/avatars/row1/1.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/2.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/3.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/4.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/5.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/6.png" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/7.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/8.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/9.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/10.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/11.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/12.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/13.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/14.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/15.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/16.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/17.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/18.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/19.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/20.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/21.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/22.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/23.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/24.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/25.jpeg" />
                </div>

                <!-- DUPLICATE -->

                <div class="avatar">
                    <img src="../images/avatars/row1/1.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/2.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/3.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/4.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/5.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/6.png" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/7.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/8.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/9.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/10.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/11.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/12.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/13.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/14.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/15.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/16.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/17.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/18.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/19.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/20.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/21.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/22.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/23.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/24.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row1/25.jpeg" />
                </div>

            </div>
        </div>
        <!-- ROW 2 -->
        <div class="slider">
            <div class="row delay">
                <div class="avatar">
                    <img src="../images/avatars/row2/26.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/27.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/28.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/29.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/30.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/31.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/32.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/33.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/34.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/35.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/36.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/37.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/38.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/39.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/40.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/41.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/42.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/43.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/44.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/45.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/46.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/47.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/48.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/49.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/50.jpeg" />
                </div>

                <!-- DUPLICATE -->

                <div class="avatar">
                    <img src="../images/avatars/row2/26.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/27.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/28.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/29.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/30.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/31.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/32.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/33.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/34.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/35.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/36.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/37.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/38.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/39.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/40.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/41.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/42.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/43.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/44.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/45.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/46.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/47.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/48.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/49.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row2/50.jpeg" />
                </div>

            </div>
        </div>
        <!-- ROW 3 -->
        <div class="slider">
            <div class="row">
                <div class="avatar">
                    <img src="../images/avatars/row3/51.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/52.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/53.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/54.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/55.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/56.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/57.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/58.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/59.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/60.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/61.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/62.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/63.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/64.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/65.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/66.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/67.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/68.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/69.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/70.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/71.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/72.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/73.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/74.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/75.jpeg" />
                </div>

                <!-- DUPLICATE -->

                <div class="avatar">
                    <img src="../images/avatars/row3/51.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/52.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/53.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/54.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/55.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/56.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/57.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/58.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/59.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/60.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/61.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/62.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/63.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/64.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/65.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/66.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/67.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/68.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/69.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/70.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/71.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/72.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/73.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/74.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row3/75.jpeg" />
                </div>

            </div>
        </div>
        <!-- ROW 4 -->
        <div class="slider">
            <div class="row delay">
                <div class="avatar">
                    <img src="../images/avatars/row4/76.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/77.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/78.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/79.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/80.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/81.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/82.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/83.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/84.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/85.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/86.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/87.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/88.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/89.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/90.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/91.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/92.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/93.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/94.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/95.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/96.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/97.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/98.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/99.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/100.jpeg" />
                </div>

                <!-- DUPLICATE -->

                <div class="avatar">
                    <img src="../images/avatars/row4/76.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/77.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/78.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/79.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/80.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/81.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/82.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/83.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/84.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/85.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/86.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/87.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/88.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/89.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/90.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/91.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/92.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/93.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/94.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/95.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/96.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/97.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/98.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/99.jpeg" />
                </div>
                <div class="avatar">
                    <img src="../images/avatars/row4/100.jpeg" />
                </div>

            </div>
        </div>
      </section>
      <section class="perks">
        <div class="perks__header">
            <p class="section__subtitle">Our perks</p>
            <h1 class="section__title">
                Empowering the Team
            </h1>
            <p class="section__copy">
                We ensure team members feel valued and supported 
                in their personal and professional lives.
            </p>
        </div>

        <ul>
            <li>
                <FlexIcon />
                <h3>Flexible Schedule</h3>
                <p>
                    The team can choose their preferred working hours, 
                    as long as they fulfill 40 hours of work in a week.
                </p>
            </li>

            <li>
                <TeamIcon />
                <h3>Team-based Structure</h3>
                <p>
                    There is no seniority here, everyone is encouraged 
                    to share their thoughts and concerns.
                </p>
            </li>

            <li>
                <UpskillIcon />
                <h3>Upskilling Programs</h3>
                <p>
                    Everyone is encouraged to learn new skills, and is given 
                    access to e-learning platforms whenever they choose.
                </p>
            </li>

            <li>
                <PartTimeIcon />
                <h3>Part Time Off</h3>
                <p>
                    Aside from the usual PTO, various leaves are granted such 
                    as Maternity/Paternity Leave, Special Leave for Women, etc.
                </p>
            </li>

            <li>
                <HybridIcon />
                <h3>Hybrid Arrangement</h3>
                <p>
                    If anyone feels unwell or is challenged by natural 
                    elements, they are free to work from home.
                </p>
            </li>

            <li>
                <TeamEventsIcon />
                <h3>Team Events</h3>
                <p>
                    Various activities such as Variety Nights or Movie Nights 
                    are organized to help the team unwind.
                </p>
            </li>
        </ul>
      </section>
      <section class="culture">
        <div class="culture__left">
            <ul class="slides">
                <input type="radio" name="radio-btn" id="img-1" checked />
                <li class="slide-container">
                    <div class="slide">
                        <img 
                            id="slide-1" 
                            src="../images/culture/1.jpg"
                            alt="Four people gathered together, with one writing on a whiteboard"
                        />
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-2" />
                <li class="slide-container">
                    <div class="slide">
                    <img 
                        id="slide-2" 
                        src="../images/culture/2.jpg"
                        alt="A guy (Sir Luke, our QA Team Lead) laughing"
                    />
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-3" />
                <li class="slide-container">
                    <div class="slide">
                    <img 
                        id="slide-3" 
                        src="../images/culture/3.jpg"
                        alt="Three members of the HQZen development team thinking and smiling"
                    />
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-4" />
                <li class="slide-container">
                    <div class="slide">
                    <img 
                        id="slide-4" 
                        src="../images/culture/4.jpg"
                        alt="One of our designers (Maggie) holding a ball, while talking"
                    />
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-5" />
                <li class="slide-container">
                    <div class="slide">
                    <img 
                        id="slide-5" 
                        src="../images/culture/5.jpg"
                        alt="The design team playing charades"
                    />
                    </div>
                </li>

                <li class="nav-dots">
                <label for="img-1" class="nav-dot" id="img-dot-1"></label>
                <label for="img-2" class="nav-dot" id="img-dot-2"></label>
                <label for="img-3" class="nav-dot" id="img-dot-3"></label>
                <label for="img-4" class="nav-dot" id="img-dot-4"></label>
                <label for="img-5" class="nav-dot" id="img-dot-5"></label>
                </li>
            </ul>

        </div>
        <div class="culture__right">
            <p class="section__subtitle">
                Our Culture
            </p>
            <h1 class="section__title reverse">
                Working at HQZen
            </h1>
            <p class="section__copy">
                Newcomers will find a friendly, relaxed setting 
                that encourages collaboration and learning, creating 
                a supportive and fulfilling environment for everyone.
            </p>
        </div>
      </section>
      <section class="career">
        <div class="career__left">
            <p class="section__subtitle">
                Our Career Growth Initiatives
            </p>
            <h3 class="section__title">
                Here to help 
                <span class="emphasis">
                    you
                </span> 
                grow
            </h3>
            <p class="section__copy">
                We offer internship programs, providing aspiring individuals 
                with valuable hands-on experience in the tech industry and 
                introducing them to our tech stack.
            </p>
        </div>
        <div class="career__right">
            <img 
                src="../images/cloud.svg"
                alt="HQZen Tech Cloud"
            />
        </div>
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
import OwnershipIcon from '../components/LottieIcons/OwnershipIcon.vue'
import CommunicationIcon from '../components/LottieIcons/CommunicationIcon.vue'
import FlexIcon from '../components/LottieIcons/FlexIcon.vue'
import TeamIcon from '../components/LottieIcons/TeamIcon.vue'
import UpskillIcon from '../components/LottieIcons/UpskillIcon.vue'
import PartTimeIcon from '../components/LottieIcons/PartTimeIcon.vue'
import HybridIcon from '../components/LottieIcons/HybridIcon.vue'
import TeamEventsIcon from '../components/LottieIcons/TeamEventsIcon.vue'
import Swiper from 'swiper';

export default {
  name: 'CulturePage',
  components: {
        FooterSection,
        CollabIcon,
        GrowthIcon,
        OwnershipIcon,
        CommunicationIcon,
        FlexIcon,
        TeamIcon,
        UpskillIcon,
        PartTimeIcon,
        HybridIcon,
        TeamEventsIcon,
    },

    mounted() {
        new Swiper("#swiper-1", {
        effect: "fade",
        autoplay: {
            delay: 500,
            disableOnInteraction: false
        },
        pagination: {
            el: "#swiper-1 .swiper-pagination",
            clickable: true,
        },
        lazyLoading: true,
        loop: true
        });
  },
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
                margin-bottom: $sp-20;
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

                .emphasis {
                color: $accent;
                font-weight: 800;
                font-size: $sp-52;
                margin-bottom: 24px;
                    @media #{$tablet} {
                        font-size: $sp-28;
                        text-align: center;
                        margin-bottom: 16px;
                    }
                    img {
                        position: absolute;
                        left: 40px;
                        top: 1400px;
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
        margin-top: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

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
            padding: $sp-8 $sp-32;
            justify-content: space-around;
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

    .team {
        height: 100%;
        width: 100%;
        padding: $sp-80 $sp-40 $sp-20 $sp-40;
        justify-content: space-between;
        align-items: center;

        &__header{
            text-align: center;
            margin-bottom: $sp-40;

            @media #{$tablet} {
                > .section__copy br {
                    display: none;
                }
            }
        }

        > ul {
            display: grid;
            list-style-type: none;
            padding: 0;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            grid-gap: 1rem;

            li {
                height: 400px;
                padding: $sp-20;
                border-radius: $sp-12;
                background: $secondary;
                background: linear-gradient(0deg, $accent 0%, $quaternary 100%);

                > figure > figcaption { 
                    position: relative;
                    top: 312px;
                    // background-color: rgba(0,0,0,.7);
                    // width: 100%;

                    > h3 {
                        font-size: $sp-36;
                        font-weight: 800;
                        color: $white;
                        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);

                        @media #{$tablet} {
                            font-size: $sp-24;
                        }
                    }
                }
            }

        @media #{$tablet} {
            grid-gap: 2rem;
        }

        }

        > .blurb {
            margin: $sp-40 0;
            font-size: $sp-20;
            font-weight: 700;
            line-height: 150%;
            text-align: center;
        }
        
    }

    .team-slider {
        padding: 0 0 $sp-80 0;

        .slider {
            height: 76px;
            margin: 0;
            position: relative;
            display: grid;
            overflow: hidden;
            
            .row {
                display: flex;
                width: calc(76px * 50);
                animation: scroll 92s linear infinite;

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }

                    100% {
                        transform: translateX(calc(-76px * 25));
                    }
                }

                .avatar {
                    height: 76px;
                    width: 76px;
                    display: flex;
                    border-radius: 12px;
                    align-items: center;
                    padding: 4px;                        
                    perspective: 100px;
                    }
                }

                .row:hover {
                    animation-play-state: paused;
                }

                .delay {
                    animation-delay: 1600ms;
                }

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                }

                img:hover {
                    transform: translateZ(20px);
                }
        }

        @media #{$tablet} {
            padding: 0 0 $sp-40 0;
        }
    }

    .perks {
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
        }

        &__icon {
            margin: 0px;
        }

        ul {
            display: grid;
            list-style-type: none;
            padding: 0;
            grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
            grid-gap: 4.5rem;

            li {
                padding: $sp-20;
                border-radius: $sp-12;
                background: $white;
                text-align: center;
            }

            h3 {
                font-size:$sp-28;
                text-transform: capitalize;
                color:$secondary;
                font-weight: 600;

                @media #{$tablet} {
                    font-size:$sp-20;
                }
            }

            p {
                margin-top: $sp-12;
                font-size: $sp-16;
                font-style: normal;
                font-weight: 400;
                color: $secondary;
                line-height: 150%;
                letter-spacing: -0.1px;
            }

            @media #{$tablet} {
                grid-gap: 2rem;
                margin: $sp-40 $sp-80;
            }
        }

        @media #{$tablet} {
            text-align: center;
            padding: $sp-40 0;
        }
    }

    .culture {
        background: $white;
        height:100%;
        width:100%;
        padding: $sp-40 $sp-80;
        display: flex;  
        align-items: center;
        justify-content: space-between;

        &__left {
            width: 100vmin;
            margin: $sp-12;
            
            .slides {
                padding: 0;
                width: 609px;
                height: 420px;
                display: block;
                margin: 0 auto;
                position: relative;

                @media #{$tablet} {
                    padding: 24px;
                    width: 90%;
                    margin: 0;
                }
            }

            .slides * {
                user-select: none;
                -ms-user-select: none;
                -moz-user-select: none;
                -khtml-user-select: none;
                -webkit-user-select: none;
                -webkit-touch-callout: none;
            }

            .slides input { display: none; }

            .slide-container { display: block; }

            .slide {
                top: 0;
                opacity: 0;
                width: 100%;
                display: block;
                position: absolute;

                transform: scale(0);

                transition: all .7s ease-in-out;
            }

            .slide img {
                width: 100%;
                height: 100%;
            }

            input:checked + .slide-container  .slide {
                opacity: 1;

                transform: scale(1);

                transition: opacity 1s ease-in-out;
            }

            input:checked + .slide-container .nav label { display: block; }

            .nav-dots {
                width: 100%;
                bottom: 9px;
                height: 11px;
                display: block;
                position: absolute;
                text-align: center;

                @media #{$tablet} {
                    bottom: 100px;
                }
            }

            .nav-dots .nav-dot {
                bottom: 8px;
                width: 8px;
                height: 8px;
                margin: 0 4px;
                position: relative;
                border-radius: 100%;
                display: inline-block;
                background-color: $quaternary;
            }

            .nav-dots .nav-dot:hover {
                cursor: pointer;
                background-color: $accent;
            }

            input#img-1:checked ~ .nav-dots label#img-dot-1,
            input#img-2:checked ~ .nav-dots label#img-dot-2,
            input#img-3:checked ~ .nav-dots label#img-dot-3,
            input#img-4:checked ~ .nav-dots label#img-dot-4,
            input#img-5:checked ~ .nav-dots label#img-dot-5 {
                background: $tertiary;
            }
        }

        &__right {
            max-width: 388px;

            @media #{$tablet} {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        @media #{$tablet} {
            padding: $sp-40;
            flex-direction: column-reverse;
        }
    }

    .career {
        background: $white;
        height:100%;
        width:100%;
        padding: $sp-80;
        display: flex;  
        align-items: center;
        justify-content: space-between;

        &__left {
            max-width: 400px;
        }

        &__right {
            width: 100%;
            margin: $sp-12;
            padding:$sp-12;

            img {
                width: 100%;
            }

            @media #{$tablet} {
                width: 100%;
                display: flex;
                padding: 0;

                img {
                    width: 100%;
                }
            }
        }

         @media #{$tablet} {
            flex-direction: column;
            @include flex-align-center(column);
            padding: $sp-40;
        }
    }

    .join {
        background-image: url("../images/join-bg.svg");
        background-size: cover;
        height:100%;
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
            margin-left: $sp-20;

            @media #{$tablet} {
                margin-left: 0;
            }
        }

        &__right img{
            position: relative;
            right: 0;
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
            gap: 20px;
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