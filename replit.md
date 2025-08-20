# Auto Detailing Service Application

## Overview

This is a full-stack web application for an auto detailing business that allows customers to browse services, view pricing, book appointments, and contact the business. The application features a modern React frontend with a Node.js/Express backend, designed as a complete booking and customer management system for automotive detailing services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme and design tokens
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod schema validation
- **Design System**: Component-based architecture with reusable UI components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling
- **Data Validation**: Zod schemas shared between frontend and backend
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Vite middleware integration for seamless development experience

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Schema**: Centralized schema definitions in shared directory
- **Migration**: Drizzle Kit for database migrations and schema management
- **Storage Interface**: Abstracted storage layer allowing for multiple implementations (currently in-memory, designed for database integration)

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Connect PG Simple included for future session handling
- **User Management**: Basic user schema defined but not actively used

### API Structure
- **Services Endpoints**: GET /api/services, GET /api/services/:id
- **Appointments Endpoints**: GET /api/appointments, POST /api/appointments
- **Contacts Endpoints**: POST /api/contacts
- **Error Handling**: Centralized error middleware with structured responses
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## External Dependencies

### Core Frontend Dependencies
- **React Ecosystem**: React 18 with TypeScript, Vite for bundling
- **UI Components**: Extensive Radix UI component library for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **Form Management**: React Hook Form with Hookform Resolvers for validation
- **Data Fetching**: TanStack React Query for server state management

### Backend Dependencies  
- **Server Framework**: Express.js with TypeScript support via tsx
- **Database**: Neon Database (PostgreSQL) with Drizzle ORM
- **Validation**: Zod for runtime type checking and schema validation
- **Development Tools**: ESBuild for production builds, custom Vite integration

### Development and Build Tools
- **Build System**: Vite with React plugin and custom Replit integrations
- **TypeScript**: Configured with path mapping and strict type checking
- **Database Tooling**: Drizzle Kit for migrations and schema management
- **Code Quality**: Shared TypeScript configuration with proper module resolution

### Third-party Services
- **Database Hosting**: Neon Database (serverless PostgreSQL)
- **Font Loading**: Google Fonts (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- **Images**: Unsplash for stock photography
- **Development Platform**: Replit-specific plugins and configurations