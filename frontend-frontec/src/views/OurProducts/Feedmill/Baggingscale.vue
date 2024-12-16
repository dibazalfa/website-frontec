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
            <router-link to="/our-products/feedmill/">
              <font-awesome-icon
                icon="circle-arrow-left"
                class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
              />
            </router-link>
            <p
              class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
            >
              Bagging Scale
            </p>
          </div>
          <div class="flex flex-col md:flex-row mt-12">
            <!-- <img :src="pvc" alt="" class="object-contain" /> -->
            <div class="flex w-[382px] h-[378px] flex-shrink-0 shadow-lg">
              <p class="m-auto font-bold">
                  <img :src="product" alt="" class="object-contain w-[480px] h-[400px]" />
              </p>
            </div>
            <div
              class="flex flex-col text-justify mt-6 md:mt-0 md:px-10 text-[16px] md:text-[18px]"
            >
              <p>
                A bagging scale is used for the accurate weighing, packaging, and filling of feed products into bags or containers. The bagging scale ensures that the correct quantity of feed is packed into each bag, which is crucial for both product consistency and compliance with customer or regulatory standards.
              </p>
            </div>
          </div>
          <!-- <div class="flex flex-col">
              <p
                class="bg-black text-white w-32 px-6 py-2 rounded-full text-center font-bold uppercase mt-6"
              >
                Features
              </p> -->
          <!-- TARUH SINI JGN LUPA mt-6 -->
          <!-- <p class="mt-6">ini fitur</p>
              <p
                class="bg-black text-white w-48 px-6 py-2 rounded-full text-center font-bold uppercase mt-6"
              >
                Specifications
              </p>
              TARUH SINI JGN LUPA mt-6
              <p class="mt-6">ini spec</p>
            </div> -->
        </section>
  
        <!-- Sidebar -->
        <aside class="w-full md:w-1/3 min-h-screen p-4 md:sticky md:top-0 h-full">
          <!-- Sidebar content goes here -->
          <div class="flex flex-col mt-10">
            <div
              class="mt-10 bg-white rounded-lg shadow-md w-64 mx-auto text-center border border-black border-1"
            >
              <p class="text-[20px] font-bold p-4 border-b border-black">
                Feedmill
              </p>
  
              <router-link to="/our-products/feedmill/corn-dryer">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Corn Dryer
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/drum-grader-cleaner">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Drum Grader Cleaner
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/hammermill">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Hammermill
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/cooler">
                <p
                  class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Cooler
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/pelletmill">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Pelletmill
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/conditioner">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Conditioner
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/crumbler">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Crumbler
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/mixer">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Mixer
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/dust-filler">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Dust Filler
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/rotary-distributor">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Rotary Distributor
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/magnet-separator">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Magnet Separator
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/feed-cleaner">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Feed Cleaner
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/shifter">
                <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Shifter
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/bagging-scale">
                <p
                class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
                >
                  Bagging Scale
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/sewing-machine">
                <p
                  class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Sewing Machine
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/airlock">
                <p
                  class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Airlock
                </p>
              </router-link>
              <router-link to="/our-products/feedmill/cyclone">
                <p
                  class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
                >
                  Cyclone
                </p>
              </router-link>
            </div>
  
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
  import background from "@/assets/img/our-products/feedmill.png";
  import pvc from "@/assets/img/spare-parts/pvc.png";
  import sanwei from "@/assets/img/spare-parts/sanwei.png";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import product from "@/assets/img/feedmill/bagging-scale.png";
  
  export default {
    components: {
      AppHeader,
      Footer,
      FontAwesomeIcon,
    },
    data() {
      return {
        background,
        pvc,
        sanwei,
        product,
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
  
  .header-color {
    background-color: #286f9b;
    color: white; /* Optional: to make the text color white */
  }
  
  .center-text {
    text-align: center;
  }
  </style>
  