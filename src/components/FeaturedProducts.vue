<template>
  <div class="featured-products">
    <h1 class="title">Featured Products</h1>

    <div class="products-grid">
      <div
        v-for="product in featuredProducts"
        :key="product.id"
        class="product-card"
        @click="goToDetails(product.id)"
        style="cursor: pointer;"
      >
        <img
          :src="`http://localhost:3000${product.image}`"
          :alt="product.name"
          class="product-image"
        />

        <div class="product-info">
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <span class="product-price">R {{ product.price.toFixed(2) }}</span>

          <button class="add-btn" @click.stop="addToCart(product)">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  name: "FeaturedProducts",
  data() {
    return {
      featuredProducts: [],
    };
  },
  methods: {
    async fetchFeaturedProducts() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/featured-products"
        );
        this.featuredProducts = response.data;
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        this.loading = false;
      }
    },
    addToCart(product) {
      const toast = useToast();
      toast.success(`${product.name} has been added to your cart`);
    },
    goToDetails(id) {
      // Navigate to ProductDetails view using the product ID
      this.$router.push({ name: "ProductDetails", params: { id } });
    },
  },
  mounted() {
    this.fetchFeaturedProducts();
  },
};
</script>

<style scoped>
.featured-products {
  padding: 2rem;
  text-align: center;
  margin-top: 4rem;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: rgb(75, 46, 46);
  text-transform: uppercase;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

.product-card {
  background: #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin:4rem 0 8rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.product-info {
  text-align: left;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.product-price {
  font-weight: bold;
  display: block;
  margin-bottom: 2rem;
}

.add-btn {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: rgb(75, 46, 46);
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.add-btn:hover {
  background: #5c3a3a;
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 400px) {
  .products-grid {
    grid-template-columns: repeat(1 , 1fr);
  }
}
</style>

