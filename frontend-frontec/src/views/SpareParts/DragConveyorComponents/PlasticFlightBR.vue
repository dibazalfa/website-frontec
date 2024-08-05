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
          <router-link to="/drag-conveyor-components">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            U-Shaped Plastic Flight Attachment (BR)
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
                Drawing
              </p>
              <p
                class="bg-[#CDCDCD] w-36 py-3 rounded-full text-center uppercase ml-3 shadow-lg"
              >
                hdpe/nylon
              </p>
            </div>
            <img :src="draw" alt="" class="object-contain mt-6" />
          </div>
        </div>
        <div class="flex flex-col">
          <p
            class="bg-black text-white w-48 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Features
          </p>
          <ul class="mt-3 list-disc ml-6">
            <li>
              The installation aperture and hole distance can be customized
              according to customer requirements.
            </li>
            <li>
              Specifications followed by the suffix “C” for ultra-high molecular
              weight polyethylene sheet slitting processing, other
              specifications for injection molding plastic or nylon scraper.
              friction coefficient, good wear resistance and excellent cost
              performance.
            </li>
          </ul>
          <p
            class="bg-black text-white w-64 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Specifications - HDPE
          </p>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Specification</th>
                <th class="border border-gray-300 p-2">L</th>
                <th class="border border-gray-300 p-2">L1</th>
                <th class="border border-gray-300 p-2">Î</th>
                <th class="border border-gray-300 p-2">H</th>
                <th class="border border-gray-300 p-2">h</th>
                <th class="border border-gray-300 p-2">R</th>
                <th class="border border-gray-300 p-2">E1</th>
                <th class="border border-gray-300 p-2">F</th>
                <th class="border border-gray-300 p-2">D</th>
                <th class="border border-gray-300 p-2">d</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">BR80×58</td>
                <td class="border border-gray-300 p-2">150</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">58</td>
                <td class="border border-gray-300 p-2">30</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">16</td>
                <td class="border border-gray-300 p-2">2-φ7</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR80×70</td>
                <td class="border border-gray-300 p-2">160</td>
                <td class="border border-gray-300 p-2">52</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">46</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">74</td>
                <td class="border border-gray-300 p-2">27</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">2-φ7</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR90×90</td>
                <td class="border border-gray-300 p-2">180</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">48</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR100×74</td>
                <td class="border border-gray-300 p-2">190</td>
                <td class="border border-gray-300 p-2">55</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">74</td>
                <td class="border border-gray-300 p-2">48</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR100×90</td>
                <td class="border border-gray-300 p-2">196</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">49</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">15</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR110×70</td>
                <td class="border border-gray-300 p-2">195</td>
                <td class="border border-gray-300 p-2">48</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">11</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR110×77</td>
                <td class="border border-gray-300 p-2">200</td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">9</td>
                <td class="border border-gray-300 p-2">77</td>
                <td class="border border-gray-300 p-2">42</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">53</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR122×90</td>
                <td class="border border-gray-300 p-2">230</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">122</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR125×100</td>
                <td class="border border-gray-300 p-2">242</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">125</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">17</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR135×110</td>
                <td class="border border-gray-300 p-2">262</td>
                <td class="border border-gray-300 p-2">72</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">53</td>
                <td class="border border-gray-300 p-2">135</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR155×110</td>
                <td class="border border-gray-300 p-2">295</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">55</td>
                <td class="border border-gray-300 p-2">155</td>
                <td class="border border-gray-300 p-2">120</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">20</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR158×110</td>
                <td class="border border-gray-300 p-2">300</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">55</td>
                <td class="border border-gray-300 p-2">158</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">21</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR158×132</td>
                <td class="border border-gray-300 p-2">300</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">132</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">158</td>
                <td class="border border-gray-300 p-2">111.6</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">16</td>
                <td class="border border-gray-300 p-2">4-φ10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR185×132</td>
                <td class="border border-gray-300 p-2">350</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">132</td>
                <td class="border border-gray-300 p-2">58</td>
                <td class="border border-gray-300 p-2">185</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR198×148</td>
                <td class="border border-gray-300 p-2">375</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">148</td>
                <td class="border border-gray-300 p-2">77</td>
                <td class="border border-gray-300 p-2">198</td>
                <td class="border border-gray-300 p-2">142</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">26</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR205×142</td>
                <td class="border border-gray-300 p-2">390</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">15</td>
                <td class="border border-gray-300 p-2">142</td>
                <td class="border border-gray-300 p-2">56</td>
                <td class="border border-gray-300 p-2">205</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">18</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR254×168</td>
                <td class="border border-gray-300 p-2">468</td>
                <td class="border border-gray-300 p-2">106</td>
                <td class="border border-gray-300 p-2">15</td>
                <td class="border border-gray-300 p-2">168</td>
                <td class="border border-gray-300 p-2">117</td>
                <td class="border border-gray-300 p-2">254</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">/</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR80X64X10C(M)</td>
                <td class="border border-gray-300 p-2">148</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">64</td>
                <td class="border border-gray-300 p-2">38</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">83</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">20</td>
                <td class="border border-gray-300 p-2">2-φ7</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR100X84X10C(M)</td>
                <td class="border border-gray-300 p-2">188</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">84</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">18</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR122X90X10C</td>
                <td class="border border-gray-300 p-2">230</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">122</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR125X109X10C(M)</td>
                <td class="border border-gray-300 p-2">240</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">109</td>
                <td class="border border-gray-300 p-2">55</td>
                <td class="border border-gray-300 p-2">125</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">18</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR158X110X12C(M)</td>
                <td class="border border-gray-300 p-2">294</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">158</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">21</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
            </tbody>
          </table>
          <p
            class="bg-black text-white w-64 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            Specifications - Nylon
          </p>
          <table class="min-w-full border border-gray-300 mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="border border-gray-300 p-2">Specification</th>
                <th class="border border-gray-300 p-2">L</th>
                <th class="border border-gray-300 p-2">L1</th>
                <th class="border border-gray-300 p-2">Î</th>
                <th class="border border-gray-300 p-2">H</th>
                <th class="border border-gray-300 p-2">h</th>
                <th class="border border-gray-300 p-2">R</th>
                <th class="border border-gray-300 p-2">E1</th>
                <th class="border border-gray-300 p-2">F</th>
                <th class="border border-gray-300 p-2">D</th>
                <th class="border border-gray-300 p-2">d</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">BR84×60</td>
                <td class="border border-gray-300 p-2">156</td>
                <td class="border border-gray-300 p-2">35</td>
                <td class="border border-gray-300 p-2">12.7</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">39</td>
                <td class="border border-gray-300 p-2">84</td>
                <td class="border border-gray-300 p-2">64.5</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">29</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR121×100</td>
                <td class="border border-gray-300 p-2">235</td>
                <td class="border border-gray-300 p-2">54</td>
                <td class="border border-gray-300 p-2">12.7</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">65</td>
                <td class="border border-gray-300 p-2">121</td>
                <td class="border border-gray-300 p-2">61.5</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">2-φ10.5</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR159×135</td>
                <td class="border border-gray-300 p-2">311</td>
                <td class="border border-gray-300 p-2">67</td>
                <td class="border border-gray-300 p-2">12.7</td>
                <td class="border border-gray-300 p-2">135</td>
                <td class="border border-gray-300 p-2">99</td>
                <td class="border border-gray-300 p-2">159</td>
                <td class="border border-gray-300 p-2">108</td>
                <td class="border border-gray-300 p-2">28.5</td>
                <td class="border border-gray-300 p-2">61</td>
                <td class="border border-gray-300 p-2">4-φ10.5</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR184×162</td>
                <td class="border border-gray-300 p-2">364</td>
                <td class="border border-gray-300 p-2">67</td>
                <td class="border border-gray-300 p-2">12.7</td>
                <td class="border border-gray-300 p-2">162</td>
                <td class="border border-gray-300 p-2">119</td>
                <td class="border border-gray-300 p-2">184</td>
                <td class="border border-gray-300 p-2">108</td>
                <td class="border border-gray-300 p-2">28.5</td>
                <td class="border border-gray-300 p-2">78</td>
                <td class="border border-gray-300 p-2">4-φ10.5</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR210×187</td>
                <td class="border border-gray-300 p-2">415</td>
                <td class="border border-gray-300 p-2">67</td>
                <td class="border border-gray-300 p-2">12.7</td>
                <td class="border border-gray-300 p-2">187</td>
                <td class="border border-gray-300 p-2">136</td>
                <td class="border border-gray-300 p-2">210</td>
                <td class="border border-gray-300 p-2">108</td>
                <td class="border border-gray-300 p-2">54</td>
                <td class="border border-gray-300 p-2">136</td>
                <td class="border border-gray-300 p-2">4-φ10.5</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BR235×210</td>
                <td class="border border-gray-300 p-2">465</td>
                <td class="border border-gray-300 p-2">2-67</td>
                <td class="border border-gray-300 p-2">12.7</td>
                <td class="border border-gray-300 p-2">210</td>
                <td class="border border-gray-300 p-2">132</td>
                <td class="border border-gray-300 p-2">235</td>
                <td class="border border-gray-300 p-2">143-114</td>
                <td class="border border-gray-300 p-2">54</td>
                <td class="border border-gray-300 p-2">106</td>
                <td class="border border-gray-300 p-2">5-φ10.5</td>
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
            <p class="text-[20px] font-bold p-4 border-b border-black">
              Drag Conveyor Components
            </p>
            <router-link to="/roller-chain">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Roller Chain
              </p>
            </router-link>
            <router-link to="/drop-forged-chain">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Drop Forged Chain
              </p>
            </router-link>
            <router-link to="/drag-sprocket">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Drag Sprocket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Plastic Flight <br />
              Attachment (BR)
            </p>
            <router-link to="/nylon-gear-wheel">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Nylon Gear & Wheel
              </p>
            </router-link>
            <router-link to="/plastic-flight-bf">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Plastic Flight Attachment (BF)
              </p>
            </router-link>
          </div>
          <p class="text-[20px] mx-auto mt-10">In Partnership with:</p>
          <img :src="sanwei" alt="" class="w-64 mx-auto mt-2" />
        </div>
      </aside>
    </main>

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import background from "@/assets/img/spare-parts/bgSpareParts.png";
import sanwei from "@/assets/img/spare-parts/sanwei.png";

import product from "@/assets/img/spare-parts/plastic-br.png";
import spec from "@/assets/img/spare-parts/plastic-br-spec1.png";
import spec2 from "@/assets/img/spare-parts/plastic-br-spec2.png";
import draw from "@/assets/img/spare-parts/plastic-br-draw.png";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
      spec2,
      draw,
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
