<template>
  <div class="services-page">
    <h2 class="title">Our Services</h2>
    <div class="services-grid">
      <div v-if="loading" class="spinner-wrapper">
        <div class="spinner"></div>
      </div>

      <div v-for="service in services" :key="service.id" class="service-card">
        <img
          :src="`http://localhost:3000${service.image}`"
          :alt="service.name"
          class="service-image"
        />
        <div class="service-info">
          <span class="service-category">{{ service.category }}</span>
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
          <button class="book-btn" @click="bookService(service)">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Notification -->
    <div v-if="notification" class="notification">
      {{ notification }}
    </div>
  </div>
   <FooterComponent/>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { FooterComponent },
  name: "ServicesComponent",
  data() {
    return {
      services: [],
      loading: true,
      notification: "",
    };
  },
  methods: {
    async fetchServices() {
      try {
        const response = await axios.get("http://localhost:3000/api/services");
        this.services = response.data;
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        this.loading = false;
      }
    },
    bookService(service) {
      const toast = useToast();
      toast.success(`You booked ${service.name}!`);
    },
  },
  mounted() {
    this.fetchServices();
  },
};
</script>

<style scoped>
.services-page {
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.service-info {
  padding: 1rem;
  position: relative;
  padding-bottom: 3rem;
}

.service-category {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgb(75, 46, 46);
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  font-size: 0.95rem;
  color: #555;
}

.book-btn {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: transparent;
  background-color: rgb(75, 46, 46);
  color: white;
  border: rgb(75, 46, 46) solid 1px;
  border-radius: 50%;
  font-size: 1.25rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.book-btn:hover {
  background: rgb(75, 46, 46);
}

/* spinner */
.spinner-wrapper {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.spinner {
  border: 4px solid #ccc;
  border-top: 4px solid rgb(75, 46, 46);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
