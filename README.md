This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview

Next.js Authentication Provider

This project implements a simple authentication system using Next.js 15 and TypeScript with React Context.

Features:

    - User authentication with React Context API
    - Mocked API login with a simulated delay
    - User data storage in localStorage
    - Tested with Jest and React Testing Library


## Getting Started

First, install the dependencies then run the development server:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000] with your browser to see the result.


## Testing

To run the tests, run the following command:

```bash
npm run test
```


## Project Structure 

/app
  ├── api
  │   ├── login
  │   │   ├── route.ts
  ├── dashboard
  │   ├── page.tsx
  ├── login
  │   ├── page.tsx
  ├── context
/lib
  ├── contexts
  │   ├── authContext.tsx
  │   ├── authContext.test.tsx
  ├── hooks
  │   ├── useAuth.ts
  │   ├── useAuth.test.ts
/components
  ├── ui
  │   ├── FormInput.tsx
  │   ├── FormInput.test.tsx
  │   ├── Logo.tsx
  │   ├── Logo.test.tsx
  │   ├── UserDetailsCard.tsx
  │   ├── UserDetailsCard.test.tsx

