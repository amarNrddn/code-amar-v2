-- =====================================================
-- SEEDER DATA untuk Supabase (PostgreSQL)
-- Jalankan di Supabase SQL Editor setelah tabel dibuat
-- =====================================================

-- 1. Projects
INSERT INTO "Projects" (id, title, description, linksourcode, thumbnail, introduction, clone, install, run, slug, "createdAt", "updatedAt") VALUES
  (
    'd4e5f6a7-4444-4000-8000-000000000001',
    'E-Commerce Platform',
    'A full-featured e-commerce platform built with React and Node.js, supporting product management, cart, checkout, and payment integration.',
    'https://github.com/demo/ecommerce-platform',
    '/uploads/projects/ecommerce-thumb.jpg',
    'Modern e-commerce solution with real-time inventory management.',
    'git clone https://github.com/demo/ecommerce-platform.git',
    'npm install',
    'npm run dev',
    'e-commerce-platform-d4e5f6a7',
    NOW(), NOW()
  ),
  (
    'd4e5f6a7-4444-4000-8000-000000000002',
    'Task Management App',
    'Collaborative task management application with real-time updates, drag-and-drop boards, and team workflow automation.',
    'https://github.com/demo/task-manager',
    '/uploads/projects/task-thumb.jpg',
    'Kanban-style task management for agile teams.',
    'git clone https://github.com/demo/task-manager.git',
    'npm install',
    'npm start',
    'task-management-app-d4e5f6a7',
    NOW(), NOW()
  ),
  (
    'd4e5f6a7-4444-4000-8000-000000000003',
    'Weather Dashboard',
    'Real-time weather dashboard with interactive maps, forecasts, and historical data visualization using Chart.js.',
    'https://github.com/demo/weather-dashboard',
    '/uploads/projects/weather-thumb.jpg',
    'Beautiful weather visualization with 7-day forecast.',
    'git clone https://github.com/demo/weather-dashboard.git',
    'npm install',
    'npm run dev',
    'weather-dashboard-d4e5f6a7',
    NOW(), NOW()
  );

-- 2. Techstacks
INSERT INTO "Techstacks" (id, techstack, "projectId", "createdAt", "updatedAt") VALUES
  ('e5f6a7b8-5555-4000-8000-000000000001', 'React',       'd4e5f6a7-4444-4000-8000-000000000001', NOW(), NOW()),
  ('e5f6a7b8-5555-4000-8000-000000000002', 'Node.js',     'd4e5f6a7-4444-4000-8000-000000000001', NOW(), NOW()),
  ('e5f6a7b8-5555-4000-8000-000000000003', 'PostgreSQL',  'd4e5f6a7-4444-4000-8000-000000000001', NOW(), NOW()),
  ('e5f6a7b8-5555-4000-8000-000000000004', 'Vue.js',      'd4e5f6a7-4444-4000-8000-000000000002', NOW(), NOW()),
  ('e5f6a7b8-5555-4000-8000-000000000005', 'Socket.io',   'd4e5f6a7-4444-4000-8000-000000000002', NOW(), NOW()),
  ('e5f6a7b8-5555-4000-8000-000000000006', 'MongoDB',     'd4e5f6a7-4444-4000-8000-000000000002', NOW(), NOW()),
  ('e5f6a7b8-5555-4000-8000-000000000007', 'React',       'd4e5f6a7-4444-4000-8000-000000000003', NOW(), NOW()),
  ('e5f6a7b8-5555-4000-8000-000000000008', 'Chart.js',    'd4e5f6a7-4444-4000-8000-000000000003', NOW(), NOW()),
  ('e5f6a7b8-5555-4000-8000-000000000009', 'OpenWeather API', 'd4e5f6a7-4444-4000-8000-000000000003', NOW(), NOW());

-- 3. Features
INSERT INTO "Features" (id, title, description, "projectId", "createdAt", "updatedAt") VALUES
  ('f6a7b8c9-6666-4000-8000-000000000001', 'Product Search & Filter',    'Advanced search with category filters, price range, and rating sorting.',                                                         'd4e5f6a7-4444-4000-8000-000000000001', NOW(), NOW()),
  ('f6a7b8c9-6666-4000-8000-000000000002', 'Shopping Cart & Checkout',   'Real-time cart updates with multi-step checkout and payment gateway integration.',                                                  'd4e5f6a7-4444-4000-8000-000000000001', NOW(), NOW()),
  ('f6a7b8c9-6666-4000-8000-000000000003', 'Drag & Drop Boards',         'Intuitive kanban boards with drag-and-drop task management between columns.',                                                         'd4e5f6a7-4444-4000-8000-000000000002', NOW(), NOW()),
  ('f6a7b8c9-6666-4000-8000-000000000004', 'Real-time Collaboration',    'Live updates with Socket.io for team collaboration and instant notifications.',                                                        'd4e5f6a7-4444-4000-8000-000000000002', NOW(), NOW()),
  ('f6a7b8c9-6666-4000-8000-000000000005', 'Interactive Weather Map',    'Real-time weather visualization with interactive maps and location-based forecasts.',                                               'd4e5f6a7-4444-4000-8000-000000000003', NOW(), NOW()),
  ('f6a7b8c9-6666-4000-8000-000000000006', 'Historical Data Charts',     'Beautiful charts displaying historical weather data with Chart.js customization.',                                                  'd4e5f6a7-4444-4000-8000-000000000003', NOW(), NOW());

-- 4. Blogs
INSERT INTO "Blogs" (id, title, thumbnail, introduction, titleconten, content, solution, instalation, code_snippet, elucidation, tags, slug, "createdAt", "updatedAt") VALUES
  (
    'a7b8c9d0-7777-4000-8000-000000000001',
    'Getting Started with React Hooks',
    '/uploads/blogs/react-hooks-thumb.jpg',
    'Learn how to use React Hooks to manage state and side effects in your functional components.',
    'Understanding useState and useEffect',
    'React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. The most commonly used hooks are useState for managing local state and useEffect for handling side effects like API calls and subscriptions.',
    'Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.',
    'npx create-react-app my-app\ncd my-app\nnpm start',
    'import React, { useState, useEffect } from ''react'';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}',
    'The useState hook returns a pair: the current state value and a function that lets you update it. useEffect lets you perform side effects in function components.',
    '["react","hooks","javascript","frontend"]'::jsonb,
    'getting-started-with-react-hooks-a7b8c9d0',
    NOW(), NOW()
  ),
  (
    'a7b8c9d0-7777-4000-8000-000000000002',
    'Building RESTful APIs with Express.js',
    '/uploads/blogs/express-api-thumb.jpg',
    'A comprehensive guide to building scalable RESTful APIs using Express.js and Node.js.',
    'API Design Best Practices',
    'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building APIs with its middleware architecture.',
    'Follow REST conventions: use proper HTTP methods (GET, POST, PUT, DELETE), meaningful resource URLs, and appropriate status codes.',
    'mkdir my-api\ncd my-api\nnpm init -y\nnpm install express',
    'const express = require(''express'');\nconst app = express();\n\napp.get(''/api/users'', (req, res) => {\n  res.json({ users: [] });\n});\n\napp.listen(3000, () => {\n  console.log(''Server running on port 3000'');\n});',
    'Express middleware functions are functions that have access to the request object, the response object, and the next middleware function in the applications request-response cycle.',
    '["nodejs","express","api","backend"]'::jsonb,
    'building-restful-apis-with-expressjs-a7b8c9d0',
    NOW(), NOW()
  ),
  (
    'a7b8c9d0-7777-4000-8000-000000000003',
    'Introduction to Database Design with MySQL',
    '/uploads/blogs/mysql-design-thumb.jpg',
    'Understanding the fundamentals of relational database design and normalization with MySQL.',
    'Database Normalization Principles',
    'Database design is the process of producing a detailed data model of a database. This data model contains all the needed logical and physical design choices and physical storage parameters needed to generate a design.',
    'Follow normalization rules: eliminate duplicate data, ensure data dependencies make sense, and structure data to reduce redundancy.',
    'CREATE DATABASE my_database;\nUSE my_database;',
    'CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);',
    'Normalization is the process of organizing data in a database. This includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible.',
    '["mysql","database","sql","backend"]'::jsonb,
    'introduction-to-database-design-with-mysql-a7b8c9d0',
    NOW(), NOW()
  );
