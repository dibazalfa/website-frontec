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
          M Bucket
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
              <li>Medium depth buckets for agricultural application.</li>
              <li>
                Ideal for handling grains, feeds, fertilizers, seeds, salt and
                chemicals, etc.
              </li>
              <ul class="list-disc ml-5">
                <li>Minimum bucket spacing: bucket depth “C” +5mm.</li>
                <li>We recommend using “ (Z-Y) +10%” for usable capacity.</li>
                <li>Mounting holes can be customized on request.</li>
                <li>Venting holes are available in 5 patterns on request.</li>
              </ul>
              <li class="font-bold">
                Abrasion resistance, optimum discharge angle, large water level
                for higher capacity.
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
            <tbody>
              <tr>
                <td class="px-4 py-2 border">M1009</td>
                <td class="px-4 py-2 border">105</td>
                <td class="px-4 py-2 border">95</td>
                <td class="px-4 py-2 border">65</td>
                <td class="px-4 py-2 border">20</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">7</td>
                <td class="px-4 py-2 border">0.25</td>
                <td class="px-4 py-2 border">0.33</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M1312</td>
                <td class="px-4 py-2 border">135</td>
                <td class="px-4 py-2 border">125</td>
                <td class="px-4 py-2 border">85</td>
                <td class="px-4 py-2 border">25</td>
                <td class="px-4 py-2 border">70</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">7</td>
                <td class="px-4 py-2 border">0.5</td>
                <td class="px-4 py-2 border">0.7</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M1514</td>
                <td class="px-4 py-2 border">160</td>
                <td class="px-4 py-2 border">150</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">25</td>
                <td class="px-4 py-2 border">70</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">8.5</td>
                <td class="px-4 py-2 border">1.15</td>
                <td class="px-4 py-2 border">1.4</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M1814</td>
                <td class="px-4 py-2 border">185</td>
                <td class="px-4 py-2 border">150</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">25</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">1.35</td>
                <td class="px-4 py-2 border">1.75</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M2014</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">155</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">25</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">1.58</td>
                <td class="px-4 py-2 border">1.98</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M2814</td>
                <td class="px-4 py-2 border">285</td>
                <td class="px-4 py-2 border">150</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">25</td>
                <td class="px-4 py-2 border">90</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">2.2</td>
                <td class="px-4 py-2 border">2.6</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M2316</td>
                <td class="px-4 py-2 border">250</td>
                <td class="px-4 py-2 border">175</td>
                <td class="px-4 py-2 border">130</td>
                <td class="px-4 py-2 border">35</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">2.3</td>
                <td class="px-4 py-2 border">3</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M2816</td>
                <td class="px-4 py-2 border">290</td>
                <td class="px-4 py-2 border">175</td>
                <td class="px-4 py-2 border">130</td>
                <td class="px-4 py-2 border">35</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">2.7</td>
                <td class="px-4 py-2 border">3.5</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M2818</td>
                <td class="px-4 py-2 border">290</td>
                <td class="px-4 py-2 border">185</td>
                <td class="px-4 py-2 border">140</td>
                <td class="px-4 py-2 border">35</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">3.11</td>
                <td class="px-4 py-2 border">4.01</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M3018</td>
                <td class="px-4 py-2 border">318</td>
                <td class="px-4 py-2 border">185</td>
                <td class="px-4 py-2 border">140</td>
                <td class="px-4 py-2 border">36</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">3.43</td>
                <td class="px-4 py-2 border">4.42</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M3021</td>
                <td class="px-4 py-2 border">310</td>
                <td class="px-4 py-2 border">230</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">40</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">5</td>
                <td class="px-4 py-2 border">6.5</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M3321</td>
                <td class="px-4 py-2 border">340</td>
                <td class="px-4 py-2 border">230</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">40</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">5.4</td>
                <td class="px-4 py-2 border">7.1</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M3721</td>
                <td class="px-4 py-2 border">380</td>
                <td class="px-4 py-2 border">230</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">40</td>
                <td class="px-4 py-2 border">90</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">6.2</td>
                <td class="px-4 py-2 border">8.1</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M4021</td>
                <td class="px-4 py-2 border">410</td>
                <td class="px-4 py-2 border">230</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">40</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">7.1</td>
                <td class="px-4 py-2 border">8.9</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M4421</td>
                <td class="px-4 py-2 border">450</td>
                <td class="px-4 py-2 border">230</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">40</td>
                <td class="px-4 py-2 border">90</td>
                <td class="px-4 py-2 border">5</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">7.5</td>
                <td class="px-4 py-2 border">9.85</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">M5021</td>
                <td class="px-4 py-2 border">520</td>
                <td class="px-4 py-2 border">235</td>
                <td class="px-4 py-2 border">170</td>
                <td class="px-4 py-2 border">40</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">5</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">8.5</td>
                <td class="px-4 py-2 border">10.7</td>
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
            <router-link to="/eu-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                EU Bucket
              </p>
            </router-link>
            <router-link to="/sk-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                SK Heavy Duty Bucket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              M Bucket
            </p>
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
import product from "@/assets/img/spare-parts/m-bucket.png";
import spec from "@/assets/img/spare-parts/m-bucket-spec.png";
import params from "@/assets/img/spare-parts/m-bucket-params.png";

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
