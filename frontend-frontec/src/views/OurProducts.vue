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
        <p class="roboto-light text-gray-600 flex flex-col m-auto mt-6">
          Click one of the categories below for product details:
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
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto items-center"
            >
              <router-link to="/our-products/material-handling/belt-conveyor">
                <img
                  :src="beltConveyor"
                  alt=""
                  class="hover-img rounded-full w-40 h-40 object-cover"
                />
              </router-link>
              <p class="mx-auto mt-2">Belt Conveyor</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto items-center"
            >
              <router-link to="/our-products/material-handling/bucket-elevator">
                <img
                  :src="bucketElevator"
                  alt=""
                  class="hover-img rounded-full w-40 h-40 object-cover"
                />
              </router-link>
              <p class="mx-auto mt-2">Bucket Elevator</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto items-center"
            >
              <router-link to="/our-products/material-handling/screw-conveyor">
                <img
                  :src="screwConveyor"
                  alt=""
                  class="hover-img rounded-full w-40 h-40 object-cover"
                />
              </router-link>
              <p class="mx-auto mt-2">Screw Conveyor</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto items-center"
            >
              <router-link to="/our-products/material-handling/chain-conveyor">
                <img
                  :src="chainConveyor"
                  alt=""
                  class="hover-img rounded-full w-40 h-40 object-cover"
                />
              </router-link>
              <p class="mx-auto mt-2">Chain Conveyor</p>
            </div>
            <div
              class="flex hover:scale-105 transform transition duration-300 mx-auto border border-black rounded-full w-40 h-40 hover:bg-gray-200 items-center justify-center"
            >
              <router-link to="/our-products/material-handling">
                <p class="font-bold text-2xl">SEE ALL</p>
              </router-link>
            </div>
          </div>
        </div>

        <div class="my-auto mx-4 sm:mx-12 md:mx-24 lg:mx-48 pb-4">
          <img
            @click="toggleActive('feedMill')"
            :src="feedMill"
            alt=""
            class="hover-scale"
          />
          <div
            v-if="isActive.feedMill"
            class="p-4 sm:p-8 md:p-12 border-2 border-slate-300 rounded-lg flex flex-col sm:flex-row"
          >
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto items-center"
            >
              <router-link to="/our-products/feedmill/corn-dryer">
                <img
                  :src="cornDryer"
                  alt=""
                  class="hover-img rounded-full w-40 h-40 object-cover"
                />
              </router-link>
              <p class="mx-auto mt-2">Corn Dryer</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto items-center"
            >
              <router-link to="/our-products/feedmill/hammermill">
                <img
                  :src="hammermill"
                  alt=""
                  class="hover-img rounded-full w-40 h-40 object-cover"
                />
              </router-link>
              <p class="mx-auto mt-2">Hammermill</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto items-center"
            >
              <router-link to="/our-products/feedmill/cooler">
                <img
                  :src="cooler"
                  alt=""
                  class="hover-img rounded-full w-40 h-40 object-cover"
                />
              </router-link>
              <p class="mx-auto mt-2">Cooler</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto items-center"
            >
              <router-link to="/our-products/feedmill/mixer">
                <img
                  :src="mixer"
                  alt=""
                  class="hover-img rounded-full w-40 h-40 object-cover"
                />
              </router-link>
              <p class="mx-auto mt-2">Mixer</p>
            </div>
            <div
              class="flex hover:scale-105 transform transition duration-300 mx-auto border border-black rounded-full w-40 h-40 hover:bg-gray-200 items-center justify-center"
            >
              <router-link to="/our-products/feedmill">
                <p class="font-bold text-2xl">SEE ALL</p>
              </router-link>
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
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto"
            >
              <router-link to="/our-products/grain-storage/flat-bottom-silo">
                <img
                  :src="flatBottomSilo"
                  alt=""
                  class="hover-img rounded-full w-40 h-40"
                />
              </router-link>
              <p class="mx-auto mt-2">Flat Bottom Silo</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto"
            >
              <router-link to="/our-products/grain-storage/conical-hopper-silo">
                <img
                  :src="conicalBottom"
                  alt=""
                  class="hover-img rounded-full w-40 h-40"
                />
              </router-link>
              <p class="mx-auto mt-2">Conical Hopper Silo</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto"
            >
              <router-link to="/our-products/grain-storage/cooler-bin">
                <img
                  :src="coolerbin"
                  alt=""
                  class="hover-img rounded-full w-40 h-40"
                />
              </router-link>
              <p class="mx-auto mt-2">Cooler Bin</p>
            </div>
            <div
              class="flex flex-col hover:scale-105 transform transition duration-300 mx-auto"
            >
              <router-link to="/our-products/grain-storage/steel-structure">
                <img
                  :src="steelStructure"
                  alt=""
                  class="hover-img rounded-full w-40 h-40"
                />
              </router-link>
              <p class="mx-auto mt-2">Steel Structure</p>
            </div>
          </div>
        </div>
        <div class="my-auto mx-4 sm:mx-12 md:mx-24 lg:mx-48 pb-4">
          <img
            @click="toggleActive('spareParts')"
            :src="spareParts"
            alt=""
            class="hover-scale"
          />
          <div
            v-if="isActive.spareParts"
            class="p-4 sm:p-8 md:p-12 border-2 border-slate-300 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            <div
              class="flex flex-col items-center hover:scale-105 transform transition duration-300 mx-auto"
            >
              <router-link to="/elevator-belt">
                <img
                  class="w-40 h-40 object-cover rounded-full hover-img"
                  :src="bucketElevatorComponents"
                  alt=""
                />
              </router-link>
              <p class="text-center mt-2">Bucket Elevator Components</p>
            </div>
            <div
              class="flex flex-col items-center hover:scale-105 transform transition duration-300 mx-auto"
            >
              <router-link to="/belt-conveyor-components">
                <img
                  class="w-40 h-40 object-cover rounded-full hover-img"
                  :src="beltConveyorComponents"
                  alt=""
                />
              </router-link>
              <p class="text-center mt-2">Belt Conveyor Components</p>
            </div>
            <div
              class="flex flex-col items-center hover:scale-105 transform transition duration-300 mx-auto"
            >
              <router-link to="/drag-conveyor-components">
                <img
                  class="w-40 h-40 object-cover rounded-full hover-img"
                  :src="dragConveyorComponents"
                  alt=""
                />
              </router-link>
              <p class="text-center mt-2">Drag Conveyor Components</p>
            </div>
            <div
              class="flex flex-col items-center hover:scale-105 transform transition duration-300 mx-auto"
            >
              <router-link to="/spare-parts">
                <img
                  class="w-40 h-40 object-cover rounded-full hover-img"
                  :src="seeAll"
                  alt=""
                />
                <p class="text-center mt-2">See All</p>
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

import beltConveyor from "@/assets/img/material-handling/belt-conveyor.png";
import bucketElevator from "@/assets/img/material-handling/Bucket Elevator.png";
import chainConveyor from "@/assets/img/material-handling/Chain Conveyor.png";
import cornDryer from "@/assets/img/material-handling/Corn Dryer.png";
import graderCleaner from "@/assets/img/material-handling/Grader Cleaner.png";
import screwConveyor from "@/assets/img/material-handling/Screw Conveyor.png";

import cooler from "@/assets/img/feedmill/Cooler.png";
import dustCollector from "@/assets/img/feedmill/Dust Collector.png";
import hammermill from "@/assets/img/feedmill/Hammermill.png";
import mixer from "@/assets/img/feedmill/Mixer.png";

import flatBottomSilo from "@/assets/img/grain-storage/flat-bottom-silo.jpg";
import hopperSilo from "@/assets/img/grain-storage/Hopper Silo.png";
import conicalBottom from "@/assets/img/grain-storage/conical-bottom.jpg";
import coolerbin from "@/assets/img/grain-storage/coolerbin.png";
import steelStructure from "@/assets/img/grain-storage/steel-structure.jpg";

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
      beltConveyor,
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
      conicalBottom,
      coolerbin,
      steelStructure,
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
