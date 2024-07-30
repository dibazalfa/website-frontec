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
          <img :src="spec" alt="" class="object-contain mt-3" />

          <p
            class="bg-black text-white w-64 px-6 py-2 rounded-full text-center font-bold uppercase mt-6"
          >
            Cover Performance
          </p>
          <img :src="perform" alt="" class="object-contain mt-2" />
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
</style>
