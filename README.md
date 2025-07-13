# CyberSec Tools Platform

A comprehensive cybersecurity tools and incident response platform built with React, Node.js, and PostgreSQL.

## Features

- **Security Tools Directory**: Comprehensive catalog of cybersecurity tools organized by expertise level
- **Incident Response Playbooks**: Step-by-step guides for handling security incidents
- **Compliance Frameworks**: Documentation and resources for various compliance standards
- **Career Development**: Career progression paths for cybersecurity professionals
- **Cloud Security**: Cloud-specific security tools and best practices

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for components
- React Query for data fetching
- Wouter for routing

### Backend
- Node.js with Express
- TypeScript
- Drizzle ORM for database operations
- PostgreSQL database
- JWT authentication
- Helmet for security headers

### Development & Deployment
- GitHub Actions for CI/CD
- Docker for containerization
- ESLint and Prettier for code quality
- Vitest for testing

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+
- PostgreSQL 15+
- Docker and Docker Compose (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cybersecurity-tools-platform.git
   cd cybersecurity-tools-platform
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the database**
   ```bash
   # Using Docker Compose
   docker-compose up -d db
   
   # Or start your local PostgreSQL instance
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

6. **Start the development servers**
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health check: http://localhost:5000/health

## Development

### Project Structure
```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
│   ├── public/            # Static assets
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── db/           # Database configuration
│   │   └── index.ts      # Server entry point
│   ├── routes.ts         # API routes
│   └── package.json
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema
└── package.json           # Root package.json
```

### Available Scripts

#### Root level
- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build both client and server for production
- `npm run test` - Run tests for both client and server
- `npm run lint` - Lint all code
- `npm run install:all` - Install dependencies for all packages

#### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

#### Server
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server

### Database Operations

```bash
# Generate database migrations
npm run db:generate

# Run migrations
npm run db:migrate

# Seed the database
npm run db:seed
```

## Deployment

### Using Docker Compose

1. **Build and start all services**
   ```bash
   docker-compose up -d
   ```

2. **Run migrations**
   ```bash
   docker-compose exec server npm run db:migrate
   ```

### Using GitHub Actions

The project includes a comprehensive CI/CD pipeline that:
- Runs tests on Node.js 18.x and 20.x
- Performs security audits
- Builds Docker images
- Deploys to staging on main branch pushes

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5432/cybersec_tools` |
| `PORT` | Server port | `5000` |
| `JWT_SECRET` | JWT signing secret | Required |
| `CORS_ORIGIN` | Allowed CORS origins | `http://localhost:3000` |
| `NODE_ENV` | Environment mode | `development` |
| `VITE_API_URL` | API URL for client | `http://localhost:5000/api` |

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Security

This platform is designed with security in mind:
- Input validation using Zod schemas
- SQL injection prevention via parameterized queries
- XSS protection with Content Security Policy
- CSRF protection for state-changing operations
- Rate limiting to prevent abuse
- Secure headers via Helmet.js

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue on GitHub or contact the maintainers.