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
          <router-link to="/bolt-sets">
        <font-awesome-icon
          icon="circle-arrow-left"
          class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
        />
      </router-link>
        <p
          class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
        >
          Spring Washer
        </p>
      </div>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:px-10 text-[16px] md:text-[18px]"
          >
            <p
              class="bg-black text-white w-36 px-6 py-2 rounded-full text-center font-bold uppercase"
            >
              Features
            </p>
            <ul class="list-disc mt-8 ml-6">
              <li>Carbon Steel（Zinc Plated）</li>
              <li>Stainless Steel</li>
              <li>
                Strength Grade：4.8～5.6   Thread Manfacturing Percision：6g
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-2 rounded-full text-center font-bold uppercase mt-6"
          >
            parameters
          </p>
          <table class="table-auto border-collapse border border-gray-300 mt-6">
          <thead>
            <tr class="header-color center-text">
              <th class="border border-gray-300 px-4 py-2" colspan="2">Size</th>
              <th class="border border-gray-300 px-4 py-2" rowspan="2">Elasticity Test Under the Load (N)</th>
              <th class="border border-gray-300 px-4 py-2" rowspan="2">Thickness (mm)</th>
              <th class="border border-gray-300 px-4 py-2" rowspan="2">Nominal Weight (Kg/100pcs)</th>
            </tr>
            <tr class="header-color center-text">
              <th class="border border-gray-300 px-4 py-2">Metric</th>
              <th class="border border-gray-300 px-4 py-2">Imperial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">M6</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1/4"</td>
              <td class="border border-gray-300 px-4 py-2 center-text">7050</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1.6</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.05</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">M8</td>
              <td class="border border-gray-300 px-4 py-2 center-text">5/16"</td>
              <td class="border border-gray-300 px-4 py-2 center-text">12900</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.1</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.11</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">M10</td>
              <td class="border border-gray-300 px-4 py-2 center-text">3/8"</td>
              <td class="border border-gray-300 px-4 py-2 center-text">20600</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.6</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.21</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">M12</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1/2"</td>
              <td class="border border-gray-300 px-4 py-2 center-text">30000</td>
              <td class="border border-gray-300 px-4 py-2 center-text">3.1</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.36</td>
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
            <router-link to="/bolt-sets">
              <p class="text-[20px] font-bold p-4 border-b border-black">
                Bolt Sets & Fastener
              </p>
            </router-link>
            <router-link to="/fang-bolt">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Fang Bolt
              </p>
            </router-link>
            <router-link to="/euro-bolt">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Euro Bolt
              </p>
            </router-link>
            <router-link to="/domed-washer">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Domed Washer
              </p>
            </router-link>
            <router-link to="/large-flat-washer">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Large Flat Washer
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Spring Washer
            </p>
            <router-link to="/hexagon-nut">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Hexagon Nut
              </p>
            </router-link>
            <router-link to="/nyloc-nut">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Nyloc Nut
              </p>
            </router-link>
            <router-link to="/flange-nut">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Flange Nut
              </p>
            </router-link>
            <router-link to="/belt-fastener-s123">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Belt Fastener S1 S2 S3
              </p>
            </router-link>
            <router-link to="/belt-fastener-s45">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Belt Fastener S4 S5
              </p>
            </router-link>
          </div>
          <p class="text-[20px] mx-auto mt-10">In Partnership with:</p>
          <img :src="sanwei" alt="" class="w-64 mx-auto mt-2" />
        </div>
      </aside>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import background from "@/assets/img/spare-parts/bgSpareParts.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import product from "@/assets/img/spare-parts/spring-washer.png";
import params from "@/assets/img/spare-parts/spring-params.png";

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
      params,
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
