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
            class="text-2xl md:text-4xl text-[#286F9B] font-bold text-shadow-md"
          >
            Grain Storage
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <!-- Product 1 -->
          <router-link to="/our-products/grain-storage/flat-bottom-silo">
            <div
              class="flex items-center justify-center shadow-lg flex w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 rounded-md overflow-hidden hover:scale-105"
            >
              <img
                :src="product1"
                alt=""
                class="absolute object-ccontain w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Flat Bottom Silo
              </p>
            </div>
          </router-link>
          <!-- Product 2 -->
          <router-link to="/our-products/grain-storage/conical-hopper-silo">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product2"
                alt=""
                class="absolute object-contain w-full mb-8"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Conical Hopper Silo
              </p>
            </div>
          </router-link>
          <!-- Product 3 -->
          <router-link to="/our-products/grain-storage/cooler-bin">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product3"
                alt=""
                class="absolute object-contain w-full mb-4"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Cooler Bin
              </p>
            </div>
          </router-link>
          <!-- Product 4 -->
          <router-link to="/our-products/grain-storage/steel-structure">
            <div
              class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="product4"
                alt="PVC Solid Woven Conveyor"
                class="absolute object-contain w-full mb-4 h-full"
              />
              <p
                class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow"
              >
                Steel Structure
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

import product1 from "@/assets/img/grain-storage/flat-bottom-silo.jpg";
import product2 from "@/assets/img/grain-storage/conical-bottom.jpg";
import product3 from "@/assets/img/grain-storage/coolerbin.png";
import product4 from "@/assets/img/grain-storage/steel-structure.jpg";

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
