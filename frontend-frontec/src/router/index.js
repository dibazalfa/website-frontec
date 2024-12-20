import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // path: '/about-us',
      name: 'home',
      component: HomeView
    },
    {
      path: '/our-products',
      name: 'our-products',
      component: () => import('../views/OurProducts.vue')
    },
    {
      path: '/spare-parts',
      name: 'spare-parts',
      component: () => import('../views/SpareParts.vue')
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('../views/Activities.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/our-companies',
      name: 'our-companies',
      component: () => import('../views/OurCompanies.vue')
    },
    {
      path: '/parallax',
      name: 'pempek',
      component: () => import('../views/Parallax.vue')
    },
    {
      path: '/pvc-solid-woven',
      name: 'pvc-solid-woven',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBelt/PVCSolidWoven.vue')
    },
    {
      path: '/elevator-belt',
      name: 'elevator-belt',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBelt/ElevatorBelt.vue')
    },
    {
      path: '/rubber-belt',
      name: 'rubber-belt',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBelt/Rubber.vue')
    },
    {
      path: '/oil-fire',
      name: 'oil-fire',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBelt/OilFireResistant.vue')
    },
    {
      path: '/bolt-sets',
      name: 'bolt-sets',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/BoltSetsFastener.vue')
    },
    {
      path: '/elevator-bucket',
      name: 'elevator-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/ElevatorBucket.vue')
    },
    {
      path: '/pulley-slide-lagging',
      name: 'pulley-slide-lagging',
      component: () => import('../views/SpareParts/BucketElevatorComponents/PulleySlideLagging/PulleySlideLagging.vue')
    },
    {
      path: '/fang-bolt',
      name: 'fang-bolt',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/FangBolt.vue')
    },
    {
      path: '/euro-bolt',
      name: 'euro-bolt',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/EuroBolt.vue')
    },
    {
      path: '/domed-washer',
      name: 'domed-washer',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/DomedWasher.vue')
    },
    {
      path: '/large-flat-washer',
      name: 'large-flat-washer',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/LargeFlatWasher.vue')
    },
    {
      path: '/spring-washer',
      name: 'spring-washer',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/SpringWasher.vue')
    },
    {
      path: '/hexagon-nut',
      name: 'hexagon-nut',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/HexagonNut.vue')
    },
    {
      path: '/nyloc-nut',
      name: 'nyloc-nut',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/NylocNut.vue')
    },
    {
      path: '/flange-nut',
      name: 'flange-nut',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/FlangeNut.vue')
    },
    {
      path: '/belt-fastener-s123',
      name: 'belt-fastener-s123',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/BeltFastenerS123.vue')
    },
    {
      path: '/belt-fastener-s45',
      name: 'belt-fastener-s45',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/BeltFastenerS45.vue')
    },
    {
      path: '/aa-industrial-bucket',
      name: 'aa-industrial-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/AAIndustrialBucket.vue')
    },
    {
      path: '/cc-heavy-duty-bucket',
      name: 'cc-heavy-duty-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/CCHeavyDutyBucket.vue')
    },
    {
      path: '/d-heavy-duty-bucket',
      name: 'd-heavy-duty-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/DHeavyDutyBucket.vue')
    },
    {
      path: '/dk-heavy-duty-bucket',
      name: 'dk-heavy-duty-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/DKHeavyDutyBucket.vue')
    },
    {
      path: '/dl-bucket',
      name: 'dl-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/DLBucket.vue')
    },
    {
      path: '/dm-bucket',
      name: 'dm-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/DMBucket.vue')
    },
    {
      path: '/eu-bucket',
      name: 'eu-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/EUBucket.vue')
    },
    {
      path: '/sk-heavy-duty-bucket',
      name: 'sk-heavy-duty-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/SKHeavyDutyBucket.vue')
    },
    {
      path: '/m-bucket',
      name: 'm-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/MBucket.vue')
    },
    {
      path: '/fabricated-steel-bucket',
      name: 'fabricated-steel-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/FabricatedSteelBucket.vue')
    },
    {
      path: '/sm-steel-bucket',
      name: 'sm-steel-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/SMSteelBucket.vue')
    },
    {
      path: '/ss-steel-bucket',
      name: 'ss-steel-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/SSSteelBucket.vue')
    },
    {
      path: '/belt-conveyor-components',
      name: 'belt-conveyor-components',
      component: () => import('../views/SpareParts/BeltConveyorComponents/BeltConveyor.vue')
    },
    {
      path: '/flat-surface-conveyor',
      name: 'flat-surface-conveyor',
      component: () => import('../views/SpareParts/BeltConveyorComponents/FlatSurface.vue')
    },
    {
      path: '/patterned-conveyor',
      name: 'patterned-conveyor',
      component: () => import('../views/SpareParts/BeltConveyorComponents/Patterned.vue')
    },
    {
      path: '/impact-bar',
      name: 'impact-bar',
      component: () => import('../views/SpareParts/BeltConveyorComponents/ImpactBar.vue')
    },
    {
      path: '/drag-conveyor-components',
      name: 'drag-conveyor-components',
      component: () => import('../views/SpareParts/DragConveyorComponents/DragConveyorComponents.vue')
    },
    {
      path: '/drag-sprocket',
      name: 'drag-sprocket',
      component: () => import('../views/SpareParts/DragConveyorComponents/DragSprocket.vue')
    },
    {
      path: '/drop-forged-chain',
      name: 'drop-forged-chain',
      component: () => import('../views/SpareParts/DragConveyorComponents/DropForgedChain.vue')
    },
    {
      path: '/nylon-gear-wheel',
      name: 'nylon-gear-wheel',
      component: () => import('../views/SpareParts/DragConveyorComponents/NylonGearWheel.vue')
    },
    {
      path: '/plastic-flight-bf',
      name: 'plastic-flight-bf',
      component: () => import('../views/SpareParts/DragConveyorComponents/PlasticFlightBF.vue')
    },
    {
      path: '/plastic-flight-br',
      name: 'plastic-flight-br',
      component: () => import('../views/SpareParts/DragConveyorComponents/PlasticFlightBR.vue')
    },
    {
      path: '/roller-chain',
      name: 'roller-chain',
      component: () => import('../views/SpareParts/DragConveyorComponents/RollerChain.vue')
    },
    {
      path: '/screw-conveyor-components',
      name: 'screw-conveyor-components',
      component: () => import('../views/SpareParts/ScrewConveyorComponents/ScrewConveyorComponents.vue')
    },
    {
      path: '/continous-screw-flight',
      name: 'continous-screw-flight',
      component: () => import('../views/SpareParts/ScrewConveyorComponents/ContinousScrew.vue')
    },
    {
      path: '/sectional-screw-flight',
      name: 'sectional-screw-flight',
      component: () => import('../views/SpareParts/ScrewConveyorComponents/SectionalScrew.vue')
    },
    {
      path: '/complete-screw-flight',
      name: 'complete-screw-flight',
      component: () => import('../views/SpareParts/ScrewConveyorComponents/CompleteScrew.vue')
    },
    {
      path: '/cont-equal-screw',
      name: 'cont-equal-screw',
      component: () => import('../views/SpareParts/ScrewConveyorComponents/ContEqualScrew.vue')
    },
    {
      path: '/engineering-plastics',
      name: 'engineering-plastics',
      component: () => import('../views/SpareParts/EngineeringPlastics/EngineeringPlastics.vue')
    },
    {
      path: '/uhmwpe-sheet-rod',
      name: 'uhmwpe-sheet-rod',
      component: () => import('../views/SpareParts/EngineeringPlastics/UHMWPESheetRod.vue')
    },
    {
      path: '/coated-bolts',
      name: 'coated-bolts',
      component: () => import('../views/SpareParts/EngineeringPlastics/CoatedBolts.vue')
    },
    {
      path: '/hdpe-sheet-rod',
      name: 'hdpe-sheet-rod',
      component: () => import('../views/SpareParts/EngineeringPlastics/HDPESheetRod.vue')
    },
    {
      path: '/ptfe-sheet-rod',
      name: 'ptfe-sheet-rod',
      component: () => import('../views/SpareParts/EngineeringPlastics/PTFESheetRod.vue')
    },
    {
      path: '/pu-sheet-rod',
      name: 'pu-sheet-rod',
      component: () => import('../views/SpareParts/EngineeringPlastics/PUSheetRod.vue')
    },
    {
      path: '/sieves-screens',
      name: 'sieves-screens',
      component: () => import('../views/SpareParts/SievesAndScreens/SievesAndScreens.vue')
    },
    {
      path: '/sieves-cleaning-balls',
      name: 'sieves-cleaning-balls',
      component: () => import('../views/SpareParts/SievesAndScreens/SieveCleaningBalls.vue')
    },
    {
      path: '/sieves-cleaners',
      name: 'sieves-cleaners',
      component: () => import('../views/SpareParts/SievesAndScreens/SieveCleaners.vue')
    },
    {
      path: '/pan-cleaners',
      name: 'pan-cleaners',
      component: () => import('../views/SpareParts/SievesAndScreens/PanCleaners.vue')
    },
    {
      path: '/our-products/material-handling',
      name: 'our-products/material-handling',
      component: () => import('../views/OurProducts/MaterialHandling/MaterialHandling.vue')
    },
    {
      path: '/our-products/material-handling/bucket-elevator',
      name: 'our-products/material-handling/bucket-elevator',
      component: () => import('../views/OurProducts/MaterialHandling/BucketElevator.vue')
    },
    {
      path: '/our-products/material-handling/belt-conveyor',
      name: 'our-products/material-handling/belt-conveyor',
      component: () => import('../views/OurProducts/MaterialHandling/BeltConveyor.vue')
    },
    {
      path: '/our-products/material-handling/screw-conveyor',
      name: 'our-products/material-handling/screw-conveyor',
      component: () => import('../views/OurProducts/MaterialHandling/ScrewConveyor.vue')
    },
    {
      path: '/our-products/material-handling/chain-conveyor',
      name: 'our-products/material-handling/chain-conveyor',
      component: () => import('../views/OurProducts/MaterialHandling/ChainConveyor.vue')
    },
    {
      path: '/our-products/material-handling/valve-box',
      name: 'our-products/material-handling/valve-box',
      component: () => import('../views/OurProducts/MaterialHandling/ValveBox.vue')
    },
    {
      path: '/our-products/material-handling/slidegate',
      name: 'our-products/material-handling/slidegate',
      component: () => import('../views/OurProducts/MaterialHandling/Slidegate.vue')
    },
    {
      path: '/our-products/feedmill',
      name: 'our-products/feedmill',
      component: () => import('../views/OurProducts/Feedmill/Feedmill.vue')
    },
    {
      path: '/our-products/feedmill/corn-dryer',
      name: 'our-products/feedmill/corn-dryer',
      component: () => import('../views/OurProducts/Feedmill/Corndryer.vue')
    },
    {
      path: '/our-products/feedmill/drum-grader-cleaner',
      name: 'our-products/feedmill/drum-grader-cleaner',
      component: () => import('../views/OurProducts/Feedmill/Drumgradercleaner.vue')
    },
    {
      path: '/our-products/feedmill/hammermill',
      name: 'our-products/feedmill/hammermill',
      component: () => import('../views/OurProducts/Feedmill/Hammermill.vue')
    },
    {
      path: '/our-products/feedmill/cooler',
      name: 'our-products/feedmill/cooler',
      component: () => import('../views/OurProducts/Feedmill/Cooler.vue')
    },
    {
      path: '/our-products/feedmill/pelletmill',
      name: 'our-products/feedmill/pelletmill',
      component: () => import('../views/OurProducts/Feedmill/Pelletmill.vue')
    },
    {
      path: '/our-products/feedmill/conditioner',
      name: 'our-products/feedmill/conditioner',
      component: () => import('../views/OurProducts/Feedmill/Conditioner.vue')
    },
    {
      path: '/our-products/feedmill/crumbler',
      name: 'our-products/feedmill/crumbler',
      component: () => import('../views/OurProducts/Feedmill/Crumbler.vue')
    },
    {
      path: '/our-products/feedmill/mixer',
      name: 'our-products/feedmill/mixer',
      component: () => import('../views/OurProducts/Feedmill/Mixer.vue')
    },
    {
      path: '/our-products/feedmill/dust-filler',
      name: 'our-products/feedmill/dust-filler',
      component: () => import('../views/OurProducts/Feedmill/Dustfiller.vue')
    },
    {
      path: '/our-products/feedmill/rotary-distributor',
      name: 'our-products/feedmill/rotary-distributor',
      component: () => import('../views/OurProducts/Feedmill/Rotarydistributor.vue')
    },
    {
      path: '/our-products/feedmill/magnet-separator',
      name: 'our-products/feedmill/magnet-separator',
      component: () => import('../views/OurProducts/Feedmill/Magnetseparator.vue')
    },
    {
      path: '/our-products/feedmill/feed-cleaner',
      name: 'our-products/feedmill/feed-cleaner',
      component: () => import('../views/OurProducts/Feedmill/Feedcleaner.vue')
    },
    {
      path: '/our-products/feedmill/shifter',
      name: 'our-products/feedmill/shifter',
      component: () => import('../views/OurProducts/Feedmill/Shifter.vue')
    },
    {
      path: '/our-products/feedmill/bagging-scale',
      name: 'our-products/feedmill/bagging-scale',
      component: () => import('../views/OurProducts/Feedmill/Baggingscale.vue')
    },
    {
      path: '/our-products/feedmill/sewing-machine',
      name: 'our-products/feedmill/sewing-machine',
      component: () => import('../views/OurProducts/Feedmill/Sewingmachine.vue')
    },
    {
      path: '/our-products/feedmill/airlock',
      name: 'our-products/feedmill/airlock',
      component: () => import('../views/OurProducts/Feedmill/Airlock.vue')
    },
    {
      path: '/our-products/feedmill/cyclone',
      name: 'our-products/feedmill/cyclone',
      component: () => import('../views/OurProducts/Feedmill/Cyclone.vue')
    },
    {
      path: '/our-products/grain-storage',
      name: 'our-products/grain-storage',
      component: () => import('../views/OurProducts/GrainStorage/GrainStorage.vue')
    },
    {
      path: '/our-products/grain-storage/flat-bottom-silo',
      name: 'our-products/grain-storage/flat-bottom-silo',
      component: () => import('../views/OurProducts/GrainStorage/FlatBottomSilo.vue')
    },
    {
      path: '/our-products/grain-storage/conical-hopper-silo',
      name: 'our-products/grain-storage/conical-hopper-silo',
      component: () => import('../views/OurProducts/GrainStorage/ConicalHopperSilo.vue')
    },
    {
      path: '/our-products/grain-storage/cooler-bin',
      name: 'our-products/grain-storage/cooler-bin',
      component: () => import('../views/OurProducts/GrainStorage/CoolerBin.vue')
    },
    {
      path: '/our-products/grain-storage/steel-structure',
      name: 'our-products/grain-storage/steel-structure',
      component: () => import('../views/OurProducts/GrainStorage/SteelStructure.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
