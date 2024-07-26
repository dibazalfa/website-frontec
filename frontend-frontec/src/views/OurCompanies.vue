<template>
  <div>
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />
    <main class="overflow-x-hidden">
      <section class="bg-white flex flex-col p-4 md:p-8 lg:p-12">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[30px] sm:text-[35px] md:text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto"
        >
          <span class="text-[#154214]">Our </span>
          <span class="text-[#286f9b]">Companies</span>
        </p>
      </section>
      <section
        v-motion
        :initial="{ opacity: 0, x: 0, y: 10 }"
        :enter="{ opacity: 1, x: 0, y: -10, transition: { duration: 1000, ease: 'easeOut' } }"
        class="flex justify-center p-4"
      >
        <iframe
          class="w-full max-w-xl"
          height="315"
          src="https://www.youtube.com/embed/oB6cCU2O7P0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </section>
      <section class="flex justify-center mt-16 px-4">
        <div class="flex flex-col items-center w-full md:w-3/4 lg:w-2/3 relative">
          <div class="hidden lg:block absolute w-px bg-gray-300 top-0 bottom-0 h-full mx-24"></div>
          <div class="flex flex-col md:flex-row items-center w-full">
            <div
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 1800, ease: 'easeIn' } }"
              class="w-full md:w-1/2 p-4 flex flex-col items-center"
            >
              <img :src="FAE" class="object-contain mb-8 w-full max-w-xs" />
              <p class="text-justify">
                  {{ t('companies.fae1') }}
                <br /><br />
                  {{ t('companies.fae2') }}
              </p>
            </div>
            <div
              v-motion
              :initial="{ opacity: 0, x: 100 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 1800, ease: 'easeIn' } }"
              class="hidden lg:block md:w-1/2 p-4 flex flex-col items-center lg:items-start lg:ml-12"
            >
              <div class="flex justify-center items-center w-72 h-72 border-4 border-[#1327C3] rounded-full">
                <p class="text-[30px] font-serif font-bold text-[#1327C3] leading-none">Est. 2008</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center w-full mt-14">
            <div
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 2800, ease: 'easeIn' } }"
              class="w-full md:w-1/2 p-4 flex flex-col items-center"
            >
              <img :src="FGN" class="object-contain mb-8 w-full max-w-xs" />
              <p class="text-justify">
                {{ t('companies.fgn') }}
              </p>
            </div>
            <div
              v-motion
              :initial="{ opacity: 0, x: 100 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 2800, ease: 'easeIn' } }"
              class="hidden lg:block md:w-1/2 p-4 flex flex-col items-center lg:items-start lg:ml-12"
            >
              <div class="flex justify-center items-center w-72 h-72 border-4 border-[#007D17] rounded-full">
                <p class="text-[30px] font-serif font-bold text-[#007D17] leading-none">Est. 2013</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useI18n } from "vue-i18n";
import { MotionPlugin } from '@vueuse/motion';

import background from "@/assets/img/companies/background.png";
import FAE from "@/assets/img/header/faeLogo.png";
import FGN from "@/assets/img/header/fgnLogo.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  name: "OurCompanies",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  data() {
    return {
      background,
      FAE,
      FGN
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

.w-px {
  width: 1px;
}

.absolute {
  position: absolute;
}

.shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
