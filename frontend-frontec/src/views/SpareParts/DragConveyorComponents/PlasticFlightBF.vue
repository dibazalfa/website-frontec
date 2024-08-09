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
            Plastic Flight Attachment (BF)
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
              Plastic (HDPE) scrapers are an economical and practical solution.
            </li>
            <li>
              Nylon scraper has better wear resistance and longer service life.
            </li>
            <li>
              Ultra-high molecular weight polyethylene sheet has low friction
              coefficient, good wear resistance and excellent cost performance.
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
                <th class="border border-gray-300 p-2">E1</th>
                <th class="border border-gray-300 p-2">E2</th>
                <th class="border border-gray-300 p-2">D</th>
                <th class="border border-gray-300 p-2">d</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">BF145×45</td>
                <td class="border border-gray-300 p-2">145</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">45</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF184×45</td>
                <td class="border border-gray-300 p-2">184</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">45</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF185×50</td>
                <td class="border border-gray-300 p-2">185</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">35</td>
                <td class="border border-gray-300 p-2">115</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">15</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF194×49</td>
                <td class="border border-gray-300 p-2">194</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">49</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">150</td>
                <td class="border border-gray-300 p-2">16</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF208×49</td>
                <td class="border border-gray-300 p-2">208</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">49</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">150</td>
                <td class="border border-gray-300 p-2">17</td>
                <td class="border border-gray-300 p-2">4-φ10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF240×49</td>
                <td class="border border-gray-300 p-2">240</td>
                <td class="border border-gray-300 p-2">72</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">49</td>
                <td class="border border-gray-300 p-2">37</td>
                <td class="border border-gray-300 p-2">95</td>
                <td class="border border-gray-300 p-2">195</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF240×49(M)</td>
                <td class="border border-gray-300 p-2">240</td>
                <td class="border border-gray-300 p-2">72</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">49</td>
                <td class="border border-gray-300 p-2">37</td>
                <td class="border border-gray-300 p-2">104</td>
                <td class="border border-gray-300 p-2">195</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF255×49</td>
                <td class="border border-gray-300 p-2">255</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">49</td>
                <td class="border border-gray-300 p-2">35</td>
                <td class="border border-gray-300 p-2">105</td>
                <td class="border border-gray-300 p-2">190</td>
                <td class="border border-gray-300 p-2">16</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF284×45</td>
                <td class="border border-gray-300 p-2">284</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">45</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">228</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF305×45</td>
                <td class="border border-gray-300 p-2">305</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">45</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">228</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF305×50</td>
                <td class="border border-gray-300 p-2">305</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">38</td>
                <td class="border border-gray-300 p-2">115</td>
                <td class="border border-gray-300 p-2">245</td>
                <td class="border border-gray-300 p-2">18</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF305×55</td>
                <td class="border border-gray-300 p-2">305</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">55</td>
                <td class="border border-gray-300 p-2">42.5</td>
                <td class="border border-gray-300 p-2">95</td>
                <td class="border border-gray-300 p-2">195</td>
                <td class="border border-gray-300 p-2">22</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF305×55(ZC)</td>
                <td class="border border-gray-300 p-2">305</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">55</td>
                <td class="border border-gray-300 p-2">42.5</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">228</td>
                <td class="border border-gray-300 p-2">22</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF310×50</td>
                <td class="border border-gray-300 p-2">310</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">40</td>
                <td class="border border-gray-300 p-2">148</td>
                <td class="border border-gray-300 p-2">236</td>
                <td class="border border-gray-300 p-2">20</td>
                <td class="border border-gray-300 p-2">4-φ10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF360×45</td>
                <td class="border border-gray-300 p-2">360</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">45</td>
                <td class="border border-gray-300 p-2">36</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">228</td>
                <td class="border border-gray-300 p-2">19</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF380×60</td>
                <td class="border border-gray-300 p-2">380</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">16</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">45</td>
                <td class="border border-gray-300 p-2">155</td>
                <td class="border border-gray-300 p-2">255</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF380×60B</td>
                <td class="border border-gray-300 p-2">380</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">16</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">45</td>
                <td class="border border-gray-300 p-2">102</td>
                <td class="border border-gray-300 p-2">228</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF380×90</td>
                <td class="border border-gray-300 p-2">380</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">15</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">155</td>
                <td class="border border-gray-300 p-2">255-265</td>
                <td class="border border-gray-300 p-2">44</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF480×90</td>
                <td class="border border-gray-300 p-2">480</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">16</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">170</td>
                <td class="border border-gray-300 p-2">310</td>
                <td class="border border-gray-300 p-2">44</td>
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
                <th class="border border-gray-300 p-2">E1</th>
                <th class="border border-gray-300 p-2">E2</th>
                <th class="border border-gray-300 p-2">D</th>
                <th class="border border-gray-300 p-2">d</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">BF180X92</td>
                <td class="border border-gray-300 p-2">180</td>
                <td class="border border-gray-300 p-2">58</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">92</td>
                <td class="border border-gray-300 p-2">43</td>
                <td class="border border-gray-300 p-2">120</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">26</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF230X108</td>
                <td class="border border-gray-300 p-2">230</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">108</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">104</td>
                <td class="border border-gray-300 p-2">194</td>
                <td class="border border-gray-300 p-2">28</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF300X108</td>
                <td class="border border-gray-300 p-2">300</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">108</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">115</td>
                <td class="border border-gray-300 p-2">245</td>
                <td class="border border-gray-300 p-2">28</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF312X82</td>
                <td class="border border-gray-300 p-2">312</td>
                <td class="border border-gray-300 p-2">74</td>
                <td class="border border-gray-300 p-2">14</td>
                <td class="border border-gray-300 p-2">82</td>
                <td class="border border-gray-300 p-2">62</td>
                <td class="border border-gray-300 p-2">120</td>
                <td class="border border-gray-300 p-2">240</td>
                <td class="border border-gray-300 p-2">30</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF330X108</td>
                <td class="border border-gray-300 p-2">330</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">108</td>
                <td class="border border-gray-300 p-2">50</td>
                <td class="border border-gray-300 p-2">135</td>
                <td class="border border-gray-300 p-2">275</td>
                <td class="border border-gray-300 p-2">28</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF300X38</td>
                <td class="border border-gray-300 p-2">300</td>
                <td class="border border-gray-300 p-2">54</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">38</td>
                <td class="border border-gray-300 p-2">29</td>
                <td class="border border-gray-300 p-2">85</td>
                <td class="border border-gray-300 p-2">165</td>
                <td class="border border-gray-300 p-2">14.5</td>
                <td class="border border-gray-300 p-2">4-φ7</td>
              </tr>
            </tbody>
          </table>
          <p
            class="bg-black text-white w-72 px-6 py-3 rounded-full text-center font-bold uppercase mt-6 shadow-lg"
          >
            SPECIFICATIONS - UHMWPE
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
                <th class="border border-gray-300 p-2">E1</th>
                <th class="border border-gray-300 p-2">E2</th>
                <th class="border border-gray-300 p-2">D</th>
                <th class="border border-gray-300 p-2">d</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-700">
              <tr>
                <td class="border border-gray-300 p-2">BF154X60X8C(M)</td>
                <td class="border border-gray-300 p-2">154</td>
                <td class="border border-gray-300 p-2">56</td>
                <td class="border border-gray-300 p-2">8</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">47</td>
                <td class="border border-gray-300 p-2">100</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">30</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF194X60X8C(M)</td>
                <td class="border border-gray-300 p-2">194</td>
                <td class="border border-gray-300 p-2">56</td>
                <td class="border border-gray-300 p-2">8</td>
                <td class="border border-gray-300 p-2">60</td>
                <td class="border border-gray-300 p-2">47</td>
                <td class="border border-gray-300 p-2">120</td>
                <td class="border border-gray-300 p-2">/</td>
                <td class="border border-gray-300 p-2">30</td>
                <td class="border border-gray-300 p-2">2-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF240X70X8C(M)</td>
                <td class="border border-gray-300 p-2">240</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">8</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">56</td>
                <td class="border border-gray-300 p-2">104</td>
                <td class="border border-gray-300 p-2">194</td>
                <td class="border border-gray-300 p-2">35</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF235X53X10C(TD)</td>
                <td class="border border-gray-300 p-2">235</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">53</td>
                <td class="border border-gray-300 p-2">43</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">200</td>
                <td class="border border-gray-300 p-2">23</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF235X57.5X10C(YC)</td>
                <td class="border border-gray-300 p-2">235</td>
                <td class="border border-gray-300 p-2">62</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">57.5</td>
                <td class="border border-gray-300 p-2">45.5</td>
                <td class="border border-gray-300 p-2">105</td>
                <td class="border border-gray-300 p-2">185</td>
                <td class="border border-gray-300 p-2">22.5</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF300X73X10C(YC)</td>
                <td class="border border-gray-300 p-2">300</td>
                <td class="border border-gray-300 p-2">65</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">73</td>
                <td class="border border-gray-300 p-2">60.5</td>
                <td class="border border-gray-300 p-2">141</td>
                <td class="border border-gray-300 p-2">231</td>
                <td class="border border-gray-300 p-2">30</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF305X53X10C(TD)</td>
                <td class="border border-gray-300 p-2">305</td>
                <td class="border border-gray-300 p-2">80</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">53</td>
                <td class="border border-gray-300 p-2">43</td>
                <td class="border border-gray-300 p-2">110</td>
                <td class="border border-gray-300 p-2">200</td>
                <td class="border border-gray-300 p-2">23</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF310X70X12C(M)</td>
                <td class="border border-gray-300 p-2">310</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">70</td>
                <td class="border border-gray-300 p-2">56</td>
                <td class="border border-gray-300 p-2">115</td>
                <td class="border border-gray-300 p-2">245</td>
                <td class="border border-gray-300 p-2">35</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF340X67X8-12C(M)</td>
                <td class="border border-gray-300 p-2">340</td>
                <td class="border border-gray-300 p-2">90</td>
                <td class="border border-gray-300 p-2">8-12</td>
                <td class="border border-gray-300 p-2">67</td>
                <td class="border border-gray-300 p-2">53</td>
                <td class="border border-gray-300 p-2">135</td>
                <td class="border border-gray-300 p-2">275</td>
                <td class="border border-gray-300 p-2">32</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">BF380X65X10C(YC)</td>
                <td class="border border-gray-300 p-2">380</td>
                <td class="border border-gray-300 p-2">75</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">65</td>
                <td class="border border-gray-300 p-2">52</td>
                <td class="border border-gray-300 p-2">211</td>
                <td class="border border-gray-300 p-2">311</td>
                <td class="border border-gray-300 p-2">25</td>
                <td class="border border-gray-300 p-2">4-φ9</td>
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
            <router-link to="/plastic-flight-br">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Plastic Flight Attachment (BR)
              </p>
            </router-link>
            <router-link to="/nylon-gear-wheel">
              <p
                class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200"
              >
                Nylon Gear & Wheel
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Plastic Flight <br />
              Attachment (BF)
            </p>
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

import product from "@/assets/img/spare-parts/plastic-bf.png";
import spec from "@/assets/img/spare-parts/plastic-bf-spec1.png";
import spec2 from "@/assets/img/spare-parts/plastic-bf-spec2.png";
import spec3 from "@/assets/img/spare-parts/plastic-bf-spec3.png";
import draw from "@/assets/img/spare-parts/plastic-bf-draw.png";

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
      spec3,
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
