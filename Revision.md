# 🚀 Ultimate JavaScript Revision Notes
*Compiled from your personal code library*

---

## 1. Arrays: The "Gotchas"
### **Slice vs. Splice**
* **`slice(start, end)`**: Returns a **copy**. Does **NOT** change the original array.
    * *Example:* `myArr.slice(1, 3)` returns items at index 1 and 2.
* **`splice(start, count, ...insert)`**: **Modifies** the original array.
    * *Example:* `myArr.splice(1, 3)` removes 3 items starting at index 1.

### **Creation & Flattening**
* **`Array.from()`**: Converts array-like objects (strings, NodeLists) to Arrays.
    * ⚠️ *Gotcha:* `Array.from({name: "Venkatesh"})` returns `[]` because it's not iterable.
* **`Array.of(v1, v2)`**: Creates an array from variables.
* **`flat(Infinity)`**: Recursively flattens nested arrays of **any** depth.

---

## 2. Objects: Merging & Descriptors
### **Merging Objects**
* **Modern Way:** Spread Operator `const obj3 = {...obj1, ...obj2}`.
* **Old Way:** `Object.assign({}, obj1, obj2)` (The `{}` is the target).

### **Property Flags**
* You can control property behavior using `Object.defineProperty`.
* **`writable: false`**: Value cannot be changed.
* **`enumerable: false`**: Key will not show up in loops.

### **Classes (ES6)**
* **Syntactic Sugar:** Classes are just a cleaner way to write prototype-based code.
* **`static` Methods:** Belong to the Class, not the instance.
    * *Call it:* `User.createId()`
    * *Don't call it:* `user1.createId()` (Throws Error).
* **`super(props)`**: Must call this in a subclass constructor before using `this`.

---

## 3. Functions: Scope & Syntax
### **IIFE (Immediately Invoked Function Expression)**
* Used to create a local scope and avoid polluting the global namespace.
* ⚠️ **CRITICAL:** You **MUST** use a semicolon `;` after an IIFE, or the next one will crash.
    * `((name) => { ... })('Venkatesh');`

### **Arrow Functions**
* **Implicit Return:**
    * One-liner: `const add = (a, b) => a + b` (No `return` needed).
    * **Returning an Object:** Must wrap in parentheses `()`.
        * `const getObj = () => ({ name: "User" })`

### **Closures**
* A function returns another function **along with its lexical scope**.
* *Practical Use:* Data privacy (e.g., creating a click handler that remembers a specific color).

---

## 4. Loops: Iteration Confusion Solved

| Loop | Use Case | Returns | Notes |
| :--- | :--- | :--- | :--- |
| **`for...of`** | Arrays, Strings | The **Value** | Good for standard iteration. |
| **`for...in`** | Objects | The **Key** | Iterates over enumerable properties. |
| **`forEach`** | Arrays | `undefined` | Side effects only. Cannot use `break/continue`. |
| **`map`** | Arrays | **New Array** | Transforms elements. |
| **`filter`** | Arrays | **New Array** | Returns elements that match a condition. |
| **`reduce`** | Arrays | **Single Value** | Accumulates values (e.g., sum, total price). |

---

## 5. Async JavaScript: The Event Loop

### **The Architecture**
1.  **Call Stack:** Single-threaded. Executes 1 line at a time.
2.  **Web APIs:** Background workers (DOM, setTimeout, fetch).
3.  **Task Queue:** Standard priority (setTimeout callbacks).
4.  **Microtask Queue:** **High Priority** (Promise callbacks).

### **Priority Rule**
> The Event Loop always clears the **Microtask Queue** before the **Task Queue**.

### **Fetch API Dual Nature**
When you call `fetch()`:
1.  **Memory:** Immediately returns a `Promise` object (Pending).
2.  **Network:** Browser fires a network request in the background.
* ⚠️ *Gotcha:* `fetch` **only rejects** on network failure (offline). A 404 error is considered "Success" (Fulfilled).

---

## 6. DOM Manipulation

### **Selectors**
* **`querySelector`**: Returns the **first** match only.
* **`querySelectorAll`**: Returns a **NodeList** (Supports `.forEach()`).
* **`getElementsByClassName`**: Returns an **HTMLCollection** (Does **NOT** support `.forEach()`).
    * *Fix:* Convert it first: `Array.from(myCollection)`.

### **Content Modification**
* **`innerText`**: Visible text only (Respects CSS `display: none`).
* **`textContent`**: All text, even hidden ones.
* **`innerHTML`**: HTML tags included.
    * ⚠️ *Perf Tip:* Avoid loops with `innerHTML +=` (forces re-parsing). Use `document.createElement` and `appendChild` instead.

### **Traversal**
* **`children`**: Returns Element nodes (Tags only).
* **`childNodes`**: Returns **All nodes** (Tags + Text nodes like line breaks).

### **Events**
* **Bubbling:** Event travels UP (Target -> Parent -> Window).
* **Capturing:** Event travels DOWN (Window -> Parent -> Target).
* **Delegation:** Attach 1 listener to a Parent (`ul`) instead of 100 listeners to Children (`li`). Check `e.target` to handle the click.