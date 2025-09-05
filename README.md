# Boilerplate para Desafios Técnicos

## Visão Geral
Boilerplate completo e reutilizável para acelerar o desenvolvimento em desafios técnicos. Elimina a configuração inicial complexa, permitindo focar nas funcionalidades específicas do desafio. Inclui arquitetura de microsserviços, autenticação, testes e infraestrutura prontos para uso.

## Arquitetura
- Domain-Driven Design (DDD)
- SOLID Principles
- Clean Architecture
- Clean Code

## Stack Tecnológica

### Frontend
- Framework: Next.js 15 (App Router + Server Components)
- Linguagem: TypeScript
- Estilização: TailwindCSS 4
- Componentes: shadcn/ui
- Formulários: React Hook Form
- Cache/Estado: React Query
- Ícones: Lucide React
- Notificações: Sonner
- Documentação: Storybook

### Backend
- Framework: Nest.js
- Linguagem: TypeScript
- ORM: Prisma
- Banco de dados: PostgreSQL
- Cache: Redis
- Mensageria: RabbitMQ
- Validação: Zod
- Documentação: Swagger

### Infraestrutura
- Containers: Docker + Docker Compose
- CI/CD: GitHub Actions
- Autenticação: JWT + Refresh Tokens

### Qualidade & Testes
- Linting: ESLint + Prettier
- Testes Unitários: Vitest
- Testes de Integração: Supertest
- Testes E2E: Cypress

### UX/UI
- Temas: Dark/Light mode
- Design: Mobile-first responsivo
- Estados: Loading states
- Erros: Error boundaries