<template>
  <div class="landing-page">
    <div class="div">
      <div class="overlap">
        <div class="overlap-group">
          <!-- <img class="image" alt="Image" src="image-28.png" />
          <img class="img" alt="Image" src="image-27.png" /> -->
          <p class="text-wrapper">
            “Founded in 2008, Frontec Group started its business through Frontec Agritama Engineering (FAE),
            manufacturing material handling products such as bucket elevators, chain conveyors, screw conveyors, and
            grader cleaners. Frontec continues to develop its engineering technology and expand its product range.
            Frontec also produces corn dryers with several burner options, depending on the most efficient resources
            near the plant. It manufactures several feed mill machines, such as hammer mills, mixers, and dust
            collectors. To fulfill the needs of the feed and grain industry, Frontec Group established a new company,
            Frontec Global Niagatama (FGN), providing material handling spare parts such as HDPE and steel buckets and
            forged chain links. Frontec has been appointed by Zhenjiang Sanwey Conveying Equipment Co., Ltd. as the
            exclusive distributor for its conveying spare parts in Indonesia. Frontec also supplies complete storage
            solutions, being appointed by world-class silo manufacturer Altuntas Group from Turkey as the exclusive
            distributor of grain silos for the Indonesian market..”
          </p>
          <!-- <img class="machining" alt="Machining" src="machining-1.png" />
          <img class="machining-2" alt="Machining" src="machining-2.png" /> -->
          <p class="why-frontec">
            <span class="span">Why</span>
            <span class="text-wrapper-2"> Frontec?</span>
          </p>
          <div class="frame">
            <div class="rectangle" />
            <div class="rectangle" />
            <div class="rectangle" />
            <p class="providing-quality">
              Providing quality engineering solutions that go beyond its customers' expectations.
            </p>
            <p class="p">
              Frontec has very professional human capital in order to deliver it’s products and services.
            </p>
            <p class="text-wrapper-3">
              Offering diverse products and services, from engineering design and consultancy to equipment
              manufacturing and project installation.
            </p>
          </div>
          <div class="rectangle-2" />
          <!-- <img class="mage-x" alt="Mage x" src="mage-x.svg" /> -->
          <!-- <img class="ic-baseline-facebook" alt="Ic baseline facebook" src="ic-baseline-facebook.svg" /> -->
          <div class="text-wrapper-4">Contact Us</div>
        </div>
        <p class="about-frontec">
          <span class="span">About </span>
          <span class="text-wrapper-2">Frontec</span>
        </p>
      </div>
      <div class="overlap-group-2">
        <div class="group">
          <!-- <img class="IMG-photoroom" alt="Img photoroom" src="IMG-3732-photoroom-1.png" /> -->
        </div>
        <div class="rectangle-3" />
        <div class="rectangle-4" />
        <!-- <img class="main-logo-global" alt="Main logo global" src="main-logo-global-1.png" /> -->
        <!-- <img class="main-logo" alt="Main logo" src="main-logo-1.png" /> -->
        <div class="navbar">
          <div class="text-wrapper-5">ABOUT US</div>
          <div class="text-wrapper-5">OUR PRODUCTS</div>
          <div class="text-wrapper-5">OUR COMPANIES</div>
          <div class="text-wrapper-5">CONTACT US</div>
          <div class="text-wrapper-6">ACTIVITIES</div>
        </div>
        <div class="text-wrapper-7">Feed and Grain</div>
        <div class="text-wrapper-8">Technology</div>
        <div class="text-wrapper-9">Trusted Partner in</div>
        <div class="image-wrapper">
          <!-- <img class="image-2" alt="Image" src="image-15.png" /> -->
        </div>
        <div class="img-wrapper">
          <!-- <img class="image-2" alt="Image" src="image-16.png" /> -->
        </div>
        <CaretDown class="icon-fill-caret-down" color="white" />
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { defineProps } from "vue";
import { CaretDown } from "./CaretDown";

export default {
  name: "LandingPage",
  components: {
    CaretDown,
  },
  props: {
    // No props
  },
};
</script> -->

<style>
.landing-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.landing-page .div {
  background-color: #ffffff;
  height: 2405px;
  overflow: hidden;
  position: relative;
  width: 1486px;
}

.landing-page .overlap {
  height: 1610px;
  left: 0;
  position: absolute;
  top: 795px;
  width: 1500px;
}

.landing-page .overlap-group {
  height: 1610px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1500px;
}

.landing-page .image {
  height: 644px;
  left: 1002px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 484px;
}

.landing-page .img {
  height: 1200px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 357px;
  width: 869px;
}

.landing-page .text-wrapper {
  color: var(--dark-green);
  font-family: "Poppins-Regular", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 235px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: 443px;
  width: 1017px;
}

.landing-page .machining {
  height: 262px;
  left: 408px;
  object-fit: cover;
  position: absolute;
  top: 128px;
  width: 670px;
}

.landing-page .machining-2 {
  height: 262px;
  left: 408px;
  object-fit: cover;
  position: absolute;
  top: 844px;
  width: 670px;
}

.landing-page .why-frontec {
  color: transparent;
  font-family: "Inter-ExtraBold", Helvetica;
  font-size: 40px;
  font-weight: 800;
  left: 605px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 761px;
  white-space: nowrap;
}

.landing-page .span {
  color: #154214;
}

.landing-page .text-wrapper-2 {
  color: #286f9b;
}

.landing-page .frame {
  align-items: center;
  display: inline-flex;
  gap: 29px;
  left: 90px;
  position: absolute;
  top: 1180px;
}

.landing-page .rectangle {
  background-color: var(--white);
  border: 1px solid;
  border-color: #0000004c;
  border-radius: 10px;
  height: 242px;
  position: relative;
  width: 416px;
}

.landing-page .providing-quality {
  color: var(--black);
  font-family: "Poppins-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 22px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 73px;
  width: 372px;
}

.landing-page .p {
  color: var(--black);
  font-family: "Poppins-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 912px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 73px;
  width: 372px;
}

.landing-page .text-wrapper-3 {
  color: var(--black);
  font-family: "Poppins-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 470px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 51px;
  width: 366px;
}

.landing-page .rectangle-2 {
  background-color: var(--blue);
  height: 70px;
  left: 0;
  position: absolute;
  top: 1540px;
  width: 1500px;
}

.landing-page .mage-x {
  height: 45px;
  left: 167px;
  position: absolute;
  top: 1555px;
  width: 45px;
}

.landing-page .ic-baseline-facebook {
  height: 50px;
  left: 108px;
  position: absolute;
  top: 1550px;
  width: 50px;
}

.landing-page .text-wrapper-4 {
  color: #ffffff;
  font-family: "Inter-Bold", Helvetica;
  font-size: 22px;
  font-weight: 700;
  left: 1294px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 1560px;
}

.landing-page .about-frontec {
  color: transparent;
  font-family: "Inter-ExtraBold", Helvetica;
  font-size: 40px;
  font-weight: 800;
  left: 601px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 38px;
  white-space: nowrap;
}

.landing-page .overlap-group-2 {
  height: 766px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1486px;
}

.landing-page .group {
  background-image: url("../assets/bluesky 1.png");
  background-position: 50% 50%;
  background-size: cover;
  height: 766px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1486px;
}

.landing-page .IMG-photoroom {
  height: 617px;
  left: 1054px;
  position: absolute;
  top: 149px;
  width: 432px;
}

.landing-page .rectangle-3 {
  background-color: #ffffff80;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 10px;
  height: 37px;
  left: 72px;
  position: absolute;
  top: 56px;
  width: 96px;
}

.landing-page .rectangle-4 {
  background-color: #204154;
  border-radius: 10px;
  height: 37px;
  left: 120px;
  position: absolute;
  top: 56px;
  width: 48px;
}

.landing-page .main-logo-global {
  height: 51px;
  left: 1229px;
  object-fit: cover;
  position: absolute;
  top: 135px;
  width: 173px;
}

.landing-page .main-logo {
  height: 51px;
  left: 1229px;
  object-fit: cover;
  position: absolute;
  top: 62px;
  width: 173px;
}

.landing-page .navbar {
  align-items: center;
  display: flex;
  gap: 45px;
  left: 278px;
  position: absolute;
  top: 62px;
  width: 715px;
}

.landing-page .text-wrapper-5 {
  color: #ffffff;
  font-family: "Inter-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.landing-page .text-wrapper-6 {
  color: #ffffff;
  font-family: "Inter-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-right: -11px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.landing-page .text-wrapper-7 {
  color: var(--stabilo-yellow);
  font-family: "Inter-BoldItalic", Helvetica;
  font-size: 80px;
  font-style: italic;
  font-weight: 700;
  left: 272px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000080;
  top: 331px;
}

.landing-page .text-wrapper-8 {
  color: var(--pale-yellow);
  font-family: "Inter-SemiBold Italic", Helvetica;
  font-size: 60px;
  font-style: italic;
  font-weight: 600;
  left: 267px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 428px;
}

.landing-page .text-wrapper-9 {
  color: var(--pale-yellow);
  font-family: "Inter-SemiBold Italic", Helvetica;
  font-size: 60px;
  font-style: italic;
  font-weight: 600;
  left: 272px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 262px;
}

.landing-page .image-wrapper {
  background-color: #ffffff;
  border-radius: 90px;
  height: 29px;
  left: 81px;
  overflow: hidden;
  position: absolute;
  top: 60px;
  width: 29px;
}

.landing-page .image-2 {
  height: 29px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 29px;
}

.landing-page .img-wrapper {
  background-color: #ffffff;
  border-radius: 90px;
  height: 29px;
  left: 129px;
  overflow: hidden;
  position: absolute;
  top: 60px;
  width: 29px;
}

.landing-page .icon-fill-caret-down {
  height: 24px !important;
  left: 536px !important;
  position: absolute !important;
  top: 60px !important;
  width: 24px !important;
}
</style>