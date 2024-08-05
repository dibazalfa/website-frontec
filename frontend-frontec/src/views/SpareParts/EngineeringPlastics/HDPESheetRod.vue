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
          <router-link to="/engineering-plastics">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            HDPE Sheet/Rod
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]"
          >
            <div class="flex flex-row">
              <p
                class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
              >
                features
              </p>
              <p
                class="bg-[#CDCDCD] w-36 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                HDPE/NYLON
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                High-density polyethylene (HDPE) offers excellent sliding
                properties along with high impact strength and good wear
                resistance due to its low coefficient of friction. It is
                lightweight and strong with low moisture absorption. It is also
                FDA approved and is easy to fabricate and weld. HDPE is used in
                a wide range of applications such as chutes, silos, tanks,
                hoppers, etc.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-3 shadow-lg rounded-full text-center font-bold uppercase mt-6"
          >
            Specifications
          </p>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Name</th>
                <th class="border border-gray-300 p-2">Length (mm)</th>
                <th class="border border-gray-300 p-2">Width (mm)</th>
                <th class="border border-gray-300 p-2">Thickness (mm)</th>
                <th class="border border-gray-300 p-2">Color</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">Sheet</td>
                <td class="border border-gray-300 p-2">2000-3000</td>
                <td class="border border-gray-300 p-2">1000-1500</td>
                <td class="border border-gray-300 p-2">1-100</td>
                <td class="border border-gray-300 p-2">White</td>
              </tr>
            </tbody>
          </table>
          <p
            class="bg-black text-white w-48 px-6 py-3 shadow-lg rounded-full text-center font-bold uppercase mt-6"
          >
            performance
          </p>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Item</th>
                <th class="border border-gray-300 p-2">Unit</th>
                <th class="border border-gray-300 p-2">Value</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">Density</td>
                <td class="border border-gray-300 p-2">g/cm³</td>
                <td class="border border-gray-300 p-2">0.95</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Water Absorption</td>
                <td class="border border-gray-300 p-2">%</td>
                <td class="border border-gray-300 p-2">&lt; 0.01</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Working Temperature</td>
                <td class="border border-gray-300 p-2">°C</td>
                <td class="border border-gray-300 p-2">-48~82</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Tensile Strength</td>
                <td class="border border-gray-300 p-2">MPa</td>
                <td class="border border-gray-300 p-2">29</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Elongation at Break</td>
                <td class="border border-gray-300 p-2">%</td>
                <td class="border border-gray-300 p-2">300</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Hardness</td>
                <td class="border border-gray-300 p-2">Shore D</td>
                <td class="border border-gray-300 p-2">60-70</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  Linear Expansion Coefficient
                </td>
                <td class="border border-gray-300 p-2">10³ cm/cm°C</td>
                <td class="border border-gray-300 p-2">15-25</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  Thermal Deformation Temperature
                </td>
                <td class="border border-gray-300 p-2">°C</td>
                <td class="border border-gray-300 p-2">85</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Dielectric Strength</td>
                <td class="border border-gray-300 p-2">kv/mm</td>
                <td class="border border-gray-300 p-2">&gt; 17.5</td>
              </tr>
            </tbody>
          </table>
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
              Engineering Plastics
            </p>
            <router-link to="/uhmwpe-sheet-rod">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                UHMWPE Sheet/Rod
              </p>
            </router-link>
            <router-link to="/pu-sheet-rod">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                PU Sheet/Rod
              </p>
            </router-link>
            <router-link to="/ptfe-sheet-rod">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                PTFE Sheet/Rod
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              HDPE Sheet/Rod
            </p>
            <router-link to="/coated-bolts">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Coated Bolts
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
import background from "@/assets/img/spare-parts/bgSpareParts.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";

import product from "@/assets/img/spare-parts/hdpe-sheet.png";
import spec from "@/assets/img/spare-parts/hdpe-sheet-spec.png";
import perform from "@/assets/img/spare-parts/hdpe-sheet-perform.png";

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
      product,
      spec,
      perform,
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
