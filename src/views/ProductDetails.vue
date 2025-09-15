<template>
  <div class="product-details" v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="`http://localhost:3000${product.image}`" :alt="product.name" />
    <p>{{ product.description }}</p>
    <span>Price: R {{ product.price.toFixed(2) }}</span>
  </div>

  <div v-else>
    <p>Loading product...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetails",
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id; // get id from URL
    try {
      const response = await axios.get(
        `http://localhost:3000/api/featured-products/${id}`
      );
      this.product = response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  },
};
</script>

<style scoped>
.product-details {
  text-align: center;
  padding: 2rem;
}

.product-details img {
  max-width: 300px;
  object-fit: contain;
  margin-bottom: 1rem;
}
</style>
