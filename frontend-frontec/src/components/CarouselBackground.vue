<template>
  <div id="carousel" class="relative h-full font-inter">
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
        <div
          class="absolute inset-0 flex items-center z-10 flex-wrap md:flex-nowrap"
        >
          <div
            v-if="slide.leftImage"
            class="w-full md:w-1/2 h-full flex justify-center items-center p-4 md:p-0"
          >
            <img
              :src="slide.leftImage"
              alt="Left Image"
              class="max-w-full max-h-full object-contain mt-4 md:mt-[80px] ml-0 md:ml-[65px]"
            />
          </div>
          <div
            v-if="slide.text"
            class="w-full md:w-1/2 h-full flex flex-col justify-center p-4 md:p-0"
            :class="{
              'items-start': slide.position === 'left',
              'items-end text-right': slide.position === 'right',
            }"
          >
            <div
              v-for="(line, idx) in slide.text"
              :key="idx"
              :class="line.classes"
              :style="{ fontSize: line.size, color: line.color }"
              class="text-responsive"
            >
              {{ line.text }}
            </div>
          </div>
        </div>
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
import background from "@/assets/img/landing-page/background.png";
import leftImage2 from "@/assets/img/landing-page/grain-storage.png";
import leftImage3 from "@/assets/img/landing-page/feedmill.png";
import leftImage4 from "@/assets/img/landing-page/material-handling.png";
import leftImage5 from "@/assets/img/landing-page/spare-parts.png";

export default {
  data() {
    return {
      slides: [
        {
          image: background1,
          text: [
            {
              text: "Trusted Partner in",
              size: "4vw",
              color: "#F7F6BB",
              classes:
                "font-semibold italic text-shadow-md ml-[10%] md:ml-[170px] leading-none md:leading-tight",
            },
            {
              text: "Feed and Grain",
              size: "5vw",
              color: "#FFEA71",
              classes:
                "font-bold italic text-shadow-md mt-1 ml-[10%] md:ml-[170px] leading-none md:leading-tight",
            },
            {
              text: "Technology",
              size: "4vw",
              color: "#F7F6BB",
              classes:
                "font-semibold italic text-shadow-md mt-1 ml-[10%] md:ml-[170px] leading-none md:leading-tight",
            },
          ],
          position: "left",
        },
        {
          image: background,
          leftImage: leftImage2,
          text: [
            {
              text: "Grain Storage",
              size: "5vw",
              color: "#F7F6BB",
              classes:
                "font-bold italic text-shadow-md ml-[10%] md:ml-[100px] leading-none md:leading-tight",
            },
          ],
          position: "left",
        },
        {
          image: background,
          leftImage: leftImage3,
          text: [
            {
              text: "Feedmill",
              size: "5vw",
              color: "#F7F6BB",
              classes:
                "font-bold italic text-shadow-md mt-[5%] md:mt-[50px] ml-[10%] md:ml-[80px] leading-none md:leading-tight",
            },
            {
              text: "Equipments",
              size: "5vw",
              color: "#F7F6BB",
              classes:
                "font-bold italic text-shadow-md mt-[1%] md:mt-[10px] ml-[10%] md:ml-[80px] leading-none md:leading-tight",
            },
          ],
          position: "left",
        },
        {
          image: background,
          leftImage: leftImage4,
          text: [
            {
              text: "Material",
              size: "5vw",
              color: "#F7F6BB",
              classes:
                "font-bold italic text-shadow-md mt-[5%] md:mt-[50px] ml-[10%] md:ml-[80px] leading-none md:leading-tight",
            },
            {
              text: "Handling",
              size: "5vw",
              color: "#F7F6BB",
              classes:
                "font-bold italic text-shadow-md mt-[1%] md:mt-[10px] ml-[10%] md:ml-[80px] leading-none md:leading-tight",
            },
          ],
          position: "left",
        },
        {
          image: background,
          leftImage: leftImage5,
          text: [
            {
              text: "Spare Parts",
              size: "5vw",
              color: "#F7F6BB",
              classes:
                "font-bold italic text-shadow-md ml-[10%] md:ml-[100px] leading-none md:leading-tight",
            },
          ],
          position: "left",
        },
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
.text-shadow-md {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}
.font-inter {
  font-family: "Inter", sans-serif;
}
.text-responsive {
  font-size: 4vw; /* Default responsive font size for mobile */
}
@media (min-width: 768px) {
  .text-responsive {
    font-size: initial; /* Reset to initial font size for larger screens */
  }
}
</style>
