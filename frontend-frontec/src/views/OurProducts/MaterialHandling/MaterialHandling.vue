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
      <p class="text-2xl md:text-4xl text-[#286F9B] font-bold text-shadow-md">
        Material Handling
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      <!-- Product 1 -->
      <router-link to="/our-products/material-handling/belt-conveyor">
        <div class="flex items-center justify-center shadow-lg flex w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 rounded-md overflow-hidden hover:scale-105">
          <img :src="product1" alt="PVC Solid Woven Conveyor" class="absolute inset-0 object-cover w-full h-full"/>
          <p class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow">
            BELT CONVEYOR
          </p>
        </div>
      </router-link>
      <!-- Product 2 -->
      <router-link to="/our-products/material-handling/bucket-elevator">
        <div class="flex items-center justify-center w-[382px] h-[378px] flex-shrink-0 shadow-lg transform transition-transform duration-300 hover:scale-105">
          <p class="mt-72 relative text-white font-bold bg-[#313C44] px-4 py-2 rounded-full shadow">
            BUCKET ELEVATOR
          </p>
        </div>
      </router-link>
      <!-- Product 3 -->
      <router-link to="/our-products/material-handling/screw-conveyor">
        <div class="relative flex items-center justify-center border border-black w-full h-[378px] transform transition-transform duration-300 hover:scale-105">
          <p class="relative text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded-full shadow">
            Screw Conveyor
          </p>
        </div>
      </router-link>
      <!-- Product 4 -->
      <router-link to="/our-products/material-handling/chain-conveyor">
        <div class="relative flex items-center justify-center border border-black w-full h-[378px] transform transition-transform duration-300 hover:scale-105">
          <p class="relative text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded-full shadow">
            Chain Conveyor
          </p>
        </div>
      </router-link>
      <!-- Product 5 -->
      <router-link to="/our-products/material-handling/valve-box">
        <div class="relative flex items-center justify-center border border-black w-full h-[378px] transform transition-transform duration-300 hover:scale-105">
          <p class="relative text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded-full shadow">
            Valve Box / Diverter
          </p>
        </div>
      </router-link>
      <!-- Product 6 -->
      <router-link to="/our-products/material-handling/slidegate">
        <div class="relative flex items-center justify-center border border-black w-full h-[378px] transform transition-transform duration-300 hover:scale-105">
          <p class="relative text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded-full shadow">
            Slidegate
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

import product1 from "@/assets/img/material-handling/belt-conveyor.jpg";
import product2 from "@/assets/img/spare-parts/drop-forged-text.png";
import product3 from "@/assets/img/spare-parts/drag-sprocket-text.png";
import product4 from "@/assets/img/spare-parts/plastic-br-text.png";
import product5 from "@/assets/img/spare-parts/nylon-gear-text.png";
import product6 from "@/assets/img/spare-parts/plastic-bf-text.png";

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
