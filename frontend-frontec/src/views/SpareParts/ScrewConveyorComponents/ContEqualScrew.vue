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
          <router-link to="/screw-conveyor-components">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Continuous Equal Thickness Screw Flight
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
                class="bg-[#CDCDCD] w-40 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                carbon steel
              </p>
            </div>
            <div class="flex flex-row mt-3">
              <p
                class="bg-[#CDCDCD] w-36 py-3 rounded-full text-center uppercase shadow-lg"
              >
                alloy steel
              </p>
              <p
                class="bg-[#CDCDCD] w-40 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                stainless steel
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
              Patented process developed by Prime that overcomes issues, such as
              forming difficulties and high material wastage for small lot
              production when OD/Pitch Ratio is less than 0.5.
            </li>
            <li>
              The forming method of continuous equal thickness screw flights is
              the same as continuous cold-rolled flights, whereas the thickness
              is consistent throughout the inner edge and outer edge.
            </li>
            <li>High precision manufacturing process.</li>
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
                <th class="border border-gray-300 p-2">
                  Max. Band Width (D-d)/2 (mm)
                </th>
                <th class="border border-gray-300 p-2">Thickness T (mm)</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">30 ~ 60</td>
                <td class="border border-gray-300 p-2">20</td>
                <td class="border border-gray-300 p-2">150</td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">20 ~ 10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">60 ~ 100</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">150</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">2 ~ 10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">100 ~ 150</td>
                <td class="border border-gray-300 p-2">35</td>
                <td class="border border-gray-300 p-2">160</td>
                <td class="border border-gray-300 p-2">55</td>
                <td class="border border-gray-300 p-2">2 ~ 10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">150 ~ 200</td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">200</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">2 ~ 10</td>
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
              Screw Conveyor Components
            </p>
            <router-link to="/continous-screw-flight">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Continuous Screw Flight
              </p>
            </router-link>
            <router-link to="/sectional-screw-flight">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Sectional Screw Flight
              </p>
            </router-link>
            <router-link to="/complete-screw-flight">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Complete Screw Flight Unit
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Continuous Equal Thickness Screw Flight
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

import product from "@/assets/img/spare-parts/cont-equal-screw.png";
import spec from "@/assets/img/spare-parts/cont-equal-screw-spec.png";
import draw from "@/assets/img/spare-parts/cont-equal-screw-draw.png";

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
