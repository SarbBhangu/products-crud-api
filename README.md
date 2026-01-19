#  Product API

A RESTful Product Inventory API built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
This API supports full CRUD operations and advanced querying features such as filtering, sorting, and pagination.  
It is designed as the backend for an e-commerce platform to manage product data.

---

##  Features

- Create, read, update, and delete products (CRUD)
- MongoDB data persistence using Mongoose
- Input validation and error handling
- Advanced querying:
  - Filter by category
  - Filter by price range
  - Sort by price (ascending / descending)
  - Pagination support

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

##  Project Structure
```
product-api/
│
├── config/
│ └── connection.js
├── models/
│ └── Product.js
├── routes/
│ └── productRoutes.js
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

##  Setup Instructions

### 1. Clone the repository


- git clone <your-github-repo-url>
- cd product-api
### 2️. Install dependencies
- npm install
### 3️. Create a .env file
- MONGO_URI=your_mongodb_connection_string
- PORT=3000
### 4️. Run the server
- node server.js

- Server runs at: http://localhost:3000

## API Endpoints

### Create Product
POST `/api/products`

### Get All Products (Advanced Querying)
GET `/api/products`

Optional query parameters:
- `category`
- `minPrice`
- `maxPrice`
- `sortBy` (`price_asc`, `price_desc`)
- `page`
- `limit`

### Get Single Product
GET `/api/products/:id`

### Update Product
PUT `/api/products/:id`

### Delete Product
DELETE `/api/products/:id`S


