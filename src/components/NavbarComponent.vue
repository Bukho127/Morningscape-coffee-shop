<template>
  <nav class="navbarComponent">
    <div class="logo"><img src="@/assets/coffee_logo.svg" alt="Logo" /></div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/menu">Our Cofee</router-link></li>
      <li><router-link to="/menu">Blog</router-link></li>
      <li><router-link to="/about">About us</router-link></li>
      <li><router-link to="/contact">Contact us</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
.navbarComponent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
  height: 100px;
  margin-bottom: 1rem;
}

.navbar {
  position: relative;
  top: 0;
  width: 100%;
}

.logo img {
  height: auto;
  width: 100%;
  display: block;
  padding: 2rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 0.5rem;
}

.nav-links a {
  color: rgb(75, 46, 46);
  text-decoration: none;
  font-weight: bold;
  margin-right: 5rem;
  text-transform: uppercase;
}
</style>
