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
          <router-link to="/drag-conveyor-components">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Nylon Gear & Wheel
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]"
          >
            <p
              class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
            >
              Drawing
            </p>
            <img :src="draw" alt="" class="object-contain mt-6" />
          </div>
        </div>
        <img :src="draw2" alt="" class="mt-3 mx-auto" />
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Specifications
          </p>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Size</th>
                <th class="border border-gray-300 p-2">Pitch P</th>
                <th class="border border-gray-300 p-2">
                  Number of <br />
                  teeth Z
                </th>
                <th class="border border-gray-300 p-2">A</th>
                <th class="border border-gray-300 p-2">B</th>
                <th class="border border-gray-300 p-2">Î</th>
                <th class="border border-gray-300 p-2">H</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">TG38.1×7</td>
                <td class="border border-gray-300 p-2">38.1</td>
                <td class="border border-gray-300 p-2">7</td>
                <td class="border border-gray-300 p-2">φ18</td>
                <td class="border border-gray-300 p-2">φ87.8</td>
                <td class="border border-gray-300 p-2">12.5</td>
                <td class="border border-gray-300 p-2">25</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG38.1×8</td>
                <td class="border border-gray-300 p-2">38.1</td>
                <td class="border border-gray-300 p-2">8</td>
                <td class="border border-gray-300 p-2">φ26</td>
                <td class="border border-gray-300 p-2">φ99.3</td>
                <td class="border border-gray-300 p-2">20</td>
                <td class="border border-gray-300 p-2">50</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG60×4</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">4</td>
                <td class="border border-gray-300 p-2">Φ20</td>
                <td class="border border-gray-300 p-2">Φ84.3</td>
                <td class="border border-gray-300 p-2">22.5</td>
                <td class="border border-gray-300 p-2">56</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG63.5×5B</td>
                <td class="border border-gray-300 p-2">63.5</td>
                <td class="border border-gray-300 p-2">5</td>
                <td class="border border-gray-300 p-2">φ25</td>
                <td class="border border-gray-300 p-2">φ108</td>
                <td class="border border-gray-300 p-2">16</td>
                <td class="border border-gray-300 p-2">40</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG63.5×5</td>
                <td class="border border-gray-300 p-2">63.5</td>
                <td class="border border-gray-300 p-2">5</td>
                <td class="border border-gray-300 p-2">φ20~25</td>
                <td class="border border-gray-300 p-2">φ108</td>
                <td class="border border-gray-300 p-2">17</td>
                <td class="border border-gray-300 p-2">45</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG66.5×4</td>
                <td class="border border-gray-300 p-2">66.5</td>
                <td class="border border-gray-300 p-2">4</td>
                <td class="border border-gray-300 p-2">φ20</td>
                <td class="border border-gray-300 p-2">φ94.05</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">56</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG66.5×5</td>
                <td class="border border-gray-300 p-2">66.5</td>
                <td class="border border-gray-300 p-2">5</td>
                <td class="border border-gray-300 p-2">φ20(25)</td>
                <td class="border border-gray-300 p-2">φ100</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">56</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG66.5×6</td>
                <td class="border border-gray-300 p-2">66.5</td>
                <td class="border border-gray-300 p-2">6</td>
                <td class="border border-gray-300 p-2">φ26</td>
                <td class="border border-gray-300 p-2">φ125</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">56</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG68×4</td>
                <td class="border border-gray-300 p-2">68</td>
                <td class="border border-gray-300 p-2">4</td>
                <td class="border border-gray-300 p-2">φ20</td>
                <td class="border border-gray-300 p-2">φ96.17</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">45</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG68×5</td>
                <td class="border border-gray-300 p-2">68</td>
                <td class="border border-gray-300 p-2">5</td>
                <td class="border border-gray-300 p-2">φ25</td>
                <td class="border border-gray-300 p-2">φ115.6</td>
                <td class="border border-gray-300 p-2">24</td>
                <td class="border border-gray-300 p-2">47</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG76.2×5</td>
                <td class="border border-gray-300 p-2">76.2</td>
                <td class="border border-gray-300 p-2">5</td>
                <td class="border border-gray-300 p-2">φ25</td>
                <td class="border border-gray-300 p-2">φ129.6</td>
                <td class="border border-gray-300 p-2">22.5</td>
                <td class="border border-gray-300 p-2">50</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG100×5</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">5</td>
                <td class="border border-gray-300 p-2">φ25</td>
                <td class="border border-gray-300 p-2">φ170.1</td>
                <td class="border border-gray-300 p-2">34.2</td>
                <td class="border border-gray-300 p-2">70</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">TG100×5B</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">5</td>
                <td class="border border-gray-300 p-2">φ25</td>
                <td class="border border-gray-300 p-2">φ170.1</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">57</td>
              </tr>
            </tbody>
          </table>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2" rowspan="2">
                  Optical parameters
                </th>
                <th class="border border-gray-300 p-2" colspan="5">Wheel</th>
              </tr>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">D</th>
                <th class="border border-gray-300 p-2">D1</th>
                <th class="border border-gray-300 p-2">d</th>
                <th class="border border-gray-300 p-2">B</th>
                <th class="border border-gray-300 p-2">b</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">φ75×φ20×70</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">65</td>
                <td class="border border-gray-300 p-2">20</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">25</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">φ90×φ40.8×80</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">40.8</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">32</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">φ110×φ40.5×90</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">94</td>
                <td class="border border-gray-300 p-2">40.5</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">36</td>
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
              Drag Conveyor Components
            </p>
            <router-link to="/roller-chain">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Roller Chain
              </p>
            </router-link>
            <router-link to="/drop-forged-chain">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Drop Forged Chain
              </p>
            </router-link>
            <router-link to="/drag-sprocket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Drag Sprocket
              </p>
            </router-link>
            <router-link to="/plastic-flight-br">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Plastif Flight Attachment (BR)
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Nylon Gear & Wheel
            </p>
            <router-link to="/plastic-flight-bf">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Plastic Flight Attachment (BF)
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

import product from "@/assets/img/spare-parts/nylon-gear.png";
import spec from "@/assets/img/spare-parts/nylon-gear-spec.png";
import spec2 from "@/assets/img/spare-parts/nylon-gear-spec2.png";
import draw from "@/assets/img/spare-parts/nylon-gear-draw.png";
import draw2 from "@/assets/img/spare-parts/nylon-gear-draw2.png";

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
      spec2,
      draw,
      draw2,
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
