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
            DL Bucket
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
                PP/Nylon
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                Designed for chain conveyors with horizontal and vertical
                transmission (overlapping).
              </li>
              <li>Ideal for handling seeds, nuts and food products etc.</li>
              <li>Design Recommendations</li>
              <ul class="list-disc ml-5">
                <li>
                  Dimension “G” is designed by referring to the conveyor chain
                  pitch in the chain conveyors.
                </li>
                <li>
                  Consult our engineer for the installation of DL buckets as
                  various dimensions and figures are needed to be considered.
                </li>
              </ul>
              <li class="font-bold">
                Easy filling/discharging, high strength, agricultural
                application.
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
          <table class="table-auto border-collapse border border-gray-300 mt-6">
            <thead>
              <tr class="header-color center-text">
                <th class="border border-gray-300 py-2" rowspan="2">Model</th>
                <th class="border border-gray-300 py-2" colspan="3">
                  Bucket Dimension (mm)
                </th>
                <th class="border border-gray-300 py-2" colspan="3">
                  Capacity (L)
                </th>
              </tr>
              <tr class="header-color center-text">
                <th class="border border-gray-300 py-2">Length A</th>
                <th class="border border-gray-300 py-2">Proj. B</th>
                <th class="border border-gray-300 py-2">Depth C</th>
                <th class="border border-gray-300 py-2">Water Level (Z-Y)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 center-text">DL2412</td>
                <td class="border border-gray-300 px-4 center-text">246</td>
                <td class="border border-gray-300 px-4 center-text">132</td>
                <td class="border border-gray-300 px-4 center-text">61</td>
                <td class="border border-gray-300 px-4 center-text">1.2</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">DL4013</td>
                <td class="border border-gray-300 px-4 center-text">406</td>
                <td class="border border-gray-300 px-4 center-text">133</td>
                <td class="border border-gray-300 px-4 center-text">69</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">DL3115</td>
                <td class="border border-gray-300 px-4 center-text">310</td>
                <td class="border border-gray-300 px-4 center-text">160</td>
                <td class="border border-gray-300 px-4 center-text">78</td>
                <td class="border border-gray-300 px-4 center-text">2.3</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">DL2619</td>
                <td class="border border-gray-300 px-4 center-text">260</td>
                <td class="border border-gray-300 px-4 center-text">190</td>
                <td class="border border-gray-300 px-4 center-text">78.5</td>
                <td class="border border-gray-300 px-4 center-text">2.34</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">DL3219</td>
                <td class="border border-gray-300 px-4 center-text">330</td>
                <td class="border border-gray-300 px-4 center-text">200</td>
                <td class="border border-gray-300 px-4 center-text">110</td>
                <td class="border border-gray-300 px-4 center-text">3.19</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">DL3319</td>
                <td class="border border-gray-300 px-4 center-text">330</td>
                <td class="border border-gray-300 px-4 center-text">198</td>
                <td class="border border-gray-300 px-4 center-text">103</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">DL3821</td>
                <td class="border border-gray-300 px-4 center-text">380</td>
                <td class="border border-gray-300 px-4 center-text">213</td>
                <td class="border border-gray-300 px-4 center-text">125</td>
                <td class="border border-gray-300 px-4 center-text">4.8</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">DL6323</td>
                <td class="border border-gray-300 px-4 center-text">632</td>
                <td class="border border-gray-300 px-4 center-text">236</td>
                <td class="border border-gray-300 px-4 center-text">120</td>
                <td class="border border-gray-300 px-4 center-text">11</td>
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
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              DL Bucket
            </p>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import product from "@/assets/img/spare-parts/dl-bucket.png";
import spec from "@/assets/img/spare-parts/dl-bucket-spec.png";
import params from "@/assets/img/spare-parts/dl-bucket-params.png";

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
  background-color: #286f9b;
  color: white; /* Optional: to make the text color white */
}

.center-text {
  text-align: center;
}
</style>
