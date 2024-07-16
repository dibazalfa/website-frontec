<!-- src/components/Footer.vue -->
<template>
    <section id="footer" class="bg-[#313C44] text-white py-8 mt-16">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex space-x-4 ml-20">
          <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <img src="../assets/img/ic-baseline-facebook.svg" alt="Facebook" class="h-8" />
          </a>
          <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
            <img src="../assets/img/mage-x.svg" alt="Twitter" class="h-8" />
          </a>
        </div>
        <p>&copy; 2021 Frontec Group. All rights reserved.</p>
        <div>
          <a href="contact-us.html" class="text-white font-bold mr-20">Contact Us</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  </style>
  