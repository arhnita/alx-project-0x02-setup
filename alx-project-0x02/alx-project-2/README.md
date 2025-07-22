# Next.js Project Setup and Basics

## 🎯 Purpose

This repository demonstrates the fundamentals of building modern web applications using Next.js with TypeScript and Tailwind CSS. The project serves as a comprehensive introduction to component-based architecture, routing, API integration, and best practices in React development.

## 🚀 Project Overview

**SoloForge: Mastering Project Autonomy** is designed to guide developers through creating a fully functional web application that showcases:

- Next.js with TypeScript configuration
- Component-driven development
- API data fetching and integration
- Responsive design with Tailwind CSS
- Modern React patterns and best practices

## 📋 Learning Objectives

By completing this project, you will master:

- ✅ Scaffolding Next.js applications with TypeScript and Tailwind CSS
- ✅ Implementing routing using Next.js Pages Router
- ✅ Creating reusable TypeScript components with proper interfaces
- ✅ Building interactive UI elements (modals, buttons, cards)
- ✅ Fetching and displaying data from external APIs
- ✅ Structuring projects following industry best practices
- ✅ Managing component props and state effectively
- ✅ Building responsive layouts with navigation

## 🛠 Tech Stack

- **Framework:** Next.js 13+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **API:** JSONPlaceholder (for demo data)

## 📁 Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── Card.tsx            # Generic card component
│   │   ├── PostCard.tsx        # Post-specific card
│   │   ├── PostModal.tsx       # Modal for creating posts
│   │   └── UserCard.tsx        # User-specific card
│   └── layout/
│       └── Header.tsx          # Navigation header
├── interfaces/
│   └── index.ts               # TypeScript interfaces
├── pages/
│   ├── _app.tsx              # App wrapper
│   ├── _document.tsx         # Document structure
│   ├── about.tsx             # About page
│   ├── home.tsx              # Home page
│   ├── index.tsx             # Landing page
│   ├── posts.tsx             # Posts listing
│   └── users.tsx             # Users listing
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## 🔧 Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager
- Basic knowledge of React and TypeScript
- Familiarity with HTML/CSS
- Git and GitHub account
- Code editor (VS Code recommended)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/alx-project-0x02-setup.git
cd alx-project-0x02-setup/alx-project-0x02
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev -- -p 3000
# or
yarn dev -p 3000
```

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📚 Components Overview

### Layout Components
- **Header**: Navigation component with links to all pages

### Common Components
- **Button**: Configurable button with different sizes and shapes
- **Card**: Generic card component for displaying content
- **PostCard**: Specialized card for blog posts
- **PostModal**: Interactive modal for creating new posts
- **UserCard**: User profile card component

## 🌐 API Integration

The project integrates with [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to demonstrate:
- Fetching posts data for the posts page
- Fetching user data for the users page
- Handling loading states and error scenarios

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **Responsive design** principles
- **Component-scoped styling** for maintainability
- **Consistent design system** across components

## 📝 Best Practices Implemented

### Code Organization
- Domain-based component organization
- Centralized interface definitions
- Consistent file and folder naming

### Component Design
- Single responsibility principle
- Reusable and modular architecture
- TypeScript interfaces for type safety
- Proper prop validation

### Performance
- Optimized API calls
- Efficient styling with Tailwind
- Clean component architecture

## 🧪 Testing the Application

1. **Navigation**: Test all navigation links work correctly
2. **Components**: Verify all components render with proper props
3. **API Integration**: Check data loading on posts and users pages
4. **Responsive Design**: Test on different screen sizes
5. **Interactive Elements**: Test modal functionality and buttons

## 📈 Future Enhancements

- Add form validation
- Implement error boundaries
- Add loading spinners
- Include unit tests
- Add dark mode support
- Implement search functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- JSONPlaceholder for providing free API endpoints
- ALX Africa for the project inspiration

---

**Happy Coding! 🚀**

*This project is part of the ALX Software Engineering Program*