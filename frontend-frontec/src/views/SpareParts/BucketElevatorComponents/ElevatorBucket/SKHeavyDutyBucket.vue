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
            SK Heavy Duty Bucket
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
                HDPE/Nylon/pu
              </p>
            </div>
            <ul class="list-disc mt-8 ml-6">
              <li>
                High strength deep bucket for agricultural application. Its
                distinctive design lead to the minimized bucket spacing/pitch,
                maximized coefficient of fullness, and high strength and longer
                life cycle. The discharging rate can be increased by more than
                15% under the same conditions comparing to the other type
                buckets. The international patent application has been accepted
                by The Patent Cooperation Treaty (PCT).
              </li>
              <li class="font-bold">
                Agricultural application, high strength, deep bucket.
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
          <table class="min-w-full bg-white border mt-6">
            <thead>
              <tr class="bg-[#286F9B] text-white">
                <th class="px-7 py-2 border" rowspan="2">Size (inch)</th>
                <th class="px-3 py-2 border" colspan="4">
                  Bucket Dimension (mm)
                </th>
                <th class="px-3 py-2 border" colspan="3">
                  Mounting Hole Dimension (mm)
                </th>
                <th class="px-2 py-2 border" rowspan="2">Bolt Diameter (mm)</th>
                <th class="px-2 py-2 border" rowspan="2">
                  Minial Spacing (mm)
                </th>
                <th class="px-3 py-2 border" colspan="2">Capacity (L)</th>
              </tr>
              <tr class="bg-[#286F9B] text-white">
                <th class="px-3 py-2 border">Length A</th>
                <th class="px-3 py-2 border">Proj. B</th>
                <th class="px-3 py-2 border">Depth C1</th>
                <th class="px-3 py-2 border">Depth C2</th>
                <th class="px-3 py-2 border">From Top D</th>
                <th class="px-1 py-2 border">Hole Centres E</th>
                <th class="px-3 py-2 border"># of Holes</th>
                <!-- <th class="px-3 py-2 border">Diameter (mm)</th> -->
                <!-- <th class="px-3 py-2 border">Min Spacing (mm)</th> -->
                <th class="px-3 py-2 border">Water Level</th>
                <th class="px-1 py-2 border">Water Level+10%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-3 py-2 border">CC4 x 3</td>
                <td class="px-3 py-2 border">111</td>
                <td class="px-3 py-2 border">90</td>
                <td class="px-3 py-2 border">78</td>
                <td class="px-3 py-2 border">69</td>
                <td class="px-3 py-2 border">20</td>
                <td class="px-3 py-2 border">63.5</td>
                <td class="px-3 py-2 border">2</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">0.27</td>
                <td class="px-3 py-2 border">0.30</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC5 x 4</td>
                <td class="px-3 py-2 border">138</td>
                <td class="px-3 py-2 border">114</td>
                <td class="px-3 py-2 border">102</td>
                <td class="px-3 py-2 border">87</td>
                <td class="px-3 py-2 border">22</td>
                <td class="px-3 py-2 border">81.0</td>
                <td class="px-3 py-2 border">2</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">0.59</td>
                <td class="px-3 py-2 border">0.65</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC6 x 4</td>
                <td class="px-3 py-2 border">165</td>
                <td class="px-3 py-2 border">114</td>
                <td class="px-3 py-2 border">102</td>
                <td class="px-3 py-2 border">87</td>
                <td class="px-3 py-2 border">22</td>
                <td class="px-3 py-2 border">111.1</td>
                <td class="px-3 py-2 border">2</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">0.71</td>
                <td class="px-3 py-2 border">0.78</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC7 x 4</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">114</td>
                <td class="px-3 py-2 border">102</td>
                <td class="px-3 py-2 border">87</td>
                <td class="px-3 py-2 border">22</td>
                <td class="px-3 py-2 border">68.3</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">0.82</td>
                <td class="px-3 py-2 border">0.90</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC6 x 5</td>
                <td class="px-3 py-2 border">168</td>
                <td class="px-3 py-2 border">140</td>
                <td class="px-3 py-2 border">128</td>
                <td class="px-3 py-2 border">111</td>
                <td class="px-3 py-2 border">30</td>
                <td class="px-3 py-2 border">111.1</td>
                <td class="px-3 py-2 border">2</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">101.6</td>
                <td class="px-3 py-2 border">1.12</td>
                <td class="px-3 py-2 border">1.23</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC7 x 5</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">140</td>
                <td class="px-3 py-2 border">128</td>
                <td class="px-3 py-2 border">111</td>
                <td class="px-3 py-2 border">30</td>
                <td class="px-3 py-2 border">68.3</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">101.6</td>
                <td class="px-3 py-2 border">1.27</td>
                <td class="px-3 py-2 border">1.40</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC8 x 5</td>
                <td class="px-3 py-2 border">215</td>
                <td class="px-3 py-2 border">140</td>
                <td class="px-3 py-2 border">128</td>
                <td class="px-3 py-2 border">111</td>
                <td class="px-3 py-2 border">30</td>
                <td class="px-3 py-2 border">77.8</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">101.6</td>
                <td class="px-3 py-2 border">1.44</td>
                <td class="px-3 py-2 border">1.58</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC9 x 5</td>
                <td class="px-3 py-2 border">240</td>
                <td class="px-3 py-2 border">140</td>
                <td class="px-3 py-2 border">128</td>
                <td class="px-3 py-2 border">111</td>
                <td class="px-3 py-2 border">30</td>
                <td class="px-3 py-2 border">92.1</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">101.6</td>
                <td class="px-3 py-2 border">1.63</td>
                <td class="px-3 py-2 border">1.79</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC10 x 5</td>
                <td class="px-3 py-2 border">267</td>
                <td class="px-3 py-2 border">140</td>
                <td class="px-3 py-2 border">128</td>
                <td class="px-3 py-2 border">111</td>
                <td class="px-3 py-2 border">30</td>
                <td class="px-3 py-2 border">104.8</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">101.6</td>
                <td class="px-3 py-2 border">1.86</td>
                <td class="px-3 py-2 border">2.05</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC11 x 5</td>
                <td class="px-3 py-2 border">292</td>
                <td class="px-3 py-2 border">140</td>
                <td class="px-3 py-2 border">128</td>
                <td class="px-3 py-2 border">111</td>
                <td class="px-3 py-2 border">30</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">101.6</td>
                <td class="px-3 py-2 border">2.08</td>
                <td class="px-3 py-2 border">2.29</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC12 x 5</td>
                <td class="px-3 py-2 border">318</td>
                <td class="px-3 py-2 border">140</td>
                <td class="px-3 py-2 border">128</td>
                <td class="px-3 py-2 border">111</td>
                <td class="px-3 py-2 border">30</td>
                <td class="px-3 py-2 border">85.7</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">101.6</td>
                <td class="px-3 py-2 border">2.34</td>
                <td class="px-3 py-2 border">2.57</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC8 x 6</td>
                <td class="px-3 py-2 border">214</td>
                <td class="px-3 py-2 border">168</td>
                <td class="px-3 py-2 border">154</td>
                <td class="px-3 py-2 border">133</td>
                <td class="px-3 py-2 border">35</td>
                <td class="px-3 py-2 border">77.8</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">127</td>
                <td class="px-3 py-2 border">2.08</td>
                <td class="px-3 py-2 border">2.29</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC9 x 6</td>
                <td class="px-3 py-2 border">242</td>
                <td class="px-3 py-2 border">168</td>
                <td class="px-3 py-2 border">154</td>
                <td class="px-3 py-2 border">133</td>
                <td class="px-3 py-2 border">35</td>
                <td class="px-3 py-2 border">92.1</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">127</td>
                <td class="px-3 py-2 border">2.34</td>
                <td class="px-3 py-2 border">2.57</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC10 x 6</td>
                <td class="px-3 py-2 border">265</td>
                <td class="px-3 py-2 border">168</td>
                <td class="px-3 py-2 border">154</td>
                <td class="px-3 py-2 border">133</td>
                <td class="px-3 py-2 border">35</td>
                <td class="px-3 py-2 border">104.8</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">127</td>
                <td class="px-3 py-2 border">2.59</td>
                <td class="px-3 py-2 border">2.85</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC11 x 6</td>
                <td class="px-3 py-2 border">290</td>
                <td class="px-3 py-2 border">168</td>
                <td class="px-3 py-2 border">154</td>
                <td class="px-3 py-2 border">133</td>
                <td class="px-3 py-2 border">35</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">127</td>
                <td class="px-3 py-2 border">2.86</td>
                <td class="px-3 py-2 border">3.15</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC12 x 6</td>
                <td class="px-3 py-2 border">317</td>
                <td class="px-3 py-2 border">168</td>
                <td class="px-3 py-2 border">154</td>
                <td class="px-3 py-2 border">133</td>
                <td class="px-3 py-2 border">35</td>
                <td class="px-3 py-2 border">85.7</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">127</td>
                <td class="px-3 py-2 border">3.20</td>
                <td class="px-3 py-2 border">3.52</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC13 x 6</td>
                <td class="px-3 py-2 border">340</td>
                <td class="px-3 py-2 border">168</td>
                <td class="px-3 py-2 border">154</td>
                <td class="px-3 py-2 border">133</td>
                <td class="px-3 py-2 border">35</td>
                <td class="px-3 py-2 border">92.1</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">6.35</td>
                <td class="px-3 py-2 border">127</td>
                <td class="px-3 py-2 border">3.39</td>
                <td class="px-3 py-2 border">3.73</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC10 x 7</td>
                <td class="px-3 py-2 border">270</td>
                <td class="px-3 py-2 border">197</td>
                <td class="px-3 py-2 border">179</td>
                <td class="px-3 py-2 border">156</td>
                <td class="px-3 py-2 border">40</td>
                <td class="px-3 py-2 border">104.8</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">152.4</td>
                <td class="px-3 py-2 border">3.60</td>
                <td class="px-3 py-2 border">3.96</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC11 x 7</td>
                <td class="px-3 py-2 border">294</td>
                <td class="px-3 py-2 border">197</td>
                <td class="px-3 py-2 border">179</td>
                <td class="px-3 py-2 border">156</td>
                <td class="px-3 py-2 border">40</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">152.4</td>
                <td class="px-3 py-2 border">3.86</td>
                <td class="px-3 py-2 border">4.25</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC12 x 7</td>
                <td class="px-3 py-2 border">318</td>
                <td class="px-3 py-2 border">197</td>
                <td class="px-3 py-2 border">179</td>
                <td class="px-3 py-2 border">156</td>
                <td class="px-3 py-2 border">40</td>
                <td class="px-3 py-2 border">85.7</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">152.4</td>
                <td class="px-3 py-2 border">4.35</td>
                <td class="px-3 py-2 border">4.79</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC13 x 7</td>
                <td class="px-3 py-2 border">343</td>
                <td class="px-3 py-2 border">197</td>
                <td class="px-3 py-2 border">179</td>
                <td class="px-3 py-2 border">156</td>
                <td class="px-3 py-2 border">40</td>
                <td class="px-3 py-2 border">92.1</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">152.4</td>
                <td class="px-3 py-2 border">4.66</td>
                <td class="px-3 py-2 border">5.13</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC14 x 7</td>
                <td class="px-3 py-2 border">371</td>
                <td class="px-3 py-2 border">197</td>
                <td class="px-3 py-2 border">179</td>
                <td class="px-3 py-2 border">156</td>
                <td class="px-3 py-2 border">40</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">5</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">152.4</td>
                <td class="px-3 py-2 border">4.95</td>
                <td class="px-3 py-2 border">5.45</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC15 x 7</td>
                <td class="px-3 py-2 border">397</td>
                <td class="px-3 py-2 border">197</td>
                <td class="px-3 py-2 border">179</td>
                <td class="px-3 py-2 border">156</td>
                <td class="px-3 py-2 border">40</td>
                <td class="px-3 py-2 border">82.6</td>
                <td class="px-3 py-2 border">5</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">152.4</td>
                <td class="px-3 py-2 border">5.43</td>
                <td class="px-3 py-2 border">5.97</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC16 x 7</td>
                <td class="px-3 py-2 border">427</td>
                <td class="px-3 py-2 border">197</td>
                <td class="px-3 py-2 border">179</td>
                <td class="px-3 py-2 border">156</td>
                <td class="px-3 py-2 border">40</td>
                <td class="px-3 py-2 border">73.0</td>
                <td class="px-3 py-2 border">6</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">152.4</td>
                <td class="px-3 py-2 border">5.73</td>
                <td class="px-3 py-2 border">6.30</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC10 x 8</td>
                <td class="px-3 py-2 border">270</td>
                <td class="px-3 py-2 border">222</td>
                <td class="px-3 py-2 border">220</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">45</td>
                <td class="px-3 py-2 border">104.8</td>
                <td class="px-3 py-2 border">3</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">4.87</td>
                <td class="px-3 py-2 border">5.36</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC11 x 8</td>
                <td class="px-3 py-2 border">305</td>
                <td class="px-3 py-2 border">222</td>
                <td class="px-3 py-2 border">220</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">45</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">4.95</td>
                <td class="px-3 py-2 border">5.45</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC12 x 8</td>
                <td class="px-3 py-2 border">318</td>
                <td class="px-3 py-2 border">222</td>
                <td class="px-3 py-2 border">220</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">45</td>
                <td class="px-3 py-2 border">85.7</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">6.2</td>
                <td class="px-3 py-2 border">6.82</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC13 x 8</td>
                <td class="px-3 py-2 border">345</td>
                <td class="px-3 py-2 border">222</td>
                <td class="px-3 py-2 border">220</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">45</td>
                <td class="px-3 py-2 border">92.1</td>
                <td class="px-3 py-2 border">4</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">6.42</td>
                <td class="px-3 py-2 border">7.06</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC14 x 8</td>
                <td class="px-3 py-2 border">372</td>
                <td class="px-3 py-2 border">222</td>
                <td class="px-3 py-2 border">220</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">45</td>
                <td class="px-3 py-2 border">76.2</td>
                <td class="px-3 py-2 border">5</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">7.16</td>
                <td class="px-3 py-2 border">7.88</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC15 x 8</td>
                <td class="px-3 py-2 border">397</td>
                <td class="px-3 py-2 border">222</td>
                <td class="px-3 py-2 border">220</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">45</td>
                <td class="px-3 py-2 border">82.6</td>
                <td class="px-3 py-2 border">5</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">7.52</td>
                <td class="px-3 py-2 border">8.27</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC16 x 8</td>
                <td class="px-3 py-2 border">427</td>
                <td class="px-3 py-2 border">222</td>
                <td class="px-3 py-2 border">220</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">45</td>
                <td class="px-3 py-2 border">73.0</td>
                <td class="px-3 py-2 border">6</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">8.38</td>
                <td class="px-3 py-2 border">9.22</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC18 x 8</td>
                <td class="px-3 py-2 border">473</td>
                <td class="px-3 py-2 border">222</td>
                <td class="px-3 py-2 border">220</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">45</td>
                <td class="px-3 py-2 border">79.38</td>
                <td class="px-3 py-2 border">6</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">9.30</td>
                <td class="px-3 py-2 border">10.23</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC20 x 8</td>
                <td class="px-3 py-2 border">522</td>
                <td class="px-3 py-2 border">225</td>
                <td class="px-3 py-2 border">225</td>
                <td class="px-3 py-2 border">191</td>
                <td class="px-3 py-2 border">50</td>
                <td class="px-3 py-2 border">88.90</td>
                <td class="px-3 py-2 border">6</td>
                <td class="px-3 py-2 border">7.94</td>
                <td class="px-3 py-2 border">177.8</td>
                <td class="px-3 py-2 border">10.30</td>
                <td class="px-3 py-2 border">11.33</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC20 x 10</td>
                <td class="px-3 py-2 border">533</td>
                <td class="px-3 py-2 border">290</td>
                <td class="px-3 py-2 border">263</td>
                <td class="px-3 py-2 border">230</td>
                <td class="px-3 py-2 border">50</td>
                <td class="px-3 py-2 border">88.90</td>
                <td class="px-3 py-2 border">6</td>
                <td class="px-3 py-2 border">9.53</td>
                <td class="px-3 py-2 border">236.22</td>
                <td class="px-3 py-2 border">16.40</td>
                <td class="px-3 py-2 border">18.04</td>
              </tr>
              <tr>
                <td class="px-3 py-2 border">CC22 x 10</td>
                <td class="px-3 py-2 border">584</td>
                <td class="px-3 py-2 border">290</td>
                <td class="px-3 py-2 border">263</td>
                <td class="px-3 py-2 border">230</td>
                <td class="px-3 py-2 border">50</td>
                <td class="px-3 py-2 border">101.60</td>
                <td class="px-3 py-2 border">6</td>
                <td class="px-3 py-2 border">9.53</td>
                <td class="px-3 py-2 border">236.22</td>
                <td class="px-3 py-2 border">18.00</td>
                <td class="px-3 py-2 border">19.80</td>
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
              <p class="text-[20px] font-bold p-4 border-b border-black hover:bg-gray-200">
                Elevator Bucket
              </p>
            </router-link>
            <router-link to="/aa-industrial-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                AA Industrial Bucket
              </p>
            </router-link>
            <router-link to="/cc-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                CC Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/d-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                D Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dk-heavy-duty-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                DK Heavy Duty Bucket
              </p>
            </router-link>
            <router-link to="/dl-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                DL Bucket
              </p>
            </router-link>
            <router-link to="/dm-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                DM Bucket
              </p>
            </router-link>
            <router-link to="/eu-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                EU Bucket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              SK Heavy Duty Bucket
            </p>
            <router-link to="/m-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                M Bucket
              </p>
            </router-link>
            <router-link to="/fabricated-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                Fabricated Steel Bucket
              </p>
            </router-link>
            <router-link to="/sm-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
                SM Steel Bucket
              </p>
            </router-link>
            <router-link to="/ss-steel-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black hover:bg-gray-200">
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
import product from "@/assets/img/spare-parts/sk-heavy.png";
import spec from "@/assets/img/spare-parts/sk-heavy-spec.png";
import params from "@/assets/img/spare-parts/sk-heavy-params.png";

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
</style>
