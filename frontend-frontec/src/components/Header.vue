<template>
  <header>
    <div
      :class="[
        {
          'fixed w-full bg-white shadow-lg': isScrolled,
          'bg-transparent': !isScrolled,
        },
        'transition-all duration-300 ease-in-out z-50 top-0 left-0 right-0',
      ]"
    >
      <div
        class="container mx-auto px-4 py-3 flex justify-between items-center max-w-screen-xl flex-wrap p-4"
      >
        <!-- Language Switcher -->
        <div class="flex flex-col md:flex-row items-center ml-16">
          <div
            @click="setLanguage('id')"
            :class="[
              'p-2 rounded-l cursor-pointer transition-colors duration-300',
              currentLanguage === 'id'
                ? 'bg-gray-600 shadow-lg ring-black ring-1'
                : 'bg-gray-200',
            ]"
          >
            <img :src="id" alt="ID" class="w-6 h-6 rounded-full" />
          </div>
          <div
            @click="setLanguage('en')"
            :class="[
              'p-2 rounded-r cursor-pointer transition-colors duration-300',
              currentLanguage === 'en'
                ? 'bg-gray-600 shadow-lg ring-black ring-1'
                : 'bg-gray-200',
            ]"
          >
            <img :src="en" alt="EN" class="w-6 h-6 rounded-full" />
          </div>
        </div>
        <!-- Navbar -->
        <button
          @click="toggleNavbar"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <nav :class="['md:flex', navbarOpen ? 'block' : 'hidden']" id="navbar-default">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent-900 dark:border-gray-700"
          >
            <li>
              <router-link
                class="block py-2 px-3 rounded md:border-0 md:p-0 "
                to="/"
                :class="[
                  'hover:underline uppercase font-bold transition-colors duration-300',
                  { 'text-black': isScrolled, 'text-white': !isScrolled }
                ]"
                >{{ $t("navbar.about") }}</router-link
              >
            </li>
            <li
              class="relative group"
              @mouseenter="showSubNavbar"
              @mouseleave="hideSubNavbar"
            >
              <router-link
                class="block py-2 px-3 rounded md:border-0 md:p-0 "
                to="/our-products"
                :class="[
                  'hover:underline uppercase font-bold transition-colors duration-300',
                  { 'text-black': isScrolled, 'text-white': !isScrolled }
                ]"
                >{{ $t("navbar.products") }}</router-link
              >
              <ul
                v-show="subNavbarOpen"
                class="absolute left-0 top-full w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                @mouseenter="keepSubNavbar"
                @mouseleave="hideSubNavbar"
              >
                <li
                  class="relative group"
                  @mouseenter="showSubSubNavbar('materialHandling')"
                  @mouseleave="hideSubSubNavbar"
                >
                  <router-link
                    class="block py-2 px-3 hover:bg-gray-100"
                    to=""
                    >Material Handling</router-link
                  >
                  <ul
                    v-show="subSubNavbarOpen.materialHandling"
                    class="absolute left-full top-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                    @mouseenter="keepSubSubNavbar('materialHandling')"
                    @mouseleave="hideSubSubNavbar"
                  >
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/corn-dryer"
                        >Corn Dryer</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/bucket-elevator"
                        >Bucket Elevator</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/grader-cleaner"
                        >Grader Cleaner</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/screw-conveyor"
                        >Screw Conveyor</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/chain-conveyor"
                        >Chain Conveyor</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li
                  class="relative group"
                  @mouseenter="showSubSubNavbar('feedmill')"
                  @mouseleave="hideSubSubNavbar"
                >
                  <router-link
                    class="block py-2 px-3 hover:bg-gray-100"
                    to=""
                    >Feedmill</router-link
                  >
                  <ul
                    v-show="subSubNavbarOpen.feedmill"
                    class="absolute left-full top-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                    @mouseenter="keepSubSubNavbar('feedmill')"
                    @mouseleave="hideSubSubNavbar"
                  >
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/mixer"
                        >Mixer</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/dust-collector"
                        >Dust Collector</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/hammermill"
                        >Hammermill</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/cooler"
                        >Cooler</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li
                  class="relative group"
                  @mouseenter="showSubSubNavbar('grainStorage')"
                  @mouseleave="hideSubSubNavbar"
                >
                  <router-link
                    class="block py-2 px-3 hover:bg-gray-100"
                    to=""
                    >Grain Storage</router-link
                  >
                  <ul
                    v-show="subSubNavbarOpen.grainStorage"
                    class="absolute left-full top-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                    @mouseenter="keepSubSubNavbar('grainStorage')"
                    @mouseleave="hideSubSubNavbar"
                  >
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/hopper-silo"
                        >Hopper Silo</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="block py-2 px-3 hover:bg-gray-100"
                        to="/flat-bottom-silo"
                        >Flat Bottom Silo</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link
                    class="block py-2 px-3 hover:bg-gray-100"
                    to="/our-products/spareparts"
                    >Spareparts</router-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link
                class="block py-2 px-3 rounded md:border-0 md:p-0 "
                to="/our-companies"
                :class="[
                  'hover:underline uppercase font-bold transition-colors duration-300',
                  { 'text-black': isScrolled, 'text-white': !isScrolled }
                ]"
                >{{ $t("navbar.companies") }}</router-link
              >
            </li>
            <li>
              <router-link
                class="block py-2 px-3 rounded md:border-0 md:p-0 "
                href="#contact-us"
                to="/contact-us"
                :class="[
                  'hover:underline uppercase font-bold transition-colors duration-300',
                  { 'text-black': isScrolled, 'text-white': !isScrolled }
                ]"
                >{{ $t("navbar.contact") }}</router-link
              >
            </li>
            <li>
              <router-link
                class="block py-2 px-3 rounded md:border-0 md:p-0 "
                to="/activities"
                :class="[
                  'hover:underline uppercase font-bold transition-colors duration-300',
                  { 'text-black': isScrolled, 'text-white': !isScrolled }
                ]"
                >{{ $t("navbar.activities") }}</router-link
              >
            </li>
          </ul>
        </nav>
        <!-- Company Logo -->
        <div class="flex flex-col items-center space-y-4 mr-6">
          <img :src="faeLogo" alt="Logo 1" class="w-auto h-8" />
          <img :src="fgnLogo" alt="Logo 2" class="w-auto h-8" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

import faeLogo from "@/assets/img/header/faeLogo.png";
import fgnLogo from "@/assets/img/header/fgnLogo.png";
import id from "@/assets/img/header/indonesia.png";
import en from "@/assets/img/header/english.png";

export default {
  name: "AppHeader",
  setup() {
    const isScrolled = ref(false);
    const navbarOpen = ref(false);
    const subNavbarOpen = ref(false);
    const subSubNavbarOpen = ref({
      materialHandling: false,
      feedmill: false,
      grainStorage: false
    });
    const { locale } = useI18n();
    const currentLanguage = ref(locale.value);

    const { t } = useI18n();

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    const setLanguage = (lang) => {
      locale.value = lang;
      currentLanguage.value = lang;
    };

    const toggleNavbar = () => {
      navbarOpen.value = !navbarOpen.value;
    };

    const showSubNavbar = () => {
      subNavbarOpen.value = true;
    };

    const hideSubNavbar = () => {
      subNavbarOpen.value = false;
      hideSubSubNavbar();
    };

    const keepSubNavbar = () => {
      subNavbarOpen.value = true;
    };

    const showSubSubNavbar = (menu) => {
      subSubNavbarOpen.value[menu] = true;
    };

    const hideSubSubNavbar = () => {
      subSubNavbarOpen.value = {
        materialHandling: false,
        feedmill: false,
        grainStorage: false
      };
    };

    const keepSubSubNavbar = (menu) => {
      subSubNavbarOpen.value[menu] = true;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isScrolled,
      navbarOpen,
      subNavbarOpen,
      subSubNavbarOpen,
      currentLanguage,
      setLanguage,
      toggleNavbar,
      showSubNavbar,
      hideSubNavbar,
      keepSubNavbar,
      showSubSubNavbar,
      hideSubSubNavbar,
      keepSubSubNavbar,
      t,
    };
  },
  data() {
    return {
      faeLogo,
      fgnLogo,
      id,
      en,
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

.text-white {
  color: white;
}

.text-black {
  color: black;
}
</style>
