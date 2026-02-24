# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Task Sync is a frontend task management application built using React, Vite, and Tailwind CSS. It features a role-based login system where Admins can assign tasks to specific employees and track their progress (New, Active, Completed, Failed). Employees get a personalized dashboard to view and manage their assigned tasks. All data is handled locally in the browser using localStorage.

Key Features:

Role-Based Access: Separate logins and dashboards for Admins and Employees.

Admin Dashboard: Create new tasks, assign them to team members, and monitor employee-specific task counts.

Employee Dashboard: Clean UI to view tasks categorized by status (New, Active, Failed).

Data Persistence: Uses the browser's local storage to save users and tasks without needing a backend database.

Responsive UI: Styled with Tailwind CSS for a modern, clean look.
