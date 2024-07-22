<template>
  <div>
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />
    <main>
      <section class="bg-white flex flex-col p-4 md:p-8 lg:p-12">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[30px] sm:text-[35px] md:text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto"
        >
          <span class="text-[#154214]">Our </span>
          <span class="text-[#286f9b]">Companies</span>
        </p>
      </section>
      <section class="flex">
        <iframe
          class="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oB6cCU2O7P0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </section>
      <section>
        <div class="flex flex-col md:flex-row mx-auto mt-16 text-justify mb-14 w-3/4">
          <img :src="FAE" class="w-1/3 md:w-1/4 lg:ml-40 lg:mr-5 object-contain" />
          <p class="md:w-3/4 p-4 lg:mr-40 lg:ml-5">
            Started its business in manufacturing material handling products and
            significantly it has been growing to manufacture feed mill
            machineries in line with the development of feed and grain industry
            in Indonesia. <br /><br />
            Frontec also produces continuous grain dryer, especially corn dryer,
            which capacity range from 5 tph to 40 tph. Frontec keeps on
            developing its R&D department in order to meet and even surpass the
            global standard. Not to mention that Frontec offers engineering
            design, construction and installation services. With this wide range
            product and services, therefore Frontec is considered as leading
            manufacture and construction company in feed and grain industry in
            Indonesia.
          </p>
        </div>
        <hr class="border-t-2 border-gray-300 my-8 mx-auto w-11/12" />
        <div class="flex flex-col md:flex-row mx-auto mt-16 text-justify mb-14 w-3/4">
          <p class="md:w-3/4 p-4 lg:ml-40 lg:mr-5">
            Frontec Global Niagatama a sister company of Frontec Agritama
            Engineering founded in 2013 in order to fulfill the needs of
            material handling spare parts not only for Frontec group but for the
            whole industry in Indonesia. Frontec is officially appointed by
            Zhenjiang Sanwei Conveying Equipment Co., Ltd as an exclusive
            distributor for its products in Indonesia.
          </p>
          <img :src="FGN" class="w-1/3 md:w-1/4 lg:mr-40 lg:ml-5 object-contain" />
        </div>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import Footer from "../components/Footer.vue";
import { useI18n } from "vue-i18n";

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
</style>
