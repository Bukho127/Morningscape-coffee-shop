<template>
  <div class="MenuPage">
    <h2>Our Menu</h2>
    <div class="menu-cards">
      <div class="card" v-for="item in menu" :key="item.id">
        <img
          :src="`http://localhost:3000${item.image}`"
          :alt="item.name"
          class="card-image"
        />
        <h3>{{ item.name }}</h3>
        <p class="description">{{ item.description }}</p>
        <p class="price">R{{ item.price?.toFixed(2) ?? "0.00" }}</p>
        <button class="Cart_button" @click="addToCart(item)">Add to cart</button>
      </div>
    </div>
  </div>
  <FooterCompoment/>
</template>

<script>
import axios from "axios";
import FooterCompoment from "@/components/FooterComponent.vue";

export default {
  name: "MenuPage",
  components: { FooterCompoment },
  data() {
    return {
      menu: [],       
      cart: [],      
      loading: true,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/menu")
      .then((res) => {
        console.log("Backend response:", res.data);
        this.menu = res.data;
      })
      .catch((err) => console.error("Error fetching menu items:", err));
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      console.log("Cart now:", this.cart);
      alert(`${item.name} added to cart!`);
    },
  },
};
</script>

<style scoped>

.MenuPage {
  text-align: center;
  margin-top: 2rem;
}

.menu-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  margin-top: 2rem;
}

.card {
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 15px;
  max-width: 220px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}

.card-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.Cart_button{
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  color: white;
  background-color:black;
  border: none;
}
.Cart_button:hover{
  background-color: #6f4e37;
  cursor: pointer;
}
.card h3 {
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.8rem;
}

.price {
  font-weight: bold;
  color: #6f4e37;
  font-size: 1.1rem;
}
</style>
