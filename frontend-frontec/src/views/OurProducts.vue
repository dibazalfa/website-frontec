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
        <div class="my-auto mx-48 pb-4">
          <img
            @click="toggleActive('materialHandling')"
            :src="materialHandling"
            alt=""
          />
          <div
            v-if="isActive.materialHandling"
            class="p-12 border-2 border-slate-300 rounded-lg flex"
          >
            <div class="flex flex-col">
              <img :src="cornDryer" alt="" />
              <p class="mx-auto">Corn Dryer</p>
            </div>
            <div class="flex flex-col">
              <img :src="bucketElevator" alt="" />
              <p class="mx-auto">Bucket Elevator</p>
            </div>
            <div class="flex flex-col">
              <img :src="graderCleaner" alt="" />
              <p class="mx-auto">Grader Cleaner</p>
            </div>
            <div class="flex flex-col">
              <img :src="screwConveyor" alt="" />
              <p class="mx-auto">Screw Conveyor</p>
            </div>
            <div class="flex flex-col">
              <img :src="chainConveyor" alt="" />
              <p class="mx-auto">Chain Conveyor</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-48 pb-4">
          <img @click="toggleActive('feedMill')" :src="feedMill" alt="" />
          <div
            v-if="isActive.feedMill"
            class="p-12 border-2 border-slate-300 rounded-lg flex"
          >
            <div class="flex flex-col">
              <img :src="mixer" alt="" />
              <p class="mx-auto">Mixer</p>
            </div>
            <div class="flex flex-col">
              <img :src="dustCollector" alt="" />
              <p class="mx-auto">Dust Collector</p>
            </div>
            <div class="flex flex-col">
              <img :src="hammermill" alt="" />
              <p class="mx-auto">Hammermill</p>
            </div>
            <div class="flex flex-col">
              <img :src="cooler" alt="" />
              <p class="mx-auto">Cooler</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-48 pb-4">
          <img
            @click="toggleActive('grainStorage')"
            :src="grainStorage"
            alt=""
          />
          <div
            v-if="isActive.grainStorage"
            class="p-12 border-2 border-slate-300 rounded-lg flex"
          >
            <div class="flex flex-col ml-64 mr-5">
              <img :src="hopperSilo" alt="" />
              <p class="mx-auto mt-2">Hopper Silo</p>
            </div>
            <div class="flex flex-col mr-64 ml-5">
              <img :src="flatBottomSilo" alt="" />
              <p class="mx-auto mt-2">Flat Bottom Silo</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-48 pb-4">
          <img @click="toggleActive('spareParts')" :src="spareParts" alt="" />
          <div
            v-if="isActive.spareParts"
            class="p-12 border-2 border-slate-300 rounded-lg grid grid-cols-4 gap-8"
          >
            <div class="flex flex-col items-center">
              <img
                class="w-32 h-32 object-contain"
                :src="bucketElevatorComponents"
                alt=""
              />
              <p class="text-center">Bucket Elevator Components</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="w-32 h-32 object-contain"
                :src="beltConveyorComponents"
                alt=""
              />
              <p class="text-center">Belt Conveyor Components</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="w-32 h-32 object-contain"
                :src="dragConveyorComponents"
                alt=""
              />
              <p class="text-center">Drag Conveyor Components</p>
            </div>
            <div class="flex flex-col items-center">
              <router-link to="/spare-parts">
                <img class="w-32 h-32 object-contain" :src="seeAll" alt="" />
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
import spareParts from "@/assets/img/our-products/spare-parts.png";

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
</style>
