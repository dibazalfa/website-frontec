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
        <p class="text-[40px] mt-7 text-[#286F9B] font-bold text-shadow-md">
          Elevator Belt
        </p>
        <div class="flex flex-col md:flex-row mt-12">
          <router-link to="/pvc-solid-woven">
            <img :src="pvc" alt="" class="object-contain" />
          </router-link>
          <router-link to="/rubber-belt">
            <img :src="rubber" alt="" class="object-contain md:ml-16" />
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row mt-10">
          <router-link to="/oil-fire">
            <img :src="oilFire" alt="" class="object-contain" />
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
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Elevator Belt
            </p>
            <router-link to="/bolt-sets">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Bolt Sets & Fastener
              </p>
            </router-link>
            <router-link to="/elevator-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Elevator Bucket
              </p>
            </router-link>
            <router-link to="/pulley-slide-lagging">
              <p class="text-[18px] px-4 py-8 border-b border-black">
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
import pvc from "@/assets/img/spare-parts/pvc-solid.png";
import rubber from "@/assets/img/spare-parts/rubber-elevator.png";
import oilFire from "@/assets/img/spare-parts/oil-fire.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      background,
      pvc,
      sanwei,
      rubber,
      oilFire,
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
