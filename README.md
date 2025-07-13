# CyberSecurity Compass

A comprehensive cybersecurity learning and career guidance platform that provides resources, tools, and career paths for cybersecurity professionals at all levels.

## Features

- **Security Tools Library**: Curated collection of cybersecurity tools categorized by skill level
- **Incident Response Playbooks**: Step-by-step guides for handling security incidents
- **Compliance Frameworks**: Resources for various compliance standards and frameworks
- **Career Progression**: Detailed career paths with skills, certifications, and salary information
- **Cloud Security**: Multi-cloud security service monitoring and management
- **Universal Search**: Search across all resources with intelligent filtering

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Wouter for routing
- React Query for state management

### Backend
- Node.js with Express
- TypeScript
- Drizzle ORM with PostgreSQL schema
- In-memory storage for development

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cybersecurity-compass
   ```

2. Install dependencies for all packages:
   ```bash
   npm run install-all
   ```

3. Start the development servers:
   ```bash
   npm run dev
   ```

This will start both the client (http://localhost:5173) and server (http://localhost:3000) concurrently.

### Individual Commands

- **Start client only**: `npm run client`
- **Start server only**: `npm run server`
- **Build client**: `npm run build`
- **Start production server**: `npm start`

## Project Structure

```
cybersecurity-compass/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── App.tsx         # Main app component
│   ├── index.html          # HTML template
│   └── vite.config.ts      # Vite configuration
├── server/                 # Express backend
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage layer
│   └── index.ts            # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schemas and types
└── package.json            # Root package.json
```

## API Endpoints

### Security Tools
- `GET /api/security-tools` - Get all security tools
- `GET /api/security-tools/level/:level` - Get tools by skill level

### Incident Playbooks
- `GET /api/incident-playbooks` - Get all incident playbooks
- `GET /api/incident-playbooks/level/:level` - Get playbooks by skill level

### Compliance Frameworks
- `GET /api/compliance-frameworks` - Get all compliance frameworks

### Career Paths
- `GET /api/career-paths` - Get all career paths

### Cloud Security
- `GET /api/cloud-security` - Get all cloud security services
- `GET /api/cloud-security/:provider` - Get services by cloud provider

### Search
- `GET /api/search?q=query` - Search across all resources

## Skill Levels

The platform supports four skill levels:
- **Entry**: Beginner level (0-2 years experience)
- **Mid**: Intermediate level (2-5 years experience)
- **Senior**: Advanced level (5-10 years experience)
- **Elite**: Expert level (10+ years experience)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Development Notes

- The project uses in-memory storage for development. For production, you should implement proper database storage using the provided Drizzle schemas.
- The frontend uses Tailwind CSS for styling with a dark theme optimized for cybersecurity professionals.
- All API endpoints include proper error handling and validation.
- The project supports TypeScript throughout with strict typing enabled.

## Future Enhancements

- User authentication and authorization
- Real database implementation
- Advanced search with filters
- Community features (comments, ratings)
- Integration with external security APIs
- Mobile responsive design improvements
- Real-time notifications and updates