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
            PU Sheet/Rod
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]"
          >
            <div class="flex flex-row">
              <p
                class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
              >
                description
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                Prime’s Polyurethane sheets and rolls are used as anti-wear
                liner and conveyor skirting. They are tailored to meet the
                demands of customer’s wear applications and help eliminate
                spillage and scattering of the bulk materials. As the superior
                abrasion-resistant wear liner and conveyor skirting material,
                Prime’s Polyurethane Lining and Skirting will provide a
                significant improvement in the service life. Therefore, reduce
                the maintenance costs and downtimes.
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
                <th class="border border-gray-300 p-2">
                  Material Formula / Items
                </th>
                <th class="border border-gray-300 p-2">Prime S70</th>
                <th class="border border-gray-300 p-2">Prime L82</th>
                <th class="border border-gray-300 p-2">Prime F82</th>
                <th class="border border-gray-300 p-2">Prime FRAS82</th>
                <th class="border border-gray-300 p-2">Prime H92</th>
              </tr>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Colour</th>
                <th class="border border-gray-300 p-2">Red</th>
                <th class="border border-gray-300 p-2">Green</th>
                <th class="border border-gray-300 p-2">Orange</th>
                <th class="border border-gray-300 p-2">Blue</th>
                <th class="border border-gray-300 p-2">Black</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">
                  Hardness Durometer (shore A +/-2)
                </td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">82</td>
                <td class="border border-gray-300 p-2">82</td>
                <td class="border border-gray-300 p-2">82</td>
                <td class="border border-gray-300 p-2">92</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">
                  Tensile Strength (MPa)
                </td>
                <td class="border border-gray-300 p-2">40.2</td>
                <td class="border border-gray-300 p-2">44</td>
                <td class="border border-gray-300 p-2">42.4</td>
                <td class="border border-gray-300 p-2">41.1</td>
                <td class="border border-gray-300 p-2">48</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">100% Modulus (MPa)</td>
                <td class="border border-gray-300 p-2">2.7</td>
                <td class="border border-gray-300 p-2">5.3</td>
                <td class="border border-gray-300 p-2">5.2</td>
                <td class="border border-gray-300 p-2">5.2</td>
                <td class="border border-gray-300 p-2">8.7</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">300% Modulus (MPa)</td>
                <td class="border border-gray-300 p-2">5.2</td>
                <td class="border border-gray-300 p-2">7.8</td>
                <td class="border border-gray-300 p-2">7.7</td>
                <td class="border border-gray-300 p-2">7.7</td>
                <td class="border border-gray-300 p-2">14.9</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">
                  Elongation at Break (%)
                </td>
                <td class="border border-gray-300 p-2">810</td>
                <td class="border border-gray-300 p-2">680</td>
                <td class="border border-gray-300 p-2">680</td>
                <td class="border border-gray-300 p-2">680</td>
                <td class="border border-gray-300 p-2">580</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">
                  Tear Strength (Right Angle / KN/m)
                </td>
                <td class="border border-gray-300 p-2">54.9</td>
                <td class="border border-gray-300 p-2">68.3</td>
                <td class="border border-gray-300 p-2">65.8</td>
                <td class="border border-gray-300 p-2">65.8</td>
                <td class="border border-gray-300 p-2">96</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">
                  Impact Resilience (%)
                </td>
                <td class="border border-gray-300 p-2">46</td>
                <td class="border border-gray-300 p-2">34</td>
                <td class="border border-gray-300 p-2">34</td>
                <td class="border border-gray-300 p-2">34</td>
                <td class="border border-gray-300 p-2">29</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">
                  DIN Abrasion Loss (mm3)
                </td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">51</td>
                <td class="border border-gray-300 p-2">51</td>
                <td class="border border-gray-300 p-2">49</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Flame Retardant</td>
                <td class="border border-gray-300 p-2">-</td>
                <td class="border border-gray-300 p-2">-</td>
                <td class="border border-gray-300 p-2" colspan="2">
                  Duration of visible flame ≤ 30s Duration of visible afterglow
                  ≤ 120s
                </td>
                <td class="border border-gray-300 p-2">-</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Flame Retardant</td>
                <td class="border border-gray-300 p-2">-</td>
                <td class="border border-gray-300 p-2">-</td>
                <td class="border border-gray-300 p-2">-</td>
                <td class="border border-gray-300 p-2">≤ 3×10^8</td>
                <td class="border border-gray-300 p-2">-</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-2">Application</td>
                <td class="border border-gray-300 p-2">Conveyor Skirting</td>
                <td class="border border-gray-300 p-2">
                  Conveyor Skirting & Liner
                </td>
                <td class="border border-gray-300 p-2">
                  Conveyor Skirting & Liner (Flame Retardant)
                </td>
                <td class="border border-gray-300 p-2">
                  Conveyor Skirting & Liner (FRAS)
                </td>
                <td class="border border-gray-300 p-2">
                  Conveyor Skirting & Liner (Temperatures up to 120℃)
                </td>
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
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              PU Sheet/Rod
            </p>
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

import product from "@/assets/img/spare-parts/pu-sheet.png";
import spec from "@/assets/img/spare-parts/pu-sheet-spec.png";

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
