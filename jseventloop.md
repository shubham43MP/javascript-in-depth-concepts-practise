# ⚙️ JavaScript Event Loop — Simplified

This also explains JavaScript's **single-threaded asynchronous feature** ✨

---

## 🧩 First Things First

### Core Components

- **Heap 🗄️**
  Memory where objects are allocated and managed.

- **Call Stack 📚**
  Functions are pushed here for execution.
  JavaScript is single-threaded, so only one thing runs at a time in the stack.

- **Web APIs 🌐**
  Built-in browser features (e.g., `setTimeout`, DOM events, fetch).
  These run outside the main JS thread, often on separate threads.

- **Message Queue 📬**
  Once Web API tasks complete, their callbacks are sent here.
  The queue waits until the call stack is empty before pushing callbacks back in.

---

## 🔄 How JavaScript Handles Async

Even though JS is single-threaded, it can perform asynchronous operations by:

1. Sending certain functions (timers, fetch, events) to the **Web APIs**.
2. When finished, the results (callbacks) are placed in the **Message Queue**.
3. The **Event Loop** continuously checks:
   - If the **Call Stack** is empty → move the next callback from the **Message Queue**.

**Priority:**
`Call Stack → Message Queue`

---

## 📝 Example

```js
console.log(1)
console.log(2)

setTimeout(() => console.log('A'), 500)

function customFunc() {
  console.log(4)
}

setTimeout(() => console.log('B'), 0)

customFunc()

🤔 Why That Order?

setTimeout(..., 500) is handed to Web APIs to start its timer.

setTimeout(..., 0) is also sent to Web APIs, but still queued until the stack clears.

The synchronous calls (1, 2, customFunc) execute first.

Once the stack is empty, the 0ms timeout callback (B) enters.

Finally, after ~500ms, A executes.

⚡ Other Async Sources

The Message Queue also handles:

⏱️ setTimeout / setInterval

🖱️ User events (clicks, keypresses)

🌍 Fetch/network responses

🪄 DOM events

The Event Loop always clears the Call Stack first, then processes items in the queue.

🚨 Important Note: Browser vs Node.js

The description above applies to browser-based JavaScript.

In Node.js, the event loop is implemented by libuv (a C library).

Its phases differ (timers, pending callbacks, poll, check, close, etc.), and it has special queues like process.nextTick.

⚠️ Don’t confuse browser and Node.js event loop behavior — they are similar but not identical.
