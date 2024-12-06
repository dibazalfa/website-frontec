<template>
  <div class="flex flex-col min-h-screen">
    <!-- AppHeader Section -->
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />

    <!-- Main Content -->
    <main class="flex-1 flex flex-col md:flex-row">
      <!-- Main Content Section -->
      <section class="flex-1 p-4 mt-10 md:mt-0 md:ml-24 overflow-y-auto">
        <!-- Main content goes here -->
        <div class="flex items-center mt-7">
          <router-link to="/our-products">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Feedmill
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 1 -->
          <router-link to="/our-products/feedmill/corn-dryer">
            <div
              class="flex items-center justify-center shadow-lg flex w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 rounded-md overflow-hidden hover:scale-105"
            >
              <img
                :src="product1"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Corn Dryer
              </p>
            </div>
          </router-link>
          <!-- Product 2 -->
          <router-link to="/our-products/feedmill/drum-grader-cleaner">
            <div
              class="flex ml-16 items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product2"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Drum Grader Cleaner
              </p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 3 -->
          <router-link to="/our-products/feedmill/hammermill">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product3"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Hammermill
              </p>
            </div>
          </router-link>
          <!-- Product 4 -->
          <router-link to="/our-products/feedmill/cooler">
            <div
              class="flex ml-16 items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product4"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Cooler
              </p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 5 -->
          <router-link to="/our-products/feedmill/pelletmill">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product5"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Pelletmill
              </p>
            </div>
          </router-link>
          <!-- Product 6 -->
          <router-link to="/our-products/feedmill/conditioner">
            <div
              class="flex ml-16 items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product6"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Conditioner
              </p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 7 -->
          <router-link to="/our-products/feedmill/crumbler">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product7"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Crumbler
              </p>
            </div>
          </router-link>
          <!-- Product 8 -->
          <router-link to="/our-products/feedmill/mixer">
            <div
              class="flex ml-16 items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product8"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Mixer
              </p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 9 -->
          <router-link to="/our-products/feedmill/dust-filler">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product9"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Dust Filler
              </p>
            </div>
          </router-link>
          <!-- Product 10 -->
          <router-link to="/our-products/feedmill/rotary-distributor">
            <div
              class="flex ml-16 items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product10"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Rotary Distributor
              </p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 11 -->
          <router-link to="/our-products/feedmill/magnet-separator">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product11"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Magnet Separator
              </p>
            </div>
          </router-link>
          <!-- Product 12 -->
          <router-link to="/our-products/feedmill/feed-cleaner">
            <div
              class="flex ml-16 items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product12"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Feed Cleaner
              </p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 13 -->
          <router-link to="/our-products/feedmill/shifter">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product13"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Shifter
              </p>
            </div>
          </router-link>
          <!-- Product 14 -->
          <router-link to="/our-products/feedmill/bagging-scale">
            <div
              class="flex ml-16 items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product14"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Bagging Scale
              </p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 15 -->
          <router-link to="/our-products/feedmill/sewing-machine">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product15"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Sewing Machine
              </p>
            </div>
          </router-link>
          <!-- Product 16 -->
          <router-link to="/our-products/feedmill/airlock">
            <div
              class="flex ml-16 items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product16"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Air Lock
              </p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- Product 17 -->
          <router-link to="/our-products/feedmill/cyclone">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product17"
                alt=""
                class="absolute object-cover w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Cyclone
              </p>
            </div>
          </router-link>
        </div>
      </section>

      <!-- Sidebar -->
      <aside class="w-full md:w-1/3 min-h-screen p-4 md:sticky md:top-0 h-full">
        <!-- Sidebar content goes here -->
        <div class="flex flex-col mt-10">
          <p class="text-[20px] mx-auto mt-10">In Partnership with:</p>
          <img :src="sanwei" alt="" class="w-64 mx-auto mt-2" />
        </div>
      </aside>
    </main>

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import background from "@/assets/img/material-handling/background.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";

import product1 from "@/assets/img/material-handling/Corn Dryer.png";
import product2 from "@/assets/img/feedmill/drum-grader-cleaner.jpg";
import product3 from "@/assets/img/feedmill/Hammermill.png";
import product4 from "@/assets/img/feedmill/Cooler.png";
import product5 from "@/assets/img/feedmill/pelletmill.png";
import product6 from "@/assets/img/feedmill/conditioner.png";
import product7 from "@/assets/img/feedmill/crumbler.png";
import product8 from "@/assets/img/feedmill/Mixer.png";
import product9 from "@/assets/img/feedmill/dust-filler.png";
import product10 from "@/assets/img/feedmill/rotary-distributor.png";
import product11 from "@/assets/img/feedmill/magnet-separator.png";
import product12 from "@/assets/img/feedmill/feed-cleaner.png";
import product13 from "@/assets/img/feedmill/shifter.png";
import product14 from "@/assets/img/feedmill/bagging-scale.png";
import product15 from "@/assets/img/feedmill/sewing-machine.jpg";
import product16 from "@/assets/img/feedmill/air-lock.png";
import product17 from "@/assets/img/feedmill/cyclone.png";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    AppHeader,
    Footer,
    FontAwesomeIcon,
  },
  data() {
    return {
      background,
      sanwei,
      product1,
      product2,
      product3,
      product4,
      product5,
      product6,
      product7,
      product8,
      product9,
      product10,
      product11,
      product12,
      product13,
      product14,
      product15,
      product16,
      product17,
    };
  },
};
</script>

<style scoped>
.header {
  transition: background-color 0.3s, box-shadow 0.3s;
}

.text-shadow-md {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.h-full {
  height: 100%;
}

.top-0 {
  top: 0;
}

.p-4 {
  padding: 1rem;
}

/* Styling for the main content and sidebar */
.main {
  flex: 1;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
}

section {
  overflow-y: auto; /* Enables scrolling on the main content */
}

.sidebar {
  position: relative;
  top: 0;
  overflow-y: auto;
}

.sticky-element {
  position: sticky;
  top: 10px;
  z-index: 10;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative; /* Disable sticky on mobile if needed */
  }
}
</style>
