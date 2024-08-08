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
          <router-link to="/belt-conveyor-components">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md">
            Patterned Conveyor Belt
          </p>
        </div>
        <div class="flex flex-col items-center mt-12">
          <img
            :src="highlightedProduct"
            alt="Highlighted Product"
            class="object-contain mb-6 frame-border"
          />
          <div class="text-center mt-0 mb-4">
            <p class="roboto-light text-gray-600">Click one of the images below to highlight</p>
          </div>
          <div class="flex space-x-2 flex-wrap justify-center">
            <img
              :src="product1"
              alt="Product 1"
              class="object-contain border-4 border-white cursor-pointer w-16 h-16 md:w-24 md:h-24 thumbnail-border hover:scale-105 transform transition-transform duration-300"
              @click="highlightProduct('product1')"
            />
            <img
              :src="product2"
              alt="Product 2"
              class="object-contain border-4 border-white cursor-pointer w-16 h-16 md:w-24 md:h-24 thumbnail-border hover:scale-105 transform transition-transform duration-300"
              @click="highlightProduct('product2')"
            />
            <img
              :src="product3"
              alt="Product 3"
              class="object-contain border-4 border-white cursor-pointer w-16 h-16 md:w-24 md:h-24 thumbnail-border hover:scale-105 transform transition-transform duration-300"
              @click="highlightProduct('product3')"
            />
            <img
              :src="product4"
              alt="Product 4"
              class="object-contain border-4 border-white cursor-pointer w-16 h-16 md:w-24 md:h-24 thumbnail-border hover:scale-105 transform transition-transform duration-300"
              @click="highlightProduct('product4')"
            />
          </div>
        </div>
        <br />
        <div class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]">
          <p class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg mx-auto md:mx-0">
            Features
          </p>
          <ul class="list-disc mt-8 ml-6">
            <li>
              Suitable to convey materials such as powder, granules as well as
              packaged materials at angles less than 40 degrees.
            </li>
            <li>
              The carcass can be made from Polyester EP, Nylon NN, Cotton CC,
              and Polyester Cotton TC;
            </li>
            <li>
              Patterned Belt includes various patterns such as “Cross”, “V”,
              “Doted”, “Crescent”, etc.
            </li>
            <li>
              Excluding the pattern measurements, the overall belt
              specifications and rubber cover properties of the patterned
              conveyor belt remain the same as the flat surface conveyor belt
              under the condition of the same carcass and rubber cover
              materials.
            </li>
            <li>
              The belts include general use, oil-resistant, acid-alkali
              resistant, cold-resistant, static conductive, fire retardant,
              wear-resistant and heat resistant types etc.
            </li>
          </ul>
        </div>
      </section>

      <!-- Sidebar -->
      <aside class="w-full md:w-1/3 min-h-screen p-4 md:sticky md:top-0 h-full">
        <!-- Sidebar content goes here -->
        <div class="flex flex-col mt-10">
          <div
            class="mt-10 bg-white rounded-lg shadow-md w-full md:w-64 mx-auto text-center border border-black"
          >
            <p class="text-[20px] font-bold p-4 border-b border-black">
              Belt Conveyor Components
            </p>
            <router-link to="/flat-surface-conveyor">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Flat Surface Conveyor
              </p>
            </router-link>
            <p class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white">
              Patterned Conveyor
            </p>
            <router-link to="/impact-bar">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Impact Bar
              </p>
            </router-link>
          </div>
          <p class="text-[20px] mx-auto mt-10">In Partnership with:</p>
          <img :src="sanwei" alt="Sanwei" class="w-64 mx-auto mt-2" />
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
import product1 from "@/assets/img/spare-parts/patterned-conveyor-belt1.png";
import product2 from "@/assets/img/spare-parts/patterned-conveyor-belt2.png";
import product3 from "@/assets/img/spare-parts/patterned-conveyor-belt3.png";
import product4 from "@/assets/img/spare-parts/patterned-conveyor-belt4.png";

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
      product1,
      product2,
      product3,
      product4,
      highlightedProduct: product1,
    };
  },
  methods: {
    highlightProduct(product) {
      this.highlightedProduct = this[product];
    },
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

.h-full {
  height: 100%;
}

.top-0 {
  top: 0;
}

.p-4 {
  padding: 1rem;
}

.main {
  flex: 1;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
}

section {
  overflow-y: auto;
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
    position: relative;
  }
}

.header-color {
  background-color: #286f9b;
  color: white;
}

.center-text {
  text-align: center;
}

.frame-border {
  border: 8px solid #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.thumbnail-border {
  border: 4px solid #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.bg-gradient-to-r {
  background: linear-gradient(to right, #286f9b, #96c4df);
}

.hover\:scale-125:hover {
  transform: scale(1.25);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
