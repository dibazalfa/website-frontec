<template>
  <div>
    <header
      class="relative h-screen bg-cover bg-center bg-[url(../assets/img/landing-page.jpg)]"
    >
      <div
        :class="[
          {
            'fixed w-full bg-white shadow-lg': isScrolled,
            'bg-transparent': !isScrolled,
          },
          'transition-all duration-300 ease-in-out z-50 top-0 left-0 right-0',
        ]"
      >
        <div
          class="container mx-auto px-4 py-3 flex justify-between items-center"
        >
          <!-- Language Switcher -->
          <div class="flex items-center ml-16">
            <div
              @click="setLanguage('id')"
              :class="[
                {
                  'bg-gray-600 shadow-lg ring-black ring-1':
                    currentLanguage === 'id',
                  'bg-gray-200': currentLanguage !== 'id',
                },
                'p-2 rounded-l cursor-pointer transition-colors duration-300',
              ]"
            >
              <img
                src="../assets/img/image-15.png"
                alt="ID"
                class="w-6 h-6 rounded-full"
              />
            </div>
            <div
              @click="setLanguage('en')"
              :class="[
                {
                  'bg-gray-600 shadow-lg ring-black ring-1':
                    currentLanguage === 'en',
                  'bg-gray-200': currentLanguage !== 'en',
                },
                'p-2 rounded-r cursor-pointer transition-colors duration-300',
              ]"
            >
              <img
                src="../assets/img/image-16.png"
                alt="EN"
                class="w-6 h-6 rounded-full"
              />
            </div>
          </div>
          <!-- Navbar -->
          <nav>
            <ul class="flex space-x-6">
              <li>
                <router-link
                  to="/"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >About Us</router-link
                >
              </li>
              <li class="relative group">
                <router-link
                  to="/our-products"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >Our Products</router-link
                >
                <ul
                  class="absolute left-0 mt-2 w-48 bg-white shadow-lg hidden group-hover:block"
                >
                  <li>
                    <a
                      href="#product1"
                      class="block px-4 py-2 hover:bg-gray-200"
                      >Product 1</a
                    >
                  </li>
                  <li>
                    <a
                      href="#product2"
                      class="block px-4 py-2 hover:bg-gray-200"
                      >Product 2</a
                    >
                  </li>
                  <li>
                    <a
                      href="#product3"
                      class="block px-4 py-2 hover:bg-gray-200"
                      >Product 3</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#our-business"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >Our Business</a
                >
              </li>
              <li>
                <a
                  href="#vision-mission"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >Contact Us</a
                >
              </li>
              <li>
                <a
                  href="#our-clients"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >our-clients</a
                >
              </li>
            </ul>
          </nav>
          <!-- Company Logo -->
          <div class="flex flex-col items-center space-y-4">
            <img
              src="../assets/img/main-logo-1.png"
              alt="Logo 1"
              class="w-auto h-8"
            />
            <img
              src="../assets/img/main-logo-global-1.png"
              alt="Logo 2"
              class="w-auto h-8"
            />
          </div>
        </div>
      </div>
    </header>

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
          <p class="md:w-1/2 p-4 lg:ml-40 lg:mr-5">
            <span class="text-[32px] font-semibold">Founded in 2008,</span>
            Frontec Group began its business with Frontec Agritama Engineering
            <b>(FAE)</b>, manufacturing material handling products such as
            bucket elevators, chain conveyors, screw conveyors, and grader
            cleaners. Frontec has continued to develop its engineering
            technology and expand its product range. The company also produces
            corn dryers with various burner options, depending on the most
            efficient resources near the plant. Additionally, Frontec
            manufactures several feed mill machines, including hammer mills,
            mixers, and dust collectors.
          </p>
          <div class="border-l-2 border-black hidden md:block"></div>
          <p class="md:w-1/2 p-4 lg:mr-40 lg:ml-5">
            To meet the needs of the feed and grain industry, Frontec Group
            established a new company, Frontec Global Niagatama <b>(FGN)</b>,
            which provides material handling spare parts. Frontec has been
            appointed by
            <b>Zhenjiang Sanwei Conveying Equipment Co., Ltd.</b> as the
            exclusive distributor of its conveying spare parts in Indonesia. The
            company also supplies complete storage solutions, having been
            appointed by world-class silo manufacturer Altuntas Group from
            Turkey as the exclusive distributor of grain silos for the
            Indonesian market.
          </p>
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

      <section id="our-clients" class="flex flex-col min-h-[75vh] items-center">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto mb-8"
        >
          <span class="text-[#154214]">Our </span>
          <span class="text-[#286f9b]">Client</span>
        </p>
        <div class="w-full border-t border-b border-gray-300">
          <div class="grid grid-cols-3 gap-8 justify-center py-20 px-4">
            <div class="col-span-5 flex justify-center space-x-8">
              <img
                src="../assets/img/client-1.png"
                alt="Client Logo 1"
                class="h-24"
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
            <div class="col-span-3 flex justify-center">
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
        </div>
      </section>

      <section id="footer" class="bg-[#313C44] text-white py-8">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex space-x-4 ml-20">
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <img
                src="../assets/img/ic-baseline-facebook.svg"
                alt="Facebook"
                class="h-8"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <img src="../assets/img/mage-x.svg" alt="Twitter" class="h-8" />
            </a>
          </div>
          <p>&copy; 2021 Frontec Group. All rights reserved.</p>
          <div>
            <a href="contact-us.html" class="text-white font-bold mr-20"
              >Contact Us</a
            >
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const isScrolled = ref(false);
    const currentLanguage = ref("en");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        isScrolled.value = true;
      } else {
        isScrolled.value = false;
      }
    };

    const setLanguage = (language) => {
      currentLanguage.value = language;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      isScrolled,
      currentLanguage,
      setLanguage,
    };
  },
  data() {
    return {
      // hoverVision: false,
      // hoverMission: false,
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
