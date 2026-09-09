# Senior/Lead Frontend Interview Preparation Guide

A focused preparation guide for a **9-year experienced Frontend Engineer** working with **React, JavaScript, and TypeScript**, targeting **Senior / Lead / Architect / Big Tech-style frontend roles**.

This guide combines:

1. The **absolute must-know interview areas** for a senior frontend engineer.
2. A **30-day preparation roadmap** with:
   - 150 must-answer questions
   - Coding problems
   - React deep-dive topics
   - TypeScript topics
   - Browser and performance topics
   - Leadership preparation
   - 10 frontend system-design problems
   - Mock interview structure

---

# Part 1: Absolute Must-Know Areas

At **9 years of experience**, interviewers are not primarily testing whether you know how to use `useEffect`.

They expect you to understand:

- JavaScript deeply
- React internals
- TypeScript design
- Browser internals
- Performance
- Frontend architecture
- System design
- Testing
- Accessibility
- Security
- Engineering trade-offs
- Leadership and production judgment

The goal is to demonstrate that you can **design, reason about, debug, scale, and lead frontend systems**.

---

## 1. JavaScript — Absolute Must

You should be able to explain these without preparation.

### Execution model

Know:

- Call stack
- Execution context
- Lexical environment
- Scope chain
- Closures
- Hoisting
- `var` vs `let` vs `const`
- Temporal Dead Zone
- `this`
- `bind`, `call`, `apply`
- Arrow functions vs normal functions
- Prototypes and prototype chain
- `class` underneath the hood

### Async JavaScript

You should immediately be able to solve:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

queueMicrotask(() => console.log("D"));

console.log("E");
```

Expected output:

```text
A
E
C
D
B
```

Know:

```text
Call Stack
Web APIs
Task / Callback Queue
Microtask Queue
Event Loop
```

Also know:

```js
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
```

And understand:

- async/await
- error propagation
- `AbortController`
- sequential vs parallel execution
- race conditions

At 9 YOE, **event-loop questions should be free points**.

---

## 2. React Internals — Extremely Important

Do not prepare React merely as a collection of hooks.

Understand the model:

```text
State changes
    ↓
React schedules update
    ↓
Render phase
    ↓
Reconciliation
    ↓
Commit phase
    ↓
DOM updated
    ↓
Effects
```

Understand:

- reconciliation
- render vs commit
- Virtual DOM
- Fiber
- scheduling
- batching
- state snapshots
- concurrent rendering concepts
- Strict Mode
- Suspense
- transitions
- Error Boundaries

Example:

```jsx
{items.map(item => (
  <Row key={item.id} item={item} />
))}
```

Be able to explain:

- Why `key` matters
- Problems with array index as key
- What causes rerenders
- Parent vs child rerendering
- What `React.memo` actually does
- Whether `setState(sameValue)` triggers an update

You should understand React’s architecture without needing to reproduce the React source code.

---

## 3. Hooks — Deeper Than Syntax

Know:

```text
useState
useEffect
useLayoutEffect
useRef
useMemo
useCallback
useContext
useReducer
useTransition
useDeferredValue
useId
```

But the important senior-level question is often:

> When should you **not** use this hook?

### `useMemo`

Weak answer:

> To improve performance.

Better answer:

> Use it when recomputation is meaningfully expensive or referential stability is required. Memoization itself has cost, so it should not be added blindly.

### `useEffect`

Know:

- dependency arrays
- cleanup
- stale closures
- race conditions
- `AbortController`
- effect lifecycle
- StrictMode behavior
- unnecessary effects
- derived state

Recognize this as usually unnecessary:

```jsx
const [fullName, setFullName] = useState("");

useEffect(() => {
  setFullName(firstName + " " + lastName);
}, [firstName, lastName]);
```

Prefer:

```jsx
const fullName = `${firstName} ${lastName}`;
```

Senior React engineers should first ask:

> Do I need an effect at all?

---

## 4. State Management

Understand the distinction between:

```text
Local UI state
Server state
Global client state
URL state
Form state
Cached state
```

Know:

- Redux Toolkit
- Context
- Zustand-style stores
- TanStack Query
- normalized state
- selectors
- immutable updates
- derived state

A senior answer to:

> We have an ecommerce app with 500 components. How would you design state management?

should not begin with:

> Redux.

It should begin with:

> What kinds of state do we actually have?

---

## 5. TypeScript — Senior Level

Be comfortable with:

```text
interface
type
union
intersection
generics
keyof
typeof
indexed access types
conditional types
mapped types
utility types
type narrowing
discriminated unions
```

Example:

```ts
type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: Error };
```

Understand why that is often safer than:

```ts
interface ApiResponse<T> {
  data?: T;
  error?: Error;
}
```

Be comfortable writing:

```ts
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}
```

Also know:

- `any` vs `unknown`
- `never`
- `void`
- optional vs `undefined`
- `interface` vs `type`
- generic constraints
- variance basics

You do not need TypeScript wizardry, but your types should show **API design thinking**.

---

## 6. Browser Internals

Know:

```text
HTML
 ↓
DOM

CSS
 ↓
CSSOM

DOM + CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Composite
```

Understand:

- reflow/layout
- repaint
- compositing
- critical rendering path
- browser event loop
- `requestAnimationFrame`
- Web Workers
- Service Workers
- storage
- cookies
- caching

Networking:

```text
DNS
TCP
TLS
HTTP
CDN
Browser cache
```

Know:

```text
HTTP/1.1
HTTP/2
HTTP/3
```

And common headers/status codes.

---

## 7. Performance

If an interviewer says:

> Our React application takes 8 seconds to load. Fix it.

Start with a diagnosis framework:

```text
Measure
 ↓
Network?
 ↓
JavaScript?
 ↓
Rendering?
 ↓
Backend?
 ↓
Images/fonts?
 ↓
Third parties?
```

Know:

- Core Web Vitals
- LCP
- INP
- CLS
- bundle analysis
- code splitting
- lazy loading
- tree shaking
- dynamic imports
- image optimization
- caching
- preloading
- preconnecting
- virtualization
- memoization
- React Profiler
- Chrome Performance panel

Principle:

> Measure before optimizing.

---

## 8. Frontend System Design

At 9 YOE, this can determine the interview.

Use a repeatable framework:

```text
Requirements
     ↓
Functional / Non-functional
     ↓
Architecture
     ↓
Data model
     ↓
Component architecture
     ↓
State management
     ↓
API design
     ↓
Caching
     ↓
Performance
     ↓
Reliability
     ↓
Security
     ↓
Accessibility
     ↓
Observability
```

Example: trading dashboard

```text
              API Gateway
                   │
         ┌─────────┴─────────┐
         ↓                   ↓
       REST              WebSocket
         ↓                   ↓
 Historical data        Live prices
         │                   │
         └─────────┬─────────┘
                   ↓
             Data Layer
                   ↓
              Cache/store
                   ↓
        ┌──────────┼──────────┐
        ↓          ↓          ↓
      Chart     Watchlist    Orders
```

Then ask:

> What happens if 1,000 price updates/sec arrive?

That is where seniority becomes visible.

---

## 9. Component/API Design

A common problem:

> Design a reusable `<Table>` component.

Think API first:

```tsx
<DataTable<User>
  data={users}
  columns={columns}
  rowKey="id"
  sorting
  filtering
  pagination
  virtualized
  onRowClick={...}
/>
```

Discuss:

- controlled vs uncontrolled
- composition
- generic typing
- extensibility
- accessibility
- performance
- server pagination
- virtualization

---

## 10. Accessibility

Know:

- semantic HTML
- keyboard navigation
- focus management
- ARIA
- screen readers
- forms
- dialogs
- comboboxes
- tables
- WCAG concepts

Golden rule:

> Use native semantic HTML before ARIA whenever possible.

Be able to design an accessible:

- Modal
- Dropdown
- Tabs
- Autocomplete
- Data grid

---

## 11. Security

Know:

```text
XSS
CSRF
CORS
CSP
Clickjacking
JWT
OAuth
Cookies
SameSite
HttpOnly
Secure
```

Classic question:

> Where should I store JWT?

Do not blindly answer:

> localStorage.

Understand authentication architecture and trade-offs.

---

## 12. Testing

Know:

- Jest / Vitest
- React Testing Library
- Playwright / Cypress
- mocking
- API mocking
- async testing
- unit vs integration vs E2E

Core principle:

> Test behaviour, not implementation details.

---

## 13. SSR / Next.js

Understand:

```text
CSR
SSR
SSG
ISR
Streaming SSR
Hydration
Server Components
Client Components
```

Important architectural question:

> What should execute on the server versus the browser?

---

## 14. Build Systems

Know:

```text
Vite
Webpack
Rollup
esbuild
SWC
Babel
```

Understand:

- Bundling
- Transpilation
- Tree shaking
- Code splitting
- Source maps
- Chunking
- HMR

Know why Vite’s dev startup can be faster than traditional Webpack bundling.

---

## 15. CSS

Know:

```text
Flexbox
Grid
Positioning
Stacking contexts
z-index
Specificity
Box model
Responsive design
Container queries
CSS variables
Animations
```

Classic question:

> `z-index: 999999` doesn't work. Why?

Think:

> Stacking context.

---

## 16. Coding Round

High-ROI frontend coding problems:

```text
debounce()
throttle()
deepClone()
Promise.all()
EventEmitter
LRU cache
flatten array
groupBy
memoize()
retry()
concurrency limiter
```

UI coding:

```text
Autocomplete
Infinite scroll
Modal
Tabs
Carousel
File explorer
Nested comments
Data table
Todo app
Progress bars
Image gallery
```

Interviewers care about:

- code structure
- API design
- edge cases
- accessibility
- performance

not just whether the code works.

---

## 17. Leadership

Prepare 6–8 stories covering:

- architecture decision
- performance improvement
- production incident
- technical disagreement
- mentoring
- technical debt
- cross-team leadership
- failure

Use:

```text
Situation
   ↓
Problem
   ↓
Constraints
   ↓
Options considered
   ↓
Decision
   ↓
Trade-offs
   ↓
Result
   ↓
What I learned
```

---

# Priority Matrix

| Area | Priority |
|---|---|
| JavaScript internals | 🔥🔥🔥🔥🔥 |
| React internals + Hooks | 🔥🔥🔥🔥🔥 |
| Frontend System Design | 🔥🔥🔥🔥🔥 |
| Performance | 🔥🔥🔥🔥 |
| TypeScript | 🔥🔥🔥🔥 |
| Browser + Networking | 🔥🔥🔥🔥 |
| Coding / DSA | 🔥🔥🔥🔥 |
| Leadership / Behavioural | 🔥🔥🔥🔥 |
| State architecture | 🔥🔥🔥 |
| Accessibility | 🔥🔥🔥 |
| Security | 🔥🔥🔥 |
| Testing | 🔥🔥🔥 |
| SSR / Next | 🔥🔥🔥 |
| CSS | 🔥🔥 |
| Build tooling | 🔥🔥 |

---

# Part 2: 30-Day Senior/Lead Frontend Interview Roadmap

Assume:

- **2–3 hours on weekdays**
- **4 hours on weekends**

For every theoretical question:

1. Answer it aloud in **2–4 minutes**
2. Write notes only after you answer
3. Code when appropriate
4. Revisit weak areas in later mock rounds

---

# Phase 1 — JavaScript Foundation

## Day 1 — Execution Model, Scope & Closures

Understand:

```text
JavaScript Engine
       │
       ├── Call Stack
       │
       ├── Heap
       │
       └── Execution Context
                │
                ├── Lexical Environment
                ├── Variable Environment
                └── this binding
```

### Must-answer questions 1–8

1. What happens internally when JavaScript executes a function?
2. What is an execution context?
3. What is lexical scope?
4. Explain closures with a production use case.
5. `var` vs `let` vs `const` internally?
6. What exactly is hoisting?
7. What is Temporal Dead Zone?
8. How does the scope chain work?

### Coding

Implement:

```js
once(fn)
memoize(fn)
curry(fn)
```

Predict:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));
}
```

Then fix it three ways.

---

## Day 2 — `this`, Prototypes & Objects

### Questions 9–16

9. How is `this` determined?
10. Arrow-function `this` vs normal function?
11. Explain `call`, `apply`, `bind`.
12. What happens when `new Foo()` executes?
13. Explain prototype chain.
14. `class` vs prototype?
15. Shallow copy vs deep copy?
16. How does `Object.create()` work?

Understand:

```text
user
 ↓ [[Prototype]]
User.prototype
 ↓
Object.prototype
 ↓
null
```

### Coding

Implement:

```js
myBind()
deepClone()
get(obj, "user.address.city")
```

---

## Day 3 — Event Loop

### Questions 17–24

17. Explain the JavaScript event loop.
18. Microtask vs macrotask?
19. Why do promises execute before `setTimeout`?
20. What happens when `await` executes?
21. Can JavaScript block rendering?
22. Browser event loop vs Node event loop?
23. What is `requestAnimationFrame`?
24. When would you use Web Workers?

Solve at least **15 event-loop output questions**.

Example:

```js
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve()
  .then(() => console.log(3))
  .then(() => console.log(4));

queueMicrotask(() => console.log(5));

console.log(6);
```

---

## Day 4 — Promises & Async Engineering

### Questions 25–32

25. How does a Promise work?
26. `Promise.all` vs `allSettled`?
27. `race` vs `any`?
28. How does Promise error propagation work?
29. Sequential vs parallel async execution?
30. How do you cancel an HTTP request?
31. How do race conditions happen in frontend apps?
32. How would you limit concurrency?

### Coding

Implement:

```js
Promise.all()
retry(fn, attempts)
sleep(ms)
timeout(promise, ms)
promisePool(tasks, concurrency)
```

---

## Day 5 — JS Practical Coding

Implement from scratch:

```text
debounce()
throttle()
EventEmitter
LRU Cache
flatten()
groupBy()
memoize()
deepEqual()
```

### Questions 33–38

33. Debounce vs throttle?
34. Map vs Object?
35. WeakMap use cases?
36. Set vs Array?
37. Why is immutability useful?
38. How does garbage collection work conceptually?

### End-of-day task

Do a **60-minute JavaScript mock interview**.

---

# Phase 2 — React Deep Dive

## Day 6 — React Mental Model

Understand:

```text
setState()
    ↓
Schedule update
    ↓
Render
    ↓
Create new element tree
    ↓
Reconciliation
    ↓
Fiber
    ↓
Commit
    ↓
DOM
```

### Questions 39–46

39. What happens after `setState()`?
40. What causes a React component to render?
41. Render phase vs commit phase?
42. What is reconciliation?
43. What is Virtual DOM?
44. What is Fiber?
45. Why are keys required?
46. Why can array index as key cause bugs?

---

## Day 7 — Hooks

### Questions 47–56

47. How does `useState` work conceptually?
48. Why doesn't state update immediately?
49. What are state snapshots?
50. What is batching?
51. How does `useEffect` work?
52. `useEffect` vs `useLayoutEffect`?
53. What is effect cleanup?
54. What is a stale closure?
55. Why does StrictMode sometimes run effects twice?
56. When should you NOT use `useEffect`?

Study:

```text
useState
useReducer
useRef
useEffect
useLayoutEffect
useMemo
useCallback
useContext
```

### Coding

Build:

```js
useFetch()
useDebounce()
usePrevious()
useLocalStorage()
```

---

## Day 8 — React Performance

### Questions 57–64

57. Why does a child rerender when its parent renders?
58. What does `React.memo` do?
59. `useMemo` vs `useCallback`?
60. When can memoization hurt performance?
61. How would you diagnose excessive rerenders?
62. What is list virtualization?
63. How would you render 100,000 rows?
64. How do you optimize Context?

### Practice

Create an intentionally slow React app, profile it, and fix it.

Use:

- React DevTools Profiler
- Chrome Performance panel

---

## Day 9 — Modern React & Concurrency

### Questions 65–72

65. What is concurrent rendering?
66. What problem does `useTransition` solve?
67. What does `useDeferredValue` solve?
68. What is Suspense?
69. What are Error Boundaries?
70. Server vs Client Components?
71. What is hydration?
72. What causes hydration mismatch?

Understand:

```text
Urgent update
     │
     └── typing

Non-urgent update
     │
     └── expensive search-result rendering
```

---

## Day 10 — State Architecture

### Questions 73–80

73. Local vs global state?
74. Client state vs server state?
75. Context vs Redux?
76. Redux Toolkit architecture?
77. Why use selectors?
78. What is normalized state?
79. What problem does TanStack Query solve?
80. When should state live in the URL?

Classify state in an ecommerce app:

```text
Cart             → ?
Logged-in user   → ?
Products         → ?
Search filter    → ?
Modal open       → ?
API cache        → ?
Checkout form    → ?
```

---

# Phase 3 — Browser & Web Platform

## Day 11 — Browser Rendering

Understand:

```text
HTML → DOM ───────────┐
                      ↓
                  Render Tree
                      ↓
CSS → CSSOM ──────────┘
                      ↓
                   Layout
                      ↓
                    Paint
                      ↓
                  Composite
```

### Questions 81–87

81. How does browser rendering work?
82. Reflow vs repaint?
83. What creates a compositing layer?
84. Why is `transform` animation generally performant?
85. What is layout thrashing?
86. Critical rendering path?
87. How would you diagnose janky scrolling?

---

## Day 12 — Networking

### Questions 88–95

88. What happens after entering a URL?
89. DNS resolution?
90. TCP handshake?
91. TLS handshake?
92. HTTP/1 vs HTTP/2 vs HTTP/3?
93. Browser caching?
94. CDN?
95. `Cache-Control`, `ETag`, `max-age`?

Understand:

```text
google.com
   ↓
DNS
   ↓
IP
   ↓
Connection
   ↓
TLS
   ↓
HTTP
   ↓
HTML
   ↓
Browser rendering
```

---

## Day 13 — Security

### Questions 96–103

96. What is XSS?
97. Stored vs reflected XSS?
98. CSRF?
99. CORS?
100. CSP?
101. Where should authentication tokens be stored?
102. HttpOnly/Secure/SameSite cookies?
103. OAuth/OIDC at a high level?

Threat-model:

```text
React SPA
   ↓
API
   ↓
Authentication
```

---

## Day 14 — Accessibility

### Questions 104–110

104. Semantic HTML vs ARIA?
105. How does screen-reader navigation work?
106. How would you build an accessible modal?
107. Accessible dropdown?
108. Focus trapping?
109. `aria-label` vs `aria-labelledby`?
110. How would you make a complex data grid accessible?

### Practice

Build keyboard-accessible:

- Modal
- Tabs
- Combobox

---

# Phase 4 — TypeScript & Engineering Architecture

## Day 15 — TypeScript

### Questions 111–120

111. `interface` vs `type`?
112. `any` vs `unknown`?
113. `never`?
114. Generics?
115. `keyof`?
116. Mapped types?
117. Conditional types?
118. Discriminated unions?
119. Type guards?
120. Generic constraints?

Write:

```ts
function get<T, K extends keyof T>(
  obj: T,
  key: K
): T[K]
```

Design typed APIs for:

```text
DataTable<T>
ApiResponse<T>
Form<T>
EventEmitter<EventMap>
```

---

## Day 16 — Build Tooling & Frontend Architecture

### Questions 121–127

121. What does a bundler do?
122. Webpack vs Vite?
123. Tree shaking?
124. Code splitting?
125. Dynamic import?
126. Babel/SWC?
127. Source maps?

Understand:

```text
Source
 ↓
Transpile
 ↓
Resolve dependencies
 ↓
Tree shake
 ↓
Chunk
 ↓
Minify
 ↓
Browser
```

---

## Day 17 — Testing

### Questions 128–134

128. Unit vs integration vs E2E?
129. What should React Testing Library test?
130. Why avoid testing implementation details?
131. How do you mock APIs?
132. What should not be mocked?
133. Cypress vs Playwright?
134. How do you test async UI?

Write tests for:

```text
Login
Autocomplete
API failure
Loading
Retry
Form validation
```

---

# Phase 5 — Frontend System Design

Use the same framework every time:

```text
1. Clarify requirements
2. Scale assumptions
3. High-level architecture
4. Data model
5. Component architecture
6. API contracts
7. State management
8. Performance
9. Reliability
10. Security
11. Accessibility
12. Observability
13. Trade-offs
```

---

## Day 18 — System Design #1: Netflix

Design:

> Netflix homepage frontend.

Cover:

```text
SSR / CSR
Image loading
CDN
Infinite sections
Caching
Video previews
Personalization
Performance
```

### System Design #2: YouTube

Design:

> YouTube video page.

Focus on:

- video streaming
- comments
- recommendations
- live updates

---

## Day 19 — System Design #3: Trading Dashboard

Design:

> Zerodha / Robinhood-style live trading dashboard.

Architecture:

```text
             Backend
                │
        ┌───────┴────────┐
        │                │
       REST          WebSocket
        │                │
        ↓                ↓
Historical data     Price stream
        │                │
        └──────┬─────────┘
               ↓
          Client store
               ↓
      ┌────────┼────────┐
      ↓        ↓        ↓
    Chart   Watchlist  Orders
```

Answer:

- What happens with 5,000 updates/sec?
- How do you prevent every component rerendering?
- What happens when WebSocket disconnects?
- How do you prevent duplicate order submission?

### System Design #4: Bloomberg-Style Terminal

Cover:

- multiple live feeds
- charts
- news
- watchlists
- high update frequency
- widget isolation
- layout persistence

---

## Day 20 — System Design #5: Google Docs

Cover:

```text
Collaborative editing
Optimistic UI
WebSocket
Conflict resolution
Offline mode
Autosave
```

Understand conceptually:

- OT
- CRDT

### System Design #6: Slack

Cover:

```text
Channels
Messages
WebSocket
Unread state
Pagination
Search
Notifications
Offline cache
```

---

## Day 21 — System Design #7: Ecommerce

Design an Amazon-style product/search frontend.

Focus:

```text
SEO
SSR
Search
Filters
URL state
Cart
Caching
Images
Recommendations
Checkout
```

### System Design #8: Data Grid

Design a grid capable of:

> 1 million rows.

Discuss:

```text
Virtualization
Server pagination
Sorting
Filtering
Column resizing
Sticky columns
Accessibility
Memoization
```

---

## Day 22 — System Design #9: Autocomplete

Design Google Search autocomplete.

Discuss:

```text
Debounce
Caching
Race conditions
AbortController
Keyboard accessibility
Prefetching
Network failure
Stale results
Analytics
```

### System Design #10: Microfrontend Platform

Architecture:

```text
                 Shell
                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
     Payments    Profile    Trading
       MFE         MFE        MFE
```

Discuss:

- deployment independence
- shared dependencies
- routing
- authentication
- communication
- design system
- versioning
- failure isolation
- Module Federation
- when not to use microfrontends

---

## Day 23 — System Design Marathon

Randomly choose **3 of the 10 system-design problems**.

Give yourself:

- 45 minutes each
- no coding
- no notes

Record yourself explaining the architecture.

Your goal is communication and trade-off reasoning.

---

# Phase 6 — Senior / Lead Engineering

## Day 24 — Architecture Judgment

### Questions 135–140

135. How would you migrate a legacy React application?
136. How do you decide whether to rewrite or refactor?
137. How would you introduce a design system?
138. How do you manage frontend technical debt?
139. How would you split a monolithic frontend?
140. When would you reject microfrontends?

Practice:

> React app has grown for 7 years, 2M LOC, 80 engineers and poor performance. What do you do?

Do not answer:

> Rewrite it.

Discuss:

- measurement
- boundaries
- incremental migration
- risk
- organizational constraints

---

## Day 25 — Performance Investigation

### Questions 141–145

141. Website LCP is 6 seconds. Diagnose it.
142. React UI freezes while typing. Diagnose it.
143. Bundle is 8MB. What do you do?
144. Memory usage continuously increases. Diagnose it.
145. API returns in 100ms but page appears after 3 seconds. Why?

Practice with:

- Chrome DevTools
- Lighthouse
- React Profiler
- Network panel

---

## Day 26 — Production Engineering

### Questions 146–150

146. How do you monitor frontend errors?
147. How do you safely release frontend changes?
148. What are feature flags?
149. What are canary releases?
150. How would you investigate a production incident affecting only 2% of users?

Know:

```text
Logs
Metrics
Traces
RUM
Error monitoring
Core Web Vitals
Correlation IDs
Feature flags
Rollback
```

---

# Phase 7 — Leadership

## Day 27 — Prepare Your Stories

Prepare eight real stories:

| Story | Ready? |
|---|---|
| Major architecture decision | ☐ |
| Major performance improvement | ☐ |
| Production incident | ☐ |
| Difficult technical disagreement | ☐ |
| Mentored engineer | ☐ |
| Cross-team project | ☐ |
| Project that failed | ☐ |
| Technical debt / refactoring | ☐ |

Structure every story as:

```text
CONTEXT

↓
What was actually wrong?

CONSTRAINTS

↓
What options existed?

DECISION

↓
Why this option?

TRADE-OFF

↓
What did we sacrifice?

RESULT

↓
Numbers

LEARNING
```

Quantify results where possible.

Weak:

> I improved application performance.

Better:

> We reduced initial JS from 3.8MB to 1.7MB and p75 LCP from 4.1s to 2.3s.

Use your real numbers.

---

## Day 28 — Lead / Architect Questions

Practice aloud:

1. An engineer strongly disagrees with your architecture. What do you do?
2. Product wants something shipped tomorrow that creates technical debt.
3. Two senior engineers disagree.
4. A junior engineer repeatedly produces poor PRs.
5. Backend architecture is hurting frontend performance.
6. Your team owns 15 apps with inconsistent architecture.
7. Management asks you to reduce frontend development time by 30%.
8. How do you establish engineering standards without becoming a bottleneck?
9. How do you decide build vs buy?
10. Tell me about an architectural decision you regret.

---

# Phase 8 — Interview Simulation

## Day 29 — Full Mock

### Round 1 — 60 min

```text
JavaScript
+
TypeScript
+
React
```

### Round 2 — 60 min

Build:

> Autocomplete

Include:

```text
API
debounce
loading
error
race condition
keyboard
accessibility
```

### Round 3 — 60 min

System design:

> Design a real-time trading platform.

### Round 4 — 45 min

Leadership.

Do all four without notes.

---

## Day 30 — Final Readiness Test

Randomly choose:

### JavaScript

- 10 questions
- target: **9/10**

### React

- 10 questions
- target: **9/10**

### TypeScript

- 5 questions
- target: **4/5**

### Coding

- 1 problem
- target: **40 minutes**

### System Design

- 1 problem
- explain for **45 minutes**

### Leadership

- 3 questions
- answer without rambling

Anything you fail becomes your final revision sheet.

---

# 25 High-ROI Frontend Coding Problems

Implement these from scratch.

1. `debounce`
2. `throttle`
3. `Promise.all`
4. `Promise.allSettled`
5. `retry`
6. concurrency limiter
7. `EventEmitter`
8. LRU cache
9. `deepClone`
10. `deepEqual`
11. `flatten`
12. `groupBy`
13. `memoize`
14. `curry`
15. `get(object, path)`
16. autocomplete
17. infinite scroll
18. modal
19. tabs
20. file explorer
21. nested comments
22. data table
23. progress bars
24. image carousel
25. virtualized list

---

# Big Tech DSA Baseline

Do not ignore DSA if targeting Big Tech.

Focus on:

```text
Arrays / Strings
HashMap / Set
Two pointers
Sliding window
Stack / Queue
Binary search
Trees
BFS / DFS
Heap
Basic graphs
Recursion
```

A good target is:

> 40–60 well-selected DSA problems

rather than hundreds of random problems.

---

# Interview Readiness Mental Model

By the end of 30 days, your knowledge should connect like this:

```text
                         FRONTEND ENGINEER
                                │
           ┌────────────────────┼────────────────────┐
           │                    │                    │
          JS                  React              Browser
           │                    │                    │
       Event Loop             Fiber             Rendering
       Closures           Reconciliation         Network
       Async                 State              Security
           │                    │                    │
           └────────────────────┼────────────────────┘
                                │
                         ARCHITECTURE
                                │
                ┌───────────────┼───────────────┐
                │               │               │
             State          Performance      Reliability
                │               │               │
                └───────────────┼───────────────┘
                                │
                         SYSTEM DESIGN
                                │
                                ↓
                       ENGINEERING JUDGMENT
                                │
                                ↓
                           LEADERSHIP
```

For a 3-year React developer, the top half matters most.

For a **9-year Senior/Lead frontend engineer**, the strongest differentiation comes from:

- Architecture
- System design
- Engineering judgment
- Leadership

The technical fundamentals remain mandatory, but they are the baseline.

---

# Final Preparation Rule

Do not only read these answers.

**Speak them aloud.**

Senior interviews test whether you can:

- structure a messy engineering problem
- identify constraints
- evaluate options
- explain trade-offs
- make a decision
- communicate clearly

Knowing something internally and explaining it convincingly to another senior engineer are two different skills.

---

# Suggested GitHub Repo Structure

```text
frontend-interview-prep/
│
├── README.md
│
├── javascript/
│   ├── execution-context.md
│   ├── event-loop.md
│   ├── promises.md
│   └── coding-problems.md
│
├── react/
│   ├── rendering.md
│   ├── hooks.md
│   ├── performance.md
│   └── state-management.md
│
├── typescript/
│   └── senior-typescript.md
│
├── browser/
│   ├── rendering.md
│   ├── networking.md
│   ├── security.md
│   └── accessibility.md
│
├── system-design/
│   ├── netflix.md
│   ├── youtube.md
│   ├── trading-dashboard.md
│   ├── bloomberg-terminal.md
│   ├── google-docs.md
│   ├── slack.md
│   ├── ecommerce.md
│   ├── data-grid.md
│   ├── autocomplete.md
│   └── microfrontends.md
│
├── leadership/
│   ├── architecture-stories.md
│   ├── production-incidents.md
│   └── behavioural-questions.md
│
└── mocks/
    ├── mock-1.md
    ├── mock-2.md
    └── final-checklist.md
```

A good workflow is to keep this file as your main `README.md`, then gradually move detailed answers into the folders above as you prepare.
