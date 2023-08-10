<template>
  <div class="slider">
    <div class="swiper" id="swiper-1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img 
                id="slide-1" 
                src="../images/culture/1.jpg"
                alt="Four people gathered together, with one writing on a whiteboard"
            />
          </div>
          <div class="swiper-slide">
            <img 
                id="slide-2" 
                src="../images/culture/2.jpg"
                alt="A guy (Sir Luke, our QA Team Lead) laughing"
            />
          </div>
          <div class="swiper-slide">
            <img 
                id="slide-3" 
                src="../images/culture/3.jpg"
                alt="Three members of the HQZen development team thinking and smiling"
            />
          </div>
          <div class="swiper-slide">
            <img 
                id="slide-4" 
                src="../images/culture/4.jpg"
                alt="One of our designers (Maggie) holding a ball, while talking"
              />
          </div>
          <div class="swiper-slide">
            <img 
                id="slide-5" 
                src="../images/culture/5.jpg"
                alt="The design team playing charades"
            />
          </div>
        </div>
        <div class="swiper-pagination">

        </div>
    </div>
  </div>
</template>

 
<style scoped>

.slider {
  width: 50%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
}

</style>
