<template>
    <header
      class="relative min-h-[346px] bg-cover bg-center bg-[url(../assets/img/our-products.png)]"
    >
      <div
        :class="[
          {
            'fixed w-full bg-white shadow-lg': isScrolled,
            'bg-transparent': !isScrolled,
          },
          'transition-all duration-300 ease-in-out z-50 top-0 left-0 right-0',
        ]"
      >
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
          <!-- Language Switcher -->
          <div class="flex items-center ml-16">
            <div
              @click="setLanguage('id')"
              :class="[
                {
                  'bg-gray-600 shadow-lg ring-black ring-1': currentLanguage === 'id',
                  'bg-gray-200': currentLanguage !== 'id',
                },
                'p-2 rounded-l cursor-pointer transition-colors duration-300',
              ]"
            >
              <img src="../assets/img/image-15.png" alt="ID" class="w-6 h-6 rounded-full" />
            </div>
            <div
              @click="setLanguage('en')"
              :class="[
                {
                  'bg-gray-600 shadow-lg ring-black ring-1': currentLanguage === 'en',
                  'bg-gray-200': currentLanguage !== 'en',
                },
                'p-2 rounded-r cursor-pointer transition-colors duration-300',
              ]"
            >
              <img src="../assets/img/image-16.png" alt="EN" class="w-6 h-6 rounded-full" />
            </div>
          </div>
          <!-- Navbar -->
          <nav>
            <ul class="flex space-x-6">
              <!-- Navigation Links -->
              <!-- This can be dynamically rendered based on props if needed -->
            </ul>
          </nav>
          <!-- Company Logo -->
          <div class="flex flex-col items-center space-y-4 mr-6">
            <img src="../assets/img/FAE kecil.png" alt="Logo 1" class="w-auto h-8" />
            <img src="../assets/img/FGN kecil.png" alt="Logo 2" class="w-auto h-8" />
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    props: ['isScrolled', 'currentLanguage'],
    methods: {
      setLanguage(lang) {
        this.$emit('update:currentLanguage', lang);
      }
    }
  }
  </script>
  
    <style scoped>
  .header {
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  
  .text-shadow-md {
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  