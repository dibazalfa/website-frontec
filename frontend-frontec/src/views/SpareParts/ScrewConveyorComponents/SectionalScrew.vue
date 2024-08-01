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
        <p
          class="text-[24px] mt-7 md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
        >
          Continous Screw Flight
        </p>
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
          <img :src="spec" alt="" class="object-contain mt-6" />
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
            <router-link to="/screw-conveyor-components">
              <p class="text-[20px] font-bold p-4 border-b border-black">
                Screw Conveyor Components
              </p>
            </router-link>
            <router-link to="/continous-screw-flight">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Continuous Screw Flight
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Sectional Screw Flight
            </p>
            <router-link to="/complete-screw-flight">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Complete Screw Flight Unit
              </p>
            </router-link>
            <router-link to="/cont-equal-screw">
              <p class="text-[18px] px-4 py-8 border-b border-black">
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

export default {
  components: {
    AppHeader,
    Footer,
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
