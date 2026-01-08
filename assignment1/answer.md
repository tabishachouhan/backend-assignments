
## Q1. Role of Frontend (FE)

The **Frontend (FE)** is the part of a web application that users directly see and interact with.

### 1. User Interface (UI)
- Defines the look and feel of the website (layout, colors, buttons, fonts).
- Uses **HTML, CSS, JavaScript**.
- Ensures responsiveness across devices (mobile, tablet, desktop).

### 2. User Interaction
- Handles events like clicking, typing, scrolling, and form submission.
- JavaScript adds interactivity (dynamic content, animations).
- Shows instant feedback such as validation messages or loading indicators.

### 3. Communication with Backend
- Sends requests to the backend using **APIs**.
- Uses **Fetch, Axios, AJAX** to communicate.
- Receives backend data and displays it (e.g., user profile, product list).

---

## Q2. Role of Backend (BE)

The **Backend (BE)** refers to the logic and processes happening on the server.

### 1. Server-side Processing
- Receives and processes requests from the frontend.
- Performs logic, calculations, validations.
- Sends structured responses like JSON or HTML.

### 2. Database Handling
- Connects with databases (MySQL, MongoDB, PostgreSQL).
- Performs CRUD operations (Create, Read, Update, Delete).
- Ensures data consistency and reliability.

### 3. Security and Authentication
- Manages login, signup, token generation, password hashing.
- Prevents unauthorized access using role-based permissions.
- Protects the system from attacks like SQL Injection, XSS, CSRF.

---

## Q3. Business Logic

**Business Logic** is the set of rules, operations, and conditions that define how a software application behaves according to real-world requirements.

### Explanation
- It ensures the application performs actions the way the business needs.
- Mostly written in the **Backend**, but sometimes also in Frontend.
- Controls workflows, restrictions, validation, and decision-making.

### Real-world Examples

#### 1. E-commerce Website
- Disable “Buy Now” if product is out of stock.
- Apply discount if total amount > ₹2000.

#### 2. Banking Application
- Block withdrawal if balance is insufficient.
- Calculate interest based on account type.

#### 3. Food Delivery App
- Delivery fee varies depending on distance.
- Restaurant marked “Closed” → user cannot order.

---

## Q4. Client–Server Model

The **Client–Server Model** describes how communication happens between a user device and a server.

### 1. Who is the Client?
- The user device/application making the request.
- Examples: Web browser, mobile app.

### 2. Who is the Server?
- A remote machine that processes requests and stores data.
- Runs backend logic and serves responses.

### 3. How Communication Happens
- Client sends a request (HTTP/HTTPS).
- Server processes request → fetches data → applies logic.
- Server sends a response back.
- Client displays the result to the user.

---

## Q5. Three-Tier Architecture

Three-tier architecture divides an application into 3 layers for better structure and scalability.

### 1. Presentation Layer (Frontend)
- The UI seen by users.
- Built using HTML, CSS, JavaScript.
- Sends user input to the backend.

### 2. Application (Business) Layer
- Implements business rules and logic.
- Handles authentication, API processing, validation.
- Usually written in backend languages like Node.js, Python, Java, etc.

### 3. Data Layer
- Manages database operations.
- Stores, updates, and retrieves data.

### Why This Architecture Is Used
- Improves security by isolating layers.
- Easy to maintain and update each layer independently.
- Scales better when users increase.

---

## Q6. JavaScript as a Backend Language

JavaScript is widely used in backend development, mainly through **Node.js**.

### 1. Performance
- Node.js runs on the fast **V8 JavaScript Engine**.
- Non-blocking I/O allows handling thousands of requests efficiently.
- Ideal for real-time applications (chat, live notifications).

### 2. Ecosystem
- npm is the largest package ecosystem.
- Thousands of libraries available for APIs, authentication, databases, etc.
- Same language for frontend + backend reduces learning curve.

### 3. Popular Backend Frameworks
- **Express.js** – most popular and lightweight.
- **NestJS** – structured, enterprise-level framework.
- **Fastify** – high-performance Node.js framework.
- **Koa.js** and **Hapi.js** are also widely used.

