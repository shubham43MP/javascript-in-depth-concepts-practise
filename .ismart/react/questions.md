
## General React -

- Tell me about yourself and what have you worked on up till now (basic overview)
- What are the features of React ? Why use react?
- What is JSX ? can browser understand JSX, if not then how ? ans: Babel
- What is V-DOM and how does it works? Reference
- Ask the nuance of since we are maintaining the whole DOM at local and performing the diffing algo and then reflecting it on actual DOM would be more time consuming?
- What are keys in React and what is the importance of a key in React ? What are best Practices for Keys in React (index could be the key?) Difference btw ids and keys <li key="abc">abc</li>
- Basics over what is component, state(mutable) and props(immutable) ?
- What is a Pure Component ? [with the use shouldComponentUpdate, React.memo]
- Tell me the life cycle methods and basic ideas over when to use which one ? Name any 2 deprecated lifecycles? componentWillMount, componentWillUpdate, componentWillReceiveProps.
- Life cycles after this.setState getDerivedStateFromProps,
- What are controlled VS uncontrolled components ? What are refs in React ?
- What is Context in React ? (Prop drilling ?) useContext?
- What version of React have you worked on ? (if it's the latest, ask questions like what is new ?)
- What are hooks and what do they solve ?
- What is useEffect ? How can it be used to achieve life cycle methods ?
- What is redux ? explain the flow
- What is a custom Hook ? examples?
- REDUX VS CONTEXT API?
- COUNTER EXAMPLE TO BE SOLVED?
- What is lazy, suspense?

## ADVANCED REACT -
- What are synthetic events in React and why are they used at all ? (Ans: cross browser support)
- What is one way data binding in React can you explain with a small exp ?
- What is HOC ?
- Difference between useMemo and useCallback?
- What are React Portals? Use cases?
- Can you directly write React in index.html?
- How will you perform SEO on your React App?
- What is a React Query?
- Write a hook to listen to the click event listener for body tag in the DOM.
- If TypeScript, then Explain generic types?
- JSX Transforms in v17? Ans: No need for importing React for JSX Transpilaton.
- What are the rules of hooks?
- What do you understand about Single Page Application?
- Error Boundaries?
- useRef?
- How to exclude a property from Typescript
- What is the React Server Component Payload (RSC)
- What is Hydration in SSR?
- What pattern do you follow like how you arrange your code in React ?
- Typescript ? Why use it ? benefits
- How will you style your component
- Give me some tips working on React
- How can I optimise my react app ? [here](https://www.codementor.io/blog/react-optimization-5wiwjnf9hj)


## React Version Specific v18+?
- Explain batching before and after v18? Previously state updates were batched only for react event handlers & not under the promises, setTimeout and WebAPI things but now onwards Batching would be for everything.
- Concurrent Updates ? There are now provisions where we can delay some non important states over others. This can enhance performance of the UI. the useTransition hook is the same.
- useDeferredValue hook is more of a debouncing tool for state updates to typing and similar events.
-  Client and server rendering APIs have changes like REACTDOM.render to createRoot and stuff.
- What is an Intersection Observer?
- Accessibility principles in deep to be covered.
- What is Webpack module federation?
