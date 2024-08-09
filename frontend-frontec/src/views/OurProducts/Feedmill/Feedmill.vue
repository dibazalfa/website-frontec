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
          <router-link to="/our-products/feedmill/corn-dryer">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Corn Dryer</p>
            </div>
          </router-link>
          <router-link to="/our-products/feedmill/drum-grader-cleaner">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px] md:ml-16 md:mt-0 mt-12"
            >
              <p class="m-auto">Drum Grader Cleaner</p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/our-products/feedmill/hammermill">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Hammermill</p>
            </div>
          </router-link>
          <router-link to="/our-products/feedmill/cooler">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px] md:ml-16 md:mt-0 mt-12"
            >
              <p class="m-auto">Cooler</p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/our-products/feedmill/pelletmill">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Pelletmill</p>
            </div>
          </router-link>
          <router-link to="/our-products/feedmill/conditioner">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px] md:ml-16 md:mt-0 mt-12"
            >
              <p class="m-auto">Conditioner</p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/our-products/feedmill/crumbler">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Crumbler</p>
            </div>
          </router-link>
          <router-link to="/our-products/feedmill/mixer">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px] md:ml-16 md:mt-0 mt-12"
            >
              <p class="m-auto">Mixer</p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/our-products/feedmill/dust-filler">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Dust Filler</p>
            </div>
          </router-link>
          <router-link to="/our-products/feedmill/rotary-distributor">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px] md:ml-16 md:mt-0 mt-12"
            >
              <p class="m-auto">Rotary Distributor</p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/our-products/feedmill/magnet-separator">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Magnet Separator</p>
            </div>
          </router-link>
          <router-link to="/our-products/feedmill/feed-cleaner">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px] md:ml-16 md:mt-0 mt-12"
            >
              <p class="m-auto">Feed Cleaner</p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/our-products/feedmill/shifter">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Shifter</p>
            </div>
          </router-link>
          <router-link to="/our-products/feedmill/bagging-scale">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px] md:ml-16 md:mt-0 mt-12"
            >
              <p class="m-auto">Bagging Scale</p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/our-products/feedmill/sewing-machine">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Sewing Machine</p>
            </div>
          </router-link>
          <router-link to="/our-products/feedmill/airlock">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px] md:ml-16 md:mt-0 mt-12"
            >
              <p class="m-auto">Air Lock</p>
            </div>
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/our-products/feedmill/cyclone">
            <div
              class="hover:scale-105 flex border border-black w-[382px] h-[378px]"
            >
              <p class="m-auto">Cyclone</p>
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
  
  import product1 from "@/assets/img/spare-parts/roller-chain-text.png";
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
  