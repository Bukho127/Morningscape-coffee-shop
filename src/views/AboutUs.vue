<template>
  <div class="LandingPage">
    <NavbarComponent />

    <section class="hero">
      <h2>Welcome to Our Coffee Shop!</h2>
      <p>Enjoy the best coffee in Woodstock </p>
    </section>

    <section class="about-us">
      <h2>Our Location</h2>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.456372486309!2d18.644635215174964!3d-33.91873758070919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdeae1f0b8e7f23%3A0x8b7e34e9b2a1e1b!2sWoodstock%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1694771690000!5m2!1sen!2sza"
          width="100%"
          height="350"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="trading-hours">
        <h3>Trading Hours</h3>
        <ul>
          <li>Monday - Friday: 08:00 - 18:00</li>
          <li>Saturday: 09:00 - 20:00</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </section>
  </div>
   <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "LandingPage",
  components: {
    FooterComponent,
  },
};
</script>

<style scoped>
.LandingPage {
  text-align: center;
  padding: 2rem;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: rgb(75, 46, 46);
}

.hero p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
}

.about-us {
  margin-top: 3rem;
}

.about-us h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: rgb(75, 46, 46);
}

.map-container {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.trading-hours {
  background-color: #fff7f5;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
}

.trading-hours h3 {
  margin-bottom: 1rem;
  color: rgb(75, 46, 46);
}

.trading-hours ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.trading-hours li {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: #333;
}
</style>
