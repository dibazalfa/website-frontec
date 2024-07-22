<!-- src/components/Footer.vue -->
<template>
  <section id="footer" class="bg-[#313C44] text-white py-8 mt-16">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex space-x-4 ml-20">
        <a
          href="https://www.facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <img
            :src="facebook"
            alt="Facebook"
            class="h-8"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
          <img :src="x" alt="Twitter" class="h-8" />
        </a>
      </div>
      <p>&copy; 2021 Frontec Group. All rights reserved.</p>
      <div>
        <router-link to="/contact-us" class="text-white font-bold mr-20"
          >Contact Us</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import facebook from "@/assets/img/footer/ic-baseline-facebook.svg";
import x from "@/assets/img/footer/mage-x.svg";

export default {
  name: "Footer",
  data() {
    return {
      facebook,
      x,
    };
  },
};
</script>

<style scoped></style>
