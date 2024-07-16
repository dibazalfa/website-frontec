<template>
    <div>
     <AppHeader
     class="relative min-h-[346px] bg-cover bg-center bg-[url(../assets/img/material-handling-1.jpg)]"
   :isScrolled="isScrolled"
   :currentLanguage="currentLanguage"
   :links="navLinks"
   @update:currentLanguage="setLanguage"
 />

    <!-- Content Sections -->
    <main>
      <section id="product-details" class="bg-white flex flex-col p-4 md:p-8 lg:p-12">
        <p
    class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[25px] sm:text-[25px] md:text-[30px] tracking-[0] leading-normal whitespace-nowrap mx-8 mt-4 md:mt-4 lg:mt-4"
  >
    <span class="text-[#154214]">Outdoor Grain Dryer</span>
    <span class="text-[#286f9b]">  (Locally Made)</span>
  </p>  
      </section>
      <section>
        <span class="text">Continuous corn dryer designed by Frontec with capacities range from 10 tph - 40 tph. Frontec offers burner which suitable most with resources available nearby the plant. Therefore Frontec's dryer will run in most efficient cost.</span>
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
