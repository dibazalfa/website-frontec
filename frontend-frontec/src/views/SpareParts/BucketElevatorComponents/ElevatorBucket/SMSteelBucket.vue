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
        <p
          class="text-[24px] mt-7 md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
        >
          SM Steel Bucket
        </p>
        <div class="flex flex-col md:flex-row mt-12">
          <img :src="product" alt="" class="object-contain" />
          <div
            class="flex flex-col text-justify mt-6 md:mt-0 md:pl-10 text-[16px] md:text-[18px]"
          >
            <div class="flex flex-col">
              <p
                class="bg-black text-white w-36 px-6 py-3 rounded-full text-center font-bold uppercase shadow-lg"
              >
                Features
              </p>
              <div class="flex flex-row mt-3">
                <p
                  class="bg-[#CDCDCD] w-48 py-3 rounded-full text-center uppercase shadow-lg"
                >
                  carbon steel
                </p>
                <p
                  class="bg-[#CDCDCD] w-48 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
                >
                  stainless steel
                </p>
              </div>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                Mid-deep seamless pressed steel buckets without welds or joints.
                Smooth inner and outer surfaces facilitate materials
                discharging. Excellent overall strength.
              </li>
              <li>Design Recommendations.</li>
              <ul class="list-disc ml-5">
                <li>
                  Minimum bucket spacing:: bucket depth ”C” +5mm and minimum
                  bucket spacing: bucket projection “B” +25mm.
                </li>
                <li>We recommend using “(Z-Y) + 10% ” as usable capacity.</li>
                <li>Special thickness is available on request.</li>
                <li>Venting holes are available in 5 patterns on request.</li>
              </ul>
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
          <table class="min-w-full bg-white border mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="px-2 py-2 border" rowspan="2">Model</th>
                <th class="px-2 py-2 border" colspan="4">
                  Bucket Dimension (mm)
                </th>
                <th class="px-2 py-2 border" colspan="4">
                  Mounting Holes (mm)
                </th>
                <th class="px-2 py-2 border" colspan="2">Capacity (L)</th>
              </tr>
              <tr class="bg-[#286F9B] text-white">
                <th class="px-2 py-2 border">Length A</th>
                <th class="px-2 py-2 border">Proj. B</th>
                <th class="px-2 py-2 border">Depth C</th>
                <th class="px-2 py-2 border">Thickness</th>
                <th class="px-2 py-2 border">From Top D</th>
                <th class="px-2 py-2 border">Hole Centres E</th>
                <th class="px-2 py-2 border">No. of Holes</th>
                <th class="px-2 py-2 border">Hole Diameter</th>
                <th class="px-2 py-2 border">Water Level (Z-Y)</th>
                <th class="px-2 py-2 border">Total Level (X-Y)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 border">SM0808</td>
                <td class="px-4 py-2 border">85</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">58</td>
                <td class="px-4 py-2 border">1</td>
                <td class="px-4 py-2 border">16</td>
                <td class="px-4 py-2 border">43</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">8</td>
                <td class="px-4 py-2 border">0.18</td>
                <td class="px-4 py-2 border">0.21</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM1009</td>
                <td class="px-4 py-2 border">106</td>
                <td class="px-4 py-2 border">89</td>
                <td class="px-4 py-2 border">66</td>
                <td class="px-4 py-2 border">1</td>
                <td class="px-4 py-2 border">20</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">0.25</td>
                <td class="px-4 py-2 border">0.33</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM1312</td>
                <td class="px-4 py-2 border">138</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">88</td>
                <td class="px-4 py-2 border">1.5</td>
                <td class="px-4 py-2 border">25</td>
                <td class="px-4 py-2 border">70</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">0.64</td>
                <td class="px-4 py-2 border">0.82</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM1612</td>
                <td class="px-4 py-2 border">170</td>
                <td class="px-4 py-2 border">130</td>
                <td class="px-4 py-2 border">124</td>
                <td class="px-4 py-2 border">1.5-2.0</td>
                <td class="px-4 py-2 border">35</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">0.89</td>
                <td class="px-4 py-2 border">1.31</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM1614</td>
                <td class="px-4 py-2 border">168</td>
                <td class="px-4 py-2 border">147</td>
                <td class="px-4 py-2 border">112</td>
                <td class="px-4 py-2 border">1.5-2.0</td>
                <td class="px-4 py-2 border">30</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">1.2</td>
                <td class="px-4 py-2 border">1.58</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM1814</td>
                <td class="px-4 py-2 border">188</td>
                <td class="px-4 py-2 border">147</td>
                <td class="px-4 py-2 border">112</td>
                <td class="px-4 py-2 border">1.5-2.0</td>
                <td class="px-4 py-2 border">30</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">1.38</td>
                <td class="px-4 py-2 border">1.77</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM2314</td>
                <td class="px-4 py-2 border">234</td>
                <td class="px-4 py-2 border">147</td>
                <td class="px-4 py-2 border">112</td>
                <td class="px-4 py-2 border">1.5-2.5</td>
                <td class="px-4 py-2 border">32</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">1.78</td>
                <td class="px-4 py-2 border">2.3</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM2814</td>
                <td class="px-4 py-2 border">288</td>
                <td class="px-4 py-2 border">147</td>
                <td class="px-4 py-2 border">112</td>
                <td class="px-4 py-2 border">1.5-3.0</td>
                <td class="px-4 py-2 border">32</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">2.26</td>
                <td class="px-4 py-2 border">2.91</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM2015</td>
                <td class="px-4 py-2 border">208</td>
                <td class="px-4 py-2 border">152</td>
                <td class="px-4 py-2 border">112</td>
                <td class="px-4 py-2 border">1.5-3.0</td>
                <td class="px-4 py-2 border">32</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">2</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">1.53</td>
                <td class="px-4 py-2 border">2</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM2316</td>
                <td class="px-4 py-2 border">234</td>
                <td class="px-4 py-2 border">160</td>
                <td class="px-4 py-2 border">122</td>
                <td class="px-4 py-2 border">1.5-3.0</td>
                <td class="px-4 py-2 border">32</td>
                <td class="px-4 py-2 border">70</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">2.1</td>
                <td class="px-4 py-2 border">2.7</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM2616</td>
                <td class="px-4 py-2 border">264</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">128</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">35</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">2.55</td>
                <td class="px-4 py-2 border">3.28</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM2816</td>
                <td class="px-4 py-2 border">288</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">130</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">38</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">10.5</td>
                <td class="px-4 py-2 border">2.82</td>
                <td class="px-4 py-2 border">3.64</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3016</td>
                <td class="px-4 py-2 border">308</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">135</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">36</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">2.9</td>
                <td class="px-4 py-2 border">3.88</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3316</td>
                <td class="px-4 py-2 border">340</td>
                <td class="px-4 py-2 border">165</td>
                <td class="px-4 py-2 border">135</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">38</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">3.65</td>
                <td class="px-4 py-2 border">4.5</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM2818</td>
                <td class="px-4 py-2 border">290</td>
                <td class="px-4 py-2 border">182</td>
                <td class="px-4 py-2 border">138</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">38</td>
                <td class="px-4 py-2 border">80</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">3.5</td>
                <td class="px-4 py-2 border">4.5</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3018</td>
                <td class="px-4 py-2 border">308</td>
                <td class="px-4 py-2 border">182</td>
                <td class="px-4 py-2 border">140</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">36</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">9</td>
                <td class="px-4 py-2 border">3.5</td>
                <td class="px-4 py-2 border">4.5</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3318</td>
                <td class="px-4 py-2 border">340</td>
                <td class="px-4 py-2 border">182</td>
                <td class="px-4 py-2 border">140</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">38</td>
                <td class="px-4 py-2 border">110</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">5.2</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3518</td>
                <td class="px-4 py-2 border">362</td>
                <td class="px-4 py-2 border">182</td>
                <td class="px-4 py-2 border">140</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">38</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">4.1</td>
                <td class="px-4 py-2 border">5.5</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3718</td>
                <td class="px-4 py-2 border">385</td>
                <td class="px-4 py-2 border">195</td>
                <td class="px-4 py-2 border">140</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">38</td>
                <td class="px-4 py-2 border">89</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">4.9</td>
                <td class="px-4 py-2 border">6.4</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3021</td>
                <td class="px-4 py-2 border">310</td>
                <td class="px-4 py-2 border">218</td>
                <td class="px-4 py-2 border">163</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">5.2</td>
                <td class="px-4 py-2 border">6.7</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3321</td>
                <td class="px-4 py-2 border">340</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">163</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">5.65</td>
                <td class="px-4 py-2 border">7.2</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3521</td>
                <td class="px-4 py-2 border">362</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">162</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">120</td>
                <td class="px-4 py-2 border">3</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">5.86</td>
                <td class="px-4 py-2 border">7.6</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM3721</td>
                <td class="px-4 py-2 border">383</td>
                <td class="px-4 py-2 border">218</td>
                <td class="px-4 py-2 border">160</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">89</td>
                <td class="px-4 py-2 border">4</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">6.48</td>
                <td class="px-4 py-2 border">8.6</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM4521</td>
                <td class="px-4 py-2 border">464</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">163</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">89</td>
                <td class="px-4 py-2 border">5</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">7.7</td>
                <td class="px-4 py-2 border">10.19</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM4821</td>
                <td class="px-4 py-2 border">480</td>
                <td class="px-4 py-2 border">218</td>
                <td class="px-4 py-2 border">163</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">90</td>
                <td class="px-4 py-2 border">5</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">8.5</td>
                <td class="px-4 py-2 border">10.5</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">SM5021</td>
                <td class="px-4 py-2 border">515</td>
                <td class="px-4 py-2 border">215</td>
                <td class="px-4 py-2 border">163</td>
                <td class="px-4 py-2 border">2.0-3.0</td>
                <td class="px-4 py-2 border">50</td>
                <td class="px-4 py-2 border">100</td>
                <td class="px-4 py-2 border">5</td>
                <td class="px-4 py-2 border">11</td>
                <td class="px-4 py-2 border">8.91</td>
                <td class="px-4 py-2 border">11.25</td>
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
              <p class="text-[18px] px-4 py-8 border-b border-black">
                AA Industrial Bucket
              </p>
            </router-link>
            <router-link to="/cc-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                CC Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/d-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                D Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dk-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                DK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dl-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                DL Bucket
              </p>
            </router-link>
            <router-link to="/dm-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                DM Bucket
              </p>
            </router-link>
            <router-link to="/eu-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                EU Bucket
              </p>
            </router-link>
            <router-link to="/sk-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                SK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/m-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                M Bucket
              </p>
            </router-link>
            <router-link to="/fabricated-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Fabricated Steel Bucket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              SM Steel Bucket
            </p>
            <router-link to="/ss-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
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

import product from "@/assets/img/spare-parts/sm-steel.png";
import spec from "@/assets/img/spare-parts/sm-steel-spec.png";
import params from "@/assets/img/spare-parts/sm-steel-params.png";

export default {
  components: {
    AppHeader,
    Footer,
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
</style>
