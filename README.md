# Barcelona Animació - Backend

Backend API for the Barcelona Animació platform, built with Node.js, Express, and TypeScript, following Clean Architecture principles.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Validation**: Zod
- **Security**: Helmet, CORS, Express Rate Limit
- **ORM/Database**: Prisma (configured for PostgreSQL, currently using InMemory repositories for demo)

## 📂 Project Structure

The project follows **Clean Architecture**:

- `src/domain`: Entities and Repository interfaces.
- `src/application`: Use Cases (Business logic).
- `src/infrastructure`: Implementation of repositories, controllers, and external services.
- `src/interfaces`: HTTP adapters, DTOs, and error handling.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of `backend/` (see Configuration below).

### Running the Project

- **Development**:
  ```bash
  npm run dev
  ```
  Runs the server with hot-reload using `ts-node-dev`.

- **Production Build**:
  ```bash
  npm run build
  ```
  Compiles TypeScript to JavaScript in `dist/`.

- **Start Production**:
  ```bash
  npm start
  ```
  Runs the compiled code from `dist/`.

## ⚙️ Configuration

Create a `.env` file with the following variables:

```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
# Database (Optional for current InMemory implementation)
DATABASE_URL="postgresql://user:password@localhost:5432/bcnanimacio"
```

## 🔌 API Endpoints

Base URL: `/api/v1`

### Artists
- `GET /artists`: List all artists (supports filtering by `featured` and `category`).
- `GET /artists/:slug`: Get artist details by slug.
- `GET /artists/categories`: List all artist categories.

### Clients
- `GET /clients`: List all clients.

### Services
- `GET /services`: List all services.

### Contact
- `POST /contact`: Send a contact message.

## ⚠️ Important Notes

- **Data Persistence**: Currently, the application uses **InMemory Repositories**. Data is seeded on startup (`src/infrastructure/data/seedData.ts`) but **new data (like contact messages) will be lost on server restart**. For production persistence, switch to the Prisma implementation.

## 🚢 Deployment (Render)

1. **Root Directory**: `backend`
2. **Build Command**: `npm install && npm run build`
3. **Start Command**: `npm start`
4. **Environment Variables**: Set `NODE_ENV=production` and `CORS_ORIGIN` to your frontend URL.
