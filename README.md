# DevStack — Build Your Ideal Development Stack

## A little description
A web app where users can explore different frontend, backend, database, and tooling options, compare them side by side, and put together the development stack that fits their next project.

## Technology that I use
- React 19 (UI)
- Vite (build tool / dev server)
- Tailwind CSS + DaisyUI (styling)
- React Toastify (notifications)

## 3 features about this project
1. Browse technology cards across every category (frontend, backend, database, tools).
2. Add your favorite technologies into "Your Stack" to build your own combination.
3. Responsive, colorful, modern UI with a gradient hero section.

---

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes it much easier to describe what the UI should look like — instead of writing `createElement()` calls by hand, we just write tags like `<div>` and React converts them into actual elements behind the scenes.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent, and the component receiving them cannot change them — they're read-only. State is data that a component manages *itself* and can change over time (usually because of user actions). In short: props come from outside, state lives inside.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component hold and update its own data, and re-renders the component whenever that data changes. In this project, I used it in `App.jsx` for `technologies` (the list loaded from JSON), `stack` (the technologies the user has added), and `loading` (whether the data is still being fetched).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets you run code as a "side effect" after the component renders — things like fetching data, which shouldn't happen during the render itself. I needed it to load `technologies.json`: the fetch only needs to run once when the app first loads, so I used `useEffect` with an empty dependency array (`[]`) to run it a single time.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items apart when the list changes (items added, removed, or reordered). Without a proper unique key, React can get confused about which item is which and may update or re-render the wrong elements. In this project, I used `technology.id` as the key when mapping over `technologies` and `stack`.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition, instead of always showing the same thing. For example, in `YourStack.jsx`, I check `stack.length === 0` — if it's true, I show an "Your stack is empty" message, and if it's false, I show the actual list of added technologies instead.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
The parent passes data down to a child using props — for example, `App.jsx` passes `technology`, `isAdded`, and `onAdd` down to `TechnologyCard`. For a child to send something back up, the parent passes down a function as a prop, and the child calls that function (usually with some data) — like how `TechnologyCard` calls `onAdd(technology)` when its button is clicked, which runs `handleAdd` back in `App.jsx`.


