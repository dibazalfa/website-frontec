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
      <section id="our-products" class="bg-white flex flex-col p-4 md:p-8 lg:p-12">
  <p
    class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[30px] sm:text-[35px] md:text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto mt-8 md:mt-12 lg:mt-16"
  >
    <span class="text-[#154214]">Our </span>
    <span class="text-[#286f9b]">Products</span>
  </p>
      </section>
      <section class="flex flex-col m-auto">
        <img class="my-auto mx-48 pb-4" src="../assets/img/material-handling.png" alt="">
        <img class="my-auto mx-48 pb-4" src="../assets/img/feedmill.png" alt="">
        <img class="my-auto mx-48 pb-4" src="../assets/img/grain-storage.png" alt="">
        <img class="my-auto mx-48 pb-4" src="../assets/img/spare-parts.png" alt="">
      </section>
      <section id="footer" class="bg-[#313C44] text-white py-8 mt-16">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex space-x-4 ml-20">
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <img src="../assets/img/ic-baseline-facebook.svg" alt="Facebook" class="h-8" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <img src="../assets/img/mage-x.svg" alt="Twitter" class="h-8" />
            </a>
          </div>
          <p>&copy; 2021 Frontec Group. All rights reserved.</p>
          <div>
            <a href="contact-us.html" class="text-white font-bold mr-20"
              >Contact Us</a
            >
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import AppHeader from '../components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  
  setup() {
    const isScrolled = ref(false);
    const currentLanguage = ref("en");

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    const setLanguage = (lang) => {
      currentLanguage.value = lang;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isScrolled,
      currentLanguage,
      setLanguage,
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
