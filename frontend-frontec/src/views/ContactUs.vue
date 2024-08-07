<template>
  <div>
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />
    <!-- Content Sections -->
    <main class="overflow-x-hidden">
      <section class="flex flex-row mx-auto">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto mt-16"
        >
          <span class="text-[#154214]">Contact </span>
          <span class="text-[#286f9b]">Us</span>
        </p>
      </section>
      <section class="flex flex-col mt-10 md:flex-row">
        <div class="flex flex-row md:flex-col w-1/3 ml-16 md:ml-0">
          <img :src="FAE" alt="FAE" class="md:p-2 md:w-48 w-32 md:self-end md:mr-12 mr-2" />
          <img :src="FGN" alt="FGN" class="md:p-2 md:w-48 w-32 md:self-end md:mr-12" />
        </div>
        <div class="flex flex-col w-1/3 mx-auto md:mt-0 mt-4">
          <p class="font-bold">Head Office</p>
          <p>
            Komp. Pergudangan Safe & Lock Block C-2376, Jl. Lingkar Timur,
            Sidoarjo, East Java - Indonesia
          </p>
          <div class="flex">
            <img :src="phone" alt="" class="pr-2 object-contain" />
            <p>Telp +6231 8066135 (Hunting)</p>
          </div>
          <div class="flex">
            <img :src="email" alt="" class="pr-4 object-contain" />
            <p>marketing@frontec.co.id</p>
          </div>
        </div>
        <div class="flex flex-col w-1/3 mx-auto md:mt-0 mt-4">
          <div class="flex flex-row">
            <a
              href="https://www.facebook.com/pages/CV.%2520Frontec%2520Agritama%2520Engineering/1689781144429808/"
            >
              <img :src="facebook" class="object-contain w-16 h-16 p-2 hover:scale-105" />
            </a>
            <a href="https://www.instagram.com/frontec.co/">
              <img :src="instagram" class="object-contain w-16 h-16 p-2 hover:scale-105" />
            </a>
            <a
              href="https://www.linkedin.com/company/frontec-agritama-engineering/mycompany/verification/"
            >
              <img :src="linkedin" class="object-contain w-16 h-16 p-2 hover:scale-105" />
            </a>
          </div>
          <div class="mt-3 w-52">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/6282319198994"
              target="_blank"
            >
              <img
                alt="Chat on WhatsApp"
                :src="whatsapp"
                class="object-contain hover:scale-105"
              />
            </a>
          </div>
        </div>
      </section>
      <section class="flex">
        <iframe
          class="mx-auto mt-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.036077023294!2d112.74112407430093!3d-7.461260873542869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6dcd9f30897%3A0xbc1e1ed6fadc3fa9!2sFrontec%20Agritama%20Engineering%2C%20Partner%20In%20Feed%20%26%20Grain%20Technology!5e0!3m2!1sid!2sid!4v1721640315684!5m2!1sid!2sid"
          width="1000"
          height="600"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useI18n } from "vue-i18n";

import background from "@/assets/img/contactUs/background.png";
import FAE from "@/assets/img/header/faeLogo.png";
import FGN from "@/assets/img/header/fgnLogo.png";
import phone from "@/assets/img/contactUs/phone.png";
import email from "@/assets/img/contactUs/email.png";
import facebook from "@/assets/img/contactUs/facebook.png";
import instagram from "@/assets/img/contactUs/instagram.png";
import linkedin from "@/assets/img/contactUs/linkedin.png";
import whatsapp from "@/assets/img/contactUs/whatsapp.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  name: "ContactUs",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  data() {
    return {
      background,
      FAE,
      FGN,
      phone,
      email,
      facebook,
      instagram,
      linkedin,
      whatsapp,
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
