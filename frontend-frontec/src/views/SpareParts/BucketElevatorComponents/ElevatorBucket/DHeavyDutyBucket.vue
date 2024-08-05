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
            D Heavy Duty Bucket
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
                Ideal for handling grains, feeds, fertilizers, seeds, salt and
                chemicals, etc.
              </li>
              <li>Design Recommendations</li>
              <ul class="list-disc ml-5">
                <li>Minimum bucket spacing: bucket projection “B”+25mm.</li>
                <li>We recommend using “(Z-Y)+10%” for usable capacity.</li>
                <li>Mounting holes can be customized on request.</li>
                <li>Venting holes are available in 5 patterns on request</li>
              </ul>
              <li class="font-bold">
                Mid-Deep type, higher capacity, great abrasion resistance.
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
                <th class="border border-gray-300 py-2">
                  Water Level (Z-Y)+10%
                </th>
                <th class="border border-gray-300 py-2">Water Level (Z-Y)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D3×2</td>
                <td class="border border-gray-300 px-4 center-text">89</td>
                <td class="border border-gray-300 px-4 center-text">59</td>
                <td class="border border-gray-300 px-4 center-text">57</td>
                <td class="border border-gray-300 px-4 center-text">20</td>
                <td class="border border-gray-300 px-4 center-text">40</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">7</td>
                <td class="border border-gray-300 px-4 center-text">0.15</td>
                <td class="border border-gray-300 px-4 center-text">0.12</td>
                <td class="border border-gray-300 px-4 center-text">0.11</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D4×3</td>
                <td class="border border-gray-300 px-4 center-text">107</td>
                <td class="border border-gray-300 px-4 center-text">81</td>
                <td class="border border-gray-300 px-4 center-text">75</td>
                <td class="border border-gray-300 px-4 center-text">22</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">7</td>
                <td class="border border-gray-300 px-4 center-text">0.32</td>
                <td class="border border-gray-300 px-4 center-text">0.28</td>
                <td class="border border-gray-300 px-4 center-text">0.25</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D5×4</td>
                <td class="border border-gray-300 px-4 center-text">133</td>
                <td class="border border-gray-300 px-4 center-text">113</td>
                <td class="border border-gray-300 px-4 center-text">106</td>
                <td class="border border-gray-300 px-4 center-text">32</td>
                <td class="border border-gray-300 px-4 center-text">60</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">7</td>
                <td class="border border-gray-300 px-4 center-text">0.85</td>
                <td class="border border-gray-300 px-4 center-text">0.65</td>
                <td class="border border-gray-300 px-4 center-text">0.59</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D6×4</td>
                <td class="border border-gray-300 px-4 center-text">159</td>
                <td class="border border-gray-300 px-4 center-text">108</td>
                <td class="border border-gray-300 px-4 center-text">103</td>
                <td class="border border-gray-300 px-4 center-text">32</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">7</td>
                <td class="border border-gray-300 px-4 center-text">0.87</td>
                <td class="border border-gray-300 px-4 center-text">0.72</td>
                <td class="border border-gray-300 px-4 center-text">0.65</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D7×4</td>
                <td class="border border-gray-300 px-4 center-text">184</td>
                <td class="border border-gray-300 px-4 center-text">108</td>
                <td class="border border-gray-300 px-4 center-text">103</td>
                <td class="border border-gray-300 px-4 center-text">32</td>
                <td class="border border-gray-300 px-4 center-text">120</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">1.04</td>
                <td class="border border-gray-300 px-4 center-text">0.83</td>
                <td class="border border-gray-300 px-4 center-text">0.75</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D6×5</td>
                <td class="border border-gray-300 px-4 center-text">168</td>
                <td class="border border-gray-300 px-4 center-text">140</td>
                <td class="border border-gray-300 px-4 center-text">130</td>
                <td class="border border-gray-300 px-4 center-text">40</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">1.48</td>
                <td class="border border-gray-300 px-4 center-text">1.21</td>
                <td class="border border-gray-300 px-4 center-text">1.10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D7×5</td>
                <td class="border border-gray-300 px-4 center-text">192</td>
                <td class="border border-gray-300 px-4 center-text">140</td>
                <td class="border border-gray-300 px-4 center-text">130</td>
                <td class="border border-gray-300 px-4 center-text">40</td>
                <td class="border border-gray-300 px-4 center-text">120</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">1.73</td>
                <td class="border border-gray-300 px-4 center-text">1.32</td>
                <td class="border border-gray-300 px-4 center-text">1.20</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D8×5</td>
                <td class="border border-gray-300 px-4 center-text">211</td>
                <td class="border border-gray-300 px-4 center-text">140</td>
                <td class="border border-gray-300 px-4 center-text">130</td>
                <td class="border border-gray-300 px-4 center-text">40</td>
                <td class="border border-gray-300 px-4 center-text">120</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">1.92</td>
                <td class="border border-gray-300 px-4 center-text">1.55</td>
                <td class="border border-gray-300 px-4 center-text">1.41</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D9×5</td>
                <td class="border border-gray-300 px-4 center-text">237</td>
                <td class="border border-gray-300 px-4 center-text">140</td>
                <td class="border border-gray-300 px-4 center-text">130</td>
                <td class="border border-gray-300 px-4 center-text">40</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">2.41</td>
                <td class="border border-gray-300 px-4 center-text">1.93</td>
                <td class="border border-gray-300 px-4 center-text">1.75</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D10×5</td>
                <td class="border border-gray-300 px-4 center-text">266</td>
                <td class="border border-gray-300 px-4 center-text">140</td>
                <td class="border border-gray-300 px-4 center-text">130</td>
                <td class="border border-gray-300 px-4 center-text">40</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">2.60</td>
                <td class="border border-gray-300 px-4 center-text">2.10</td>
                <td class="border border-gray-300 px-4 center-text">1.91</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D11×5</td>
                <td class="border border-gray-300 px-4 center-text">289</td>
                <td class="border border-gray-300 px-4 center-text">140</td>
                <td class="border border-gray-300 px-4 center-text">130</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">100</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">2.75</td>
                <td class="border border-gray-300 px-4 center-text">2.21</td>
                <td class="border border-gray-300 px-4 center-text">2.01</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D12×5</td>
                <td class="border border-gray-300 px-4 center-text">313</td>
                <td class="border border-gray-300 px-4 center-text">140</td>
                <td class="border border-gray-300 px-4 center-text">130</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">3.00</td>
                <td class="border border-gray-300 px-4 center-text">2.32</td>
                <td class="border border-gray-300 px-4 center-text">2.11</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D8×6</td>
                <td class="border border-gray-300 px-4 center-text">211</td>
                <td class="border border-gray-300 px-4 center-text">168</td>
                <td class="border border-gray-300 px-4 center-text">154</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">120</td>
                <td class="border border-gray-300 px-4 center-text">2</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">2.83</td>
                <td class="border border-gray-300 px-4 center-text">2.28</td>
                <td class="border border-gray-300 px-4 center-text">2.08</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D9×6</td>
                <td class="border border-gray-300 px-4 center-text">237</td>
                <td class="border border-gray-300 px-4 center-text">168</td>
                <td class="border border-gray-300 px-4 center-text">154</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">3.23</td>
                <td class="border border-gray-300 px-4 center-text">2.57</td>
                <td class="border border-gray-300 px-4 center-text">2.34</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D9×6A</td>
                <td class="border border-gray-300 px-4 center-text">238</td>
                <td class="border border-gray-300 px-4 center-text">188</td>
                <td class="border border-gray-300 px-4 center-text">170</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">3.56</td>
                <td class="border border-gray-300 px-4 center-text">2.79</td>
                <td class="border border-gray-300 px-4 center-text">2.54</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D10×6</td>
                <td class="border border-gray-300 px-4 center-text">266</td>
                <td class="border border-gray-300 px-4 center-text">168</td>
                <td class="border border-gray-300 px-4 center-text">154</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">3.62</td>
                <td class="border border-gray-300 px-4 center-text">2.84</td>
                <td class="border border-gray-300 px-4 center-text">2.58</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D11×6</td>
                <td class="border border-gray-300 px-4 center-text">287</td>
                <td class="border border-gray-300 px-4 center-text">168</td>
                <td class="border border-gray-300 px-4 center-text">154</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">100</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">4.01</td>
                <td class="border border-gray-300 px-4 center-text">3.11</td>
                <td class="border border-gray-300 px-4 center-text">2.83</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D12×6</td>
                <td class="border border-gray-300 px-4 center-text">313</td>
                <td class="border border-gray-300 px-4 center-text">168</td>
                <td class="border border-gray-300 px-4 center-text">154</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">4.44</td>
                <td class="border border-gray-300 px-4 center-text">3.48</td>
                <td class="border border-gray-300 px-4 center-text">3.16</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D13×6</td>
                <td class="border border-gray-300 px-4 center-text">338</td>
                <td class="border border-gray-300 px-4 center-text">168</td>
                <td class="border border-gray-300 px-4 center-text">154</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">4.74</td>
                <td class="border border-gray-300 px-4 center-text">3.78</td>
                <td class="border border-gray-300 px-4 center-text">3.44</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D14×6</td>
                <td class="border border-gray-300 px-4 center-text">368</td>
                <td class="border border-gray-300 px-4 center-text">168</td>
                <td class="border border-gray-300 px-4 center-text">154</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">95</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">5.08</td>
                <td class="border border-gray-300 px-4 center-text">4.15</td>
                <td class="border border-gray-300 px-4 center-text">3.77</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">
                  D9×6-1/2
                </td>
                <td class="border border-gray-300 px-4 center-text">230</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">3.67</td>
                <td class="border border-gray-300 px-4 center-text">2.78</td>
                <td class="border border-gray-300 px-4 center-text">2.53</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">
                  D11×6-1/2
                </td>
                <td class="border border-gray-300 px-4 center-text">280</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">100</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">4.62</td>
                <td class="border border-gray-300 px-4 center-text">3.52</td>
                <td class="border border-gray-300 px-4 center-text">3.20</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D10×7</td>
                <td class="border border-gray-300 px-4 center-text">269</td>
                <td class="border border-gray-300 px-4 center-text">197</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">4.83</td>
                <td class="border border-gray-300 px-4 center-text">4.07</td>
                <td class="border border-gray-300 px-4 center-text">3.70</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D11×7</td>
                <td class="border border-gray-300 px-4 center-text">287</td>
                <td class="border border-gray-300 px-4 center-text">197</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">100</td>
                <td class="border border-gray-300 px-4 center-text">3</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">5.39</td>
                <td class="border border-gray-300 px-4 center-text">4.35</td>
                <td class="border border-gray-300 px-4 center-text">3.95</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D12×7</td>
                <td class="border border-gray-300 px-4 center-text">326</td>
                <td class="border border-gray-300 px-4 center-text">197</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">6.02</td>
                <td class="border border-gray-300 px-4 center-text">4.82</td>
                <td class="border border-gray-300 px-4 center-text">4.38</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D13×7</td>
                <td class="border border-gray-300 px-4 center-text">343</td>
                <td class="border border-gray-300 px-4 center-text">197</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">6.52</td>
                <td class="border border-gray-300 px-4 center-text">5.58</td>
                <td class="border border-gray-300 px-4 center-text">5.07</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D13×7A</td>
                <td class="border border-gray-300 px-4 center-text">358</td>
                <td class="border border-gray-300 px-4 center-text">208</td>
                <td class="border border-gray-300 px-4 center-text">172</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">6.48</td>
                <td class="border border-gray-300 px-4 center-text">5.09</td>
                <td class="border border-gray-300 px-4 center-text">4.63</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D14×7</td>
                <td class="border border-gray-300 px-4 center-text">373</td>
                <td class="border border-gray-300 px-4 center-text">197</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">95</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">6.90</td>
                <td class="border border-gray-300 px-4 center-text">5.74</td>
                <td class="border border-gray-300 px-4 center-text">5.22</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D14×7/B</td>
                <td class="border border-gray-300 px-4 center-text">371</td>
                <td class="border border-gray-300 px-4 center-text">199</td>
                <td class="border border-gray-300 px-4 center-text">146</td>
                <td class="border border-gray-300 px-4 center-text">30</td>
                <td class="border border-gray-300 px-4 center-text">95</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">5.90</td>
                <td class="border border-gray-300 px-4 center-text">5.61</td>
                <td class="border border-gray-300 px-4 center-text">5.10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D15×7</td>
                <td class="border border-gray-300 px-4 center-text">392</td>
                <td class="border border-gray-300 px-4 center-text">197</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">100</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">7.11</td>
                <td class="border border-gray-300 px-4 center-text">6.12</td>
                <td class="border border-gray-300 px-4 center-text">5.56</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D16×7</td>
                <td class="border border-gray-300 px-4 center-text">427</td>
                <td class="border border-gray-300 px-4 center-text">197</td>
                <td class="border border-gray-300 px-4 center-text">180</td>
                <td class="border border-gray-300 px-4 center-text">45</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">5</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">7.96</td>
                <td class="border border-gray-300 px-4 center-text">6.88</td>
                <td class="border border-gray-300 px-4 center-text">6.25</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D10×8</td>
                <td class="border border-gray-300 px-4 center-text">280</td>
                <td class="border border-gray-300 px-4 center-text">220</td>
                <td class="border border-gray-300 px-4 center-text">216</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">65</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">6.52</td>
                <td class="border border-gray-300 px-4 center-text">5.40</td>
                <td class="border border-gray-300 px-4 center-text">4.91</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D11×8</td>
                <td class="border border-gray-300 px-4 center-text">305</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">206</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">75</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">7.10</td>
                <td class="border border-gray-300 px-4 center-text">5.94</td>
                <td class="border border-gray-300 px-4 center-text">5.40</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D12×8</td>
                <td class="border border-gray-300 px-4 center-text">331</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">206</td>
                <td class="border border-gray-300 px-4 center-text">50</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">7.45</td>
                <td class="border border-gray-300 px-4 center-text">6.35</td>
                <td class="border border-gray-300 px-4 center-text">5.77</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">
                  D12-1/2×8
                </td>
                <td class="border border-gray-300 px-4 center-text">330</td>
                <td class="border border-gray-300 px-4 center-text">220</td>
                <td class="border border-gray-300 px-4 center-text">216</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">7.88</td>
                <td class="border border-gray-300 px-4 center-text">6.55</td>
                <td class="border border-gray-300 px-4 center-text">5.95</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D13×8</td>
                <td class="border border-gray-300 px-4 center-text">343</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">206</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">8.00</td>
                <td class="border border-gray-300 px-4 center-text">7.03</td>
                <td class="border border-gray-300 px-4 center-text">6.39</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D14×8</td>
                <td class="border border-gray-300 px-4 center-text">378</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">206</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">95</td>
                <td class="border border-gray-300 px-4 center-text">4</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">8.76</td>
                <td class="border border-gray-300 px-4 center-text">7.56</td>
                <td class="border border-gray-300 px-4 center-text">6.87</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D14×8/B</td>
                <td class="border border-gray-300 px-4 center-text">368</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">172</td>
                <td class="border border-gray-300 px-4 center-text">28</td>
                <td class="border border-gray-300 px-4 center-text">76.2</td>
                <td class="border border-gray-300 px-4 center-text">5</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">7.80</td>
                <td class="border border-gray-300 px-4 center-text">7.80</td>
                <td class="border border-gray-300 px-4 center-text">7.30</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">
                  D14-1/2×8
                </td>
                <td class="border border-gray-300 px-4 center-text">380</td>
                <td class="border border-gray-300 px-4 center-text">220</td>
                <td class="border border-gray-300 px-4 center-text">216</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">75</td>
                <td class="border border-gray-300 px-4 center-text">5</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">9.24</td>
                <td class="border border-gray-300 px-4 center-text">7.69</td>
                <td class="border border-gray-300 px-4 center-text">6.99</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D15×8</td>
                <td class="border border-gray-300 px-4 center-text">392</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">206</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">80</td>
                <td class="border border-gray-300 px-4 center-text">5</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">9.47</td>
                <td class="border border-gray-300 px-4 center-text">8.73</td>
                <td class="border border-gray-300 px-4 center-text">7.94</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D16×8</td>
                <td class="border border-gray-300 px-4 center-text">434</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">206</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">85</td>
                <td class="border border-gray-300 px-4 center-text">5</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">10.38</td>
                <td class="border border-gray-300 px-4 center-text">8.91</td>
                <td class="border border-gray-300 px-4 center-text">8.10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D16×8/B</td>
                <td class="border border-gray-300 px-4 center-text">431</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">172</td>
                <td class="border border-gray-300 px-4 center-text">28</td>
                <td class="border border-gray-300 px-4 center-text">73</td>
                <td class="border border-gray-300 px-4 center-text">6</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">8.98</td>
                <td class="border border-gray-300 px-4 center-text">8.98</td>
                <td class="border border-gray-300 px-4 center-text">8.50</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D18×8</td>
                <td class="border border-gray-300 px-4 center-text">473</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">206</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">95</td>
                <td class="border border-gray-300 px-4 center-text">5</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">11.50</td>
                <td class="border border-gray-300 px-4 center-text">9.98</td>
                <td class="border border-gray-300 px-4 center-text">9.07</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D18×8/B</td>
                <td class="border border-gray-300 px-4 center-text">465</td>
                <td class="border border-gray-300 px-4 center-text">222</td>
                <td class="border border-gray-300 px-4 center-text">172</td>
                <td class="border border-gray-300 px-4 center-text">28</td>
                <td class="border border-gray-300 px-4 center-text">79.4</td>
                <td class="border border-gray-300 px-4 center-text">6</td>
                <td class="border border-gray-300 px-4 center-text">9</td>
                <td class="border border-gray-300 px-4 center-text">9.40</td>
                <td class="border border-gray-300 px-4 center-text">9.40</td>
                <td class="border border-gray-300 px-4 center-text">9.00</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D20×8</td>
                <td class="border border-gray-300 px-4 center-text">520</td>
                <td class="border border-gray-300 px-4 center-text">225</td>
                <td class="border border-gray-300 px-4 center-text">210</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">6</td>
                <td class="border border-gray-300 px-4 center-text">11</td>
                <td class="border border-gray-300 px-4 center-text">13.11</td>
                <td class="border border-gray-300 px-4 center-text">11.66</td>
                <td class="border border-gray-300 px-4 center-text">10.60</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D20×8/B</td>
                <td class="border border-gray-300 px-4 center-text">520</td>
                <td class="border border-gray-300 px-4 center-text">225</td>
                <td class="border border-gray-300 px-4 center-text">172</td>
                <td class="border border-gray-300 px-4 center-text">28</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">6</td>
                <td class="border border-gray-300 px-4 center-text">11</td>
                <td class="border border-gray-300 px-4 center-text">11.13</td>
                <td class="border border-gray-300 px-4 center-text">11.13</td>
                <td class="border border-gray-300 px-4 center-text">10.60</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D22×8</td>
                <td class="border border-gray-300 px-4 center-text">582</td>
                <td class="border border-gray-300 px-4 center-text">230</td>
                <td class="border border-gray-300 px-4 center-text">205</td>
                <td class="border border-gray-300 px-4 center-text">55</td>
                <td class="border border-gray-300 px-4 center-text">100</td>
                <td class="border border-gray-300 px-4 center-text">6</td>
                <td class="border border-gray-300 px-4 center-text">11</td>
                <td class="border border-gray-300 px-4 center-text">15.30</td>
                <td class="border border-gray-300 px-4 center-text">13.33</td>
                <td class="border border-gray-300 px-4 center-text">12.12</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D16×9</td>
                <td class="border border-gray-300 px-4 center-text">430</td>
                <td class="border border-gray-300 px-4 center-text">260</td>
                <td class="border border-gray-300 px-4 center-text">260</td>
                <td class="border border-gray-300 px-4 center-text">65</td>
                <td class="border border-gray-300 px-4 center-text">68</td>
                <td class="border border-gray-300 px-4 center-text">6</td>
                <td class="border border-gray-300 px-4 center-text">11</td>
                <td class="border border-gray-300 px-4 center-text">14.57</td>
                <td class="border border-gray-300 px-4 center-text">12.10</td>
                <td class="border border-gray-300 px-4 center-text">11.00</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 center-text">D24x10</td>
                <td class="border border-gray-300 px-4 center-text">637</td>
                <td class="border border-gray-300 px-4 center-text">290</td>
                <td class="border border-gray-300 px-4 center-text">263</td>
                <td class="border border-gray-300 px-4 center-text">65</td>
                <td class="border border-gray-300 px-4 center-text">90</td>
                <td class="border border-gray-300 px-4 center-text">7</td>
                <td class="border border-gray-300 px-4 center-text">11</td>
                <td class="border border-gray-300 px-4 center-text">24.90</td>
                <td class="border border-gray-300 px-4 center-text">21.78</td>
                <td class="border border-gray-300 px-4 center-text">19.80</td>
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
              <p
                class="text-[20px] font-bold p-4 border-b border-black hover:bg-gray-200"
              >
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
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              D Heavy Duty Bucket
            </p>
            <router-link to="/dk-heavy-duty-bucket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                DK Heavy Duty Bucket
              </p>
            </router-link>
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
import product from "@/assets/img/spare-parts/d-heavy.png";
import spec from "@/assets/img/spare-parts/d-heavy-spec.png";
import params from "@/assets/img/spare-parts/d-heavy-params.png";

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
