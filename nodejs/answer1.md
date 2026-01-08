# Question 1 – Node.js Internals

## 1. Node.js Architecture

Node.js uses a **non-blocking, event-driven architecture**.  
This means it can handle many operations at the same time without waiting for one task to finish before starting another.

Architecture layers:

- **JavaScript Engine (V8)** – Executes JavaScript code.
- **Node.js Core APIs** – Provides built-in modules (fs, http, crypto).
- **Native Bindings** – Connect JavaScript functions to C/C++ implementations.
- **libuv** – Handles asynchronous operations (event loop, thread pool, networking).
- **Event Loop** – The heart of Node.js that manages task execution.

Node.js is perfect for real-time applications because it can handle thousands of requests without blocking.

---

## 2. JavaScript Engine (V8)

- V8 is Google's high-performance JavaScript engine.
- Written in **C++**, used in Chrome and Node.js.
- Converts JS → Machine code → Executes fast.
- Features:
  - Just-in-time (JIT) compilation
  - Garbage collection
  - Optimized performance

---

## 3. Node.js Core APIs

Node.js provides built-in modules that allow JavaScript to interact with the system:

- **fs** → file system
- **http/https** → server creation
- **crypto** → encryption
- **path** → file paths
- **os** → system info

These APIs are implemented in JavaScript but internally call C/C++ code via native bindings.

---

## 4. Native Bindings

Native bindings act as a **bridge between JavaScript and C/C++ code**.

Example:
- When you use fs.readFile(), JS calls underlying C/C++ functions through bindings.

This allows Node.js to perform fast system-level operations.

---

## 5. Event Loop

Event Loop is the core part of Node.js that:

- Manages callbacks
- Executes asynchronous tasks
- Coordinates timers, I/O, promises, etc.

Node.js is single-threaded at the JavaScript level, but event loop + libuv make it non-blocking.

---

# 6. libuv

## What is libuv?

libuv is a **C library** that provides:

- Event loop
- Thread pool
- Async I/O
- Cross-platform support (Windows, Linux, macOS)

It is the backbone of Node.js asynchronous behavior.

---

## Why Node.js needs libuv

JavaScript alone cannot:

- Access OS operations
- Handle networking
- Perform async I/O
- Manage threads

libuv handles all these and gives Node.js its non-blocking nature.

---

## Responsibilities of libuv

- Maintaining the **Event Loop**
- Managing the **Thread Pool**
- Handling **File I/O**
- DNS operations
- TCP/UDP sockets
- Timers (setTimeout / setInterval)

---

# 7. Thread Pool

## What is a Thread Pool?

A thread pool is a group of background threads managed by libuv to perform expensive operations **without blocking** the main thread.

Default size = **4 threads** (can be increased).

---

## Why Node.js uses a Thread Pool

Because some tasks are slow and cannot be done asynchronously by the OS.

Examples:
- File system operations
- Encryption/decryption
- Compression
- DNS lookups

These run inside the **libuv thread pool**, not on the main thread.

---

## Operations handled by Thread Pool

- fs.readFile() / fs.writeFile()
- crypto.pbkdf2()
- zlib compression
- DNS lookup (non-OS async)

---

# 8. Worker Threads

## What are Worker Threads?

Worker Threads allow **running JavaScript in multiple threads**.

They are different from the libuv thread pool.

Used for:
- Heavy CPU tasks
- Parallel processing
- ML computations
- Image/Video processing

---

## Why Worker Threads are needed?

Node.js is single-threaded at JS-level.  
So CPU-heavy tasks block the event loop.

Worker threads solve this by:
- Running JS code in separate threads
- Offloading heavy CPU operations
- Keeping event loop free

---

## Thread Pool vs Worker Threads

| Feature | Thread Pool | Worker Threads |
|--------|-------------|----------------|
| Executes JavaScript? | ❌ No | ✅ Yes |
| Purpose | I/O, crypto, filesystem | CPU-heavy JS tasks |
| Managed By | libuv | Node.js Worker API |
| Control | Automatic | Developer manually creates workers |

---

# 9. Event Loop Queues

Node.js event loop has multiple queues.  
Two important ones:

---

## Macro Task Queue

Includes tasks like:
- setTimeout
- setInterval
- setImmediate
- I/O callbacks
- Script execution

These execute in future cycles of the event loop.

---

## Micro Task Queue

Includes:
- Promises (.then, .catch)
- async/await callbacks
- queueMicrotask()
- process.nextTick()

These run **immediately after the current operation**, before next macro task.

---

## Execution Priority

**Micro Task Queue has higher priority than Macro Task Queue.**

Order:
1. Execute current code
2. Run ALL microtasks
3. Move to next macro task

---

## Examples

### Macro Tasks
- `setTimeout(() => {})`
- `setInterval(() => {})`
- `setImmediate(() => {})`
- File I/O callbacks

### Micro Tasks
- `Promise.then()`
- `process.nextTick()`
- `async/await` resolved callbacks

