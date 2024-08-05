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
        <div class="flex items-center mt-7">
          <router-link to="/spare-parts">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <!-- Main content goes here -->
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Anti-Wear Products Engineering Plastics
          </p>
        </div>
        <!-- Main content goes here -->
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/uhmwpe-sheet-rod">
            <img
              :src="product1"
              alt=""
              class="object-contain hover:scale-105"
            />
          </router-link>
          <router-link to="/pu-sheet-rod">
            <img
              :src="product2"
              alt=""
              class="object-contain md:ml-16 hover:scale-105"
            />
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/ptfe-sheet-rod">
            <img
              :src="product3"
              alt=""
              class="object-contain hover:scale-105"
            />
          </router-link>
          <router-link to="/hdpe-sheet-rod">
            <img
              :src="product4"
              alt=""
              class="object-contain md:ml-16 hover:scale-105"
            />
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/coated-bolts">
            <img
              :src="product5"
              alt=""
              class="object-contain hover:scale-105"
            />
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
import background from "@/assets/img/spare-parts/bgSpareParts.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";

import product1 from "@/assets/img/spare-parts/uhmwpe-sheet-text.png";
import product2 from "@/assets/img/spare-parts/pu-sheet-text.png";
import product3 from "@/assets/img/spare-parts/ptfe-sheet-text.png";
import product4 from "@/assets/img/spare-parts/hdpe-sheet-text.png";
import product5 from "@/assets/img/spare-parts/coated-bolts-text.png";

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
