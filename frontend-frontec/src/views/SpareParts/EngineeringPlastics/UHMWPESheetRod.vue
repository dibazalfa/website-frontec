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
            UHMWPE Sheet/Rod
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
                class="bg-[#CDCDCD] w-24 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                PVC
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                Ultra High Molecular Weight Polyethylene (UHMWPE) is
                thermoplastic engineering material, and its molecular weight can
                reach 4.5 to 9 million. It combines many characteristics such as
                abrasion resistance, impact resistance/absorption, chemical
                corrosion resistance, low-temperature resistance and
                self-lubrication etc.
              </li>
              <li>
                Prime can CNC machine according to customer
                drawing/specification.
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
                <th class="border border-gray-300 p-2">Name / Size</th>
                <th class="border border-gray-300 p-2">Length (mm)</th>
                <th class="border border-gray-300 p-2">Width (mm)</th>
                <th class="border border-gray-300 p-2">Thickness (mm)</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">Sheet</td>
                <td class="border border-gray-300 p-2">2000-3080-4000</td>
                <td class="border border-gray-300 p-2">1220-1230</td>
                <td class="border border-gray-300 p-2">6.5-200</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2" rowspan="4">Thermal</td>
                <td class="border border-gray-300 p-2">Melting Point / ℃</td>
                <td class="border border-gray-300 p-2">136</td>
                <td class="border border-gray-300 p-2">D2117</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">
                  Thermal Deformation / ℃
                </td>
                <td class="border border-gray-300 p-2">85</td>
                <td class="border border-gray-300 p-2">D648</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">
                  Linear Expansion Coefficient / 10^-4℃
                </td>
                <td class="border border-gray-300 p-2">1.15-2.5</td>
                <td class="border border-gray-300 p-2">D696</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">
                  Thermal Conductivity / (W/(m.k))
                </td>
                <td class="border border-gray-300 p-2">8.5</td>
                <td class="border border-gray-300 p-2">D177</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2" rowspan="3">
                  Electrical
                </td>
                <td class="border border-gray-300 p-2">
                  Volume Resistivity / (Ω.cm)
                </td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">D257</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">
                  Breakdown Voltage / (KV/mm)
                </td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">D149</td>
              </tr>

              <tr class="bg-white">
                <td class="border border-gray-300 p-2">Dielectric Constant</td>
                <td class="border border-gray-300 p-2">2.3</td>
                <td class="border border-gray-300 p-2">D150</td>
              </tr>
            </tbody>
          </table>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Category</th>
                <th class="border border-gray-300 p-2">Item</th>
                <th class="border border-gray-300 p-2">UHMWPE</th>
                <th class="border border-gray-300 p-2">ASMT Test Method</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2" rowspan="4">Physical</td>
                <td class="border border-gray-300 p-2">
                  Relative Molecular Weight / Million
                </td>
                <td class="border border-gray-300 p-2">4.5-9.2</td>
                <td class="border border-gray-300 p-2">D2857</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Density / (g/ cm3)</td>
                <td class="border border-gray-300 p-2">0.935</td>
                <td class="border border-gray-300 p-2">D1505</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Water Absorption / %</td>
                <td class="border border-gray-300 p-2">&lt; 0.01</td>
                <td class="border border-gray-300 p-2">D570</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  Friction Coefficient (no lubrication)
                </td>
                <td class="border border-gray-300 p-2">0.07-0.22</td>
                <td class="border border-gray-300 p-2">D1894</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2" rowspan="6">
                  Mechanical
                </td>
                <td class="border border-gray-300 p-2">
                  Tensile strength @ break / MPa
                </td>
                <td class="border border-gray-300 p-2">40-45</td>
                <td class="border border-gray-300 p-2">D638</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  Elongation @ Break / %
                </td>
                <td class="border border-gray-300 p-2">300-400</td>
                <td class="border border-gray-300 p-2">D638</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  Flexural Modulus / MPa
                </td>
                <td class="border border-gray-300 p-2">600</td>
                <td class="border border-gray-300 p-2">D747</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  Izod Impact Strength / (KJ/m2)
                </td>
                <td class="border border-gray-300 p-2">&ge; 140</td>
                <td class="border border-gray-300 p-2">D250</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Hardness / ShoreD</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">D2240</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  Abrasion loss / (mg/1000 times)
                </td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">D1175</td>
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
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              UHMWPE Sheet/Rod
            </p>
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
            <router-link to="/hdpe-sheet-rod">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                HDPE Sheet/Rod
              </p>
            </router-link>
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

import product from "@/assets/img/spare-parts/uhmwpe-sheet.png";
import spec from "@/assets/img/spare-parts/uhmwpe-sheet-spec.png";

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
