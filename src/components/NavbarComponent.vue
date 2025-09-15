<template>
  <nav class="navbarComponent">
    <div class="logo">
      <img src="@/assets/coffee_logo.svg" alt="Logo" />
    </div>

    <div class="hamburger" @click="isOpen = true">☰</div>

    <ul class="nav-links" :class="{ active: isOpen }">
      <!-- Close button -->
      <li class="close-btn" @click="isOpen = false">✕</li>
      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li>
        <router-link to="/menu" @click="closeMenu">Our Coffee</router-link>
      </li>
      <li>
        <router-link to="/services" @click="closeMenu">Services</router-link>
      </li>
      <li>
        <router-link to="/about" @click="closeMenu">About us</router-link>
      </li>
      <li>
        <router-link to="/contact" @click="closeMenu">Contact us</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isOpen: false, // state for menu open/close
    };
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
  },
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
  background: #fff;
}
.close-btn {
  display: none; 
}
.logo img {
  width: 250px; 
  height: auto;
}

.logo {
  flex-shrink: 0;
}


/* Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  transition: transform 0.3s ease-in-out;
}

.nav-links a {
  color: rgb(75, 46, 46);
  text-decoration: none;
  font-weight: bold;
  margin-right: 5rem;
  text-transform: uppercase;
}

/* Hamburger button */
.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: rgb(75, 46, 46);
}
/* Responsive styles */
@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    gap: 2rem;
    height: 100vh;
    width: 70%;
    background: rgb(75, 46, 46);
    padding: 2rem;
    transform: translateX(-100%);
    z-index: 2000;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .nav-links a {
    color: white;
    font-size: 1.2rem;
    margin-right: 0;
  }

  /* Close button */
  .close-btn {
    display: block;
    align-self: flex-end;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    margin-bottom: 2rem;
  }
}
</style>

