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
          <router-link to="/drag-conveyor-components">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Drag Sprocket
          </p>
        </div>

        <!-- Drag Sprocket Images -->
        <div class="flex flex-col">
          <div
            class="flex flex-col justify-center items-center h-full p-4 md:p-24 lg:p-64"
          >
            <img
              :src="highlightedProduct"
              alt="Highlighted Product"
              class="object-contain mb-6 frame-border w-full max-w-xs md:max-w-md lg:max-w-lg"
            />
            <div class="text-center mt-0 mb-4">
              <p class="roboto-light text-gray-600 text-sm md:text-base">
                Click one of the images below to highlight
              </p>
            </div>
            <div class="flex justify-center space-x-2">
              <img
                :src="product1"
                alt="Product 1"
                class="object-contain border-4 border-white cursor-pointer w-12 h-12 md:w-20 md:h-20 thumbnail-border hover:scale-105 transform transition-transform duration-300"
                @click="highlightProduct('product1')"
              />
              <img
                :src="product2"
                alt="Product 2"
                class="object-contain border-4 border-white cursor-pointer w-12 h-12 md:w-20 md:h-20 thumbnail-border hover:scale-105 transform transition-transform duration-300"
                @click="highlightProduct('product2')"
              />
              <img
                :src="product3"
                alt="Product 3"
                class="object-contain border-4 border-white cursor-pointer w-12 h-12 md:w-20 md:h-20 thumbnail-border hover:scale-105 transform transition-transform duration-300"
                @click="highlightProduct('product3')"
              />
              <img
                :src="product4"
                alt="Product 4"
                class="object-contain border-4 border-white cursor-pointer w-12 h-12 md:w-20 md:h-20 thumbnail-border hover:scale-105 transform transition-transform duration-300"
                @click="highlightProduct('product4')"
              />
              <img
                :src="product5"
                alt="Product 5"
                class="object-contain border-4 border-white cursor-pointer w-12 h-12 md:w-20 md:h-20 thumbnail-border hover:scale-105 transform transition-transform duration-300"
                @click="highlightProduct('product5')"
              />
            </div>
          </div>

          <!-- Drawing Section -->
          <div class="flex flex-col mt-4 text-[16px] md:text-[18px] w-full">
            <p
              class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg mx-auto"
            >
              Drawing
            </p>
            <img
              :src="draw"
              alt="Drawing"
              class="object-contain mt-6 mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>

        <!-- Specifications Section -->
        <div class="flex flex-col mt-12">
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
          >
            Specifications
          </p>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Chain Model</th>
                <th class="border border-gray-300 p-2">Pitch(mm)</th>
                <th class="border border-gray-300 p-2">Gear Number Z</th>
                <th class="border border-gray-300 p-2">d1 (mm)</th>
                <th class="border border-gray-300 p-2">d (mm)</th>
                <th class="border border-gray-300 p-2">D (mm)</th>
                <th class="border border-gray-300 p-2">D1 (mm)</th>
                <th class="border border-gray-300 p-2">A (mm)</th>
                <th class="border border-gray-300 p-2">B (mm)</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <!-- 66.675 Chain Model Rows -->
              <tr>
                <td class="border border-gray-300 p-2" rowspan="7">66.675</td>
                <td class="border border-gray-300 p-2" rowspan="7">66.675</td>
                <td class="border border-gray-300 p-2">6</td>
                <td class="border border-gray-300 p-2">22.23</td>
                <td class="border border-gray-300 p-2">133.41</td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">22.8</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">7</td>
                <td class="border border-gray-300 p-2">22.23</td>
                <td class="border border-gray-300 p-2">153.74</td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">22.8</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">8</td>
                <td class="border border-gray-300 p-2">22.23</td>
                <td class="border border-gray-300 p-2">174.31</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">22.8</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">9</td>
                <td class="border border-gray-300 p-2">22.23</td>
                <td class="border border-gray-300 p-2">195.04</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">22.8</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">22.23</td>
                <td class="border border-gray-300 p-2">215.87</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">22.8</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">11</td>
                <td class="border border-gray-300 p-2">22.23</td>
                <td class="border border-gray-300 p-2">236.78</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">22.8</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">22.23</td>
                <td class="border border-gray-300 p-2">257.74</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">22.8</td>
              </tr>
              <!-- 100 Chain Model Rows -->
              <tr>
                <td class="border border-gray-300 p-2" rowspan="3">100</td>
                <td class="border border-gray-300 p-2" rowspan="3">100</td>
                <td class="border border-gray-300 p-2">8</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">261.44</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">33.2</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">9</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">292.52</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">120</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">33.2</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">323.77</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">120</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">33.2</td>
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
              Drag Conveyor Components
            </p>
            <router-link to="/roller-chain">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Roller Chain
              </p>
            </router-link>
            <router-link to="/drop-forged-chain">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Drop Forged Chain
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Drag Sprocket
            </p>
            <router-link to="/plastic-flight-br">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Plastic Flight Attachment (BR)
              </p>
            </router-link>
            <router-link to="/nylon-gear-wheel">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Nylon Gear & Wheel
              </p>
            </router-link>
            <router-link to="/plastic-flight-bf">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Plastic Flight Attachment (BF)
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

import product1 from "@/assets/img/spare-parts/drag-sprocket1.jpg";
import product2 from "@/assets/img/spare-parts/drag-sprock-2.jpg";
import product3 from "@/assets/img/spare-parts/drag-sprock-3.jpg";
import product4 from "@/assets/img/spare-parts/drag-sprock-4.jpg";
import product5 from "@/assets/img/spare-parts/drag-sprock-5.jpg";
import draw from "@/assets/img/spare-parts/drag-sprocket-draw.png";

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
      draw,
      product1,
      product2,
      product3,
      product4,
      product5,
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

.frame-border {
  border: 8px solid #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.thumbnail-border {
  border: 4px solid #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.hover\:scale-125:hover {
  transform: scale(1.25);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.bg-gradient-to-r {
  background: linear-gradient(to right, #286f9b, #96c4df);
}
</style>
