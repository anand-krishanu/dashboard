# Frontend (React) - README

## Project Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** (Recommended: v16+)
- **npm** or **yarn**

### Installation
```sh
# Clone the repository
git clone https://github.com/your-repo/frontend.git
cd frontend

# Install dependencies
npm install   # or yarn install
```

### Running the Development Server
```sh
npm start   # or yarn start
```
This will start the React app on `http://localhost:3000/`.

### WebSocket Integration
The frontend connects to the backend WebSocket server at `ws://localhost:8080/ws/sensor`. Ensure the backend is running for real-time updates.

### Build for Production
```sh
npm run build   # or yarn build
```
The optimized production build will be generated in the `build/` folder.

---

# Backend (Spring Boot) - README

## Project Setup

### Prerequisites
Ensure you have:
- **Java 17+** (JDK 17 recommended)
- **Maven**
- **MongoDB** running locally or on a server

### Installation
```sh
# Clone the repository
git clone https://github.com/your-repo/backend.git
cd backend

# Build the project
mvn clean install
```

### Running the Application
```sh
mvn spring-boot:run
```
This starts the backend server at `http://localhost:8080/`.

### API Endpoints
- **GET /api/sensor/latest** - Fetch latest sensor data
- **POST /api/sensor/add** - Add new sensor data

### WebSocket Endpoint
- **ws://localhost:8080/ws/sensor** - WebSocket for real-time data updates

### MongoDB Configuration
Ensure MongoDB is running and update the `application.properties` file if needed:
```properties
spring.data.mongodb.uri=mongodb://localhost:27017/your-database
```

### Build for Production
```sh
mvn package
```
The compiled JAR file will be found in `target/`.

---

## Troubleshooting
- If WebSocket is not connecting, ensure the backend is running.
- Check MongoDB connection if data is not being saved.
- If port conflicts occur, change the default ports in `application.properties` (Backend) or `package.json` (Frontend).

