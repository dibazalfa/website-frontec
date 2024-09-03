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
            Belt Conveyor
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <!-- <img :src="pvc" alt="" class="object-contain" /> -->
          <div class="flex w-[382px] h-[378px] flex-shrink-0 shadow-lg">
            <p class="m-auto font-bold">
              <img :src="product" alt="" class="object-contain" />
            </p>
          </div>
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:px-10 text-[16px] md:text-[18px]"
          >
            <p>
              Belt conveyor is a conveyor machine that uses a belt as a medium
              to move goods. Each belt conveyor usually has a motor that is
              intended to rotate the drive roller (drum pulley) that is tightly
              attached to the belt so that the belt will move following the
              rotation of the drive roller (drum pulley). Belt conveyors have 2
              types of rollers (drum pulleys), one is the drive roller (drive
              drum pulley) attached to the belt conveyor motor, then the second
              is the drive roller (tail drum pulley) attached to the other end
              of the belt conveyor (which does not have a motor).
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
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Belt Conveyor
            </p>
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
            <router-link to="/our-products/material-handling/valve-box">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Valve Box / Diverter
              </p>
            </router-link>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import product from "@/assets/img/material-handling/belt-conveyor.jpg";

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
      product
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
