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
            Fabricated Steel Bucket
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]"
          >
            <div class="flex flex-col">
              <div class="flex flex-row">
                <p
                  class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
                >
                  Features
                </p>
                <p
                  class="bg-[#CDCDCD] w-52 px-6 py-3 ml-3 rounded-full text-center uppercase shadow-lg"
                >
                  stainless steel
                </p>
              </div>
              <div class="flex flex-row mt-3">
                <p
                  class="bg-[#CDCDCD] w-52 py-3 rounded-full text-center uppercase shadow-lg"
                >
                  carbon steel
                </p>
                <p
                  class="bg-[#CDCDCD] w-52 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
                >
                  abrasion res steel
                </p>
              </div>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                Ideal for high-temperature applications or when extremely sharp
                products are carried in buckets.
              </li>
              <li>Fully customizable size, shape and material.</li>
              <li>Design Recommendations</li>
              <ul class="list-disc ml-5">
                <li>Minimum bucket spacing: bucket depth “C” +10mm.</li>
                <li>Mounting holes can be customized on request</li>
                <li>Venting holes are available in 5 patterns on request</li>
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
              <p
                class="text-[20px] font-bold p-4 border-b border-black hover:bg-gray-200"
              >
                Elevator Bucket
              </p>
            </router-link>
            <router-link to="/aa-industrial-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                AA Industrial Bucket
              </p>
            </router-link>
            <router-link to="/cc-heavy-duty-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                CC Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/d-heavy-duty-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                D Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dk-heavy-duty-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                DK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dl-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                DL Bucket
              </p>
            </router-link>
            <router-link to="/dm-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                DM Bucket
              </p>
            </router-link>
            <router-link to="/eu-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                EU Bucket
              </p>
            </router-link>
            <router-link to="/sk-heavy-duty-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                SK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/m-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                M Bucket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Fabricated Steel Bucket
            </p>
            <router-link to="/sm-steel-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                SM Steel Bucket
              </p>
            </router-link>
            <router-link to="/ss-steel-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
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
import product from "@/assets/img/spare-parts/fabricated-steel.png";
import spec from "@/assets/img/spare-parts/fabricated-steel-spec.png";

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
