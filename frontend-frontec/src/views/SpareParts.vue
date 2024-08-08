<template>
  <div>
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />
    <main>
      <div class="flex flex-col md:flex-row">
        <section class="bg-white flex flex-col p-4 w-full md:w-1/3 mt-10 mx-auto md:ml-12">
          <p class="mx-auto mt-10 font-[Inter-ExtraBold,Helvetica]">
            In partnership with:
          </p>
          <img :src="sanwei" alt="" class="mx-auto mt-10" />
        </section>
        <section class="flex justify-center items-center min-h-[75vh] w-2/3 mx-auto">
          <div
            class="w-full md:w-7/12 h-96 p-4 flex flex-col md:flex-row items-center justify-center rounded-tl-3xl rounded-bl-3xl border-2 border-slate-300 border-r-0"
            :style="{
              background: `linear-gradient(to right, white, ${
                isHovered ? currentTab.color : originalColor
              })`,
              transition: 'background 0.5s ease-in-out',
            }"
          >
            <img
              :src="currentTab.image"
              alt="Placeholder Image"
              class="tab-image mb-0 md:mb-4"
            />
            <div class="flex flex-col pl-3 md:pl-6">
              <router-link :to="currentTab.route">
                <p
                  class="uppercase font-bold text-2xl md:text-3xl hover:underline hover:scale-105 transform transition-transform duration-300"
                  @mouseover="isHovered = true"
                  @mouseleave="isHovered = false"
                >
                  {{ currentTab.title }}
                </p>
                <p>{{ currentTab.description }}</p>
              </router-link>
            </div>
          </div>
          <div class="flex flex-col">
            <p
              v-for="(tab, index) in tabs"
              :key="index"
              class="p-4 h-16 cursor-pointer rounded-tr-xl rounded-br-xl transition-transform duration-300 ease-in-out"
              :class="{
                'translate-x-2 shadow-lg': selectedTabIndex === index,
                'bg-opacity-50': selectedTabIndex !== index,
              }"
              :style="{ backgroundColor: tab.color }"
              @click="selectTab(index)"
            ></p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/Header.vue";
import Footer from "../components/Footer.vue";

import background from "@/assets/img/spare-parts/bgSpareParts.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";
import tab1 from "@/assets/img/spare-parts/Bucket Elevator Components.png";
import tab2 from "@/assets/img/spare-parts/Belt Conveyor Components.png";
import tab3 from "@/assets/img/spare-parts/Drag Conveyor Components.png";
import tab4 from "@/assets/img/spare-parts/screw-conveyor.png";
import tab5 from "@/assets/img/spare-parts/plastic.png";
import tab6 from "@/assets/img/spare-parts/sieves-screen.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      isHovered: false,
      originalColor: "white",
      background,
      sanwei,
      tabs: [
        {
          title: "Bucket Elevator Components",
          description: "Click above to see product details",
          image: tab1,
          color: "#F7F6BB",
          route: "/elevator-belt",
        },
        {
          title: "Belt Conveyor Components",
          description: "Click above to see product details",
          image: tab2,
          color: "#E0EBCA",
          route: "/belt-conveyor-components",
        },
        {
          title: "Drag Conveyor Components",
          description: "Click above to see product details",
          image: tab3,
          color: "#ABCBAE",
          route: "/drag-conveyor-components",
        },
        {
          title: "Screw Conveyor Components",
          description: "Click above to see product details",
          image: tab4,
          color: "#8AAD8B",
          route: "/screw-conveyor-components",
        },
        {
          title: "Engineering Plastics",
          description: "Click above to see product details",
          image: tab5,
          color: "#749872",
          route: "/engineering-plastics",
        },
        {
          title: "Parts for Sieves and Screens",
          description: "Click above to see product details",
          image: tab6,
          color: "#4E694D",
          route: "/sieves-screens",
        },
      ],
      currentTab: {},
    };
  },
  methods: {
    selectTab(index) {
      this.currentTab = this.tabs[index];
      this.selectedTabIndex = index; // Update selected tab index
      this.isHovered = false; // Reset hover state when a new tab is selected
    },
  },
  created() {
    // Set default tab
    this.currentTab = this.tabs[0];
  },
};
</script>

<style scoped>
.tab-image {
  width: 250px;
  height: 200px;
}

.header {
  transition: background-color 0.3s, box-shadow 0.3s;
}

.text-shadow-md {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
