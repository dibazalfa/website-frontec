<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />
    <!-- Content Sections -->
    <main class="flex-1 overflow-x-hidden">
      <section id="about-us" ref="aboutUs" class="relative bg-white flex flex-col min-h-screen p-4"
        :class="['transition-all duration-1000 ease-out', { 'opacity-100 translate-y-0': visibleAboutUs, 'opacity-0 translate-y-10': !visibleAboutUs }]">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] sm:text-[30px] tracking-[0] leading-normal whitespace-nowrap mx-auto mt-16"
        >
          <span class="text-[#154214]">{{ t("activities.activities") }}</span>
        </p>
        <div class="relative w-full flex justify-center mt-8">
          <p
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[24px] md:text-[32px] w-2/3 p-4 z-10 mt-48"
            v-html="t('activities.motto')"
          ></p>
          <p class="absolute top-0 left-0 mt-[200px] ml-[20px] text-[30vw] sm:text-[15vw] font-bold text-[#D9D9D9] opacity-30 leading-none z-0">
            TRUST
          </p>
        </div>
      </section>
      <section ref="carousel" class="flex flex-col min-h-screen pb-20 relative"
        :class="['transition-all duration-1000 ease-out', { 'opacity-100 translate-y-0': visibleCarousel, 'opacity-0 translate-y-10': !visibleCarousel }]">
        <div class="carousel relative w-[80%] h-[300px] mx-auto perspective-1000" @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag" @mouseleave="endDrag" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag">
          <div class="carousel-inner relative w-full h-full transform-style-3d transition-transform duration-500" :style="{ transform: `rotateY(-${currentSlide * (360 / images.length)}deg)` }">
            <div v-for="(img, index) in images" :key="index" class="carousel-item absolute w-full h-full" :style="carouselItemStyle(index)">
              <img :src="img" :alt="'img' + (index + 1)" class="object-contain w-full h-full" />
            </div>
          </div>
          <div class="carousel-controls absolute w-full flex justify-between top-1/2 transform -translate-y-1/2 px-4">
            <button @click="prevSlide" class="carousel-control-prev bg-gray-800 text-white p-2 rounded-full">‹</button>
            <button @click="nextSlide" class="carousel-control-next bg-gray-800 text-white p-2 rounded-full">›</button>
          </div>
        </div>
        <br>
        <p class="absolute bottom-0 right-0 mb-[100px] mr-[20px] text-[18vw] sm:text-[12vw] font-bold text-[#D9D9D9] opacity-30 leading-none z-0">
          COMMITMENT
        </p>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import AppHeader from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useI18n } from "vue-i18n";

import background from "@/assets/img/activities/bgActivities.png";
import img1 from "@/assets/img/activities/img1.png";
import img2 from "@/assets/img/activities/img2.png";
import img3 from "@/assets/img/activities/img3.png";
import img4 from "@/assets/img/activities/img4.png";
import img5 from "@/assets/img/activities/img5.png";
import img6 from "@/assets/img/activities/img6.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  name: "Activities",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  data() {
    return {
      background,
      images: [img1, img2, img3, img4, img5, img6],
      currentSlide: 0,
      isDragging: false,
      startX: 0,
      dragX: 0,
      visibleAboutUs: false,
      visibleCarousel: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Call it once to set the initial state based on the scroll position
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const aboutUsSection = this.$refs.aboutUs;
      const carouselSection = this.$refs.carousel;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (aboutUsSection) {
        const aboutUsRect = aboutUsSection.getBoundingClientRect();
        if (aboutUsRect.top < windowHeight - 100) {
          this.visibleAboutUs = true;
        }
      }

      if (carouselSection) {
        const carouselRect = carouselSection.getBoundingClientRect();
        if (carouselRect.top < windowHeight - 100) {
          this.visibleCarousel = true;
        }
      }
    },
    showSlide(index) {
      const totalSlides = this.images.length;
      this.currentSlide = (index + totalSlides) % totalSlides;
    },
    nextSlide() {
      this.showSlide(this.currentSlide + 1);
    },
    prevSlide() {
      this.showSlide(this.currentSlide - 1);
    },
    carouselItemStyle(index) {
      const angle = 360 / this.images.length;
      return {
        transform: `rotateY(${index * angle}deg) translateZ(400px)`,
        margin: '0 20px', // Adjust margin to add space between items
      };
    },
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.clientX || event.touches[0].clientX;
    },
    onDrag(event) {
      if (!this.isDragging) return;
      const x = event.clientX || event.touches[0].clientX;
      this.dragX = x - this.startX;
      const inner = document.querySelector('.carousel-inner');
      const angle = 360 / this.images.length;
      const rotation = this.currentSlide * angle + this.dragX / 5;
      inner.style.transform = `rotateY(-${rotation}deg)`;
    },
    endDrag() {
      if (!this.isDragging) return;
      const draggedSlides = Math.round(this.dragX / 200);
      this.showSlide(this.currentSlide - draggedSlides);
      this.isDragging = false;
      this.dragX = 0;
    },
  },
};
</script>

<style scoped>
.header {
  transition: background-color 0.3s, box-shadow 0.3s;
}

.text-shadow-md {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.opacity-0 {
  opacity: 0;
  transform: translateY(10px);
}

.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.transition-all {
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.carousel {
  position: relative;
  perspective: 1000px;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 40px); /* Adjust width to account for margin */
  height: 100%;
  backface-visibility: hidden;
}

.carousel-control-prev,
.carousel-control-next {
  cursor: pointer;
}
</style>
