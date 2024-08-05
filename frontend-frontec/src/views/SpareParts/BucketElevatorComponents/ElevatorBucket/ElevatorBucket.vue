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
        <!-- Main content goes here -->
        <div class="flex items-center mt-7">
          <router-link to="/spare-parts">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Elevator Bucket
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/aa-industrial-bucket">
            <img :src="bucket1" alt="" class="object-contain hover:scale-105 transform transition-transform duration-300" />
          </router-link>
          <router-link to="/cc-heavy-duty-bucket">
            <img :src="bucket2" alt="" class="object-contain md:ml-12 hover:scale-105 transform transition-transform duration-300" />
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-10">
          <router-link to="/dk-heavy-duty-bucket">
            <img :src="bucket3" alt="" class="object-contain hover:scale-105 transform transition-transform duration-300" />
          </router-link>
          <router-link to="/dl-bucket">
            <img :src="bucket4" alt="" class="object-contain md:ml-12 hover:scale-105 transform transition-transform duration-300" />
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-10">
          <router-link to="/dm-bucket">
            <img :src="bucket5" alt="" class="object-contain hover:scale-105 transform transition-transform duration-300" />
          </router-link>
          <router-link to="/eu-bucket">
            <img :src="bucket6" alt="" class="object-contain md:ml-12 hover:scale-105 transform transition-transform duration-300" />
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-10">
          <router-link to="/sk-heavy-duty-bucket">
            <img :src="bucket7" alt="" class="object-contain hover:scale-105 transform transition-transform duration-300" />
          </router-link>
          <router-link to="/m-bucket">
            <img :src="bucket8" alt="" class="object-contain md:ml-12 hover:scale-105 transform transition-transform duration-300" />
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-10">
          <router-link to="/fabricated-steel-bucket">
            <img :src="bucket9" alt="" class="object-contain hover:scale-105 transform transition-transform duration-300" />
          </router-link>
          <router-link to="/sm-steel-bucket">
            <img :src="bucket10" alt="" class="object-contain md:ml-12 hover:scale-105 transform transition-transform duration-300" />
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-10">
          <router-link to="/ss-steel-bucket">
            <img :src="bucket11" alt="" class="object-contain hover:scale-105 transform transition-transform duration-300" />
          </router-link>
          <router-link to="/d-heavy-duty-bucket">
            <img :src="bucket12" alt="" class="object-contain md:ml-12 hover:scale-105 transform transition-transform duration-300" />
          </router-link>
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
              Bucket Elevator Components
            </p>
            <router-link to="/elevator-belt">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Elevator Belt
              </p>
            </router-link>
            <router-link to="/bolt-sets">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Bolt Sets & Fastener
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Elevator Bucket
            </p>
            <router-link to="/pulley-slide-lagging">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Pulley Slide Lagging
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

import bucket1 from "@/assets/img/spare-parts/bucket1.png";
import bucket2 from "@/assets/img/spare-parts/bucket2.png";
import bucket3 from "@/assets/img/spare-parts/bucket3.png";
import bucket4 from "@/assets/img/spare-parts/bucket4.png";
import bucket5 from "@/assets/img/spare-parts/bucket5.png";
import bucket6 from "@/assets/img/spare-parts/bucket6.png";
import bucket7 from "@/assets/img/spare-parts/bucket7.png";
import bucket8 from "@/assets/img/spare-parts/bucket8.png";
import bucket9 from "@/assets/img/spare-parts/bucket9.png";
import bucket10 from "@/assets/img/spare-parts/bucket10.png";
import bucket11 from "@/assets/img/spare-parts/bucket11.png";
import bucket12 from "@/assets/img/spare-parts/bucket12.png";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


export default {
  components: {
    AppHeader,
    Footer,
    FontAwesomeIcon
  },
  data() {
    return {
      background,
      sanwei,
      bucket1,
      bucket2,
      bucket3,
      bucket4,
      bucket5,
      bucket6,
      bucket7,
      bucket8,
      bucket9,
      bucket10,
      bucket11,
      bucket12,
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
