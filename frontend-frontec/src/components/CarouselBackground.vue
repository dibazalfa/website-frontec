<template>
  <div id="carousel" class="relative h-full">
    <div class="overflow-hidden h-full relative">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
        :class="{
          'opacity-0': currentSlide !== index,
          'opacity-100': currentSlide === index,
        }"
        :style="{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
    </div>
    <div
      class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
    >
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full bg-white"
        :class="{
          'bg-opacity-50': currentSlide !== index,
          'bg-opacity-100': currentSlide === index,
        }"
      ></button>
    </div>
    <button
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
      @click="prevSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 bg-white bg-opacity-30 rounded-full group-focus:ring-4 group-focus:ring-white"
      >
        <svg
          class="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </span>
    </button>
    <button
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
      @click="nextSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 bg-white bg-opacity-30 rounded-full group-focus:ring-4 group-focus:ring-white"
      >
        <svg
          class="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
import background1 from "@/assets/img/landing-page/background1.png";
import background2 from "@/assets/img/landing-page/background2.png";
import background3 from "@/assets/img/landing-page/background3.png";

export default {
  data() {
    return {
      slides: [
        { image: background1 },
        { image: background2 },
        { image: background3 },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  },
};
</script>

<style scoped>
#carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
</style>
