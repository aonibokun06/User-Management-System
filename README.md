# Full-Stack User Management System

A modern full-stack CRUD application with Spring Boot backend and Next.js frontend.

## 🏗️ Architecture

This project follows a modern full-stack architecture:

- **Backend**: Spring Boot REST API with JPA/Hibernate
- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Database**: H2 in-memory database (easily configurable for production)

## 📁 Project Structure

```
SpringTest/
├── src/                          # Spring Boot Backend
│   └── main/
│       ├── java/com/example/crudapp/
│       │   ├── controller/       # REST API controllers
│       │   ├── entity/          # JPA entities
│       │   ├── repository/      # Data access layer
│       │   ├── service/         # Business logic
│       │   └── config/          # Configuration classes
│       └── resources/
│           └── application.properties
├── frontend/                     # Next.js Frontend
│   ├── src/
│   │   ├── app/                 # App router pages
│   │   ├── components/          # React components
│   │   ├── lib/                 # Utility functions
│   │   └── types/               # TypeScript types
│   ├── public/                  # Static assets
│   └── package.json
├── pom.xml                      # Maven configuration
├── package.json                 # Root package.json with scripts
├── start.sh                     # Quick start script
└── README.md                    # This file
```

## 🚀 Quick Start

### Prerequisites

- **Java 17** or higher
- **Node.js 18** or higher
- **Maven 3.6** or higher

### Option 1: One-Command Start (Recommended)

1. **Clone or download** the project files to your local machine

2. **Run the startup script**:
   ```bash
   ./start.sh
   ```

   This script will:
   - Check all prerequisites
   - Install dependencies automatically
   - Start both backend and frontend servers

3. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Option 2: Manual Start

#### Backend Setup

1. **Navigate to the project root**:
   ```bash
   cd /Users/ayo/Documents/SpringTest
   ```

2. **Run the Spring Boot application**:
   ```bash
   mvn spring-boot:run
   ```

3. **Verify backend is running**:
   - API: http://localhost:8080/api/users
   - H2 Console: http://localhost:8080/h2-console

#### Frontend Setup

1. **Open a new terminal and navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Option 3: Using npm Scripts

1. **Install all dependencies**:
   ```bash
   npm run install:all
   ```

2. **Start both applications**:
   ```bash
   npm run dev
   ```

## 🛠️ Technology Stack

### Backend
- **Spring Boot 3.2.0** - Main framework
- **Spring Data JPA** - Data access layer
- **H2 Database** - In-memory database
- **Spring Validation** - Input validation
- **Maven** - Build tool

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **Axios** - HTTP client

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/users/{id}` | Get user by ID |
| `GET` | `/api/users/email/{email}` | Get user by email |
| `POST` | `/api/users` | Create new user |
| `PUT` | `/api/users/{id}` | Update existing user |
| `DELETE` | `/api/users/{id}` | Delete user |

## 🎨 Features

### Backend Features
- ✅ RESTful API with proper HTTP status codes
- ✅ Data validation and error handling
- ✅ JPA/Hibernate for database operations
- ✅ H2 in-memory database for development
- ✅ CORS configuration for frontend integration

### Frontend Features
- ✅ Modern, responsive UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Form validation and error handling
- ✅ Real-time data updates
- ✅ Mobile-responsive design
- ✅ Loading states and user feedback

## 🔧 Development

### Available Scripts

#### Root Directory
```bash
# Start both backend and frontend
npm run dev

# Start only backend
npm run backend

# Start only frontend
npm run frontend

# Build both applications
npm run build

# Install all dependencies
npm run install:all
```

#### Frontend Directory
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

#### Backend Directory
```bash
# Run with hot reload
mvn spring-boot:run

# Build the project
mvn clean package

# Run tests
mvn test
```

## 🌐 Environment Configuration

### Backend Configuration
The backend runs on `http://localhost:8080` by default. You can modify this in `src/main/resources/application.properties`.

### Frontend Configuration
The frontend runs on `http://localhost:3000` by default. API calls are configured to connect to the backend at `http://localhost:8080`.

## 🗄️ Database

The application uses **H2 in-memory database** for development:
- **URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: `password`
- **Console**: http://localhost:8080/h2-console

For production, you can easily switch to PostgreSQL, MySQL, or any other database by updating the `application.properties` file.

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file: `mvn clean package`
2. Run the JAR: `java -jar target/crud-app-0.0.1-SNAPSHOT.jar`

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `out` directory to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Full-Stack Development! 🚀** 