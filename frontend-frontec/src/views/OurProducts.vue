<template>
  <div>
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center bg-[url(../assets/img/our-products.png)]"
      :isScrolled="isScrolled"
      :currentLanguage="currentLanguage"
      :links="navLinks"
      @update:currentLanguage="setLanguage"
    />

    <!-- Content Sections -->
    <main>
      <section
        id="our-products"
        class="bg-white flex flex-col p-4 md:p-8 lg:p-12"
      >
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[30px] sm:text-[35px] md:text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto"
        >
          <span class="text-[#154214]">Our </span>
          <span class="text-[#286f9b]">Products</span>
        </p>
      </section>
      <section class="flex flex-col m-auto">
        <div class="my-auto mx-48 pb-4">
          <img
            @click="toggleActive('materialHandling')"
            src="../assets/img/material-handling.png"
            alt=""
          />
          <div
            v-if="isActive.materialHandling"
            class="p-12 border-2 border-slate-300 rounded-lg flex"
          >
            <div class="flex flex-col">
              <img
                src="../assets/img/material-handling/Corn Dryer.png"
                alt=""
              />
              <p class="mx-auto">Corn Dryer</p>
            </div>
            <div class="flex flex-col">
              <img
                src="../assets/img/material-handling/Bucket Elevator.png"
                alt=""
              />
              <p class="mx-auto">Bucket Elevator</p>
            </div>
            <div class="flex flex-col">
              <img
                src="../assets/img/material-handling/Grader Cleaner.png"
                alt=""
              />
              <p class="mx-auto">Grader Cleaner</p>
            </div>
            <div class="flex flex-col">
              <img
                src="../assets/img/material-handling/Screw Conveyor.png"
                alt=""
              />
              <p class="mx-auto">Screw Conveyor</p>
            </div>
            <div class="flex flex-col">
              <img
                src="../assets/img/material-handling/Chain Conveyor.png"
                alt=""
              />
              <p class="mx-auto">Chain Conveyor</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-48 pb-4">
          <img
            @click="toggleActive('feedMill')"
            src="../assets/img/feedmill.png"
            alt=""
          />
          <div
            v-if="isActive.feedMill"
            class="p-12 border-2 border-slate-300 rounded-lg flex"
          >
            <div class="flex flex-col">
              <img src="../assets/img/feedmill/Mixer.png" alt="" />
              <p class="mx-auto">Mixer</p>
            </div>
            <div class="flex flex-col">
              <img src="../assets/img/feedmill/Dust Collector.png" alt="" />
              <p class="mx-auto">Dust Collector</p>
            </div>
            <div class="flex flex-col">
              <img src="../assets/img/feedmill/Hammermill.png" alt="" />
              <p class="mx-auto">Hammermill</p>
            </div>
            <div class="flex flex-col">
              <img src="../assets/img/feedmill/Cooler.png" alt="" />
              <p class="mx-auto">Cooler</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-48 pb-4">
          <img
            @click="toggleActive('grainStorage')"
            src="../assets/img/grain-storage.png"
            alt=""
          />
          <div
            v-if="isActive.grainStorage"
            class="p-12 border-2 border-slate-300 rounded-lg flex"
          >
            <div class="flex flex-col ml-64 mr-5">
              <img src="../assets/img/grain-storage/Hopper Silo.png" alt="" />
              <p class="mx-auto mt-2">Hopper Silo</p>
            </div>
            <div class="flex flex-col mr-64 ml-5">
              <img
                src="../assets/img/grain-storage/Flat Bottom Silo.png"
                alt=""
              />
              <p class="mx-auto mt-2">Flat Bottom Silo</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-48 pb-4">
          <img
            @click="toggleActive('spareParts')"
            src="../assets/img/spare-parts.png"
            alt=""
          />
          <div
            v-if="isActive.spareParts"
            class="p-12 border-2 border-slate-300 rounded-lg grid grid-cols-4 gap-8"
          >
            <div class="flex flex-col items-center">
              <img
                class="w-32 h-32 object-contain"
                src="../assets/img/spare-parts/Bucket Elevator Components.png"
                alt=""
              />
              <p class="text-center">Bucket Elevator Components</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="w-32 h-32 object-contain"
                src="../assets/img/spare-parts/Belt Conveyor Components.png"
                alt=""
              />
              <p class="text-center">Belt Conveyor Components</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="w-32 h-32 object-contain"
                src="../assets/img/spare-parts/Drag Conveyor Components.png"
                alt=""
              />
              <p class="text-center">Drag Conveyor Components</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="w-32 h-32 object-contain"
                src="../assets/img/spare-parts/See All.png"
                alt=""
              />
              <p class="text-center">See All</p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      isActive: {
        materialHandling: false,
        feedMill: false,
        grainStorage: false,
        spareParts: false,
      },
    };
  },
  methods: {
    toggleActive(item) {
      this.isActive[item] = !this.isActive[item];

      for (let key in this.isActive) {
        if (key !== item) {
          this.isActive[key] = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.header {
  transition: background-color 0.3s, box-shadow 0.3s;
}

.text-shadow-md {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
