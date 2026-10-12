# Lecture 5: Background Tasks & Services
## Comprehensive Line-by-Line Slide Explanation

---

### Slides 1–3: Title & Overview
- **Slide Text:**
  - `Background Tasks and Services`
  - `Tran Giang Son, tran-giang.son@usth.edu.vn, ICT Department, USTH`
  - `Contents: Threading, Android Thread Model, Background Tasks, Services`
- **Line-by-Line Explanation:**
  - Addresses concurrency on mobile devices: how Android handles multithreading, why the UI toolkit requires a dedicated thread, and the mechanisms (`Handler`, `AsyncTask`) used to execute background operations without freezing the user interface.

---

### Slides 4–7: Threading Fundamentals
- **Slide Text:**
  - **Slide 4 (Threading Basics):**
    - `• What’s a thread? Why thread? Threads in HTML5? Context switches? Threads vs applications?`
  - **Slide 6 (Why Threading?):**
    - `• Better CPU utilization, Separation of tasks, Responsiveness`
  - **Slide 7 (Why NOT Threading?):**
    - `• Complication, Architecture, Load balancing, Synchronization, Thread pool...`
- **Line-by-Line Explanation:**
  - **`What is a thread?`:** The smallest sequence of programmed instructions that can be managed independently by an OS scheduler. Multiple threads within the same process share heap memory, open files, and address space.
  - **`Why Threading?`:**
    - **Better CPU utilization:** Modern multi-core mobile SOCs can run distinct threads across parallel hardware cores simultaneously.
    - **Separation of tasks:** Keeps heavy background computation (e.g., network downloads, parsing, database queries) separate from lightweight foreground event handling.
    - **Responsiveness:** Prevents the UI from lagging or dropping below 60 frames per second.
  - **`Why NOT Threading? (Drawbacks & Pitfalls)`:**
    - Concurrency is inherently error-prone:
      - *Race Conditions:* Two threads modifying shared mutable state concurrently without locks.
      - *Deadlocks:* Two threads permanently waiting on resources locked by each other.
      - *Synchronization Overhead:* Mutexes and synchronized blocks cause lock contention and thread context-switch latency.

---

### Slides 8–12: The Android Thread Model (Single-Thread UI Model)
- **Slide Text:**
  - **Slide 9 (Android Thread Model):**
    - `• Main thread: Drawing widgets, Dispatching user inputs; Widget toolkit is not thread-safe; Worker threads`
  - **Slide 10 (Rule 1):**
    - `• Don’t do slllooooowwwww things on main thread (Calculation, Bitcoin mining, Image processing, Network access)`
  - **Slide 11 (Rule 2):**
    - `• Don’t manipulate Views on worker thread`
    - `• Crash: android.view.ViewRootImpl$CalledFromWrongThreadException: Only the original thread that created a view hierarchy can touch its views.`
  - **Slide 12 (Creating Worker Thread):**
    - `Thread t = new Thread(new Runnable() { public void run() { /* do heavy work, don't touch UI */ } }); t.start();`
- **Line-by-Line Explanation:**
  - **The Main Thread (UI Thread):**
    - When an Android application launches, the system creates an execution thread called the **Main Thread**.
    - It runs an infinite event loop (`Looper`) that continuously processes events from the MessageQueue:
      1. Renders and redraws UI widgets (`onDraw()`, layout passes).
      2. Dispatches user touch input, button taps, and keyboard gestures.
      3. Dispatches lifecycle callbacks (`onCreate`, `onResume`, `onPause`).
    - **Crucial Architectural Fact:** The Android UI widget toolkit (`android.widget.*`, `android.view.*`) is **NOT thread-safe**. There are no synchronized locks around view properties to ensure maximum rendering speed.
  - **The Two Golden Rules of Android Concurrency (High-Yield):**
    1. **Golden Rule 1: NEVER block the Main Thread.**
       - If an operation takes more than a few milliseconds (network requests, database access, heavy math, image decompression), running it on the main thread blocks the event loop.
       - The UI freezes completely, cannot redraw, and cannot respond to user touches.
       - If the main thread is blocked for **5 seconds**, the Android OS displays the fatal **ANR (Application Not Responding)** dialog, giving the user the option to force-kill the app.
    2. **Golden Rule 2: NEVER touch or modify UI Views from a background (worker) thread.**
       - Because the view hierarchy is not thread-safe, modifying a view (e.g. calling `textView.setText()` or `imageView.setImageBitmap()`) from a worker thread is strictly forbidden.
       - Android includes an internal thread check inside `ViewRootImpl.checkThread()`. Touching a view from outside the main thread immediately throws:
         ```text
         android.view.ViewRootImpl$CalledFromWrongThreadException:
         Only the original thread that created a view hierarchy can touch its views.
         ```

---

### Slides 13–19: Cross-Thread Communication: `Handler` & `Message`
- **Slide Text:**
  - **Slide 14–16 (Handler):**
    - `• Handler: A way to communicate with main thread`
    - `• Handler.handleMessage() is executed on main thread`
    - `• Worker thread: call handler.sendMessage()`
    - Code: `Handler handler = new Handler(Looper.getMainLooper()) { public void handleMessage(Message msg) { ... } };`
  - **Slide 17 (Network Worker Thread):**
    - `Bundle bundle = new Bundle(); bundle.putString("server_response", "some json");`
    - `Message msg = new Message(); msg.setData(bundle); handler.sendMessage(msg);`
  - **Slide 18 (Complete Example):**
    - Worker thread sleeps for 5s (simulating network), packages data into a `Message`, sends it via `handler.sendMessage()`, and `handleMessage()` displays a `Toast` on the Main Thread.
- **Line-by-Line Explanation:**
  - **The Problem:** Worker threads cannot touch views, so how can a worker thread tell the UI that a task has finished?
  - **The Solution:** A **`Handler`** tied to the **`MainLooper`**.
  - **Key Components:**
    - **`Looper`:** A message loop pumping messages from the thread's `MessageQueue`. `Looper.getMainLooper()` represents the message loop of the Main Thread.
    - **`Message`:** A container holding data (via `Bundle`, `what`, `arg1`, `arg2`) to be processed.
    - **`Handler`:**
      - Created on the Main Thread: binds to the Main Thread's `MessageQueue`.
      - In worker thread: calls `handler.sendMessage(msg)`. The message is placed into the Main Thread's queue.
      - On Main Thread: the message loop dequeues the message and executes `handler.handleMessage(msg)` **directly on the Main Thread**, where it is 100% safe to update UI views.

---

### Slides 20–30: `AsyncTask` (Encapsulation of Thread & Handler)
- **Slide Text:**
  - **Slide 21 (Background Tasks):**
    - `• «AsyncTask»: An encapsulation of Handler and Thread`
    - `• Also allow the worker thread to report its work progress to the UI`
  - **Slide 22–23 (3 Generic Types):**
    - `AsyncTask<Params, Progress, Result>`
    - `• Params: param type to pass to the worker thread`
    - `• Progress: type to report progress back`
    - `• Result: result type to be delivered`
    - `• Example: AsyncTask<String, Integer, Bitmap>`
  - **Slide 24 (4 Overriding Methods):**
    - `• [optional] onPreExecute(): for preparation`
    - `• [required] doInBackground(): do the real work`
    - `• [optional] onProgressUpdate(): for updating progress to UI`
    - `• [optional] onPostExecute(): for delivering result`
  - **Slide 27–34 (Example: Downloading PNG):**
    - `1st param: String (URL)`
    - `2nd param: Integer (Percentage during progress)`
    - `3rd param: Bitmap (Decoded Bitmap for image)`
  - **Slide 35–40 (Mapping Work to Methods):**
    - Download a PNG file -> `doInBackground()`
    - Report download progress -> `onProgressUpdate()`
    - Decode to bitmap data -> `doInBackground()`
    - Show it on an ImageView -> `onPostExecute()`
  - **Slide 41 (Code Pattern):**
    ```java
    AsyncTask<String, Integer, Bitmap> task = new AsyncTask<>() {
      protected void onPreExecute() { ... }
      protected Bitmap doInBackground(String... params) { ... }
      protected void onProgressUpdate(Integer... values) { ... }
      protected void onPostExecute(Bitmap bitmap) { ... }
    };
    task.execute("http://.../usthlogo.png");
    ```
- **Line-by-Line Explanation:**
  - **What is `AsyncTask`?**
    - A helper class designed to simplify background work and UI synchronization without manually managing raw `Thread`, `Runnable`, `Looper`, and `Handler` boilerplate.
  - **The 3 Generic Type Parameters (High-Yield):**
    1. **`Params`:** The input type passed into `task.execute(params)` and received by `doInBackground(Params... params)`. (If none needed, use `Void`).
    2. **`Progress`:** The data type passed when calling `publishProgress(values)` from the worker thread, received by `onProgressUpdate(Progress... values)` on the UI thread.
    3. **`Result`:** The output type returned by `doInBackground()`, received by `onPostExecute(Result result)` on the UI thread.
  - **The 4 Core Methods and Their Execution Threads (Highest-Yield Exam Table):**
    | Method | Thread It Executes On | Purpose | Required / Optional |
    | :--- | :--- | :--- | :--- |
    | **`onPreExecute()`** | **Main (UI) Thread** | Runs before background computation starts. Used to setup the task (e.g. show a loading spinner or progress dialog). | Optional |
    | **`doInBackground(Params...)`** | **Worker (Background) Thread** | Executes the heavy, blocking work (network I/O, file reading, image processing). **CANNOT touch UI views!** Calls `publishProgress()` to trigger UI updates. Returns `Result`. | **REQUIRED** |
    | **`onProgressUpdate(Progress...)`** | **Main (UI) Thread** | Invoked automatically on the Main Thread after `publishProgress()` is called. Used to update UI progress bars or percentage counters. | Optional |
    | **`onPostExecute(Result)`** | **Main (UI) Thread** | Invoked automatically on the Main Thread after `doInBackground()` returns. Receives the `Result` and safely updates UI widgets (e.g. `imageView.setImageBitmap(bitmap)`). | Optional |
  - **Exam Traps & Distractors:**
    - *Which method runs on the background worker thread?* **ONLY `doInBackground()`**. All other three methods (`onPreExecute`, `onProgressUpdate`, `onPostExecute`) run on the **Main Thread**.
    - *Can you call `imageView.setImageBitmap()` inside `doInBackground()`?* **NO!** That would throw `CalledFromWrongThreadException`. It must be called inside `onPostExecute()`.
    - *How do you pass data from `doInBackground()` to `onProgressUpdate()`?* By calling `publishProgress(values)`.
