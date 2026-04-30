# 🌐 Portfolio Website

A modern and responsive personal portfolio website built to showcase my projects, skills, and experience. This project highlights my work as a MERN stack developer and provides an easy way to connect with me.

---

## 🚀 Features

- About Me section
- Skills & Technologies
- Projects showcase 
- Resume upload & download
- Contact form (stores messages in database)
- Admin dashboard to manage messages
- Fully responsive design

---

## 🏗️ Tech Stack

### Frontend
- React.js
- CSS 
- React Icons

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools
- Axios
- dotenv
- Multer

---

## 📁 Folder Structure

```
portfolio/
│
├── client/
│   ├── src/
│   └── public/
│
├── server/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── uploads/
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd client
npm install
```

---

### 3. Environment Variables

Create a `.env` file in the server folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### 4. Run the project

#### Start backend
```bash
cd server
npm run dev
```

#### Start frontend
```bash
cd frontend
npm run dev
```

---

## 📬 API Endpoints

| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| POST   | /api/contact   | Save message       |
| GET    | /api/messages  | Get all messages   |
| POST   | /api/resume    | Upload resume      |


---

## ⭐ Support

If you like this project, give it a star on GitHub!
