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
            Roller Chain
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]"
          >
            <p
              class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
            >
              Drawing
            </p>
            <img :src="draw" alt="" class="object-contain mt-6" />
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-2 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Specifications
          </p>
          <table class="table-auto border-collapse border border-gray-300 mt-6">
  <thead>
    <tr class="header-color center-text">
      <th class="border border-gray-300 py-2" rowspan="2">Minimum tensile strength (KN)</th>
      <th class="border border-gray-300 py-2" rowspan="2">Specification</th>
      <th class="border border-gray-300 py-2">Pitch (mm)</th>
      <th class="border border-gray-300 py-2">Width between inner plates (mm)</th>
      <th class="border border-gray-300 py-2">Roller diameter (mm)</th>
      <th class="border border-gray-300 py-2">Bush diameter (mm)</th>
      <th class="border border-gray-300 py-2">Pin diameter (mm)</th>
      <th class="border border-gray-300 py-2" colspan="2">Plate (mm)</th>
      <th class="border border-gray-300 py-2" colspan="3">Accessories parameters (mm)</th>
    </tr>
    <tr class="header-color center-text">
      <th class="border border-gray-300 py-2">P</th>
      <th class="border border-gray-300 py-2">W</th>
      <th class="border border-gray-300 py-2">D1</th>
      <th class="border border-gray-300 py-2">D</th>
      <th class="border border-gray-300 py-2">d</th>
      <th class="border border-gray-300 py-2">H</th>
      <th class="border border-gray-300 py-2">T</th>
      <th class="border border-gray-300 py-2">L</th>
      <th class="border border-gray-300 py-2">L1</th>
      <th class="border border-gray-300 py-2">L2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 center-text" rowspan="12">140</td>
      <td class="border border-gray-300 px-4 center-text">mc66.5b355-4lf1-140-32</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="5">66.5</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="12">25.5</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="15">22.23</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="15">12.7</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="12">35</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="12">5</td>
      <td class="border border-gray-300 px-4 center-text">140</td>
      <td class="border border-gray-300 px-4 center-text">102</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc66.5b355-41f1-160-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">160</td>
      <td class="border border-gray-300 px-4 center-text">102</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc66.5b355-41f2-230-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">230</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">195</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc66.5b355-41f2-270-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">270</td>
      <td class="border border-gray-300 px-4 center-text">102</td>
      <td class="border border-gray-300 px-4 center-text">228</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc66.5b355-41fh2-270-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">270</td>
      <td class="border border-gray-300 px-4 center-text">102</td>
      <td class="border border-gray-300 px-4 center-text">228</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc66.67b355-41f2-182-32</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="4">66.675</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">182</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">152</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc66.67b355-41f2-230-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">230</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">195</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc66.67b355-41f2-295-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">295</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">195</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc66.67b355-4lfh2-295-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">295</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">195</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc68b355-4f1-136-32</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="3">68</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">136</td>
      <td class="border border-gray-300 px-4 center-text">100</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc68b355-4lf1-170-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">170</td>
      <td class="border border-gray-300 px-4 center-text">120</td>
      <td class="border border-gray-300 px-4 center-text"></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc68b355-41f2-220-32</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">220</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">195</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text" rowspan="3">150</td>
      <td class="border border-gray-300 px-4 center-text">mc100b306-21f2-170-20</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="3">100</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="3">26.5</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="3">30</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="10">6</td>
      <td class="border border-gray-300 px-4 center-text">170</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">140</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc100b306-21f2-210-20</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">210</td>
      <td class="border border-gray-300 px-4 center-text">100</td>
      <td class="border border-gray-300 px-4 center-text">180</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc100b306-21f2-280-20</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
      <td class="border border-gray-300 px-4 center-text">280</td>
      <td class="border border-gray-300 px-4 center-text">120</td>
      <td class="border border-gray-300 px-4 center-text">240</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text" rowspan="7">180</td>
      <td class="border border-gray-300 px-4 center-text">mc100s406-41f1-170-20</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="6">100</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="6">38</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="6">36</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="6">24</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="6">15.7</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="7">40</td>
      <td class="border border-gray-300 px-4 center-text">170</td>
      <td class="border border-gray-300 px-4 center-text">115</td>
      <td class="border border-gray-300 px-4 center-text">/</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">MC100S406-4LF2-225-20</td>
      <td class="border border-gray-300 px-4 center-text">225</td>
      <td class="border border-gray-300 px-4 center-text">104</td>
      <td class="border border-gray-300 px-4 center-text">194</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc100s406-41f1-294-20</td>
      <td class="border border-gray-300 px-4 center-text">294</td>
      <td class="border border-gray-300 px-4 center-text">115</td>
      <td class="border border-gray-300 px-4 center-text">245</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc100s406-41f2-325-20</td>
      <td class="border border-gray-300 px-4 center-text">325</td>
      <td class="border border-gray-300 px-4 center-text">135</td>
      <td class="border border-gray-300 px-4 center-text">275</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc100s406-41th2-370-20</td>
      <td class="border border-gray-300 px-4 center-text">370</td>
      <td class="border border-gray-300 px-4 center-text">155</td>
      <td class="border border-gray-300 px-4 center-text">255</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc100s406-41th2-440-20</td>
      <td class="border border-gray-300 px-4 center-text">440</td>
      <td class="border border-gray-300 px-4 center-text">190</td>
      <td class="border border-gray-300 px-4 center-text">380</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc100s406-41th2-440-20</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="3">125</td>
      <td class="border border-gray-300 px-4 center-text">32</td>
      <td class="border border-gray-300 px-4 center-text">28.6</td>
      <td class="border border-gray-300 px-4 center-text">19.7</td>
      <td class="border border-gray-300 px-4 center-text">14.3</td>
      <td class="border border-gray-300 px-4 center-text">230</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">195</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text" rowspan="2">200</td>
      <td class="border border-gray-300 px-4 center-text">MC1258406-2LF2-230-16</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="2">50</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="2">/</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="2">32</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="2">19.1</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="3">50</td>
      <td class="border border-gray-300 px-4 center-text" rowspan="3">8</td>
      <td class="border border-gray-300 px-4 center-text">285</td>
      <td class="border border-gray-300 px-4 center-text">155</td>
      <td class="border border-gray-300 px-4 center-text">255</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">mc125b508-41f2-285-12</td>
      <td class="border border-gray-300 px-4 center-text">356</td>
      <td class="border border-gray-300 px-4 center-text">170</td>
      <td class="border border-gray-300 px-4 center-text">310</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">220</td>
      <td class="border border-gray-300 px-4 center-text">me160s508-21f2-385-8</td>
      <td class="border border-gray-300 px-4 center-text">160</td>
      <td class="border border-gray-300 px-4 center-text">36</td>
      <td class="border border-gray-300 px-4 center-text">36</td>
      <td class="border border-gray-300 px-4 center-text">24</td>
      <td class="border border-gray-300 px-4 center-text">15.7</td>
      <td class="border border-gray-300 px-4 center-text">385</td>
      <td class="border border-gray-300 px-4 center-text">130</td>
      <td class="border border-gray-300 px-4 center-text">330</td>
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
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Roller Chain
            </p>
            <router-link to="/drop-forged-chain">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Drop Forged Chain
              </p>
            </router-link>
            <router-link to="/drag-sprocket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Drag Sprocket
              </p>
            </router-link>
            <router-link to="/plastic-flight-br">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Plastif Flight Attachment (BR)
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

import product from "@/assets/img/spare-parts/roller-chain.png";
import spec from "@/assets/img/spare-parts/roller-chain-spec.png";
import draw from "@/assets/img/spare-parts/roller-chain-draw.png";

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
