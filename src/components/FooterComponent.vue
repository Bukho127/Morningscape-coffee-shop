<template>
  <footer class="footer">
    <PreFooter />
    <hr />
    <div class="footer-content">
      <p>
        &copy; {{ currentYear }} Morningscape, a BeanWorld company. All
        rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import PreFooter from './PreFooter.vue';

export default {
  name: "FooterComponent",
  components: { PreFooter },
 
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>


<style scoped>
hr {
  margin-bottom: 3rem;
  width: 100%;
  height: 0.1px;
  border: none;
  background-color: white;
}
.footer {
  margin-top: 2rem;
  background-color:#4b2e2e;
  color: white;
  font-size: 0.9rem;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  display: inline-block;
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

@media screen and (max-width: 768px) {
  hr {
    margin-bottom: 1rem;
    width: 100%;
  }
  p {
    text-align: left;
    margin: 2rem 1.5rem 3rem 1rem;
  }
}
</style>
