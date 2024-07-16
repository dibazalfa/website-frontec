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
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    AppHeader,
    Footer
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
