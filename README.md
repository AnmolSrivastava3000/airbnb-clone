# 🌍 Wanderlust — Vacation Rental Platform (Airbnb Clone)

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20Render-brightgreen?style=for-the-badge&logo=render)](https://project-wanderlust-nmf1.onrender.com/listings)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/AnmolSrivastava3000/airbnb-clone)
[![Node.js](https://img.shields.io/badge/Node.js-18.x+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)

A full-stack vacation rental marketplace built with the **MERN (Express/EJS/Node/Mongo)** architecture. Users can discover vacation stays worldwide, host their own spaces, filter by category, interact with live map locations, and share verified reviews.

🔗 **Live Deployment:** [project-wanderlust-nmf1.onrender.com/listings](https://project-wanderlust-nmf1.onrender.com/listings)  
📁 **Repository:** [github.com/AnmolSrivastava3000/airbnb-clone](https://github.com/AnmolSrivastava3000/airbnb-clone)

---

## ✨ Features

- **Listing Management (Full CRUD):**
  - Create, view, edit, and delete property listings.
  - Upload listing images stored directly on Cloudinary.
  - Live price calculation with a dynamic GST/tax toggle.
- **Categorization & Discovery:**
  - Category filters: *Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, Arctic*.
  - Search listings by title, destination, or country.
- **Maps & Geocoding:**
  - Interactive map integration using **Mapbox GL JS**.
  - Automatic forward-geocoding to display the exact listing coordinates.
- **Reviews & Ratings:**
  - Registered guests can leave 1–5 star ratings and written reviews.
  - Review author attribution with deletion controls.
- **Authentication & Authorization:**
  - Secure signup and login powered by **Passport.js**.
  - Role-based permissions: only listing owners can modify/delete listings; only review authors can delete their reviews.
- **Security & Validation:**
  - Schema validation with **Joi** on incoming requests.
  - Session storage backed by MongoDB (`connect-mongo`).
  - Flash alerts for user feedback on actions and errors.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | EJS, EJS-Mate, Bootstrap 5, CSS3, JavaScript (ES6+), FontAwesome |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Authentication** | Passport.js (`passport-local`, `passport-local-mongoose`) |
| **Cloud & APIs** | Cloudinary (Image hosting), Mapbox SDK & GL JS (Geocoding & Maps) |
| **Validation & Session** | Joi, Express Session, Connect Flash, Connect Mongo |
| **Hosting** | Render (Web Service), MongoDB Atlas (Database Cluster) |

---

## 📁 Project Structure

```text
airbnb-clone/
├── controllers/          # Request handlers and business logic
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/               # Mongoose database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/               # Express routing endpoints
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/                # EJS templates and layouts
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   ├── users/
│   └── includes/
├── public/               # Client-side static assets (CSS, JS, icons)
│   ├── css/
│   └── js/
│       └── map.js
├── utils/                # Error handling wrappers and helpers
│   ├── ExpressError.js
│   └── wrapAsync.js
├── init/                 # Sample seed data & database initialization script
│   ├── data.js
│   └── index.js
├── cloudConfig.js        # Multer & Cloudinary storage configuration
├── middleware.js         # Auth checks & permission middlewares
├── schema.js             # Joi validation schemas
├── app.js                # Server entry point
└── package.json

```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js v16 or higher
* MongoDB local instance or MongoDB Atlas account
* Cloudinary and Mapbox accounts for API access

### 1. Clone the repository

```bash
git clone [https://github.com/AnmolSrivastava3000/airbnb-clone.git](https://github.com/AnmolSrivastava3000/airbnb-clone.git)
cd airbnb-clone

```

### 2. Install dependencies

```bash
npm install

```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=8080
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/wanderlust?retryWrites=true&w=majority
SECRET=your_jwt_or_session_secret_key

# Cloudinary credentials
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Mapbox token
MAP_TOKEN=your_mapbox_public_access_token

```

### 4. Optional: Seed sample data

Populate your database with sample rental listings:

```bash
node init/index.js

```

### 5. Start the development server

```bash
# Using nodemon
nodemon app.js

# Or using standard node
npm start

```

Open your browser and visit:

```text
http://localhost:8080/listings

```

---

## 🔒 Environment Variables Reference

| Variable | Description |
| --- | --- |
| `PORT` | Port number for Express server, defaults to 8080 |
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Session secret used for signing cookies |
| `CLOUD_NAME` | Cloudinary cloud identifier |
| `CLOUD_API_KEY` | Cloudinary public API key |
| `CLOUD_API_SECRET` | Cloudinary private secret key |
| `MAP_TOKEN` | Mapbox GL public access token |

---

## 👨‍💻 Author

**Anmol Srivastava**

* GitHub: [AnmolSrivastava3000](https://github.com/AnmolSrivastava3000)
* LinkedIn: [Anmol Srivastava](https://www.linkedin.com/in/anmol-srivastava-9bb376239)

---

## 📄 License

This project is open source.

```

```
