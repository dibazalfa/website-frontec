<template>
  <section id="footer" class="bg-[#313C44] text-white py-8 mt-16">
    <div
      class="container mx-auto flex flex-col items-center justify-between md:flex-row"
    >
      <div class="flex space-x-4 md:mb-0 mb-2 md:ml-20">
        <a
          href="https://www.facebook.com/pages/CV.%2520Frontec%2520Agritama%2520Engineering/1689781144429808/"
          target="_blank"
        >
          <img :src="facebook" alt="Facebook" class="h-8" />
        </a>
        <a href="https://www.instagram.com/frontec.co/" target="_blank">
          <img :src="instagram" alt="instagram" class="h-8" />
        </a>
        <a
          href="https://www.linkedin.com/company/frontec-agritama-engineering/mycompany/verification/"
          target="_blank"
        >
          <img :src="linkedin" alt="linkedin" class="h-8" />
        </a>
      </div>
      <p>&copy; 2024 Frontec Group. All rights reserved.</p>
      <div class="md:mt-0 mt-1">
        <router-link
          to="/contact-us"
          class="text-white font-bold mx-auto md:mr-20"
          >Contact Us</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import facebook from "@/assets/img/footer/fb.png";
import instagram from "@/assets/img/footer/instagram.png";
import linkedin from "@/assets/img/footer/linkedin.png";
import x from "@/assets/img/footer/x.png";

export default {
  name: "Footer",
  data() {
    return {
      facebook,
      x,
      instagram,
      linkedin,
    };
  },
};
</script>

<style scoped></style>
