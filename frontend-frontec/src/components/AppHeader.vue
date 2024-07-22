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
          class="container mx-auto px-4 py-3 flex justify-between items-center"
        >
          <!-- Language Switcher -->
          <div class="flex items-center ml-16">
            <div
              @click="setLanguage('id')"
              :class="[
                'p-2 rounded-l cursor-pointer transition-colors duration-300',
                currentLanguage === 'id'
                  ? 'bg-gray-600 shadow-lg ring-black ring-1'
                  : 'bg-gray-200',
              ]"
            >
              <img
                :src="id"
                alt="ID"
                class="w-6 h-6 rounded-full"
              />
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
              <img
                :src="en"
                alt="EN"
                class="w-6 h-6 rounded-full"
              />
            </div>
          </div>
          <!-- Navbar -->
          <nav>
            <ul class="flex space-x-6">
              <li>
                <router-link
                  to="/"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >{{ $t('navbar.about') }}</router-link
                >
              </li>
              <li class="relative group">
                <router-link
                  to="/our-products"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >{{ $t('navbar.products') }}</router-link
                >
                <ul
                  class="absolute left-0 mt-2 w-48 bg-white shadow-lg hidden group-hover:block"
                >
                  <li>
                    <a href="#product1" class="block px-4 py-2 hover:bg-gray-200"
                      >Product 1</a
                    >
                  </li>
                  <li>
                    <a href="#product2" class="block px-4 py-2 hover:bg-gray-200"
                      >Product 2</a
                    >
                  </li>
                  <li>
                    <a href="#product3" class="block px-4 py-2 hover:bg-gray-200"
                      >Product 3</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#our-companies"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >{{ $t('navbar.companies') }}</a
                >
              </li>
              <li>
                <a
                  href="#contact-us"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >{{ $t('navbar.contact') }}</a
                >
              </li>
              <li>
                <router-link
                  to="/activities"
                  :class="{
                    'hover:underline': true,
                    uppercase: true,
                    'font-bold': true,
                    'text-black': isScrolled,
                    'text-white': !isScrolled,
                  }"
                  >{{ $t('navbar.activities') }}</router-link
                >
              </li>
            </ul>
          </nav>
          <!-- Company Logo -->
          <div class="flex flex-col items-center space-y-4 mr-6">
            <img
              :src="faeLogo"
              alt="Logo 1"
              class="w-auto h-8"
            />
            <img
              :src="fgnLogo"
              alt="Logo 2"
              class="w-auto h-8"
            />
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
        t,
      };
    },
    data() {
      return {
        faeLogo,
        fgnLogo,
        id,
        en
      }
    }
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
