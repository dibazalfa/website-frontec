<template>
  <div class="flex flex-col min-h-screen">
    <!-- AppHeader Section -->
    <AppHeader
      class="relative min-h-[346px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${background})` }"
      :isScrolled="isScrolled"
    />

    <!-- Main Content -->
    <main class="flex-1 flex flex-col md:flex-row">
      <!-- Main Content Section -->
      <section class="flex-1 p-4 mt-10 md:mt-0 md:ml-24 overflow-y-auto">
        <div class="flex items-center mt-7">
          <router-link to="/elevator-bucket">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            DK Heavy Duty Bucket
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]"
          >
            <div class="flex flex-row">
              <p
                class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
              >
                Features
              </p>
              <p
                class="bg-[#CDCDCD] w-52 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                HDPE/Nylon/PU
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                High strength deep bucket for agricultural application.
                Reinforced and interchangeable version of metric D type deep
                bucket.
              </li>
              <li class="font-bold">
                Interchangeable, agricultural applicaton, reinforced.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            specification
          </p>
          <img :src="spec" alt="" class="object-contain mt-6" />
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            parameters
          </p>
          <table class="table-auto border-collapse border border-gray-300 mt-6">
  <thead>
    <tr class="header-color center-text">
      <th class="border border-gray-300 py-2">Model</th>
      <th class="border border-gray-300 py-2">A (mm)</th>
      <th class="border border-gray-300 py-2">B (mm)</th>
      <th class="border border-gray-300 py-2">C (mm)</th>
      <th class="border border-gray-300 py-2">D (mm)</th>
      <th class="border border-gray-300 py-2">E (mm)</th>
      <th class="border border-gray-300 py-2">No. of Holes</th>
      <th class="border border-gray-300 py-2">Hole Diameter (mm)</th>
      <th class="border border-gray-300 py-2">Water Level (X-Y)</th>
      <th class="border border-gray-300 py-2">Water Level (Z-Y)+10%</th>
      <th class="border border-gray-300 py-2">Water Level (Z-Y)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK7×5</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">142</td>
      <td class="border border-gray-300 px-4 center-text">127</td>
      <td class="border border-gray-300 px-4 center-text">30</td>
      <td class="border border-gray-300 px-4 center-text">120</td>
      <td class="border border-gray-300 px-4 center-text">2</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">1.75</td>
      <td class="border border-gray-300 px-4 center-text">1.47</td>
      <td class="border border-gray-300 px-4 center-text">1.34</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK8×5</td>
      <td class="border border-gray-300 px-4 center-text">225</td>
      <td class="border border-gray-300 px-4 center-text">142</td>
      <td class="border border-gray-300 px-4 center-text">127</td>
      <td class="border border-gray-300 px-4 center-text">30</td>
      <td class="border border-gray-300 px-4 center-text">120</td>
      <td class="border border-gray-300 px-4 center-text">2</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">1.93</td>
      <td class="border border-gray-300 px-4 center-text">1.62</td>
      <td class="border border-gray-300 px-4 center-text">1.47</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK9×5</td>
      <td class="border border-gray-300 px-4 center-text">253</td>
      <td class="border border-gray-300 px-4 center-text">142</td>
      <td class="border border-gray-300 px-4 center-text">127</td>
      <td class="border border-gray-300 px-4 center-text">30</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">3</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">2.41</td>
      <td class="border border-gray-300 px-4 center-text">1.93</td>
      <td class="border border-gray-300 px-4 center-text">1.75</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK10×5</td>
      <td class="border border-gray-300 px-4 center-text">279</td>
      <td class="border border-gray-300 px-4 center-text">142</td>
      <td class="border border-gray-300 px-4 center-text">127</td>
      <td class="border border-gray-300 px-4 center-text">30</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">3</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">2.60</td>
      <td class="border border-gray-300 px-4 center-text">2.10</td>
      <td class="border border-gray-300 px-4 center-text">1.91</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK11×5</td>
      <td class="border border-gray-300 px-4 center-text">298</td>
      <td class="border border-gray-300 px-4 center-text">142</td>
      <td class="border border-gray-300 px-4 center-text">127</td>
      <td class="border border-gray-300 px-4 center-text">30</td>
      <td class="border border-gray-300 px-4 center-text">100</td>
      <td class="border border-gray-300 px-4 center-text">3</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">2.75</td>
      <td class="border border-gray-300 px-4 center-text">2.21</td>
      <td class="border border-gray-300 px-4 center-text">2.01</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK12×5</td>
      <td class="border border-gray-300 px-4 center-text">326</td>
      <td class="border border-gray-300 px-4 center-text">142</td>
      <td class="border border-gray-300 px-4 center-text">127</td>
      <td class="border border-gray-300 px-4 center-text">30</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">3.00</td>
      <td class="border border-gray-300 px-4 center-text">2.42</td>
      <td class="border border-gray-300 px-4 center-text">2.20</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK8×6</td>
      <td class="border border-gray-300 px-4 center-text">229</td>
      <td class="border border-gray-300 px-4 center-text">168</td>
      <td class="border border-gray-300 px-4 center-text">152</td>
      <td class="border border-gray-300 px-4 center-text">40</td>
      <td class="border border-gray-300 px-4 center-text">120</td>
      <td class="border border-gray-300 px-4 center-text">2</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">2.83</td>
      <td class="border border-gray-300 px-4 center-text">2.42</td>
      <td class="border border-gray-300 px-4 center-text">2.20</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK9×6</td>
      <td class="border border-gray-300 px-4 center-text">250</td>
      <td class="border border-gray-300 px-4 center-text">168</td>
      <td class="border border-gray-300 px-4 center-text">152</td>
      <td class="border border-gray-300 px-4 center-text">40</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">3</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">3.23</td>
      <td class="border border-gray-300 px-4 center-text">2.65</td>
      <td class="border border-gray-300 px-4 center-text">2.41</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK10×6</td>
      <td class="border border-gray-300 px-4 center-text">283</td>
      <td class="border border-gray-300 px-4 center-text">168</td>
      <td class="border border-gray-300 px-4 center-text">152</td>
      <td class="border border-gray-300 px-4 center-text">40</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">3</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">3.62</td>
      <td class="border border-gray-300 px-4 center-text">2.93</td>
      <td class="border border-gray-300 px-4 center-text">2.66</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK11×6</td>
      <td class="border border-gray-300 px-4 center-text">302</td>
      <td class="border border-gray-300 px-4 center-text">168</td>
      <td class="border border-gray-300 px-4 center-text">152</td>
      <td class="border border-gray-300 px-4 center-text">40</td>
      <td class="border border-gray-300 px-4 center-text">100</td>
      <td class="border border-gray-300 px-4 center-text">3</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">4.01</td>
      <td class="border border-gray-300 px-4 center-text">3.12</td>
      <td class="border border-gray-300 px-4 center-text">2.84</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK12×6</td>
      <td class="border border-gray-300 px-4 center-text">330</td>
      <td class="border border-gray-300 px-4 center-text">168</td>
      <td class="border border-gray-300 px-4 center-text">152</td>
      <td class="border border-gray-300 px-4 center-text">40</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">4.44</td>
      <td class="border border-gray-300 px-4 center-text">3.48</td>
      <td class="border border-gray-300 px-4 center-text">3.16</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK13×6</td>
      <td class="border border-gray-300 px-4 center-text">349</td>
      <td class="border border-gray-300 px-4 center-text">168</td>
      <td class="border border-gray-300 px-4 center-text">152</td>
      <td class="border border-gray-300 px-4 center-text">40</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">4.74</td>
      <td class="border border-gray-300 px-4 center-text">3.78</td>
      <td class="border border-gray-300 px-4 center-text">3.44</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK14×6</td>
      <td class="border border-gray-300 px-4 center-text">378</td>
      <td class="border border-gray-300 px-4 center-text">168</td>
      <td class="border border-gray-300 px-4 center-text">152</td>
      <td class="border border-gray-300 px-4 center-text">40</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">5.08</td>
      <td class="border border-gray-300 px-4 center-text">4.15</td>
      <td class="border border-gray-300 px-4 center-text">3.77</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK10×7</td>
      <td class="border border-gray-300 px-4 center-text">285</td>
      <td class="border border-gray-300 px-4 center-text">200</td>
      <td class="border border-gray-300 px-4 center-text">178</td>
      <td class="border border-gray-300 px-4 center-text">45</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">3</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">4.83</td>
      <td class="border border-gray-300 px-4 center-text">4.07</td>
      <td class="border border-gray-300 px-4 center-text">3.70</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK11×7</td>
      <td class="border border-gray-300 px-4 center-text">304</td>
      <td class="border border-gray-300 px-4 center-text">200</td>
      <td class="border border-gray-300 px-4 center-text">178</td>
      <td class="border border-gray-300 px-4 center-text">45</td>
      <td class="border border-gray-300 px-4 center-text">100</td>
      <td class="border border-gray-300 px-4 center-text">3</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">5.39</td>
      <td class="border border-gray-300 px-4 center-text">4.35</td>
      <td class="border border-gray-300 px-4 center-text">3.95</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK12×7</td>
      <td class="border border-gray-300 px-4 center-text">329</td>
      <td class="border border-gray-300 px-4 center-text">200</td>
      <td class="border border-gray-300 px-4 center-text">178</td>
      <td class="border border-gray-300 px-4 center-text">45</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">5.81</td>
      <td class="border border-gray-300 px-4 center-text">4.82</td>
      <td class="border border-gray-300 px-4 center-text">4.38</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK13×7</td>
      <td class="border border-gray-300 px-4 center-text">351</td>
      <td class="border border-gray-300 px-4 center-text">200</td>
      <td class="border border-gray-300 px-4 center-text">178</td>
      <td class="border border-gray-300 px-4 center-text">45</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">6.52</td>
      <td class="border border-gray-300 px-4 center-text">5.58</td>
      <td class="border border-gray-300 px-4 center-text">5.07</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK14×7</td>
      <td class="border border-gray-300 px-4 center-text">380</td>
      <td class="border border-gray-300 px-4 center-text">200</td>
      <td class="border border-gray-300 px-4 center-text">178</td>
      <td class="border border-gray-300 px-4 center-text">45</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">6.90</td>
      <td class="border border-gray-300 px-4 center-text">5.74</td>
      <td class="border border-gray-300 px-4 center-text">5.22</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK15×7</td>
      <td class="border border-gray-300 px-4 center-text">405</td>
      <td class="border border-gray-300 px-4 center-text">200</td>
      <td class="border border-gray-300 px-4 center-text">178</td>
      <td class="border border-gray-300 px-4 center-text">45</td>
      <td class="border border-gray-300 px-4 center-text">100</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">7.11</td>
      <td class="border border-gray-300 px-4 center-text">6.12</td>
      <td class="border border-gray-300 px-4 center-text">5.56</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK16×7</td>
      <td class="border border-gray-300 px-4 center-text">440</td>
      <td class="border border-gray-300 px-4 center-text">200</td>
      <td class="border border-gray-300 px-4 center-text">178</td>
      <td class="border border-gray-300 px-4 center-text">45</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">5</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">7.96</td>
      <td class="border border-gray-300 px-4 center-text">6.88</td>
      <td class="border border-gray-300 px-4 center-text">6.25</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK11×8</td>
      <td class="border border-gray-300 px-4 center-text">310</td>
      <td class="border border-gray-300 px-4 center-text">225</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">75</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">6.84</td>
      <td class="border border-gray-300 px-4 center-text">5.92</td>
      <td class="border border-gray-300 px-4 center-text">5.38</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK12×8</td>
      <td class="border border-gray-300 px-4 center-text">338</td>
      <td class="border border-gray-300 px-4 center-text">225</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">7.46</td>
      <td class="border border-gray-300 px-4 center-text">6.44</td>
      <td class="border border-gray-300 px-4 center-text">5.86</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK13×8</td>
      <td class="border border-gray-300 px-4 center-text">357</td>
      <td class="border border-gray-300 px-4 center-text">225</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">8.00</td>
      <td class="border border-gray-300 px-4 center-text">7.13</td>
      <td class="border border-gray-300 px-4 center-text">6.48</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK14×8</td>
      <td class="border border-gray-300 px-4 center-text">385</td>
      <td class="border border-gray-300 px-4 center-text">225</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">4</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">8.76</td>
      <td class="border border-gray-300 px-4 center-text">7.56</td>
      <td class="border border-gray-300 px-4 center-text">6.87</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK15×8</td>
      <td class="border border-gray-300 px-4 center-text">413</td>
      <td class="border border-gray-300 px-4 center-text">225</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">80</td>
      <td class="border border-gray-300 px-4 center-text">5</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">9.47</td>
      <td class="border border-gray-300 px-4 center-text">8.73</td>
      <td class="border border-gray-300 px-4 center-text">7.94</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK16×8</td>
      <td class="border border-gray-300 px-4 center-text">448</td>
      <td class="border border-gray-300 px-4 center-text">235</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">5</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">10.77</td>
      <td class="border border-gray-300 px-4 center-text">9.35</td>
      <td class="border border-gray-300 px-4 center-text">8.50</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK18×8</td>
      <td class="border border-gray-300 px-4 center-text">483</td>
      <td class="border border-gray-300 px-4 center-text">235</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">45</td>
      <td class="border border-gray-300 px-4 center-text">95</td>
      <td class="border border-gray-300 px-4 center-text">5</td>
      <td class="border border-gray-300 px-4 center-text">9</td>
      <td class="border border-gray-300 px-4 center-text">11.56</td>
      <td class="border border-gray-300 px-4 center-text">10.00</td>
      <td class="border border-gray-300 px-4 center-text">9.09</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK20×8</td>
      <td class="border border-gray-300 px-4 center-text">535</td>
      <td class="border border-gray-300 px-4 center-text">235</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">6</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">13.00</td>
      <td class="border border-gray-300 px-4 center-text">11.83</td>
      <td class="border border-gray-300 px-4 center-text">10.21</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK22×8</td>
      <td class="border border-gray-300 px-4 center-text">585</td>
      <td class="border border-gray-300 px-4 center-text">235</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">100</td>
      <td class="border border-gray-300 px-4 center-text">6</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">14.30</td>
      <td class="border border-gray-300 px-4 center-text">12.65</td>
      <td class="border border-gray-300 px-4 center-text">11.50</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK24×8</td>
      <td class="border border-gray-300 px-4 center-text">630</td>
      <td class="border border-gray-300 px-4 center-text">235</td>
      <td class="border border-gray-300 px-4 center-text">205</td>
      <td class="border border-gray-300 px-4 center-text">50</td>
      <td class="border border-gray-300 px-4 center-text">88</td>
      <td class="border border-gray-300 px-4 center-text">6</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">15.30</td>
      <td class="border border-gray-300 px-4 center-text">13.43</td>
      <td class="border border-gray-300 px-4 center-text">12.21</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK16×10</td>
      <td class="border border-gray-300 px-4 center-text">460</td>
      <td class="border border-gray-300 px-4 center-text">286</td>
      <td class="border border-gray-300 px-4 center-text">254</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">73</td>
      <td class="border border-gray-300 px-4 center-text">6</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">16.00</td>
      <td class="border border-gray-300 px-4 center-text">14.00</td>
      <td class="border border-gray-300 px-4 center-text">12.73</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK18×10</td>
      <td class="border border-gray-300 px-4 center-text">495</td>
      <td class="border border-gray-300 px-4 center-text">286</td>
      <td class="border border-gray-300 px-4 center-text">254</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">78</td>
      <td class="border border-gray-300 px-4 center-text">6</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">17.70</td>
      <td class="border border-gray-300 px-4 center-text">16.02</td>
      <td class="border border-gray-300 px-4 center-text">14.56</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK20×10</td>
      <td class="border border-gray-300 px-4 center-text">545</td>
      <td class="border border-gray-300 px-4 center-text">286</td>
      <td class="border border-gray-300 px-4 center-text">254</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">88</td>
      <td class="border border-gray-300 px-4 center-text">6</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">19.70</td>
      <td class="border border-gray-300 px-4 center-text">18.17</td>
      <td class="border border-gray-300 px-4 center-text">16.52</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK22×10</td>
      <td class="border border-gray-300 px-4 center-text">605</td>
      <td class="border border-gray-300 px-4 center-text">292</td>
      <td class="border border-gray-300 px-4 center-text">264</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">100</td>
      <td class="border border-gray-300 px-4 center-text">6</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">22.70</td>
      <td class="border border-gray-300 px-4 center-text">19.45</td>
      <td class="border border-gray-300 px-4 center-text">17.69</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK23×10</td>
      <td class="border border-gray-300 px-4 center-text">615</td>
      <td class="border border-gray-300 px-4 center-text">292</td>
      <td class="border border-gray-300 px-4 center-text">264</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">85</td>
      <td class="border border-gray-300 px-4 center-text">7</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">23.60</td>
      <td class="border border-gray-300 px-4 center-text">20.33</td>
      <td class="border border-gray-300 px-4 center-text">18.48</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK24×10</td>
      <td class="border border-gray-300 px-4 center-text">635</td>
      <td class="border border-gray-300 px-4 center-text">292</td>
      <td class="border border-gray-300 px-4 center-text">264</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">7</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">24.90</td>
      <td class="border border-gray-300 px-4 center-text">21.78</td>
      <td class="border border-gray-300 px-4 center-text">19.80</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK25×10</td>
      <td class="border border-gray-300 px-4 center-text">653</td>
      <td class="border border-gray-300 px-4 center-text">292</td>
      <td class="border border-gray-300 px-4 center-text">264</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">7</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">25.50</td>
      <td class="border border-gray-300 px-4 center-text">22.21</td>
      <td class="border border-gray-300 px-4 center-text">20.10</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK26×10</td>
      <td class="border border-gray-300 px-4 center-text">691</td>
      <td class="border border-gray-300 px-4 center-text">292</td>
      <td class="border border-gray-300 px-4 center-text">264</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">98</td>
      <td class="border border-gray-300 px-4 center-text">7</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">26.50</td>
      <td class="border border-gray-300 px-4 center-text">22.99</td>
      <td class="border border-gray-300 px-4 center-text">20.90</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 center-text">DK28×10</td>
      <td class="border border-gray-300 px-4 center-text">745</td>
      <td class="border border-gray-300 px-4 center-text">292</td>
      <td class="border border-gray-300 px-4 center-text">264</td>
      <td class="border border-gray-300 px-4 center-text">70</td>
      <td class="border border-gray-300 px-4 center-text">90</td>
      <td class="border border-gray-300 px-4 center-text">8</td>
      <td class="border border-gray-300 px-4 center-text">11</td>
      <td class="border border-gray-300 px-4 center-text">28.40</td>
      <td class="border border-gray-300 px-4 center-text">24.64</td>
      <td class="border border-gray-300 px-4 center-text">22.40</td>
    </tr>
  </tbody>
</table>
        </div>
      </section>

      <!-- Sidebar -->
      <aside class="w-full md:w-1/3 min-h-screen p-4 md:sticky md:top-0 h-full">
        <!-- Sidebar content goes here -->
        <div class="flex flex-col mt-10">
          <div
            class="mt-10 bg-white rounded-lg shadow-md w-64 mx-auto text-center border border-black border-1"
          >
            <router-link to="/elevator-bucket">
              <p class="text-[20px] font-bold p-4 border-b border-black">
                Elevator Bucket
              </p>
            </router-link>
            <router-link to="/aa-industrial-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                AA Industrial Bucket
              </p>
            </router-link>
            <router-link to="/cc-heavy-duty-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                CC Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/d-heavy-duty-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                D Heavy Duty Bucket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              DK Heavy Duty Bucket
            </p>
            <router-link to="/dl-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                DL Bucket
              </p>
            </router-link>
            <router-link to="/dm-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                DM Bucket
              </p>
            </router-link>
            <router-link to="/eu-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                EU Bucket
              </p>
            </router-link>
            <router-link to="/sk-heavy-duty-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                SK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/m-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                M Bucket
              </p>
            </router-link>
            <router-link to="/fabricated-steel-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Fabricated Steel Bucket
              </p>
            </router-link>
            <router-link to="/sm-steel-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                SM Steel Bucket
              </p>
            </router-link>
            <router-link to="/ss-steel-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                SS Steel Bucket
              </p>
            </router-link>
          </div>
          <p class="text-[20px] mx-auto mt-10">In Partnership with:</p>
          <img :src="sanwei" alt="" class="w-64 mx-auto mt-2" />
        </div>
      </aside>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import background from "@/assets/img/spare-parts/bgSpareParts.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import product from "@/assets/img/spare-parts/dk-heavy.png";
import spec from "@/assets/img/spare-parts/dk-heavy-spec.png";
import params from "@/assets/img/spare-parts/dk-heavy-params.png";

export default {
  components: {
    AppHeader,
    Footer,
    FontAwesomeIcon,
  },
  data() {
    return {
      background,
      sanwei,
      product,
      spec,
      params,
    };
  },
};
</script>

<style scoped>
.header {
  transition: background-color 0.3s, box-shadow 0.3s;
}

.text-shadow-md {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.h-full {
  height: 100%;
}

.top-0 {
  top: 0;
}

.p-4 {
  padding: 1rem;
}

/* Styling for the main content and sidebar */
.main {
  flex: 1;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
}

section {
  overflow-y: auto; /* Enables scrolling on the main content */
}

.sidebar {
  position: relative;
  top: 0;
  overflow-y: auto;
}

.sticky-element {
  position: sticky;
  top: 10px;
  z-index: 10;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative; /* Disable sticky on mobile if needed */
  }
}

.header-color {
  background-color: #286f9b;
  color: white; /* Optional: to make the text color white */
}

.center-text {
  text-align: center;
}
</style>
