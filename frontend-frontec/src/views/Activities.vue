<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />
    <!-- Content Sections -->
    <main class="flex-1 overflow-x-hidden">
      <section
        id="about-us"
        class="relative bg-white flex flex-col min-h-screen p-4"
      >
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
          <p
            class="absolute top-1/2 left-0 transform -translate-y-1/2 text-[30vw] sm:text-[15vw] font-bold text-[#D9D9D9] opacity-30 leading-none z-0 mt-24"
          >
            TRUST
          </p>
          <p
            class="absolute top-1/2 right-0 transform -translate-y-1/2 text-[15vw] sm:text-[10vw] font-bold text-[#D9D9D9] opacity-30 text-end leading-none z-0 mt-72"
          >
            COMMITMENT
          </p>
        </div>
      </section>
      <section class="flex flex-col min-h-screen pb-20">
        <div class="flex flex-wrap justify-center mx-auto">
          <div class="mr-5 mb-5">
            <img :src="img1" alt="img1" class="object-contain max-w-full" />
          </div>
          <div class="flex flex-col justify-end mb-5">
            <img
              :src="img2"
              alt="img2"
              class="object-contain self-end max-w-full"
            />
          </div>
        </div>
        <div class="relative flex flex-wrap justify-between">
          <div class="ml-[94px] mt-[450px] relative z-10">
            <img :src="img4" alt="img4" class="object-contain max-w-full" />
          </div>
          <div class="absolute right-0 mr-[74px] z-10">
            <img :src="img3" alt="img3" class="object-contain max-w-full" />
          </div>
          <div class="ml-[94px] mt-[20px] relative z-10">
            <img :src="img6" alt="img6" class="object-contain max-w-full" />
          </div>
          <div class="absolute right-0 mr-[72px] z-20 mt-[800px]">
            <img :src="img5" alt="img5" class="object-contain max-w-full" />
          </div>
        </div>
        <p
          class="ml-4 absolute left-0 transform -translate-y-1/2 text-[30vw] sm:text-[15vw] font-bold text-[#D9D9D9] opacity-30 leading-none z-0 mt-[600px]"
        >
          TRUST
        </p>
        <p
          class="absolute right-0 mr-10 transform -translate-y-1/2 text-[15vw] sm:text-[10vw] font-bold text-[#D9D9D9] opacity-30 text-end leading-none z-0 mt-[800px]"
        >
          COMMITMENT
        </p>
        <p
          class="ml-4 absolute left-0 transform -translate-y-1/2 text-[30vw] sm:text-[15vw] font-bold text-[#D9D9D9] opacity-30 leading-none z-0 mt-[980px]"
        >
          TRUST
        </p>
        <p
          class="absolute right-0 mr-10 transform -translate-y-1/2 text-[15vw] sm:text-[10vw] font-bold text-[#D9D9D9] opacity-30 text-end leading-none z-0 mt-[1200px]"
        >
          COMMITMENT
        </p>
        <p
          class="ml-4 absolute left-0 transform -translate-y-1/2 text-[30vw] sm:text-[15vw] font-bold text-[#D9D9D9] opacity-30 leading-none z-0 mt-[1750px]"
        >
          TRUST
        </p>
        <p
          class="absolute right-0 mr-10 transform -translate-y-1/2 text-[15vw] sm:text-[10vw] font-bold text-[#D9D9D9] opacity-30 text-end leading-none z-0 mt-[1950px]"
        >
          COMMITMENT
        </p>
      </section>
    </main>
    <Footer class="mt-auto"></Footer>
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
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    };
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
</style>
