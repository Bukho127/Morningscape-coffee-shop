<template>
    <div class="hero-section">
        <div class="hero-content">
            <div class="title">
            <h1>Discover the ultimate coffee experience at Morningscape</h1>
            </div>
            <div class="text-container">
            <p>Our carefully selected blends are crafted to bring out rich, balanced flavours in every cup. Whether you love bold and intense notes or smooth and creamy finishes, we have something to match your taste. At Morningscape, we’ve created a warm and welcoming space where you can relax, connect, or simply enjoy your favourite brew. Come visit us and experience coffee the Morningscape way: fresh, flavourful, and unforgettable.</p>
            </div>
            <router-link to="/menu" class="hero-button">Explore Our Menu</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "HeroSection",
};
</script>

<style scoped>
.hero-section{
    margin-top: 4rem;
}
.title{
    max-width: 50rem;
    margin: 0 auto;
}
h1{
    text-transform: uppercase;
    color: #4b2e2e;
    line-height: 1.5;
}

.text-container{
    margin-top: 3rem;
    max-width: 85rem;
    margin: 0 auto;
}

p{
    margin-top: 4rem;
    font-size: 1.3rem;
}
</style>