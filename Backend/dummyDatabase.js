const menu = [
    {
        id: 1,
        name: 'Espresso',
        price: 30.50,
        description: 'Strong and bold espresso shot.',
        image: '/images/espresso.jpg'
    },
    {
        id: 2,
        name: 'Cappuccino',
        price: 22.00,
        description: 'Espresso with steamed milk and foam.',
        image: '/images/cole-wyland-5ONbmfNt9wE-unsplash.jpg'
    },
    {
        id: 3,
        name: 'Latte',
        price: 40.70,
        description: 'Smooth espresso with steamed milk.',
        image: '/images/kitera-dent-P1QAEVLRldE-unsplash.jpg'
    },
    {
        id: 4,
        name: 'Mocha',
        price: 45.55,
        description: 'Espresso with chocolate and steamed milk.',
        image: '/images/muh-yusuf-syahputra-jqYEZxU5Sxo-unsplash.jpg'
    }
];

const services = [
  {
    id: 1,
    name: "Coffee Tasting",
    description: "Sample different blends and learn about their unique flavors.",
    image: "/images/coffee-tasting.jpg",
    category: "Experience"
  },
  {
    id: 2,
    name: "Barista Training",
    description: "Learn the art of making espresso and latte art from our experts.",
    image: "/images/barista-training.jpg",
    category: "Workshop"
  },
  {
    id: 3,
    name: "Free Wi-Fi & Workspace",
    description: "Relax or work remotely with our free high-speed internet and cozy seating.",
    image: "/images/free-wifi.jpg",
    category: "Amenity"
  },
    {
    id: 4,
    name: "Custom Coffee Blends",
    description: "Custormers choose their own coffee blends and have them roasted to order.",
    image: "/images/coffee-blends.jpg",
    category: "Amenity"
  },
    {
    id: 5,
    name: "Latte Art Classes",
    description: "Fun and interactive classes to learn the basics of latte art.",
    image: "/images/painting.jpg",
    category: "Amenity"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Commercial Espresso Machine",
    description: "High-quality espresso machine for commercial use.",
    image: "/images/coffee-machine5.png",
    price: 2500.00,
    category: "Equipment"
  },
  {
    id: 2,
    name: "Automatic Coffee Machine",
    description: "One-touch brewing system with built-in grinder.",
    image: "/images/coffee-machine1.png",
    price: 1800.00,
    category: "Equipment"
  },
  {
    id: 3,
    name: "Professional Coffee Grinder",
    description: "Heavy-duty burr grinder for consistent grind quality.",
    image: "/images/coffee-machine4.png",
    price: 950.00,
    category: "Equipment"
  },
  {
    id: 4,
    name: "Barista Milk Steamer",
    description: "Powerful milk steamer for lattes and cappuccinos.",
    image: "/images/coffee-machine2.png",
    price: 700.00,
    category: "Equipment"
  },
  {
    id: 5,
    name: "Filter Coffee Machine",
    description: "Large-capacity filter coffee maker for offices or cafés.",
    image: "/images/coffee-machine3.png",
    price: 1200.00,
    category: "Equipment"
  }
];


module.exports = {menu, services, featuredProducts};
