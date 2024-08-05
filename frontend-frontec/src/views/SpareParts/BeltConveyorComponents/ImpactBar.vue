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
          <router-link to="/belt-conveyor-components">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Impact Bar
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
                Features
              </p>
              <p
                class="bg-[#CDCDCD] w-36 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                High elastic
              </p>
            </div>
            <div class="flex flex-row mt-3">
              <p
                class="bg-[#CDCDCD] w-36 px-6 py-3 rounded-full text-center uppercase shadow-lg"
              >
                Normal
              </p>
              <p
                class="bg-[#CDCDCD] w-52 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                flame retardant
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                Impact bar is the combination of rubber, metal frame (steel or
                aluminium) and UHMWPE material using a special heat
                vulcanization process. Low friction impacts bars are used in the
                conveyor loading points or transfer points to replace
                traditional cushion rollers. They are designed to absorb high
                impact loading and help eliminate spillage and scattering of the
                products. This results in less wear and tear on your conveyor
                system, dramatically improving the efficiency of the conveyor
                system and reducing maintenance costs.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Specifications
          </p>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2" rowspan="2">
                  Fabric Type
                </th>
                <th class="border border-gray-300 p-2" rowspan="2">
                  Ply Thickness (mm)
                </th>
                <th class="border border-gray-300 p-2" colspan="5">
                  Nominal Tensile Strength at Overall Thickness (N/mm)
                </th>
                <th class="border border-gray-300 p-2" rowspan="2">
                  Elongation at Break (%)
                </th>
                <th class="border border-gray-300 p-2" rowspan="2">
                  Elongation at Rated Stress (%)
                </th>
                <th class="border border-gray-300 p-2" rowspan="2">
                  Belt Width (mm)
                </th>
                <th class="border border-gray-300 p-2" rowspan="2">
                  Belt Length (M)
                </th>
              </tr>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">2ply</th>
                <th class="border border-gray-300 p-2">3ply</th>
                <th class="border border-gray-300 p-2">4ply</th>
                <th class="border border-gray-300 p-2">5ply</th>
                <th class="border border-gray-300 p-2">6ply</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">EP80</td>
                <td class="border border-gray-300 p-2">0.60</td>
                <td class="border border-gray-300 p-2">160</td>
                <td class="border border-gray-300 p-2">240</td>
                <td class="border border-gray-300 p-2">320</td>
                <td class="border border-gray-300 p-2">400</td>
                <td class="border border-gray-300 p-2">480</td>
                <td class="border border-gray-300 p-2" rowspan="8">≥10</td>
                <td class="border border-gray-300 p-2" rowspan="8">≤4</td>
                <td class="border border-gray-300 p-2" rowspan="8">
                  300 - 1500
                </td>
                <td class="border border-gray-300 p-2" rowspan="8">≤300</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">EP100</td>
                <td class="border border-gray-300 p-2">0.70</td>
                <td class="border border-gray-300 p-2">200</td>
                <td class="border border-gray-300 p-2">300</td>
                <td class="border border-gray-300 p-2">400</td>
                <td class="border border-gray-300 p-2">500</td>
                <td class="border border-gray-300 p-2">600</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">EP125</td>
                <td class="border border-gray-300 p-2">0.70</td>
                <td class="border border-gray-300 p-2">250</td>
                <td class="border border-gray-300 p-2">375</td>
                <td class="border border-gray-300 p-2">500</td>
                <td class="border border-gray-300 p-2">625</td>
                <td class="border border-gray-300 p-2">750</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">EP150</td>
                <td class="border border-gray-300 p-2">0.80</td>
                <td class="border border-gray-300 p-2">300</td>
                <td class="border border-gray-300 p-2">450</td>
                <td class="border border-gray-300 p-2">600</td>
                <td class="border border-gray-300 p-2">750</td>
                <td class="border border-gray-300 p-2">900</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">EP200</td>
                <td class="border border-gray-300 p-2">1.0</td>
                <td class="border border-gray-300 p-2">400</td>
                <td class="border border-gray-300 p-2">600</td>
                <td class="border border-gray-300 p-2">800</td>
                <td class="border border-gray-300 p-2">1000</td>
                <td class="border border-gray-300 p-2">1200</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">EP250</td>
                <td class="border border-gray-300 p-2">1.20</td>
                <td class="border border-gray-300 p-2">500</td>
                <td class="border border-gray-300 p-2">750</td>
                <td class="border border-gray-300 p-2">1000</td>
                <td class="border border-gray-300 p-2">1250</td>
                <td class="border border-gray-300 p-2">1500</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">EP300</td>
                <td class="border border-gray-300 p-2">1.25</td>
                <td class="border border-gray-300 p-2">0</td>
                <td class="border border-gray-300 p-2">900</td>
                <td class="border border-gray-300 p-2">1200</td>
                <td class="border border-gray-300 p-2">1500</td>
                <td class="border border-gray-300 p-2">1800</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">EP350</td>
                <td class="border border-gray-300 p-2">1.30</td>
                <td class="border border-gray-300 p-2">0</td>
                <td class="border border-gray-300 p-2">0</td>
                <td class="border border-gray-300 p-2">1400</td>
                <td class="border border-gray-300 p-2">1750</td>
                <td class="border border-gray-300 p-2">2100</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">EP400</td>
                <td class="border border-gray-300 p-2">1.40</td>
                <td class="border border-gray-300 p-2">0</td>
                <td class="border border-gray-300 p-2">0</td>
                <td class="border border-gray-300 p-2">1600</td>
                <td class="border border-gray-300 p-2">2000</td>
                <td class="border border-gray-300 p-2">2400</td>
                <td class="border border-gray-300 p-2"></td>
                <td class="border border-gray-300 p-2"></td>
                <td class="border border-gray-300 p-2"></td>
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
              Belt Conveyor Components
            </p>
            <router-link to="/flat-surface-conveyor">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Flat Surface Conveyor
              </p>
            </router-link>
            <router-link to="/patterned-conveyor">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Patterned Conveyor
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Impact Bar
            </p>
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

import product from "@/assets/img/spare-parts/impact-bar.png";
import spec from "@/assets/img/spare-parts/impact-bar-spec.png";

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
