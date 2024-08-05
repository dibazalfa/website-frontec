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
        <!-- Main content goes here -->
        <div class="flex items-center mt-7">
          <router-link to="/spare-parts">
            <font-awesome-icon
              icon="circle-arrow-left"
              class="text-3xl mr-6 cursor-pointer mt-2 hover:scale-125 transform transition-transform duration-300"
            />
          </router-link>
          <p
            class="text-[24px] md:text-[40px] text-[#286F9B] font-bold text-shadow-md"
          >
            Pulley Slide Lagging
          </p>
        </div>
        <img :src="pulley" alt="" class="mt-10 mx-auto" />
        <p
          class="bg-black text-white w-36 px-6 py-2 mt-10 rounded-full text-center font-bold uppercase"
        >
          Features
        </p>
        <ul class="list-disc mt-6 ml-4 text-justify">
          <li>
            <b>Superior Traction:</b> The diamond shape and Z-shaped grooves on
            the surface greatly increase the friction/traction between the
            pulley and belt, resulting in less slipping and better driving
            performance.
          </li>
          <li>
            <b>Long Aging:</b> Highly elastic and wear-resistant rubber material
            is used, with a tight and reliable fixing method to prolong the
            service life of the drum.
          </li>
          <li>
            <b>Self-Cleaning:</b> Foreign matter discharges itself through the
            double chevron grooves on the pulley lagging surface and the gaps
            between laggings. This structure ensures no material build-up,
            making the belt easy to track and run steadily. It protects the
            pulley face and belt cover from damage, increasing their service
            life.
          </li>
          <li>
            <b>Self-Cooling:</b> Ventilation and heat dissipation are improved
            through the double chevron grooves on the pulley lagging surface and
            the gaps between laggings. This reduces the temperature of both the
            belt cover and pulley face, resulting in better performance and
            longer life.
          </li>
          <li>
            <b>Broad Application Range:</b> Suitable for all types of pulleys
            with different diameters, as long as the complete set is statically
            balanced.
          </li>
          <li>
            <b>Easy to Maintain:</b> Replace the slide lagging without removing
            the pulley from the conveyor system and without extra rubber
            fabrication. Simply slide out the old lagging, slide in the new
            lagging, and resume operation. This reduces shutdown time and
            maintenance costs dramatically, translating into high productivity.
          </li>
        </ul>
        <div class="flex flex-col md:flex-row">
          <img :src="laggingPad" alt="" class="mt-10" />
          <div class="flex flex-col ml-12">
            <p
              class="bg-black text-white w-[270px] px-6 py-2 mt-10 rounded-full text-center font-bold uppercase"
            >
              parts for pulley lagging
            </p>
            <ul class="list-disc text-justify ml-6 mt-6">
              <li>
                <b>Calculate Pulley Diameter without lagging:</b> Use designed
                overall pulley diameter with lagging minus 2 x chosen lagging
                pad thickness (H).
              </li>
              <li>
                <b>Complete Set Solutions:</b> Our engineer team will come up
                the solution of pulley static-balance based on the pulley
                diameter without lagging and the required length (L). We can
                also meet requirements according to customer's personalized
                specification/design.
              </li>
              <li>
                <b>Requirement of drum face pulley:</b> If the pulley face
                without lagging is drum, use SRS15 or SRS19 lagging pads. If the
                pulley without lagging is flat face with less than 750mm face
                length, customer could thicken the middle portion of the pulley
                face and use SRS15 or SRS19 lagging pads. If the pulley without
                lagging is flat face with face length greater than 750mm, use
                SRE19+SRS19+SRE19 inclined lagging pads to achieve drum face.
              </li>
            </ul>
          </div>
        </div>
        <p
          class="bg-black text-white w-72 px-6 py-2 mt-10 rounded-full text-center font-bold uppercase"
        >
          BELT SUPPLIED REQUIREMENT
        </p>
        <table class="min-w-full bg-white mt-6">
          <thead>
            <tr class="w-full bg-[#286F9B] text-white">
              <th class="px-4 py-2 border">Name</th>
              <th class="px-4 py-2 border">Size</th>
              <th class="px-4 py-2 border">Width mm</th>
              <th class="px-4 py-2 border" colspan="3">Thickness mm</th>
              <th class="px-4 py-2 border">Length L mm</th>
            </tr>
            <tr class="w-full bg-[#286F9B] text-white">
              <th class="px-4 py-2 border"></th>
              <th class="px-4 py-2 border"></th>
              <th class="px-4 py-2 border"></th>
              <th class="px-4 py-2 border">H</th>
              <th class="px-4 py-2 border">H1</th>
              <th class="px-4 py-2 border">H2</th>
              <th class="px-4 py-2 border"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="w-full text-black">
              <td class="px-4 py-2 border">Lagging Pad</td>
              <td class="px-4 py-2 border">SRS15</td>
              <td class="px-4 py-2 border">B=139</td>
              <td class="px-4 py-2 border">15</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">1830</td>
            </tr>
            <tr class="w-full text-black">
              <td class="px-4 py-2 border">Lagging Pad</td>
              <td class="px-4 py-2 border">SRS19</td>
              <td class="px-4 py-2 border">B=139</td>
              <td class="px-4 py-2 border">19</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">1830</td>
            </tr>
            <tr class="w-full text-black">
              <td class="px-4 py-2 border">Inclined Lagging Pad</td>
              <td class="px-4 py-2 border">SRE19</td>
              <td class="px-4 py-2 border">B=139</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">13</td>
              <td class="px-4 py-2 border">19</td>
              <td class="px-4 py-2 border">254</td>
            </tr>
            <tr class="w-full text-black">
              <td class="px-4 py-2 border">Double Retainer</td>
              <td class="px-4 py-2 border">SFK</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">1830</td>
            </tr>
            <tr class="w-full text-black">
              <td class="px-4 py-2 border">Single Retainer</td>
              <td class="px-4 py-2 border">SFA</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">–</td>
              <td class="px-4 py-2 border">1830</td>
            </tr>
          </tbody>
        </table>
        <p
          class="bg-black text-white w-64 px-6 py-2 mt-10 rounded-full text-center font-bold uppercase"
        >
          INSTALLATION STEPS
        </p>
        <img :src="install" alt="" class="mt-6" />
        <ul class="list-disc text-justify ml-6 mt-4">
          <li>
            Based on the number of lagging pads required, mark the installation
            positions of the lagging pads on the pulley evenly.
          </li>
          <li>
            Weld or bolt the first retainer onto the marked position (make sure
            the retainer is parallel to the axial line of the pulley). See image
            1.
          </li>
          <li>
            Slide the lagging pad into the first installed retainer, and then
            based on the corresponding position, weld or bolt the second
            retainer on the other side of the pad. Repeat this step until
            installing all retainer and pads. See image 2, 3, 4.
          </li>
          <li>
            After installing the pad into the retainer, please also install two
            fixtures at both ends of the pads to prevent the pads from sliding
            out of the retainer.
          </li>
          <li>
            The single retainer fixing installation should follow the spacing
            between adjacent single retainers. See image 5.
          </li>
          <li>
            Maintenance/Replacement: Remove the fixtures on both ends of the
            pads. Simply slide out the old ones and slide into the new ones,
            then put the fixtures back on again. See image 6.
          </li>
        </ul>
      </section>

      <!-- Sidebar -->
      <aside class="w-full md:w-1/3 min-h-screen p-4 md:sticky md:top-0 h-full">
        <!-- Sidebar content goes here -->
        <div class="flex flex-col mt-10">
          <div
            class="mt-10 bg-white rounded-lg shadow-md w-64 mx-auto text-center border border-black border-1"
          >
            <p class="text-[20px] font-bold p-4 border-b border-black">
              Bucket Elevator Components
            </p>
            <router-link to="/elevator-belt">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Elevator Belt
              </p>
            </router-link>
            <router-link to="/bolt-sets">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Bolt Sets & Fastener
              </p>
            </router-link>
            <router-link to="/elevator-bucket">
              <p class="text-[18px] px-4 py-8 border-b border-black">
                Elevator Bucket
              </p>
            </router-link>
            <p
              class="text-[18px] px-4 py-8 border-b border-black bg-gradient-to-r from-[#286F9B] to-[#96c4df] font-bold text-white"
            >
              Pulley Slide Lagging
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

import pulley from "@/assets/img/spare-parts/pulley.png";
import laggingPad from "@/assets/img/spare-parts/lagging-pad.png";
import supply from "@/assets/img/spare-parts/pulley-req.png";
import install from "@/assets/img/spare-parts/pulley-instal.png";

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
      pulley,
      laggingPad,
      supply,
      install,
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
