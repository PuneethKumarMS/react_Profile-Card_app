# 👤 Profile Card React App  

A **React application** that displays user profile information using a reusable `ProfileCard` component.  
This project demonstrates the use of **external CSS for structure & styling** and **inline styles for dynamic effects**.  

---

## ✨ Features  
- Displays a **profile picture**, **name**, and **bio**  
- Profile picture styled as a **circle**  
- **External CSS** for layout, colors, and typography  
- **Inline styling** for dynamic background colors  
- **Hover effects** and responsive design  
- Background color changes dynamically via **props**  

---
## 📂 Project Structure
```
profile-card-app/
├── src/
│   ├── components/
│   │   └── ProfileCard.jsx
│   ├── assets/
│   │   └── profile.webp
│   ├── App.jsx
│   ├── App.css
│   └── style.css
├── package.json
└── vite.config.js
```
## 📦 Installation & Usage  

```bash
# 1️⃣ Create a new Vite + React project
npm create vite@latest profile-card-app -- --template react

# 2️⃣ Navigate into the project folder
cd profile-card-app

# 3️⃣ Install dependencies
npm install

# 4️⃣ Install additional dependencies (if needed)
npm install react-router-dom

# 5️⃣ Start the development server
npm run dev
