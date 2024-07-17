<template>
  <div>
    <AppHeader
      class="relative min-h-screen bg-cover bg-center bg-[url(../assets/img/landing-page.jpg)]"
      :isScrolled="isScrolled"
      :currentLanguage="currentLanguage"
      :links="navLinks"
      @update:currentLanguage="setLanguage"
    />
    <!-- Content Sections -->
    <main>
      <section id="about-us" class="bg-white flex flex-col min-h-screen p-4">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto mt-16"
        >
          <span class="text-[#154214]">About </span>
          <span class="text-[#286f9b]">Frontec</span>
        </p>
    
        <img src="../assets/img/machining-1.png" alt="" class="mx-auto mt-16" />
        <div class="flex flex-col md:flex-row mx-auto mt-16 text-justify mb-14">
          <p class="md:w-1/2 p-4 lg:ml-40 lg:mr-5" v-html="t('landingPage.about1')"></p>
          <div class="border-l-2 border-black hidden md:block"></div>
          <p class="md:w-1/2 p-4 lg:mr-40 lg:ml-5" v-html="t('landingPage.about2')"></p>
        </div>
      </section>
      <section
        id="why-frontec"
        class="bg-[#313C44] flex flex-col md:flex-row min-h-screen p-4"
      >
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] tracking-[0] leading-normal whitespace-nowrap my-auto mx-16"
        >
          <span class="text-white">Why </span>
          <span class="text-[#F7F6BB]">Frontec?</span>
        </p>
        <div class="text-white my-auto mx-auto flex flex-col space-y-8">
          <div class="flex flex-row">
            <img class="my-auto mr-5" src="../assets/vector-yes.png" alt="" />
            <div>
              <p class="font-bold text-2xl">
                Providing quality engineering solutions
              </p>
              <p class="text-md">we go beyond our customers' expectations</p>
            </div>
          </div>
          <div class="flex flex-row">
            <img class="my-auto mr-5" src="../assets/vector-yes.png" alt="" />
            <div>
              <p class="font-bold text-2xl">Diverse products and services</p>
              <p class="text-md">
                from consultancy to equipment manufacturing and project
                installation.
              </p>
            </div>
          </div>
          <div class="flex flex-row">
            <img class="my-auto mr-5" src="../assets/vector-yes.png" alt="" />
            <div>
              <p class="font-bold text-2xl">Professional human capitals</p>
              <p class="text-md">setting new benchmarks in performance.</p>
            </div>
          </div>
        </div>
        <img class="m-auto" src="../assets/img/why-frontec.png" alt="" />
      </section>
      <section
        id="our-business"
        class="flex flex-col md:flex-row min-h-[75vh] py-4 mx-28 text-justify"
      >
        <img class="my-auto ml-20" src="../assets/img/business.png" alt="" />
        <div class="my-auto ml-16 mr-20">
          <p>
            We produce all kinds of machineries, as well as integrated feed mill
            plants to mix all kinds of feed especially for:
          </p>
          <ul class="list-disc list-inside font-bold">
            <li>Poultry</li>
            <li>Aqua Feed Mill</li>
            <li>Dairy Products</li>
          </ul>
          <br />
          <p>
            As a leading manufacturer in grain handling, our company excels in
            its field, particularly in feed mill technology.
            <span class="font-bold">We offer comprehensive services</span> that
            cover a wide range of needs:
          </p>
          <ul class="list-disc list-inside font-bold">
            <li>Feasibility Studies</li>
            <li>Design</li>
            <li>Manufacturing</li>
            <li>Erection</li>
            <li>Installation of Automation & Control Systems</li>
            <li>Commissioning</li>
          </ul>
          <p>
            Our expertise ensures that every project is executed with precision,
            from initial planning to final implementation.
          </p>
        </div>
      </section>

      <section
        id="vision-mission"
        class="flex flex-col md:flex-row justify-center items-center min-h-[75vh]"
      >
        <div
          class="flex flex-col md:flex-row border-solid border-2 border-slate-300 rounded-lg max-w-6xl mx-auto"
        >
          <div
            class="p-14 md:p-32 border-b-2 md:border-b-0 md:border-r-2 border-slate-300"
          >
            <span
              class="text-shadow-md font-extrabold text-[40px] tracking-normal leading-normal whitespace-nowrap mx-auto text-[#313C44]"
            >
              VISION
            </span>
            <p class="mt-4">
              Our vision is to excel in engineering solutions, offering
              innovation, reliability, and sustainability to ensure the success
              of our customers and partners.
            </p>
          </div>
          <div class="p-14 md:p-32 bg-[#313C44]">
            <span
              class="text-shadow-md font-extrabold text-4xl tracking-normal leading-normal whitespace-nowrap mx-auto mt-16 text-[#F7F6BB]"
            >
              MISSION
            </span>
            <p class="text-white mt-4">
              Our mission is to lead the engineering industry by delivering
              superior service, innovative ideas, and steadfast commitment to
              our customers and business partners.
            </p>
          </div>
        </div>
      </section>

      <section id="our-clients" class="flex flex-col min-h-[70vh] items-center">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto mb-8"
        >
          <span class="text-[#154214]">Our </span>
          <span class="text-[#286f9b]">Clients</span>
        </p>
        <div class="grid grid-cols-3 gap-8 justify-center py-16 px-4">
          <div class="col-span-5 flex justify-center space-x-8">
            <img
              src="../assets/img/client-1.png"
              alt="Client Logo 1"
              class="h-32"
            />
            <img
              src="../assets/img/client-2.png"
              alt="Client Logo 2"
              class="h-24"
            />
            <img
              src="../assets/img/client-3.png"
              alt="Client Logo 3"
              class="h-24"
            />
            <img
              src="../assets/img/client-7.png"
              alt="Client Logo 7"
              class="h-24"
            />
            <img
              src="../assets/img/client-8.png"
              alt="Client Logo 8"
              class="h-24"
            />
          </div>
          <div class="col-span-5 flex justify-center">
            <img
              src="../assets/img/client-4.png"
              alt="Client Logo 4"
              class="h-24 p-5"
            />
            <img
              src="../assets/img/client-5.png"
              alt="Client Logo 5"
              class="h-24 p-5"
            />
            <img
              src="../assets/img/client-6.png"
              alt="Client Logo 6"
              class="h-24 p-5"
            />
          </div>
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
