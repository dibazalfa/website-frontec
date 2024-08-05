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
            Sectional Screw Flight
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
                Drawing
              </p>
              <p
                class="bg-[#CDCDCD] w-36 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                hdpe/nylon
              </p>
            </div>
            <img :src="draw" alt="" class="object-contain mt-6" />
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Features
          </p>
          <ul class="mt-3 list-disc ml-6">
            <li>
              Solid woven carcass completely solve the problem of ply separation
              and belt delamination.
            </li>
            <li>
              High resistance to oil, grease, chemicals, corrosion,flame,
              abrasion with anti-static properties.
            </li>
            <li>
              Consists of tight woven carcass with resilient PVC cover. Prevent
              the bolts from penetrating the belt and secure the fixation
              between buckets and belt.
            </li>
            <li>
              Flexibility allows the belt running along elevator pulley smoothly
              and avoid belt mistracking.
            </li>
          </ul>
          <p
            class="bg-black text-white w-64 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Specifications
          </p>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Pitch p (mm)</th>
                <th class="border border-gray-300 p-2">
                  Min. Inner Diameter d (mm)
                </th>
                <th class="border border-gray-300 p-2">
                  Max. Outer Diameter D (mm)
                </th>
                <th class="border border-gray-300 p-2">Coefficient K</th>
                <th class="border border-gray-300 p-2">
                  Min. Outer Diameter (mm)
                </th>
                <th class="border border-gray-300 p-2">Thickness T (mm)</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">60 ~ 100</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">480</td>
                <td class="border border-gray-300 p-2">1</td>
                <td class="border border-gray-300 p-2" rowspan="20">
                  Min. Outer Diameter = Pitch * K
                </td>
                <td class="border border-gray-300 p-2">3 ~ 16</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">100 ~ 150</td>
                <td class="border border-gray-300 p-2">30</td>
                <td class="border border-gray-300 p-2">480</td>
                <td class="border border-gray-300 p-2">0.8</td>
                <td class="border border-gray-300 p-2">3 ~ 18</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">150 ~ 200</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">520</td>
                <td class="border border-gray-300 p-2">0.75</td>
                <td class="border border-gray-300 p-2">3 ~ 20</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">200 ~ 250</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">630</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 25</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">250 ~ 300</td>
                <td class="border border-gray-300 p-2">65</td>
                <td class="border border-gray-300 p-2">670</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 25</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">300 ~ 350</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">900</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 30</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">350 ~ 400</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">950</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 30</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">400 ~ 450</td>
                <td class="border border-gray-300 p-2">95</td>
                <td class="border border-gray-300 p-2">950</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 30</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">450 ~ 500</td>
                <td class="border border-gray-300 p-2">135</td>
                <td class="border border-gray-300 p-2">1150</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 35</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">500 ~ 550</td>
                <td class="border border-gray-300 p-2">150</td>
                <td class="border border-gray-300 p-2">1300</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 40</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">550 ~ 650</td>
                <td class="border border-gray-300 p-2">150</td>
                <td class="border border-gray-300 p-2">1350</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 40</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">650 ~ 750</td>
                <td class="border border-gray-300 p-2">200</td>
                <td class="border border-gray-300 p-2">1400</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 45</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">750 ~ 850</td>
                <td class="border border-gray-300 p-2">200</td>
                <td class="border border-gray-300 p-2">1450</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 50</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">850 ~ 950</td>
                <td class="border border-gray-300 p-2">250</td>
                <td class="border border-gray-300 p-2">1450</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 55</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">950 ~ 1050</td>
                <td class="border border-gray-300 p-2">300</td>
                <td class="border border-gray-300 p-2">1500</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 55</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">1050 ~ 1200</td>
                <td class="border border-gray-300 p-2">350</td>
                <td class="border border-gray-300 p-2">1600</td>
                <td class="border border-gray-300 p-2">0.7</td>
                <td class="border border-gray-300 p-2">3 ~ 55</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">1200 ~ 1250</td>
                <td class="border border-gray-300 p-2">400</td>
                <td class="border border-gray-300 p-2">1800</td>
                <td class="border border-gray-300 p-2">0.8</td>
                <td class="border border-gray-300 p-2">3 ~ 55</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">1250 ~ 1400</td>
                <td class="border border-gray-300 p-2">450</td>
                <td class="border border-gray-300 p-2">2000</td>
                <td class="border border-gray-300 p-2">0.8</td>
                <td class="border border-gray-300 p-2">3 ~ 55</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">1400 ~ 3000</td>
                <td class="border border-gray-300 p-2">480</td>
                <td class="border border-gray-300 p-2">3000</td>
                <td class="border border-gray-300 p-2">0.65</td>
                <td class="border border-gray-300 p-2">3 ~ 60</td>
              </tr>
            </tbody>
          </table>
          <p
            class="bg-black text-white w-64 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Supplied requirement
          </p>
          <ul class="list-disc mt-3 ml-6">
            <li>
              If the thickness is in the range of 20mm to 30mm, bandwidth
              (OD-ID)/2 ≤ 400mm.
            </li>
            <li>
              If the thickness is in the range of 30mm to 40mm, band width
              (OD-ID)/2 ≤ 370mm.
            </li>
            <li>
              If the thickness is in the range of 40mm to 50mm, band width
              (OD-ID)/2 ≤ 350mm.
            </li>
            <li>
              If the thickness is in the range of 50mm to 60mm, band width
              (OD-ID)/2 ≤ 320mm.
            </li>
          </ul>
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
              Screw Conveyor Components
            </p>
            <router-link to="/continous-screw-flight">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Continuous Screw Flight
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Sectional Screw Flight
            </p>
            <router-link to="/complete-screw-flight">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Complete Screw Flight Unit
              </p>
            </router-link>
            <router-link to="/cont-equal-screw">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Continuous Equal Thickness Screw Flight
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

import product from "@/assets/img/spare-parts/sectional-screw.png";
import spec from "@/assets/img/spare-parts/sectional-screw-spec.png";
import draw from "@/assets/img/spare-parts/sectional-screw-draw.png";

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
      draw,
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
