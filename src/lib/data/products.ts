// data.ts

// in this interface i want to add null property 



export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  discount?: number;
  image: string;
  category?: string;
}


const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1",
    price: 19.99,
    discount: 120,
    image: "/sample-image@2x.png",
    category: "Best Wine, Red Wine, Uncategorized, Wine",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2",
    price: 24.99,
    discount: 120,
    image: "/sample-image@2x.png",
    category: "Best Wine, Red Wine",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for Product 3",
    price: 29.99,
    discount: 120,
    image: "/sample-image@2x.png",
    category: "Best Wine, Red Wine",
  },
  {
    id: 4,
    name: "Product 3",
    description: "This is the description for Product 3",
    price: 29.99,
    discount: 120,
    image: "/sample-image@2x.png",
    category: "Best Wine, Red Wine",
  },{
    id: 5,
    name: "Product 3",
    description: "This is the description for Product 3",
    price: 29.99,
    discount: 120,
    image: "/sample-image@2x.png",
    category: "Best Wine, Red Wine",
  },
  {
    id: 6,
    name: "Product 3",
    description: "This is the description for Product 3",
    price: 29.99,
    discount: 120,
    image: "/sample-image@2x.png",
    category: "Uncategorized, Wine",
  },
  {
    id: 7,
    name: "Product 3",
    description: "This is the description for Product 3",
    price: 29.99,
    discount: 120,
    image: "/sample-image@2x.png",
    category: "Uncategorized, Wine",
  },
  {
    id: 8,
    name: "Product 3",
    description: "This is the description for Product 3",
    price: 29.99,
    discount: 120,
    image: "/sample-image@2x.png",
    category: "Uncategorized, Wine",
  },
]



export default products;
