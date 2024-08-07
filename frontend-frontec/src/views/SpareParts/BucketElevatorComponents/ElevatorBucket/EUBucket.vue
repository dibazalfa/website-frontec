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
          <router-link to="/elevator-bucket">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            EU Bucket
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
                Features
              </p>
              <p
                class="bg-[#CDCDCD] w-52 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                HDPE/Nylon/pu
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>Shallow bucket for agricultural application.</li>
              <li>
                Ideal for handling grains, feeds, fertilizers, seeds, salt and
                chemicals, etc.
              </li>
              <li class="font-bold">
                Agricultural application, shallow type, high strength.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            specification
          </p>
          <img :src="spec" alt="" class="object-contain mt-6" />
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            parameters
          </p>
          <table class="min-w-full bg-white border mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="px-4 py-2 border" rowspan="2">Model</th>
                <th class="px-4 py-2 border" colspan="3">
                  Bucket Dimension (mm)
                </th>
                <th class="px-4 py-2 border" colspan="4">
                  Mounting Holes (mm)
                </th>
                <th class="px-4 py-2 border" colspan="2">Capacity (L)</th>
              </tr>
              <tr class="bg-[#286F9B] text-white">
                <th class="px-4 py-2 border">Length A</th>
                <th class="px-4 py-2 border">Proj. B</th>
                <th class="px-4 py-2 border">Depth C</th>
                <th class="px-4 py-2 border">From Top D</th>
                <th class="px-4 py-2 border">Hole Centres E</th>
                <th class="px-4 py-2 border">No. of Holes</th>
                <th class="px-4 py-2 border">Hole Diameter</th>
                <th class="px-4 py-2 border">Water Level (Z-Y)</th>
                <th class="px-4 py-2 border">Total Level (X-Y)</th>
              </tr>
            </thead>
            <tbody class="block md:table-row-group">
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">4 x 3</td>
                <td class="px-4 py-2 border">107</td>
                <td class="px-4 py-2 border">91</td>
                <td class="px-4 py-2 border">62</td>
                <td class="px-4 py-2 border">17</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">8</td>
                <td class="px-4 py-2 border">0.21</td>
                <td class="px-4 py-2 border">0.3</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">5 x 4</td>
                <td class="px-4 py-2 border">140</td>
                <td class="px-4 py-2 border">115</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">23</td>
                <td class="px-4 py-2 border">70</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">8</td>
                <td class="px-4 py-2 border">0.52</td>
                <td class="px-4 py-2 border">0.63</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">6 x 4</td>
                <td class="px-4 py-2 border">159</td>
                <td class="px-4 py-2 border">113</td>
                <td class="px-4 py-2 border">77</td>
                <td class="px-4 py-2 border">23</td>
                <td class="px-4 py-2 border">88</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">0.54</td>
                <td class="px-4 py-2 border">0.67</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">7 x 5</td>
                <td class="px-4 py-2 border">188</td>
                <td class="px-4 py-2 border">144</td>
                <td class="px-4 py-2 border">92</td>
                <td class="px-4 py-2 border">30</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">0.96</td>
                <td class="px-4 py-2 border">1.2</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">8 x 5</td>
                <td class="px-4 py-2 border">203</td>
                <td class="px-4 py-2 border">147</td>
                <td class="px-4 py-2 border">111</td>
                <td class="px-4 py-2 border">32</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">1.4</td>
                <td class="px-4 py-2 border">1.96</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">9 x 6</td>
                <td class="px-4 py-2 border">240</td>
                <td class="px-4 py-2 border">172</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">38</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">1.9</td>
                <td class="px-4 py-2 border">2.5</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">11 x 6</td>
                <td class="px-4 py-2 border">290</td>
                <td class="px-4 py-2 border">174</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">36</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">10.5</td>
                <td class="px-4 py-2 border">2.32</td>
                <td class="px-4 py-2 border">3</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">12 x 7</td>
                <td class="px-4 py-2 border">315</td>
                <td class="px-4 py-2 border">188</td>
                <td class="px-4 py-2 border">123</td>
                <td class="px-4 py-2 border">35</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">3.17</td>
                <td class="px-4 py-2 border">4.25</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">14 x 7</td>
                <td class="px-4 py-2 border">370</td>
                <td class="px-4 py-2 border">188</td>
                <td class="px-4 py-2 border">132</td>
                <td class="px-4 py-2 border">35</td>
                <td class="px-4 py-2 border">90</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">3.66</td>
                <td class="px-4 py-2 border">5</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">13 x 8</td>
                <td class="px-4 py-2 border">340</td>
                <td class="px-4 py-2 border">220</td>
                <td class="px-4 py-2 border">138</td>
                <td class="px-4 py-2 border">38</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">10.5</td>
                <td class="px-4 py-2 border">4.47</td>
                <td class="px-4 py-2 border">5.6</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">15 x 8</td>
                <td class="px-4 py-2 border">380</td>
                <td class="px-4 py-2 border">220</td>
                <td class="px-4 py-2 border">142</td>
                <td class="px-4 py-2 border">36</td>
                <td class="px-4 py-2 border">90</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">10.5</td>
                <td class="px-4 py-2 border">4.66</td>
                <td class="px-4 py-2 border">6.3</td>
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
            <router-link to="/elevator-bucket">
              <p class="text-[20px] font-bold p-4 border-b border-black hover:bg-gray-200">
                Elevator Bucket
              </p>
            </router-link>
            <router-link to="/aa-industrial-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                AA Industrial Bucket
              </p>
            </router-link>
            <router-link to="/cc-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                CC Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/d-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                D Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dk-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                DK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dl-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                DL Bucket
              </p>
            </router-link>
            <router-link to="/dm-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                DM Bucket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              EU Bucket
            </p>
            <router-link to="/sk-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                SK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/m-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                M Bucket
              </p>
            </router-link>
            <router-link to="/fabricated-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Fabricated Steel Bucket
              </p>
            </router-link>
            <router-link to="/sm-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                SM Steel Bucket
              </p>
            </router-link>
            <router-link to="/ss-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                SS Steel Bucket
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import product from "@/assets/img/spare-parts/eu-bucket.png";
import spec from "@/assets/img/spare-parts/eu-bucket-spec.png";
import params from "@/assets/img/spare-parts/eu-bucket-params.png";

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
</style>
