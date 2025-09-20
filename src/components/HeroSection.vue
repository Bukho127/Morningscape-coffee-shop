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
    margin-top: 3rem;
}
.title{
    max-width: 50rem;
    margin: 0 auto;
}
h1{
    text-transform: uppercase;
    color: #4b2e2e;
    line-height: 1.5;
    font-size: 2rem;
}

.text-container{
    margin-top: 3rem;
    max-width: 85rem;
    margin: 0 auto;
    margin-bottom:5rem ;
}
.hero-button{
    text-decoration: none;
    background-color: #4b2e2e;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 2rem;
}

p{
    margin-top: 4rem;
    font-size: 1.3rem;
}
@media screen and (max-width: 768px) {
    .hero-section{
        margin-top: 4rem;
    }
    .title{
       padding: 0 2rem;
        margin: 0 auto;
    }
    h1{
        font-size: 1.5rem;
    }
    .text-container{
        margin-top: 2rem;
        padding: 0 2rem;
    }
    p{
        font-size: 1rem;
        margin-top: 2rem;
    }
    
}
</style>