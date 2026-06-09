<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repo-specific guidance

## Framework & toolchain
- **Next.js 16.2.7**, React 19.2.7, TypeScript 5, Tailwind CSS v4, Prisma 7
- `@/*` → `./src/*`
- Layout route groups: `(front)` for main pages (/, /product, /course, /cart, /about), `(auth)` for /login, /signup. Each has its own `layout.tsx`
- Fonts: `(front)` uses Geist; `(auth)` uses Prompt (Thai), Roboto, Lora
- Lint: `npm run lint` (ESLint with `eslint-config-next`). No formatter config, no test framework
- No existing tests — adding tests requires a framework first

## Prisma v7 (breaking changes from v5/v6)
- Uses **driver adapters** (`@prisma/adapter-mariadb`) — configure in `src/lib/prisma.ts`, not in schema
- DB config via `prisma.config.ts` + `dotenv` — NOT the old `prisma/schema.prisma` `datasource` block (schema only has `provider = "mysql"`)
- Client generated to `../generated/prisma` (not `node_modules/.prisma`). This dir is gitignored and must be regenerated after clone/schema changes
- Generate: `npx prisma generate`
- Schema: `prisma/schema.prisma` (MySQL via MariaDB adapter)

## Auth
- **better-auth 1.6.11** with email/password, Prisma adapter, MySQL
- Server: `src/lib/auth.ts` | Client: `src/lib/auth-client.ts`
- API handler: `src/app/api/auth/[...all]/route.ts`
- Auth tables: `User`, `Session`, `Account`, `Verification` in schema

## State management
- Cart uses **Zustand** with `persist` middleware → localStorage key `skill-cart`
- Store: `src/lib/cart-store.ts`

## External API
- Course data from `https://api.codingthailand.com/api` (see `src/services/course-service.ts`, `src/services/config.ts`)

## shadcn/ui
- Style: `radix-luma`, icons: `remixicon`, CSS: `src/app/globals.css`
- Components: `src/components/ui/`
- Aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build (outputs `.next/standalone`) |
| `npm run lint` | ESLint check |

## Docker
- Multi-stage build in `Dockerfile` (uses `node:24-alpine`)
- Prisma generate runs during build, standalone output deployed
- Expects `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URLs` env vars

## Environment setup
- Copy `.env.example` to `.env` and configure database connection
- Required env vars: `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`
- Prisma migrations: `npx prisma migrate dev` (requires running database)

## ข้อกำหนดหลัก
- แยก TypeScript Type ทุกอย่าง ออกไปไสว้ใน Folder src/types
- การตั้งชื่อไฟล์ TypeSript (.ts) ให้ตั้งตามตัวอย่างนี้ คือ source_service.ts
- ห้ามใช้คำสั่ง npx prisma db push