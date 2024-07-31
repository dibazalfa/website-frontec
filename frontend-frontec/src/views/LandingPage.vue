<template>
  <div>
    <AppHeader class="relative min-h-screen bg-cover bg-center" />
    <!-- Content Sections -->
    <main class="overflow-x-hidden">
      <!-- About Us Section -->
      <section id="about-us" class="bg-white flex flex-col min-h-screen p-4">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto mt-16"
        >
          <span class="text-[#154214]">{{ t("landingPage.about") }}</span>
          <span class="text-[#286f9b]">Frontec</span>
        </p>
        <img :src="machining1" alt="" class="mx-auto mt-16" />
        <div class="flex flex-col md:flex-row mx-auto mt-16 text-justify mb-14">
          <p
            class="md:w-1/2 p-4 lg:ml-40 lg:mr-5"
            v-html="t('landingPage.about1')"
          ></p>
          <div class="border-l-2 border-black hidden md:block"></div>
          <p
            class="md:w-1/2 p-4 lg:mr-40 lg:ml-5"
            v-html="t('landingPage.about2')"
          ></p>
        </div>
      </section>

      <!-- Why Frontec Section -->
      <section
        id="why-frontec"
        class="bg-[#313C44] flex flex-col md:flex-row min-h-screen p-4"
      >
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] tracking-[0] leading-normal whitespace-nowrap my-auto mx-16"
        >
          <span class="text-white">{{ t("landingPage.why") }}</span>
          <span class="text-[#F7F6BB]">Frontec?</span>
        </p>
        <div class="text-white my-auto mx-auto flex flex-col space-y-8">
          <div class="flex flex-row">
            <img class="my-auto mr-5" :src="vectorYes" alt="" />
            <div>
              <p class="font-bold text-2xl">{{ t("landingPage.point1") }}</p>
              <p class="text-md">{{ t("landingPage.sub-point1") }}</p>
            </div>
          </div>
          <div class="flex flex-row">
            <img class="my-auto mr-5" :src="vectorYes" alt="" />
            <div>
              <p class="font-bold text-2xl">{{ t("landingPage.point2") }}</p>
              <p class="text-md">{{ t("landingPage.sub-point2") }}</p>
            </div>
          </div>
          <div class="flex flex-row">
            <img class="my-auto mr-5" :src="vectorYes" alt="" />
            <div>
              <p class="font-bold text-2xl">{{ t("landingPage.point3") }}</p>
              <p class="text-md">{{ t("landingPage.sub-point3") }}</p>
            </div>
          </div>
        </div>
        <img class="m-auto w-full md:w-auto" :src="whyFrontec" alt="" />
      </section>

      <!-- Our Business Section -->
      <section
        id="our-business"
        class="flex flex-col md:flex-row min-h-[75vh] py-4 mx-4 md:mx-28 text-justify"
      >
        <img
          class="my-auto ml-4 md:ml-20 w-full md:w-auto"
          :src="business"
          alt=""
        />
        <div class="my-auto ml-4 md:ml-16 mr-4 md:mr-20">
          <p>{{ t("landingPage.desc1") }}</p>
          <ul class="list-disc list-inside font-bold">
            <li>Poultry</li>
            <li>Aqua Feed Mill</li>
            <li>Dairy Products</li>
          </ul>
          <br />
          <p v-html="t('landingPage.desc2')"></p>
          <ul class="list-disc list-inside font-bold">
            <li>Feasibility Studies</li>
            <li>Design</li>
            <li>Manufacturing</li>
            <li>Erection</li>
            <li>Installation of Automation & Control Systems</li>
            <li>Commissioning</li>
          </ul>
          <p>{{ t("landingPage.desc3") }}</p>
        </div>
      </section>

      <!-- Vision and Mission Section -->
      <section
        id="vision-mission"
        class="flex flex-col md:flex-row justify-center items-center min-h-[75vh] p-4"
      >
        <div
          class="flex flex-col md:flex-row border-solid border-2 border-slate-300 rounded-lg max-w-6xl mx-auto"
        >
          <div
            class="p-4 md:p-14 lg:p-32 border-b-2 md:border-b-0 md:border-r-2 border-slate-300"
          >
            <span
              class="text-shadow-md font-extrabold text-[40px] tracking-normal leading-normal whitespace-nowrap mx-auto text-[#313C44]"
              >{{ t("landingPage.vision-title") }}</span
            >
            <p class="mt-4">{{ t("landingPage.vision") }}</p>
          </div>
          <div class="p-4 md:p-14 lg:p-32 bg-[#313C44]">
            <span
              class="text-shadow-md font-extrabold text-4xl tracking-normal leading-normal whitespace-nowrap mx-auto mt-16 text-[#F7F6BB]"
              >{{ t("landingPage.mission-title") }}</span
            >
            <p class="text-white mt-4">{{ t("landingPage.mission") }}</p>
          </div>
        </div>
      </section>

      <!-- Catalog Section -->
      <section class="relative">
        <a
          href="https://drive.google.com/file/d/1yXQ8PPwHfbyeWdui-PTyobgi-HlJkzZ8/view"
          target="_blank"
        >
          <p
            class="bg-white px-16 py-5 rounded-lg text-center font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white hover:bg-[#313C44] hover:underline"
          >
            See Our Catalog
          </p>
        </a>
        <img :src="catalog" alt="" class="mx-auto mb-6 md:w-1/2 catalog" />
      </section>

      <!-- Our Clients Section -->
      <section
        id="our-clients"
        class="flex flex-col min-h-[70vh] items-center p-4"
      >
        <p
          v-html="t('landingPage.our-clients')"
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto mb-8"
        ></p>
        <div class="flex overflow-x-scroll py-16 px-4 space-x-8">
          <img
            v-for="i in 17"
            :key="i"
            :src="getClientSrc(i)"
            :alt="`Client Logo ${i}`"
            class="h-16 md:h-24"
          />
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import Footer from "../components/Footer.vue";
import { useI18n } from "vue-i18n";

import background from "@/assets/img/landing-page/background1.png";
import machining1 from "@/assets/img/landing-page/machining-1.png";
import machining2 from "@/assets/img/landing-page/machining-2.png";
import whyFrontec from "@/assets/img/landing-page/why-frontec.png";
import business from "@/assets/img/landing-page/business.png";
import vectorYes from "@/assets/img/landing-page/vector-yes.png";
import right from "@/assets/img/landing-page/right.png";
import catalog from "@/assets/img/landing-page/catalog.png";

import client1 from "@/assets/img/client/client1.png";
import client2 from "@/assets/img/client/client2.png";
import client3 from "@/assets/img/client/client3.png";
import client4 from "@/assets/img/client/client4.png";
import client5 from "@/assets/img/client/client5.png";
import client6 from "@/assets/img/client/client6.png";
import client7 from "@/assets/img/client/client7.png";
import client8 from "@/assets/img/client/client8.png";
import client9 from "@/assets/img/client/client9.png";
import client10 from "@/assets/img/client/client10.png";
import client11 from "@/assets/img/client/client11.png";
import client12 from "@/assets/img/client/client12.png";
import client13 from "@/assets/img/client/client13.png";
import client14 from "@/assets/img/client/client14.png";
import client15 from "@/assets/img/client/client15.png";
import client16 from "@/assets/img/client/client16.png";
import client17 from "@/assets/img/client/client17.png";

export default {
  components: {
    AppHeader,
    Footer,
  },

  name: "LandingPage",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  methods: {
    getClientSrc(index) {
      return this[`client${index}`];
    },
  },
  data() {
    return {
      background,
      machining1,
      machining2,
      whyFrontec,
      business,
      vectorYes,
      right,
      catalog,
      client1,
      client2,
      client3,
      client4,
      client5,
      client6,
      client7,
      client8,
      client9,
      client10,
      client11,
      client12,
      client13,
      client14,
      client15,
      client16,
      client17,
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

@media (max-width: 768px) {
  .text-shadow-md {
    font-size: 1.5rem;
  }
}
</style>
