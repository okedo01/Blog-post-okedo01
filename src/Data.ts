import type { Post } from "./Type";

export const posts: Post[] = [
  {
    id: 1,
    title: "Beginner Roadmap to Web Development",
    content: `
        Start with HTML, CSS, and basic JavaScript. Learn how to build static pages, forms, and add interactivity.

        **Steps:**
        - Learn HTML tags and structure
        - Style with CSS (Flexbox, Grid)
        - Learn JavaScript basics (variables, functions, DOM)
        - Build simple projects like a to-do app
            `
  },
  {
    id: 2,
    title: "Frontend Development Roadmap",
    content: `
        After mastering HTML/CSS/JS, move on to modern tools:

        **Frontend Stack:**
        - React.js or Vue.js
        - TypeScript
        - State Management (Context API, Redux)
        - Routing (React Router)
        - Styling libraries (Tailwind, Bootstrap)

        **Practice:** Build dashboards, portfolios, and blog platforms.
    `
  },
  {
    id: 3,
    title: "Backend Development Roadmap",
    content: `
        To become a full-stack developer, learn the backend:

        **Languages & Tools:**
        - Node.js + Express
        - Database: MongoDB or PostgreSQL
        - Authentication (JWT, sessions)
        - REST API and GraphQL
        - Hosting (Render, Vercel, Railway)

        **Practice:** Build REST APIs, auth systems, and backend services.
    `
  },
  {
    id: 4,
    title: "DevOps and Deployment Basics",
    content: `
        Once your app works locally, learn how to deploy it:

        **DevOps Basics:**
        - Version Control with Git/GitHub
        - CI/CD Concepts
        - Docker Basics
        - Hosting (Netlify, Vercel, Firebase, Railway)
        - Environment variables and secrets

        **Goal:** Make your app production-ready and live.
    `
  }
];
