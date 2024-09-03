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
          <router-link to="/our-products/material-handling">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Valve Box / Diverter
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <div
            class="relative flex w-[382px] h-[378px] flex-shrink-0 shadow-lg"
          >
            <img
              :src="currentImageIndex === 1 ? product1 : product2"
              alt="Product Image"
              class="object-contain w-full h-full"
            />

            <!-- Tombol Navigasi -->
            <button
              class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
              @click="previousImage"
            >
              &#10094;
            </button>
            <button
              class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
              @click="nextImage"
            >
              &#10095;
            </button>
          </div>
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:px-10 text-[16px] md:text-[18px]"
          >
            <p>
              a valve box typically refers to a specialized container or
              enclosure used to house valves that are part of a material
              handling system. These boxes are crucial for controlling the flow
              of materials through pipes or ducts in industrial settings such as
              manufacturing plants, warehouses, or distribution centers. The
              valve box helps protect the valves from environmental elements,
              ensures easy access for maintenance or adjustments, and helps
              maintain the integrity and efficiency of the material handling
              process.
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-32 px-6 py-2 rounded-full text-center font-bold uppercase mt-6"
          >
            Features
          </p>
          <!-- TARUH SINI JGN LUPA mt-6 -->
          <p class="mt-6">ini fitur</p>
          <p
            class="bg-black text-white w-48 px-6 py-2 rounded-full text-center font-bold uppercase mt-6"
          >
            Specifications
          </p>
          <!-- TARUH SINI JGN LUPA mt-6 -->
          <p class="mt-6">ini spec</p>
        </div>
      </section>

      <!-- Sidebar -->
      <aside class="w-full md:w-1/3 min-h-screen p-4 md:sticky md:top-0 h-full">
        <!-- Sidebar content goes here -->
        <div class="flex flex-col mt-10">
          <div
            class="mt-10 bg-white rounded-lg shadow-md w-64 mx-auto text-center border border-black border-1"
          >
            <p class="text-[20px] font-bold p-4 border-b border-black">
              Material Handling
            </p>
            <router-link to="/our-products/material-handling/belt-conveyor">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Belt Conveyor
              </p>
            </router-link>
            <router-link to="/our-products/material-handling/bucket-elevator">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Bucket Elevator
              </p>
            </router-link>
            <router-link to="/our-products/material-handling/screw-conveyor">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Screw Conveyor
              </p>
            </router-link>
            <router-link to="/our-products/material-handling/chain-conveyor">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Chain Conveyor
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Valve Box / Diverter
            </p>
            <router-link to="/our-products/material-handling/slidegate">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Slidegate
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
import background from "@/assets/img/material-handling/background.png";
import pvc from "@/assets/img/spare-parts/pvc.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";
import product1 from "@/assets/img/material-handling/equal.png";
import product2 from "@/assets/img/material-handling/unequel.png";
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
      pvc,
      sanwei,
      product1,
      product2,
      currentImageIndex: 1,
    };
  },
  methods: {
    nextImage() {
      this.currentImageIndex = this.currentImageIndex === 1 ? 2 : 1;
    },
    previousImage() {
      this.currentImageIndex = this.currentImageIndex === 1 ? 2 : 1;
    },
  },
};
</script>

<style scoped>
/* Additional styling */
</style>


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
