# FOTA Backend Project Guidelines

This project is a professional-grade Node.js, Express, and TypeScript backend designed for FOTA (Firmware Over-The-Air) operations.

## Architecture

- **Entry Point:** `src/index.ts` is the initialization script that boots the server.
- **App setup:** `src/app.ts` configures standard middleware (CORS, Helmet, Morgan, parser limits, etc.) and routes.
- **Routing:** All routes are defined in subdirectories under `src/routes/` and combined in `src/routes/index.ts`.
- **Middleware:** Custom global/endpoint middlewares like `errorHandler` and `notFound` are located in `src/middleware/`.
- **Configuration:** Centrally managed via `src/config/index.ts` using `dotenv`.

## Conventions

1. **Strict Typing:** Always utilize explicit TypeScript typings. Avoid using `any` type casting.
2. **Environment Configuration:** The project supports dynamic environments (**development**, **staging**, **production**).
   - Variables are loaded from `.env.{NODE_ENV}` files.
   - Never hardcode secrets. Always add configurable parameters to `.env.example`.
3. **Error Handling:** Avoid uncaught errors. Wrap asynchronous controller flows or register routers/middlewares with standard Express handlers. Stack traces are masked in production mode.
4. **Development Workflow:**
   - **Development:** Run `npm run dev` (sets `NODE_ENV=development`).
   - **Staging:** Run `npm run start:staging` (sets `NODE_ENV=staging`).
   - **Production:** Run `npm run start:production` (sets `NODE_ENV=production`).
   - Run `npm run build` to build the TypeScript files to standard ES2022 CommonJS code inside `./dist`.
