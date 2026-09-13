# 🚀 DevStack - Build Your Ideal Development Stack

A modern, responsive web application for developers to explore frontend, backend, database, language, styling, and DevOps technologies, compare their strengths, and interactively compose custom tech stacks for upcoming projects.

---

## 🛠️ Technologies Used

- **Frontend Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **UI Feedback & Alerts:** React-Toastify
- **Data Source:** JSON (`/technologies.json`)
- **Build Tool:** Vite

---

## ✨ Key Features

1. **Interactive Tech Stack Builder:**
   - Browse 15 popular modern technologies categorized into Frontend, Backend, Database, Language, Styling, and DevOps.
   - Click **"Add to Stack"** to add any technology to your personal stack.
   - Prevents duplicate additions with helpful warning alerts, and disables the button with a `✓ Added to Stack` status once added.

2. **Dynamic "Your Stack" Management:**
   - Real-time counter showing how many technologies are selected.
   - Displays a clean empty state message when no items are chosen.
   - Easily remove individual technologies with the `✕` button or clear everything with **"Remove All"**.

3. **Unified Brand Gradient Theme & Mobile-Responsive Design:**
   - Built with a single, centralized CSS gradient theme (`orange → pink → violet`) that seamlessly styles brand headings and action buttons.
   - 100% mobile, tablet, and desktop responsive with a dedicated 3-part mobile navbar (hamburger menu, centered brand logo, and action buttons).

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**
JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside our JavaScript/TypeScript code. 
We use JSX because it makes writing UI components intuitive, readable, and visual. Under the hood, Vite/React compiles JSX into standard `React.createElement()` function calls that generate virtual DOM elements.

---

### 2. What is the difference between props and state?
**Answer:**
- **Props (Properties):** Immutable data passed down from a parent component to a child component. The child component can only read props, not modify them.
- **State:** Internal, mutable data managed within the component itself using hooks like `useState`. When state changes, React automatically re-renders the component to reflect the latest UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**
`useState` is a React hook that lets functional components store and update local component state across renders.
In this project, `useState` was used in `src/components/Technologies.tsx`:
- `selectedStack`: To store and track the list of technologies added to "Your Stack".
- `technologies`: To store the array of technologies fetched from the JSON file.
- `loading`: To track whether the JSON data is still being loaded.
- In `Navbar.tsx`: `isMobileMenuOpen` to toggle the mobile hamburger menu open/closed.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**
`useEffect` lets us perform side effects in functional components, such as data fetching, subscriptions, or manually manipulating the DOM after rendering.
We needed `useEffect` to fetch our local `/technologies.json` file once when the `Technologies` component mounts (`[]` empty dependency array), setting the fetched data into state and stopping the loading spinner.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**
React's reconciliation algorithm uses the `key` prop to identify which items have changed, been added, or been removed. Providing a stable and unique key (such as `tech.id`) allows React to efficiently update only the specific DOM elements that changed rather than re-rendering the entire list.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**
Conditional rendering means displaying different UI elements or components based on certain state or conditions (similar to an `if-else` or ternary operator in JavaScript).
**Where we used it:**
In `src/components/Technologies.tsx`, to display an empty state message when `selectedStack.length === 0`, and the list of selected cards when items exist:
```tsx
{selectedStack.length === 0 ? (
  <div className="empty-state">Your stack is empty</div>
) : (
  selectedStack.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))
)}
```
We also used it to render the loading spinner while `loading === true`, and to change button text to `"✓ Added to Stack"` when `isAdded === true`.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** Data is passed downwards via **props** (e.g., `<Card title={item.name} />`).
- **Child to Parent:** The parent passes a callback function as a prop to the child. When an event happens in the child (e.g., a button click), the child invokes that callback function with arguments, passing data back up to the parent.
