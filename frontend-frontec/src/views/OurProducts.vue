<template>
  <div>
    <header
      class="relative min-h-[346px] bg-cover bg-center bg-[url(../assets/img/our-products.png)]"
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
          <div class="flex flex-col items-center space-y-4 mr-6">
            <img
              src="../assets/img/FAE kecil.png"
              alt="Logo 1"
              class="w-auto h-8"
            />
            <img
              src="../assets/img/FGN kecil.png"
              alt="Logo 2"
              class="w-auto h-8"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Content Sections -->
    <main>
      <section id="our-products" class="bg-white flex flex-col p-4 md:p-8 lg:p-12">
  <p
    class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[30px] sm:text-[35px] md:text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto mt-8 md:mt-12 lg:mt-16"
  >
    <span class="text-[#154214]">Our </span>
    <span class="text-[#286f9b]">Products</span>
  </p>
      </section>
      <section class="flex flex-col m-auto">
        <img class="my-auto mx-48 pb-4" src="../assets/img/material-handling.png" alt="">
        <img class="my-auto mx-48 pb-4" src="../assets/img/feedmill.png" alt="">
        <img class="my-auto mx-48 pb-4" src="../assets/img/grain-storage.png" alt="">
        <img class="my-auto mx-48 pb-4" src="../assets/img/spare-parts.png" alt="">
      </section>
      <section id="footer" class="bg-[#313C44] text-white py-8 mt-16">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex space-x-4 ml-20">
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <img src="../assets/img/ic-baseline-facebook.svg" alt="Facebook" class="h-8" />
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
