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
          DM Bucket
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
                Features
              </p>
              <p
                class="bg-[#CDCDCD] w-52 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                HDPE/Nylon/pu
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                For low-speed, continuous discharge, agricultural bucket
                elevators and materials require gentle handling. Belt speed is
                between 0.5 to 0.8 m/s.
              </li>
              <li>Suitable for products that are fragile or easily damaged.</li>
              <li>
                Ideal for handling grains, feed, food products and seeds, etc.
              </li>
              <li>Design Recommendations</li>
              <ul class="list-disc ml-5">
                <li>Minimum bucket spacing: bucket depth “C” +2mm.</li>
                <li>We recommend using “L” for usable capacity.</li>
                <li>Mounting holes can be customized on request.</li>
              </ul>
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
                <td class="px-4 py-2 border">DM1010</td>
                <td class="px-4 py-2 border">105</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">129</td>
                <td class="px-4 py-2 border">48</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">0.53</td>
                <td class="px-4 py-2 border">0.7</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM1310</td>
                <td class="px-4 py-2 border">138</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">128</td>
                <td class="px-4 py-2 border">37</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">7</td>
                <td class="px-4 py-2 border">0.62</td>
                <td class="px-4 py-2 border">0.88</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM1413</td>
                <td class="px-4 py-2 border">143</td>
                <td class="px-4 py-2 border">143</td>
                <td class="px-4 py-2 border">172</td>
                <td class="px-4 py-2 border">52</td>
                <td class="px-4 py-2 border">93</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">0.93</td>
                <td class="px-4 py-2 border">1.6</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM2313</td>
                <td class="px-4 py-2 border">230</td>
                <td class="px-4 py-2 border">138</td>
                <td class="px-4 py-2 border">126</td>
                <td class="px-4 py-2 border">44</td>
                <td class="px-4 py-2 border">125</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">7</td>
                <td class="px-4 py-2 border">1.54</td>
                <td class="px-4 py-2 border">2.21</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM1715</td>
                <td class="px-4 py-2 border">175</td>
                <td class="px-4 py-2 border">156</td>
                <td class="px-4 py-2 border">176</td>
                <td class="px-4 py-2 border">52</td>
                <td class="px-4 py-2 border">113</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">1.6</td>
                <td class="px-4 py-2 border">2.4</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM2517</td>
                <td class="px-4 py-2 border">258</td>
                <td class="px-4 py-2 border">172</td>
                <td class="px-4 py-2 border">183</td>
                <td class="px-4 py-2 border">52</td>
                <td class="px-4 py-2 border">93</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">3.4</td>
                <td class="px-4 py-2 border">4.1</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM2917</td>
                <td class="px-4 py-2 border">296</td>
                <td class="px-4 py-2 border">173</td>
                <td class="px-4 py-2 border">197</td>
                <td class="px-4 py-2 border">61</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">5.26</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM2419</td>
                <td class="px-4 py-2 border">240</td>
                <td class="px-4 py-2 border">190</td>
                <td class="px-4 py-2 border">200</td>
                <td class="px-4 py-2 border">65</td>
                <td class="px-4 py-2 border">90</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">3.52</td>
                <td class="px-4 py-2 border">4.73</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">▲DM2919</td>
                <td class="px-4 py-2 border">290</td>
                <td class="px-4 py-2 border">199</td>
                <td class="px-4 py-2 border">200</td>
                <td class="px-4 py-2 border">53</td>
                <td class="px-4 py-2 border">92</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">2.8</td>
                <td class="px-4 py-2 border">5.3</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM2921</td>
                <td class="px-4 py-2 border">294</td>
                <td class="px-4 py-2 border">210</td>
                <td class="px-4 py-2 border">200</td>
                <td class="px-4 py-2 border">55</td>
                <td class="px-4 py-2 border">113</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">4.33</td>
                <td class="px-4 py-2 border">6</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM2118</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">178</td>
                <td class="px-4 py-2 border">195</td>
                <td class="px-4 py-2 border">65</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">2.5</td>
                <td class="px-4 py-2 border">3.78</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM2918</td>
                <td class="px-4 py-2 border">292</td>
                <td class="px-4 py-2 border">178</td>
                <td class="px-4 py-2 border">195</td>
                <td class="px-4 py-2 border">65</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">3.44</td>
                <td class="px-4 py-2 border">5.25</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM3321</td>
                <td class="px-4 py-2 border">337</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">66</td>
                <td class="px-4 py-2 border">85</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">5.38</td>
                <td class="px-4 py-2 border">8.16</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM3921</td>
                <td class="px-4 py-2 border">395</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">66</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">6.1</td>
                <td class="px-4 py-2 border">9.25</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">DM4721</td>
                <td class="px-4 py-2 border">480</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">66</td>
                <td class="px-4 py-2 border">95</td>
                <td class="px-4 py-2 border">5</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">7.51</td>
                <td class="px-4 py-2 border">11.38</td>
              </tr>
              <tr class="border border-gray-300 md:border-none md:table-row">
                <td class="px-4 py-2 border">▲DM4721G</td>
                <td class="px-4 py-2 border">480</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">66</td>
                <td class="px-4 py-2 border">95</td>
                <td class="px-4 py-2 border">5</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">7.51</td>
                <td class="px-4 py-2 border">11.38</td>
              </tr>
            </tbody>
          </table>
          <img :src="params" alt="" class="object-contain mt-6" />
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
              <p class="text-[20px] font-bold p-4 border-b border-black">
                Elevator Bucket
              </p>
            </router-link>
            <router-link to="/aa-industrial-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                AA Industrial Bucket
              </p>
            </router-link>
            <router-link to="/cc-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                CC Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/d-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                D Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dk-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                DK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dl-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                DL Bucket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              DM Bucket
            </p>
            <router-link to="/eu-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                EU Bucket
              </p>
            </router-link>
            <router-link to="/sk-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                SK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/m-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                M Bucket
              </p>
            </router-link>
            <router-link to="/fabricated-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Fabricated Steel Bucket
              </p>
            </router-link>
            <router-link to="/sm-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                SM Steel Bucket
              </p>
            </router-link>
            <router-link to="/ss-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
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

import product from "@/assets/img/spare-parts/dm-bucket.png";
import spec from "@/assets/img/spare-parts/dm-bucket-spec.png";
import params from "@/assets/img/spare-parts/dm-bucket-params.png";

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
