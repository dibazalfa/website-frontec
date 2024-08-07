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
          SS Steel Bucket
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]"
          >
            <div class="flex flex-col">
              <p
                class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
              >
                Features
              </p>
              <div class="flex flex-row mt-3">
                <p
                  class="bg-[#CDCDCD] w-48 py-3 rounded-full text-center uppercase shadow-lg"
                >
                  carbon steel
                </p>
                <p
                  class="bg-[#CDCDCD] w-48 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
                >
                  stainless steel
                </p>
              </div>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                Shallow seamless pressed steel buckets without welds or joints.
                Smooth inner and outer surfaces facilitate material discharging.
                Excellent overall strength.
              </li>
              <li>Design Recommendations.</li>
              <ul class="list-disc ml-5">
                <li>
                  Minimum bucket spacing: bucket depth ”C” +5mm and minimum
                  bucket spacing: bucket projection “B” +25mm.
                </li>
                <li>Special thickness is available on request.</li>
                <li>Venting holes are available in 5 patterns on request..</li>
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
          <table class="min-w-full bg-white border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="px-2 py-2 border border-gray-300" rowspan="2">Model</th>
                <th class="px-2 py-2 border border-gray-300" colspan="4">
                  Bucket Dimension (mm)
                </th>
                <th class="px-2 py-2 border border-gray-300" colspan="4">
                  Mounting Holes (mm)
                </th>
                <th class="px-2 py-2 border border-gray-300" colspan="2">
                  Capacity (L)
                </th>
              </tr>
              <tr class="bg-[#286F9B] text-white">
                <th class="px-2 py-2 border border-gray-300">Length A</th>
                <th class="px-2 py-2 border border-gray-300">Proj. B</th>
                <th class="px-2 py-2 border border-gray-300">Depth C</th>
                <th class="px-2 py-2 border border-gray-300">Thickness</th>
                <th class="px-2 py-2 border border-gray-300">From Top D</th>
                <th class="px-2 py-2 border border-gray-300">Hole Centres E</th>
                <th class="px-2 py-2 border border-gray-300">No. of Holes</th>
                <th class="px-2 py-2 border border-gray-300">Hole Diameter</th>
                <th class="px-2 py-2 border border-gray-300">
                  Water Level (Z-Y)
                </th>
                <th class="px-2 py-2 border border-gray-300">
                  Total Level (X-Y)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS1009</td>
                <td class="px-4 py-2 border border-gray-300">106</td>
                <td class="px-4 py-2 border border-gray-300">89</td>
                <td class="px-4 py-2 border border-gray-300">60</td>
                <td class="px-4 py-2 border border-gray-300">1</td>
                <td class="px-4 py-2 border border-gray-300">20</td>
                <td class="px-4 py-2 border border-gray-300">50</td>
                <td class="px-4 py-2 border border-gray-300">2</td>
                <td class="px-4 py-2 border border-gray-300">9</td>
                <td class="px-4 py-2 border border-gray-300">0.19</td>
                <td class="px-4 py-2 border border-gray-300">0.29</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS1312</td>
                <td class="px-4 py-2 border border-gray-300">140</td>
                <td class="px-4 py-2 border border-gray-300">115</td>
                <td class="px-4 py-2 border border-gray-300">78</td>
                <td class="px-4 py-2 border border-gray-300">1.0-1.5</td>
                <td class="px-4 py-2 border border-gray-300">22</td>
                <td class="px-4 py-2 border border-gray-300">70</td>
                <td class="px-4 py-2 border border-gray-300">2</td>
                <td class="px-4 py-2 border border-gray-300">9</td>
                <td class="px-4 py-2 border border-gray-300">0.41</td>
                <td class="px-4 py-2 border border-gray-300">0.61</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS1814</td>
                <td class="px-4 py-2 border border-gray-300">188</td>
                <td class="px-4 py-2 border border-gray-300">140</td>
                <td class="px-4 py-2 border border-gray-300">92</td>
                <td class="px-4 py-2 border border-gray-300">1.0-1.5</td>
                <td class="px-4 py-2 border border-gray-300">28</td>
                <td class="px-4 py-2 border border-gray-300">100</td>
                <td class="px-4 py-2 border border-gray-300">2</td>
                <td class="px-4 py-2 border border-gray-300">9</td>
                <td class="px-4 py-2 border border-gray-300">0.9</td>
                <td class="px-4 py-2 border border-gray-300">1.29</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS2314</td>
                <td class="px-4 py-2 border border-gray-300">237</td>
                <td class="px-4 py-2 border border-gray-300">142</td>
                <td class="px-4 py-2 border border-gray-300">92</td>
                <td class="px-4 py-2 border border-gray-300">1.0-1.5</td>
                <td class="px-4 py-2 border border-gray-300">28</td>
                <td class="px-4 py-2 border border-gray-300">120</td>
                <td class="px-4 py-2 border border-gray-300">2</td>
                <td class="px-4 py-2 border border-gray-300">9</td>
                <td class="px-4 py-2 border border-gray-300">1.26</td>
                <td class="px-4 py-2 border border-gray-300">1.7</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS2316</td>
                <td class="px-4 py-2 border border-gray-300">238</td>
                <td class="px-4 py-2 border border-gray-300">168</td>
                <td class="px-4 py-2 border border-gray-300">108</td>
                <td class="px-4 py-2 border border-gray-300">1.0-1.5</td>
                <td class="px-4 py-2 border border-gray-300">35</td>
                <td class="px-4 py-2 border border-gray-300">120</td>
                <td class="px-4 py-2 border border-gray-300">2</td>
                <td class="px-4 py-2 border border-gray-300">9</td>
                <td class="px-4 py-2 border border-gray-300">1.65</td>
                <td class="px-4 py-2 border border-gray-300">2.25</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS2814</td>
                <td class="px-4 py-2 border border-gray-300">287</td>
                <td class="px-4 py-2 border border-gray-300">142</td>
                <td class="px-4 py-2 border border-gray-300">92</td>
                <td class="px-4 py-2 border border-gray-300">1.5-2.0</td>
                <td class="px-4 py-2 border border-gray-300">28</td>
                <td class="px-4 py-2 border border-gray-300">90</td>
                <td class="px-4 py-2 border border-gray-300">3</td>
                <td class="px-4 py-2 border border-gray-300">9</td>
                <td class="px-4 py-2 border border-gray-300">1.56</td>
                <td class="px-4 py-2 border border-gray-300">2.11</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS2816</td>
                <td class="px-4 py-2 border border-gray-300">289</td>
                <td class="px-4 py-2 border border-gray-300">168</td>
                <td class="px-4 py-2 border border-gray-300">108</td>
                <td class="px-4 py-2 border border-gray-300">1.5-2.0</td>
                <td class="px-4 py-2 border border-gray-300">38</td>
                <td class="px-4 py-2 border border-gray-300">80</td>
                <td class="px-4 py-2 border border-gray-300">3</td>
                <td class="px-4 py-2 border border-gray-300">11</td>
                <td class="px-4 py-2 border border-gray-300">2.08</td>
                <td class="px-4 py-2 border border-gray-300">2.91</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS3018</td>
                <td class="px-4 py-2 border border-gray-300">308</td>
                <td class="px-4 py-2 border border-gray-300">185</td>
                <td class="px-4 py-2 border border-gray-300">116</td>
                <td class="px-4 py-2 border border-gray-300">2.0-2.5</td>
                <td class="px-4 py-2 border border-gray-300">35</td>
                <td class="px-4 py-2 border border-gray-300">100</td>
                <td class="px-4 py-2 border border-gray-300">3</td>
                <td class="px-4 py-2 border border-gray-300">11</td>
                <td class="px-4 py-2 border border-gray-300">2.46</td>
                <td class="px-4 py-2 border border-gray-300">3.66</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS3316</td>
                <td class="px-4 py-2 border border-gray-300">330</td>
                <td class="px-4 py-2 border border-gray-300">165</td>
                <td class="px-4 py-2 border border-gray-300">108</td>
                <td class="px-4 py-2 border border-gray-300">2.0-2.5</td>
                <td class="px-4 py-2 border border-gray-300">38</td>
                <td class="px-4 py-2 border border-gray-300">100</td>
                <td class="px-4 py-2 border border-gray-300">3</td>
                <td class="px-4 py-2 border border-gray-300">9</td>
                <td class="px-4 py-2 border border-gray-300">2.41</td>
                <td class="px-4 py-2 border border-gray-300">3.3</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS3021</td>
                <td class="px-4 py-2 border border-gray-300">310</td>
                <td class="px-4 py-2 border border-gray-300">217</td>
                <td class="px-4 py-2 border border-gray-300">140</td>
                <td class="px-4 py-2 border border-gray-300">2.0-2.5</td>
                <td class="px-4 py-2 border border-gray-300">38</td>
                <td class="px-4 py-2 border border-gray-300">100</td>
                <td class="px-4 py-2 border border-gray-300">3</td>
                <td class="px-4 py-2 border border-gray-300">11</td>
                <td class="px-4 py-2 border border-gray-300">4</td>
                <td class="px-4 py-2 border border-gray-300">5.5</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS3321</td>
                <td class="px-4 py-2 border border-gray-300">340</td>
                <td class="px-4 py-2 border border-gray-300">218</td>
                <td class="px-4 py-2 border border-gray-300">130</td>
                <td class="px-4 py-2 border border-gray-300">2.0-2.5</td>
                <td class="px-4 py-2 border border-gray-300">38</td>
                <td class="px-4 py-2 border border-gray-300">120</td>
                <td class="px-4 py-2 border border-gray-300">3</td>
                <td class="px-4 py-2 border border-gray-300">11</td>
                <td class="px-4 py-2 border border-gray-300">3.92</td>
                <td class="px-4 py-2 border border-gray-300">5.51</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS3721</td>
                <td class="px-4 py-2 border border-gray-300">384</td>
                <td class="px-4 py-2 border border-gray-300">218</td>
                <td class="px-4 py-2 border border-gray-300">130</td>
                <td class="px-4 py-2 border border-gray-300">2.0-2.5</td>
                <td class="px-4 py-2 border border-gray-300">38</td>
                <td class="px-4 py-2 border border-gray-300">89</td>
                <td class="px-4 py-2 border border-gray-300">4</td>
                <td class="px-4 py-2 border border-gray-300">11</td>
                <td class="px-4 py-2 border border-gray-300">4.18</td>
                <td class="px-4 py-2 border border-gray-300">6.18</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS4521</td>
                <td class="px-4 py-2 border border-gray-300">466</td>
                <td class="px-4 py-2 border border-gray-300">216</td>
                <td class="px-4 py-2 border border-gray-300">130</td>
                <td class="px-4 py-2 border border-gray-300">2.0-2.5</td>
                <td class="px-4 py-2 border border-gray-300">38</td>
                <td class="px-4 py-2 border border-gray-300">89</td>
                <td class="px-4 py-2 border border-gray-300">5</td>
                <td class="px-4 py-2 border border-gray-300">11</td>
                <td class="px-4 py-2 border border-gray-300">5.59</td>
                <td class="px-4 py-2 border border-gray-300">8</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS4626</td>
                <td class="px-4 py-2 border border-gray-300">465</td>
                <td class="px-4 py-2 border border-gray-300">260</td>
                <td class="px-4 py-2 border border-gray-300">170</td>
                <td class="px-4 py-2 border border-gray-300">2.0-2.5</td>
                <td class="px-4 py-2 border border-gray-300">50</td>
                <td class="px-4 py-2 border border-gray-300">95</td>
                <td class="px-4 py-2 border border-gray-300">5</td>
                <td class="px-4 py-2 border border-gray-300">11</td>
                <td class="px-4 py-2 border border-gray-300">7</td>
                <td class="px-4 py-2 border border-gray-300">10.7</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border border-gray-300">SS5626</td>
                <td class="px-4 py-2 border border-gray-300">565</td>
                <td class="px-4 py-2 border border-gray-300">265</td>
                <td class="px-4 py-2 border border-gray-300">170</td>
                <td class="px-4 py-2 border border-gray-300">2.0-2.5</td>
                <td class="px-4 py-2 border border-gray-300">50</td>
                <td class="px-4 py-2 border border-gray-300">110</td>
                <td class="px-4 py-2 border border-gray-300">5</td>
                <td class="px-4 py-2 border border-gray-300">11</td>
                <td class="px-4 py-2 border border-gray-300">10.5</td>
                <td class="px-4 py-2 border border-gray-300">15</td>
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
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              SS Steel Bucket
            </p>
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
import product from "@/assets/img/spare-parts/ss-steel.png";
import spec from "@/assets/img/spare-parts/ss-steel-spec.png";
import params from "@/assets/img/spare-parts/ss-steel-params.png";

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
