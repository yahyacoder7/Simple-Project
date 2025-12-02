# Simple Project

A simple project that stores CPU information using a basic front-end and a server built with Node.js.

## ⭐ Project Concept

The user enters CPU information into an HTML page.

The data is sent to the server via POST and stored in a file called `cpu-data.json`.

The same data can be retrieved later using GET.

## 🔧 Technologies Used
- Node.js
- Express
- Fetch API
- HTML / CSS / Client-side JS

## 📁 Project Structure
/simple-project
├── public/
│ ├── index.html
│ └── js/
│ └── app.js
├── src/
│ ├── server.js
│ └── cpu-data.json
├── package.json
└── .gitignore

## 🚀 How to Run the Project

1. Install Packages:
npm install
2. Start the Server:
node.js src/server.js
3. Open your browser and go to: http://localhost:3000