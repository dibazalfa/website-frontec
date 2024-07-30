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
        <p class="text-[24px] mt-md:text-[40px] text-[#286F9B] font-bold text-shadow-md">
          PVC Solid Woven Elevator Belt
        </p>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="pvc" alt="" class="object-contain" />
          <div class="flex flex-col text-justify mt-6 md:mt-0 md:px-10 text-[16px] md:text-[18px]">
            <p class="bg-black text-white w-36 px-6 py-2 rounded-full text-center font-bold uppercase">
              Features
            </p>
            <ul class="list-disc mt-8 ml-6">
              <li>
                Solid woven carcass completely solve the problem of ply
                separation and belt delamination.
              </li>
              <li>
                High resistance to oil, grease, chemicals, corrosion, flame,
                abrasion with anti-static properties.
              </li>
              <li>
                Consists of tight woven carcass with resilient PVC cover.
                Prevent the bolts from penetrating the belt and secure the
                fixation between buckets and belt.
              </li>
              <li>
                Flexibility allows the belt running along elevator pulley
                smoothly and avoid belt mistracking.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <p class="bg-black text-white w-48 px-6 py-2 rounded-full text-center font-bold uppercase mt-6">
            Specifications
          </p>
          <table class="table-auto border-collapse border border-gray-300 mt-6">
            <thead>
              <tr>
                <th class="border border-gray-300 px-4 py-2">Size</th>
                <th class="border border-gray-300 px-4 py-2">Color</th>
                <th class="border border-gray-300 px-4 py-2">Tensile Strength N/ mm</th>
                <th class="border border-gray-300 px-4 py-2">Elongation @ Rated Load %</th>
                <th class="border border-gray-300 px-4 py-2">Cover to Carcass Adhesion Strength N/ mm</th>
                <th class="border border-gray-300 px-4 py-2">Working Temperature °C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">PCV230</td>
                <td class="border border-gray-300 px-4 py-2">Blue</td>
                <td class="border border-gray-300 px-4 py-2">500</td>
                <td class="border border-gray-300 px-4 py-2">≤ 1.0</td>
                <td class="border border-gray-300 px-4 py-2">≥ 4.5</td>
                <td class="border border-gray-300 px-4 py-2">-10~+85</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">PVC400</td>
                <td class="border border-gray-300 px-4 py-2">Blue</td>
                <td class="border border-gray-300 px-4 py-2">700</td>
                <td class="border border-gray-300 px-4 py-2">≤ 1.0</td>
                <td class="border border-gray-300 px-4 py-2">≥ 4.5</td>
                <td class="border border-gray-300 px-4 py-2">-10~+85</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">PVC520</td>
                <td class="border border-gray-300 px-4 py-2">Blue</td>
                <td class="border border-gray-300 px-4 py-2">900</td>
                <td class="border border-gray-300 px-4 py-2">≤ 1.0</td>
                <td class="border border-gray-300 px-4 py-2">≥ 4.5</td>
                <td class="border border-gray-300 px-4 py-2">-10~+85</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">PVC640</td>
                <td class="border border-gray-300 px-4 py-2">1100</td>
                <td class="border border-gray-300 px-4 py-2">Data 3</td>
                <td class="border border-gray-300 px-4 py-2">≤ 1.0</td>
                <td class="border border-gray-300 px-4 py-2">≥ 4.5</td>
                <td class="border border-gray-300 px-4 py-2">-10~+85</td>
              </tr>
            </tbody>
          </table>

          <p class="bg-black text-white w-64 px-6 py-2 rounded-full text-center font-bold uppercase mt-6">
            Cover Performance
          </p>
          <table class="table-auto border-collapse border border-gray-300 mt-6">
            <thead>
              <tr>
                <th class="border border-gray-300 px-4 py-2">Item</th>
                <th class="border border-gray-300 px-4 py-2">Unit</th>
                <th class="border border-gray-300 px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Tensile Strength</td>
                <td class="border border-gray-300 px-4 py-2">MPa</td>
                <td class="border border-gray-300 px-4 py-2">≥ 15.0</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Elongation @ Break</td>
                <td class="border border-gray-300 px-4 py-2">%</td>
                <td class="border border-gray-300 px-4 py-2">≥ 300</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Abrasion Loss</td>
                <td class="border border-gray-300 px-4 py-2">mm³</td>
                <td class="border border-gray-300 px-4 py-2">≤ 100</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Bending Test</td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2">No crack under 2.5 million times of bending</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Flammability</td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2">Persistence of flame ≤ 6S, no persistence of after glow</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Electric Conductivity</td>
                <td class="border border-gray-300 px-4 py-2">Ω</td>
                <td class="border border-gray-300 px-4 py-2">Surface ≤ 3X10⁸ (customize upon request)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Sidebar -->
      <aside class="w-full md:w-1/3 min-h-screen p-4 md:sticky md:top-0 h-full">
        <!-- Sidebar content goes here -->
        <div class="flex flex-col mt-10">
          <p class="text-[20px] mx-auto">In Partnership with:</p>
          <img :src="sanwei" alt="" class="w-64 mx-auto mt-10" />
          <div class="mt-10 bg-white rounded-lg shadow-md w-64 mx-auto text-center border border-black border-1">
            <p class="text-[20px] font-bold p-4 border-b border-black">
              Bucket Elevator Components
            </p>
            <p class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white">
              Elevator Belt
            </p>
            <p class="text-[18px] px-4 py-8 border-b border-black">
              Bolt Sets & Fastener
            </p>
            <p class="text-[18px] px-4 py-8 border-b border-black">
              Elevator Bucket
            </p>
            <p class="text-[18px] px-4 py-8">Pulley Slide Lagging</p>
          </div>
        </div>
      </aside>
    </main>

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script>
import AppHeader from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import background from "../../assets/img/spare-parts/bgSpareParts.png";
import pvc from "../../assets/img/spare-parts/pvc.png";
import sanwei from "../../assets/img/spare-parts/sanwei.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      background,
      pvc,
      sanwei,
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
</style>
