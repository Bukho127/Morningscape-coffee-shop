const express = require('express');
const cors = require('cors');
const { menu, services, featuredProducts } = require('./dummyDatabase');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve images statically
app.use('/images', express.static(__dirname + '/images'));


app.get('/api/menu', (req, res) => {
    res.status(200).json(menu);
});

app.get('/api/services', (req, res) => {        
    res.status(200).json(services);
});
app.get('/api/featured-products', (req, res) => {
    res.status(200).json(featuredProducts);
});

app.get("/api/featured-products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = featuredProducts.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});




app.listen(PORT, () => {
    console.log(`Coffee shop server running on ${PORT}`);
});
