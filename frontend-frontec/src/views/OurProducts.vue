<template>
  <div>
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />

    <!-- Content Sections -->
    <main class="overflow-x-hidden">
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
        <div class="my-auto mx-4 sm:mx-12 md:mx-24 lg:mx-48 pb-4">
          <img
            @click="toggleActive('materialHandling')"
            :src="materialHandling"
            alt=""
            class="hover-scale"
          />
          <div
            v-if="isActive.materialHandling"
            class="p-4 sm:p-8 md:p-12 border-2 border-slate-300 rounded-lg flex flex-col sm:flex-row"
          >
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="cornDryer" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Corn Dryer</p>
            </div>
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="bucketElevator" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Bucket Elevator</p>
            </div>
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="graderCleaner" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Grader Cleaner</p>
            </div>
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="screwConveyor" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Screw Conveyor</p>
            </div>
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="chainConveyor" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Chain Conveyor</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-4 sm:mx-12 md:mx-24 lg:mx-48 pb-4">
          <img @click="toggleActive('feedMill')" :src="feedMill" alt="" class="hover-scale" />
          <div
            v-if="isActive.feedMill"
            class="p-4 sm:p-8 md:p-12 border-2 border-slate-300 rounded-lg flex flex-col sm:flex-row"
          >
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="mixer" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Mixer</p>
            </div>
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="dustCollector" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Dust Collector</p>
            </div>
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="hammermill" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Hammermill</p>
            </div>
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="cooler" alt="" class="hover-img rounded-full" />
              <p class="mx-auto">Cooler</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-4 sm:mx-12 md:mx-24 lg:mx-48 pb-4">
          <img
            @click="toggleActive('grainStorage')"
            :src="grainStorage"
            alt=""
            class="hover-scale"
          />
          <div
            v-if="isActive.grainStorage"
            class="p-4 sm:p-8 md:p-12 border-2 border-slate-300 rounded-lg flex flex-col sm:flex-row"
          >
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="hopperSilo" alt="" class="hover-img rounded-full" />
              <p class="mx-auto mt-2">Hopper Silo</p>
            </div>
            <div class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto">
              <img :src="flatBottomSilo" alt="" class="hover-img rounded-full" />
              <p class="mx-auto mt-2">Flat Bottom Silo</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-4 sm:mx-12 md:mx-24 lg:mx-48 pb-4">
          <img @click="toggleActive('spareParts')" :src="spareParts" alt="" class="hover-scale rounded-lg crop-img" />
          <div
            v-if="isActive.spareParts"
            class="p-4 sm:p-8 md:p-12 border-2 border-slate-300 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            <div class="flex flex-col items-center hover:scale-105 transform transition duration-300 mx-auto">
              <router-link to="/elevator-belt">
                <img
                  class="w-32 h-32 object-cover rounded-full hover-img"
                  :src="bucketElevatorComponents"
                  alt=""
                />
              </router-link>
              <p class="text-center">Bucket Elevator Components</p>
            </div>
            <div class="flex flex-col items-center hover:scale-105 transform transition duration-300 mx-auto">
              <router-link to="/belt-conveyor-components">
                <img
                  class="w-32 h-32 object-cover rounded-full hover-img"
                  :src="beltConveyorComponents"
                  alt=""
                />
              </router-link>
              <p class="text-center">Belt Conveyor Components</p>
            </div>
            <div class="flex flex-col items-center hover:scale-105 transform transition duration-300 mx-auto">
              <router-link to="/drag-conveyor-components">
                <img
                  class="w-32 h-32 object-cover rounded-full hover-img"
                  :src="dragConveyorComponents"
                  alt=""
                />
              </router-link>
              <p class="text-center">Drag Conveyor Components</p>
            </div>
            <div class="flex flex-col items-center hover:scale-105 transform transition duration-300 mx-auto">
              <router-link to="/spare-parts">
                <img class="w-32 h-32 object-cover rounded-full hover-img" :src="seeAll" alt="" />
                <p class="text-center">See All</p>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>


<script>
import AppHeader from "../components/Header.vue";
import Footer from "../components/Footer.vue";

import background from "@/assets/img/our-products/our-products.png";
import materialHandling from "@/assets/img/our-products/material-handling.png";
import feedMill from "@/assets/img/our-products/feedmill.png";
import grainStorage from "@/assets/img/our-products/grain-storage.png";
import spareParts from "@/assets/img/spare-parts/bgSpareParts.png";

import bucketElevator from "@/assets/img/material-handling/Bucket Elevator.png";
import chainConveyor from "@/assets/img/material-handling/Chain Conveyor.png";
import cornDryer from "@/assets/img/material-handling/Corn Dryer.png";
import graderCleaner from "@/assets/img/material-handling/Grader Cleaner.png";
import screwConveyor from "@/assets/img/material-handling/Screw Conveyor.png";

import cooler from "@/assets/img/feedmill/Cooler.png";
import dustCollector from "@/assets/img/feedmill/Dust Collector.png";
import hammermill from "@/assets/img/feedmill/Hammermill.png";
import mixer from "@/assets/img/feedmill/Mixer.png";

import flatBottomSilo from "@/assets/img/grain-storage/Flat Bottom Silo.png";
import hopperSilo from "@/assets/img/grain-storage/Hopper Silo.png";

import beltConveyorComponents from "@/assets/img/spare-parts/Belt Conveyor Components.png";
import bucketElevatorComponents from "@/assets/img/spare-parts/Bucket Elevator Components.png";
import dragConveyorComponents from "@/assets/img/spare-parts/Drag Conveyor Components.png";
import seeAll from "@/assets/img/spare-parts/See All.png";

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
      background,
      materialHandling,
      feedMill,
      grainStorage,
      spareParts,
      bucketElevator,
      chainConveyor,
      cornDryer,
      graderCleaner,
      screwConveyor,
      cooler,
      dustCollector,
      hammermill,
      mixer,
      flatBottomSilo,
      hopperSilo,
      beltConveyorComponents,
      bucketElevatorComponents,
      dragConveyorComponents,
      seeAll,
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

.hover-scale {
  transition: transform 0.3s;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-img {
  transition: transform 0.3s, background-color 0.3s;
}

.hover-img:hover {
  background-color: #f0f0f0;
  transform: scale(1.1);
}

.crop-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.rounded-lg {
  border-radius: 0.5rem;
}
</style>
