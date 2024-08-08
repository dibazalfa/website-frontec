<template>
  <div>
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />
    <main class="overflow-x-hidden">
      <section class="bg-white flex flex-col p-4 md:p-8 lg:p-12 fade-in">
        <p
          class="text-shadow-md font-[Inter-ExtraBold,Helvetica] font-extrabold text-transparent text-[30px] sm:text-[35px] md:text-[40px] tracking-[0] leading-normal whitespace-nowrap mx-auto"
        >
          <span class="text-[#154214]">Our </span>
          <span class="text-[#286f9b]">Companies</span>
        </p>
      </section>
      <section
        class="flex justify-center p-4 fade-in"
      >
        <iframe
          class="w-full max-w-xl"
          height="315"
          src="https://www.youtube.com/embed/oB6cCU2O7P0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </section>
      <section class="flex justify-center mt-16 px-4">
        <div class="flex flex-col items-center w-full md:w-3/4 lg:w-2/3 relative fade-in">
          <div class="hidden lg:block absolute w-px bg-gray-300 top-0 bottom-0 h-full mx-24 tracker"></div>
          <div class="flex flex-col md:flex-row items-center w-full">
            <div
              class="w-full md:w-1/2 p-4 flex flex-col items-center fade-in"
            >
              <img :src="FAE" class="object-contain mb-8 w-full max-w-xs" />
              <p class="text-justify">
                {{ t('companies.fae1') }}
                <br /><br />
                {{ t('companies.fae2') }}
              </p>
            </div>
            <div
              class="hidden lg:block md:w-1/2 p-4 flex flex-col items-center lg:items-start lg:ml-12 fade-in"
            >
              <div class="flex justify-center items-center w-72 h-72 border-4 border-[#1327C3] rounded-full">
                <p class="text-[30px] font-serif font-bold text-[#1327C3] leading-none">Est. 2008</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center w-full mt-14">
            <div
              class="w-full md:w-1/2 p-4 flex flex-col items-center fade-in"
            >
              <img :src="FGN" class="object-contain mb-8 w-full max-w-xs" />
              <p class="text-justify">
                {{ t('companies.fgn') }}
              </p>
            </div>
            <div
              class="hidden lg:block md:w-1/2 p-4 flex flex-col items-center lg:items-start lg:ml-12 fade-in"
            >
              <div class="flex justify-center items-center w-72 h-72 border-4 border-[#007D17] rounded-full">
                <p class="text-[30px] font-serif font-bold text-[#007D17] leading-none">Est. 2013</p>
              </div>
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
import { useI18n } from "vue-i18n";

import background from "@/assets/img/companies/background.png";
import FAE from "@/assets/img/header/faeLogo.png";
import FGN from "@/assets/img/header/fgnLogo.png";

export default {
  components: {
    AppHeader,
    Footer,
  },
  name: "OurCompanies",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  mounted() {
    this.initIntersectionObserver();
  },
  methods: {
    initIntersectionObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            } else {
              entry.target.classList.remove("show");
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".fade-in").forEach((section) => {
        observer.observe(section);
      });
    },
  },
  data() {
    return {
      background,
      FAE,
      FGN
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

.w-px {
  width: 1px;
}

.absolute {
  position: absolute;
}

.shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}

.tracker {
  background: linear-gradient(180deg, transparent 0%, #1327C3 50%, transparent 100%);
  animation: tracker-move 3s linear infinite;
}

@keyframes tracker-move {
  0% {
    background-position: top;
  }
  100% {
    background-position: bottom;
  }
}

@media (max-width: 768px) {
  .text-shadow-md {
    font-size: 1.5rem;
  }
}
</style>
