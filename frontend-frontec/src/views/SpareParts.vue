<template>
  <div>
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />
    <main>
      <section class="bg-white flex flex-col p-4">
        <p class="mx-auto mt-10 font-[Inter-ExtraBold,Helvetica]">
          In partnership with:
        </p>
        <img :src="sanwei" alt="" class="mx-auto mt-10" />
      </section>
      <section class="flex justify-center items-center min-h-[75vh]">
        <div
          id="tab1"
          class="bg-white w-2/5 h-96 p-4 flex flex-row items-center justify-center rounded-tl-3xl rounded-bl-3xl border-2 border-slate-300"
        >
          <img :src="tab1" alt="Placeholder Image" class="mb-4" />
          <div class="flex flex-col pl-6">
            <p class="uppercase font-bold text-3xl">
              Bucket <br />
              Elevator <br />
              Components
            </p>
            <p>Click above to see product details</p>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-[#F7F6BB] p-4 h-16 cursor-pointer rounded-tr-xl rounded-br-xl"
          ></p>
          <p
            class="bg-[#ABBFAD] p-4 h-16 cursor-pointer rounded-tr-xl rounded-br-xl"
          ></p>
          <p
            class="bg-[#668C67] p-4 h-16 cursor-pointer rounded-tr-xl rounded-br-xl"
          ></p>
          <p
            class="bg-[#40713E] p-4 h-16 cursor-pointer rounded-tr-xl rounded-br-xl"
          ></p>
          <p
            class="bg-[#154214] p-4 h-16 cursor-pointer rounded-tr-xl rounded-br-xl"
          ></p>
          <p
            class="bg-black p-4 h-16 cursor-pointer rounded-tr-xl rounded-br-xl"
          ></p>
        </div>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import Footer from "../components/Footer.vue";

import background from "@/assets/img/spare-parts/bgSpareParts.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";
import tab1 from "@/assets/img/spare-parts/Bucket Elevator Components.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      background,
      sanwei,
      tab1,
    };
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
