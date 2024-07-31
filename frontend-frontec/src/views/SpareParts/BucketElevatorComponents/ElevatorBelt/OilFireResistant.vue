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
        <!-- Main content goes here -->
        <p
          class="text-[24px] mt-7 md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
        >
          Rubber Elevator Belt
        </p>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="oil" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:px-10 text-[16px] md:text-[18px]"
          >
            <p
              class="bg-black text-white w-36 px-6 py-2 rounded-full text-center font-bold uppercase"
            >
              Features
            </p>
            <ul class="list-disc mt-8 ml-6">
              <li>
                the covering layer penetrates into the skeleton material, with
                no interface between different material layers, no multi-layer
                with the inter-layer peeling phenomenon.
              </li>
              <li>
                Oil resistance, oxidation resistance, UV resistance, cold
                resistance, super wear resistance (more than 4 times ordinary
                rubber), long service life.
              </li>
              <li>
                with the overall dense, good tear resistance, good resistance to
                screw pull-through ability, dustpan, and lifting belt connection
                more secure.
              </li>
              <li>
                The covering layer has good resilience, is smooth over the
                roller, can maintain a good running track, not easy to run off.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-2 rounded-full text-center font-bold uppercase mt-6"
          >
            Specifications
          </p>
          <table class="table-auto border-collapse border border-gray-300 mt-6">
            <thead>
              <tr class="header-color center-text">
                <th class="border border-gray-300 px-4 py-2">Size</th>
                <th class="border border-gray-300 px-4 py-2">Color</th>
                <th class="border border-gray-300 px-4 py-2">Tensile Strength (N/mm)</th>
                <th class="border border-gray-300 px-4 py-2">Elongation @ Rated Load</th>
                <th class="border border-gray-300 px-4 py-2">Cover to Carcass Adhesion Strength (N/mm)</th>
                <th class="border border-gray-300 px-4 py-2">Working Temperature (°C)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="center-text">
                <td class="border border-gray-300 px-4 py-2">PU500</td>
                <td class="border border-gray-300 px-4 py-2" rowspan="2">Yellow</td>
                <td class="border border-gray-300 px-4 py-2">500</td>
                <td class="border border-gray-300 px-4 py-2">≤ 1.2</td>
                <td class="border border-gray-300 px-4 py-2">≥ 8</td>
                <td class="border border-gray-300 px-4 py-2 center-text" rowspan="2">-30~+70</td>
              </tr>
              <tr class="center-text">
                <td class="border border-gray-300 px-4 py-2">PU700</td>
                <td class="border border-gray-300 px-4 py-2">700</td>
                <td class="border border-gray-300 px-4 py-2">≤ 1.2</td>
                <td class="border border-gray-300 px-4 py-2">≥ 8</td>
              </tr>
            </tbody>
          </table>
          <p
            class="bg-black text-white w-64 px-6 py-2 rounded-full text-center font-bold uppercase mt-6"
          >
            Cover Performance
          </p>
          <table class="table-auto border-collapse border border-gray-300 mt-6">
            <thead>
              <tr class="header-color center-text">
                <th class="border border-gray-300 px-4 py-2">Item</th>
                <th class="border border-gray-300 px-4 py-2">Unit</th>
                <th class="border border-gray-300 px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr class="center-text">
                <td class="border border-gray-300 px-4 py-2">Tensile Strength</td>
                <td class="border border-gray-300 px-4 py-2">MPa</td>
                <td class="border border-gray-300 px-4 py-2">≥ 15.0</td>
              </tr>
              <tr class="center-text">
                <td class="border border-gray-300 px-4 py-2">Elongation @ Break</td>
                <td class="border border-gray-300 px-4 py-2">%</td>
                <td class="border border-gray-300 px-4 py-2">≥ 300</td>
              </tr>
              <tr class="center-text">
                <td class="border border-gray-300 px-4 py-2">Abrasion Loss</td>
                <td class="border border-gray-300 px-4 py-2">mm3</td>
                <td class="border border-gray-300 px-4 py-2">≤ 100</td>
              </tr>
              <tr class="center-text">
                <td class="border border-gray-300 px-4 py-2">Processes</td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2">Pouring method</td>
              </tr>
              <tr class="center-text">
                <td class="border border-gray-300 px-4 py-2">Electric Conductivity</td>
                <td class="border border-gray-300 px-4 py-2">Ω</td>
                <td class="border border-gray-300 px-4 py-2">customization</td>
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
            <router-link to="/elevator-belt">
              <p class="text-[20px] font-bold p-4 border-b border-black">
                Elevator Belt
              </p>
            </router-link>
            <router-link to="/pvc-solid-woven">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                PVC Solid <br />
                Woven Elevator Belt
              </p>
            </router-link>
            <router-link to="/rubber-belt">
              <p class="text-[18px] px-4 py-8 border-b border-black">Rubber</p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Oil & Fire Resistant
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
import oil from "@/assets/img/spare-parts/oil.png";
import spec from "@/assets/img/spare-parts/oil-spec.png";
import perform from "@/assets/img/spare-parts/oil-perform.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      background,
      oil,
      sanwei,
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
    background-color: #286F9B ;
    color: white; /* Optional: to make the text color white */
  }

.center-text {
    text-align: center;
  }

</style>
