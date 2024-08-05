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
        AA Industrial Bucket
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
                class="bg-[#CDCDCD] w-36 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                HDPE/Nylon
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                AA type plastic bucket is designed to replace traditional steel
                buckets. Ideal for conveying ore, sand, gravel, coal,
                fertilizer, clay, salt, limestone, cement etc.
              </li>
              <li class="font-bold">
                Heat resistant, abrasion resistant, high strength
              </li>
              <li>Design Recommendations</li>
              <ul class="list-disc ml-6">
                <li>
                  Recommended minimum bucket spacing: bucket projection “B” × 2.
                </li>
                <li>Mounting holes can be customized on request.</li>
                <li>Venting holes are available in 5 patterns on request.</li>
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
          <table class="table-auto border-collapse border border-gray-300 mt-6">
          <thead>
            <tr class="header-color center-text">
              <th class="border border-gray-300 px-4 py-2" rowspan="2">No</th>
              <th class="border border-gray-300 px-4 py-2" rowspan="2">Model</th>
              <th class="border border-gray-300 px-4 py-2" colspan="3">Bucket Dimension (mm)</th>
              <th class="border border-gray-300 px-4 py-2" colspan="3">Capacity (L)</th>
            </tr>
            <tr class="header-color center-text">
              <th class="border border-gray-300 px-4 py-2">Length A</th>
              <th class="border border-gray-300 px-4 py-2">Proj. B</th>
              <th class="border border-gray-300 px-4 py-2">Depth C</th>
              <th class="border border-gray-300 px-4 py-2">Water Level (Z-Y)</th>
              <th class="border border-gray-300 px-4 py-2">Total Level (X-Y)+10%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">1</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA4X3</td>
              <td class="border border-gray-300 px-4 py-2 center-text">103</td>
              <td class="border border-gray-300 px-4 py-2 center-text">78</td>
              <td class="border border-gray-300 px-4 py-2 center-text">78</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.21</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.23</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">2</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA5X4</td>
              <td class="border border-gray-300 px-4 py-2 center-text">134</td>
              <td class="border border-gray-300 px-4 py-2 center-text">105</td>
              <td class="border border-gray-300 px-4 py-2 center-text"> 105</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.57</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.63</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">3</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA6X4</td>
              <td class="border border-gray-300 px-4 py-2 center-text">160</td>
              <td class="border border-gray-300 px-4 py-2 center-text">105</td>
              <td class="border border-gray-300 px-4 py-2 center-text"> 105</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.68</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.75</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">4</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA7X4</td>
              <td class="border border-gray-300 px-4 py-2 center-text">184</td>
              <td class="border border-gray-300 px-4 py-2 center-text">105</td>
              <td class="border border-gray-300 px-4 py-2 center-text">105</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.84</td>
              <td class="border border-gray-300 px-4 py-2 center-text">0.92</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">5</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA7X5</td>
              <td class="border border-gray-300 px-4 py-2 center-text">180</td>
              <td class="border border-gray-300 px-4 py-2 center-text">130</td>
              <td class="border border-gray-300 px-4 py-2 center-text">134</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1.26</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1.39</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">6</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA8X5</td>
              <td class="border border-gray-300 px-4 py-2 center-text">206</td>
              <td class="border border-gray-300 px-4 py-2 center-text">130</td>
              <td class="border border-gray-300 px-4 py-2 center-text">134</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1.47</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1.62</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">7</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA9X5</td>
              <td class="border border-gray-300 px-4 py-2 center-text">232</td>
              <td class="border border-gray-300 px-4 py-2 center-text">130</td>
              <td class="border border-gray-300 px-4 py-2 center-text">134</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1.66</td>
              <td class="border border-gray-300 px-4 py-2 center-text">1.83</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">8</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA9X6</td>
              <td class="border border-gray-300 px-4 py-2 center-text">238</td>
              <td class="border border-gray-300 px-4 py-2 center-text">156</td>
              <td class="border border-gray-300 px-4 py-2 center-text">156</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.17</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.39</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">9</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA10X6</td>
              <td class="border border-gray-300 px-4 py-2 center-text">264</td>
              <td class="border border-gray-300 px-4 py-2 center-text">156</td>
              <td class="border border-gray-300 px-4 py-2 center-text">156</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.43</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.67</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">10</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA11X6</td>
              <td class="border border-gray-300 px-4 py-2 center-text">290</td>
              <td class="border border-gray-300 px-4 py-2 center-text">156</td>
              <td class="border border-gray-300 px-4 py-2 center-text">156</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.68</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.95</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">11</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA12X6</td>
              <td class="border border-gray-300 px-4 py-2 center-text">320</td>
              <td class="border border-gray-300 px-4 py-2 center-text">165</td>
              <td class="border border-gray-300 px-4 py-2 center-text">160</td>
              <td class="border border-gray-300 px-4 py-2 center-text">3.08</td>
              <td class="border border-gray-300 px-4 py-2 center-text">3.39</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">12</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA12X7</td>
              <td class="border border-gray-300 px-4 py-2 center-text">314</td>
              <td class="border border-gray-300 px-4 py-2 center-text">180</td>
              <td class="border border-gray-300 px-4 py-2 center-text"> 180</td>
              <td class="border border-gray-300 px-4 py-2 center-text">4</td>
              <td class="border border-gray-300 px-4 py-2 center-text">4.4</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">13</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA14X7</td>
              <td class="border border-gray-300 px-4 py-2 center-text">365</td>
              <td class="border border-gray-300 px-4 py-2 center-text">180</td>
              <td class="border border-gray-300 px-4 py-2 center-text">180</td>
              <td class="border border-gray-300 px-4 py-2 center-text">4.89</td>
              <td class="border border-gray-300 px-4 py-2 center-text">5.38</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">14</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA14X8</td>
              <td class="border border-gray-300 px-4 py-2 center-text">365</td>
              <td class="border border-gray-300 px-4 py-2 center-text">206</td>
              <td class="border border-gray-300 px-4 py-2 center-text">206</td>
              <td class="border border-gray-300 px-4 py-2 center-text">5.8</td>
              <td class="border border-gray-300 px-4 py-2 center-text">6.38</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">15</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA16X8</td>
              <td class="border border-gray-300 px-4 py-2 center-text">416</td>
              <td class="border border-gray-300 px-4 py-2 center-text">206</td>
              <td class="border border-gray-300 px-4 py-2 center-text">206</td>
              <td class="border border-gray-300 px-4 py-2 center-text">6.66</td>
              <td class="border border-gray-300 px-4 py-2 center-text">7.33</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">16</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA18X8</td>
              <td class="border border-gray-300 px-4 py-2 center-text">460</td>
              <td class="border border-gray-300 px-4 py-2 center-text">206</td>
              <td class="border border-gray-300 px-4 py-2 center-text">206</td>
              <td class="border border-gray-300 px-4 py-2 center-text">7.66</td>
              <td class="border border-gray-300 px-4 py-2 center-text">8.43</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">17</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AA18X10</td>
              <td class="border border-gray-300 px-4 py-2 center-text">460</td>
              <td class="border border-gray-300 px-4 py-2 center-text">258</td>
              <td class="border border-gray-300 px-4 py-2 center-text">258</td>
              <td class="border border-gray-300 px-4 py-2 center-text">11</td>
              <td class="border border-gray-300 px-4 py-2 center-text">12.1</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">18</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AS13X7</td>
              <td class="border border-gray-300 px-4 py-2 center-text">340</td>
              <td class="border border-gray-300 px-4 py-2 center-text">195</td>
              <td class="border border-gray-300 px-4 py-2 center-text">200</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.17</td>
              <td class="border border-gray-300 px-4 py-2 center-text">2.28</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 center-text">19</td>
              <td class="border border-gray-300 px-4 py-2 center-text">AS18X7</td>
              <td class="border border-gray-300 px-4 py-2 center-text">470</td>
              <td class="border border-gray-300 px-4 py-2 center-text">175</td>
              <td class="border border-gray-300 px-4 py-2 center-text">185</td>
              <td class="border border-gray-300 px-4 py-2 center-text">4</td>
              <td class="border border-gray-300 px-4 py-2 center-text">4.4</td>
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
              <p class="text-[20px] font-bold p-4 border-b border-black">
                Elevator Bucket
              </p>
            </router-link>
            <router-link to="/aa-industrial-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
              >
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import product from "@/assets/img/spare-parts/aa-industrial.png";
import spec from "@/assets/img/spare-parts/aa-spec.png";
import params from "@/assets/img/spare-parts/aa-params.png";

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

.header-color {
    background-color: #286F9B ;
    color: white; /* Optional: to make the text color white */
  }

.center-text {
    text-align: center;
  }

</style>
