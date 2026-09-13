# DevStack - Technology Stack Builder

DevStack is a web application where developers can explore different technologies across frontend, backend, databases, languages, styling, and tools. Users can choose their favorite tools, compare them, and build their own custom stack for their projects.

## Technologies Used
- React (Vite)
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON (Local data source)

## Key Features
1. **Interactive Stack Builder:** Users can browse 15 different technologies and add them to their personal stack with the "Add to Stack" button.
2. **Your Stack Management:** Shows the total count of selected items in real-time, displays an empty message when nothing is selected, and allows removing single items or clearing the whole stack at once.
3. **Clean Design & Alerts:** Fully responsive across mobile, tablet, and desktop with a shared gradient color scheme and toast notifications for every user action (add, duplicate, remove).

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like tags directly inside JavaScript or TypeScript files. It is used in React because it makes building UI components much easier and clearer to read instead of writing complicated `React.createElement()` functions manually.

### 2. What is the difference between props and state?
- **Props:** Data passed from a parent component down to a child component. Props are read-only and cannot be changed by the child component.
- **State:** Data created and managed inside the component itself. When state updates, the component re-renders to update the UI on screen.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` is a React hook used to declare and update state variables in functional components.
In this project, I used `useState` in:
- `techList`: To hold the list of technologies loaded from the JSON file.
- `myStack`: To store the list of technologies added by the user into the sidebar.
- `loading`: To show a loading spinner while the JSON data is being fetched.
- `open`: In Navbar to toggle the mobile menu on and off.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` lets us run side effects like fetching data or working with timers when a component renders.
In this project, I used `useEffect` with an empty dependency array `[]` so that `fetch('/technologies.json')` runs only once when the page first loads, saving the data into state and stopping the loading spinner.

### 5. Why does every item in a .map() list need a unique key prop?
React needs a unique `key` prop for each item in a list so it can keep track of which specific item was added, changed, or removed. This helps React update only the changed elements in the DOM without re-rendering the whole list, which keeps the app fast.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding different elements on the screen based on a condition (like using an if/else or ternary operator).
In my project, I used it in `Technologies.tsx` to show an empty message when no items are selected, or show the list of selected items when they exist:
```tsx
{myStack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  myStack.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** The parent passes data to the child as attributes called **props** (for example: `<Card title={item.name} />`).
- **Child to Parent:** The parent passes down a callback function as a prop. When an event happens inside the child (like a button click), the child calls that function with data, sending the information back up to the parent.
