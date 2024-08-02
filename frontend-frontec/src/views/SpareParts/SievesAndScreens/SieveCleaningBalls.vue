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
          <router-link to="/sieves-screens">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Sieve Cleaning Balls
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
              <li>Material: Natural rubber, silicone, polyurethane</li>
              <li>Available Size:</li>
              <li class="ml-5">φ16mm, φ19mm, φ22mm, φ24mm, φ26mm, φ28mm.</li>
              <li class="ml-5">φ32mm, φ35mm, φ40mm, φ50mm</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-3 shadow-lg rounded-full text-center font-bold uppercase mt-6"
          >
            Specifications
          </p>
          <table class="min-w-full border border-gray-200 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-200 p-2">Performance</th>
                <th class="border border-gray-200 p-2">Natural Rubber</th>
                <th class="border border-gray-200 p-2">Silicone</th>
                <th class="border border-gray-200 p-2">Polyurethane</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-200 p-2">Hardness (Shore A)</td>
                <td class="border border-gray-200 p-2">55 to 85</td>
                <td class="border border-gray-200 p-2">55 to 85</td>
                <td class="border border-gray-200 p-2">70 to 85</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-2">
                  Operating temperature ℃
                </td>
                <td class="border border-gray-200 p-2">-25 ~ +100</td>
                <td class="border border-gray-200 p-2">0 ~ +120</td>
                <td class="border border-gray-200 p-2">-40 ~ +120</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-2">Oil resistance</td>
                <td class="border border-gray-200 p-2">General</td>
                <td class="border border-gray-200 p-2">General</td>
                <td class="border border-gray-200 p-2">Excellent</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-2">Flexibility</td>
                <td class="border border-gray-200 p-2">Excellent</td>
                <td class="border border-gray-200 p-2">General</td>
                <td class="border border-gray-200 p-2">Medium</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-2">Abrasion resistance</td>
                <td class="border border-gray-200 p-2">Medium</td>
                <td class="border border-gray-200 p-2">Excellent</td>
                <td class="border border-gray-200 p-2">Best</td>
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
              Parts for Sieves <br />
              and Screens
            </p>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Sieves Cleaning Balls
            </p>
            <router-link to="/pan-cleaners">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Pan Cleaners
              </p>
            </router-link>
            <router-link to="/sieves-cleaners">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Sieves Cleaners
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

import product from "@/assets/img/spare-parts/sieves-cleaning.png";
import spec from "@/assets/img/spare-parts/sieves-cleaning-spec.png";

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
