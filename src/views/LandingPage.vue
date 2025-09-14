<template>
  <div class="LandingPage">
    <NavbarComponent />
    <div class="landing-image-container">
      <img src="@/assets/coffee_shop.jpg" alt="Landing" class="landing-image" />
    </div>
    <HeroSection/>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
export default {
  name: 'LandingPage',
  components: {
    HeroSection
  }
};
</script>

<style scoped>
.LandingPage {
  text-align: center;
}

.landing-image-container {
  width: 95%;
  height: 30rem;
  margin: 0 auto;
  border-radius: 3rem;    
  overflow: hidden;  
}

.landing-image {
  width: 100%;
  height: 100%;
  border-radius: 10px;    
  object-fit: cover;  
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .landing-image-container {
    height: 25rem; 
  }
}

</style>

