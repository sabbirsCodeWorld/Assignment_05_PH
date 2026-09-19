# 🚀 Dev Stack Builder

A modern and responsive React application for exploring development technologies and building a personalized tech stack.

Users can browse different technologies, add their favorite tools to a selected stack, remove them individually, and manage their stack easily.

## ✨ Features

* 🔍 Browse a curated collection of development technologies
* 📊 View each technology's category, rating, difficulty, and description
* ➕ Add technologies to your personalized stack
* 🚫 Prevent duplicate technologies with toast notifications
* 🗑️ Remove technologies individually
* 🧹 Clear the entire stack with one click
* 📱 Fully responsive and clean UI
* 📦 Easily extendable with more technologies through JSON data

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **TypeScript**
* **Tailwind CSS**
* **React-Toastify**
* **JSON**

## 📌 Project Highlights

Dev Stack Builder helps developers quickly explore and organize technologies for their next project.

The application focuses on keeping the experience simple and intuitive while making it easy to compare and build a stack for different development needs, including:

* Frontend
* DevOps
* Other development tools

The technology data is stored in a JSON file, making the project easy to maintain and extend in the future.

---

# ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside React components.

It makes the UI structure easier to read and understand while allowing us to combine JavaScript logic with the interface.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

Props are read-only from the child component's perspective, while state is used when a component needs to manage and update its own data.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows a React component to store and update data.

In this project, I used `useState` to manage the selected technology stack and keep track of the currently selected items in the sidebar.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component, such as fetching data.

I used it to load the technology data from the JSON file when the component is rendered. This allows the application to retrieve the data and display the technology cards dynamically.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to uniquely identify each item in a list.

It helps React understand which items have been added, removed, or changed, allowing it to update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements based on a condition.

In this project, the selected stack displays an empty-state message when no technology has been selected. Once technologies are added, the selected technology cards are displayed instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

For example:

```tsx
<Child name={value} />
```

A child component can communicate back to the parent by calling a function passed through props.

For example:

```tsx
onAdd()
```

or

```tsx
onRemove()
```

This allows the parent component to update its state based on actions performed by the child.

---

# ❓ FAQ

### Where can we deploy the site?

You can deploy the application on platforms such as:

* Netlify
* Vercel
* Cloudflare Pages
* GitHub Pages
* Other static hosting platforms

### Do we have to use TypeScript?

No. TypeScript is optional.

You can also build the project using JavaScript if you prefer.

### Can we change the title, logo, and colors?

Yes. The title, logo, colors, and overall theme can be customized to match your project or personal brand, as long as the application remains relevant to the project requirements.

### Where can we get technology logos/icons?

You can use free technology icons from sources such as **techicons.dev** or other suitable image providers.

The icon URLs can be stored directly in the JSON data and displayed dynamically in the application.

---

# 💻 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available on the local development server.

---

# 📸 Live Preview

Run the project locally using the commands above to explore the application.

---

# 📄 License

This project was created for **educational and portfolio purposes**.
