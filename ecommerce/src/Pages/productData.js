import {
  PRODUCT_ONE,
  PRODUCT_TWO,
  PRODUCT_THREE,
  PRODUCT_FOUR,
  PRODUCT_FIVE,
  PRODUCT_SIX,
  PRODUCT_SEVEN,
  PRODUCT_EIGHT,
  PRODUCT_NINE,
  PRODUCT_TEN,
} from "../assets/index";

const productsList = [
  {
    id: 1,
    img: PRODUCT_ONE,
    name: "Hybrid Cleansing Balm",
    price: 32.9,
    category: "cleanser",
  },
  {
    id: 2,
    img: PRODUCT_TWO,
    name: "Soothing Sunscreen Gel",
    price: 24.5,
    category: "sunscreens",
  },
  {
    id: 3,
    img: PRODUCT_THREE,
    name: "Energizing Marine Lotion",
    price: 20.5,
    category: "Body lotion",
  },
  {
    id: 4,
    img: PRODUCT_FOUR,
    name: "Calm Hydrating Moisturizer",
    price: 34.9,
    category: "Bundles",
  },
  {
    id: 5,
    img: PRODUCT_FIVE,
    name: "Makeup Melting Cleanser",
    price: 29.9,
    category: "Cleanser",
  },
  {
    id: 6,
    img: PRODUCT_SIX,
    name: "Balancing Daily Cleanser",
    price: 34.9,
    category: "Cleanser",
  },
  {
    id: 7,
    img: PRODUCT_SEVEN,
    name: "Hydrating Gel Oil",
    price: 20.0,
    category: "Moisturizer",
  },
  {
    id: 8,
    img: PRODUCT_EIGHT,
    name: "Cleanser Concentrate",
    price: 30.0,
    category: "Cleanser",
  },
  {
    id: 9,
    img: PRODUCT_NINE,
    name: "Antiaging Skin Oil",
    price: 44.9,
    category: "Moisturizer",
  },
  {
    id: 10,
    img: PRODUCT_TEN,
    name: "Refreshing Cleansing Balm",
    price: 44.0,
    category: "Cleanser",
  },
];

// Function to create a slug from a product name
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const productData = productsList.map((product) => ({
  ...product,
  slug: createSlug(product.name),
}));

export { productData };
