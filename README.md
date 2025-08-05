# User Management System

This is my first Spring boot project which is a full-stack CRUD application built with a Spring Boot backend and Next.js frontend. 

##  Project Structure

```
User-Management-System/
├── src/main/java/com/crudapp/
│   ├── controller/          # REST API endpoints
│   ├── entity/             # Database models
│   ├── service/            # Business logic
│   ├── repository/         # Data access layer
│   └── config/             # Configuration
├── frontend/               # Next.js frontend
└── README.md
```

##  How to Run

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- Maven 3.6 or higher

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aonibokun06/User-Management-System.git
   cd User-Management-System
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend && npm install
   ```

3. **Start the backend (in root directory)**
   ```bash
   mvn spring-boot:run
   ```

4. **Start the frontend (in new terminal)**
   ```bash
   cd frontend && npm run dev
   ```

### Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
