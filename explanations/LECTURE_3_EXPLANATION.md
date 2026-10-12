# Lecture 3: Android Fundamentals
## Comprehensive Line-by-Line Slide Explanation

---

### Slide 1–2: Title & Content Overview
- **Slide Text:**
  - `Android Fundamentals`
  - `Content: Architecture, Compilation, Controllers (Context, Application, Activity, Fragment), View`
- **Line-by-Line Explanation:**
  - Explores the core building blocks of Android: from OS layer architecture and DEX bytecode compilation to the MVC design pattern, controller components, and the View widget hierarchy.

---

### Slides 3–8: Android Architecture (The 4 Layers)
- **Slide Text:**
  - `Overview: Applications -> Application Framework -> Libraries -> Linux Kernel`
  - **Slide 5 (Linux Kernel):** `Well shaped, Secured, Active development`
  - **Slide 6 (Libraries):** `Mostly in C/C++, Low level, Render text, Play media, Local databases...`
  - **Slide 7 (Application Framework):** `Java, Higher level, User Interface, Location Service, Notification...`
  - **Slide 8 (Applications):** `Java, Our focus, Where you will make your app`
- **Line-by-Line Explanation:**
  - **Layer 1: Linux Kernel (Bottom Layer, written in C):**
    - Provides core OS functionality: hardware device drivers (camera, display, WiFi, audio, keypad), power management, process scheduling, and kernel-level user sandboxing.
  - **Layer 2: Libraries & Android Runtime (Written in C/C++):**
    - **Libraries (C/C++):**
      - *WebKit / Chromium:* Browser web engine.
      - *SQLite:* Lightweight transactional relational database engine for local data storage.
      - *FreeType:* Font rendering (vector font rasterization).
      - *Media Framework (PacketVideo / Stagefright):* Audio and video playback/recording (MP3, AAC, H.264).
      - *Surface Manager / OpenGL ES:* Compositing 2D and 3D graphic surfaces across apps.
      - *Bionic Libc:* Google's custom BSD-derived C library optimized for low memory and Linux threads.
    - **Android Runtime:** Core Java runtime libraries plus the Virtual Machine (Dalvik or ART).
  - **Layer 3: Application Framework (Written in Java):**
    - The high-level API services consumed by developers:
      - *ActivityManager:* Manages the lifecycle of applications and the activity back stack.
      - *WindowManager:* Manages app windows and screen surfaces.
      - *ContentProviders:* Enables inter-app data sharing (e.g. reading contacts).
      - *ViewSystem:* Extensible UI widgets (buttons, lists, text inputs, grids).
      - *NotificationManager:* Controls status bar alerts, badges, and push notifications.
      - *PackageManager:* Queries installed packages and system permissions.
      - *LocationManager:* GPS and network-based location updates.
      - *ResourceManager:* Provides access to non-code static assets (layouts, strings, drawables).
  - **Layer 4: Applications (Top Layer, written in Java):**
    - User-facing apps: native system apps (Home launcher, Phone dialer, Contacts, Browser) and third-party apps (e.g., USTH Weather).
- **Exam Traps:**
  - *Which layer is SQLite in?* **Libraries (C/C++)**, NOT Application Framework.
  - *Which language is the Application Framework written in?* **Java**.
  - *Which language are core system libraries written in?* **C/C++**.

---

### Slides 9–12: Compilation & Android Virtual Machines
- **Slide Text:**
  - **Slide 10 (From Source to Device):**
    - `• Java`
    - `• Dex`
    - `• Virtual Machine`
    - `• Separated Process`
    - `• Separated User`
    - `• Isolation`
    - `• Why Java?`
  - **Slide 11–12 (Android Virtual Machines):**
    - `• Dalvik`
    - `• ART (Android RunTime)`
    - `• Source: AnandTech`
- **Line-by-Line Explanation:**
  - **The Compilation Toolchain:**
    1. Java Source Code (`.java` files) is compiled by standard `javac` into standard Java bytecode (`.class` files).
    2. The **`dx` tool (DEX compiler)** converts multiple `.class` files into a single, compact **Dalvik Executable (`.dex`) file**. The DEX format deduplicates constant pools, simplifies method dispatch, and uses 16-bit register-based opcodes optimized for mobile processors.
    3. The `.dex` file is packaged with assets, resources, and `AndroidManifest.xml` into an **`.apk` (Android Package)** file.
  - **Process Isolation & Security Sandbox:**
    - Unlike standard desktop Java where multiple apps share one JVM, in Android:
      - Every application runs inside its **own dedicated Linux OS process**.
      - Every application has its **own independent Virtual Machine instance**.
      - Every application is assigned a **unique Linux User ID (UID)**.
      - Consequently, one app cannot directly read the memory or files of another app without explicit permission.
  - **Dalvik vs. ART (Android RunTime):**
    - **Dalvik VM (Android 1.0 – 4.4):**
      - Register-based virtual machine designed by Dan Bornstein.
      - Relies on **JIT (Just-In-Time) compilation** (introduced in Froyo 2.2): interprets bytecode, and dynamically compiles frequently-run "hot" code segments into native machine code at runtime. Conserves storage but consumes CPU and battery during execution.
    - **ART (Introduced in KitKat 4.4, default in Lollipop 5.0+):**
      - Relies on **AOT (Ahead-Of-Time) compilation**: converts the entire DEX bytecode into native ELF machine code (`.oat` files) upon app installation.
      - Result: dramatically faster execution, smoother animations, reduced battery usage, at the cost of slightly longer installation times and slightly more internal flash storage.
- **Exam Traps:**
  - *Tool converting `.class` to `.dex`:* **`dx` compiler**.
  - *Dalvik compilation strategy:* **JIT (Just-In-Time)**.
  - *ART compilation strategy:* **AOT (Ahead-Of-Time)**.

---

### Slides 13–24: Controllers: Context & Application
- **Slide Text:**
  - **Slide 14–15 (Simple "MVC" Model):**
    - Model: Data / Business logic.
    - View: Layouts, widgets (XML/Java).
    - Controllers: Context, Application, Activity, Fragment.
  - **Slide 19 (Context):**
    - `• Central command center`
    - `• Access application-specific data`
    - `• Settings, Private files, Resources, Assets, System services`
  - **Slide 20–22 (Application):**
    - `• A context, Can be subclassed, Global data, Early initialization of libraries`
    - Code: `public class MyApplication extends Application { private static MyApplication instance; ... }`
    - Code: `ACRA.init(this);` inside `onCreate()`
  - **Slide 23 (Android Memory Management):**
    - `• Garbage Collector`
    - `• Upper limit for each Application`
    - `• «Kill» activities when low on memory`
    - `• Out-of-memory Exception`
  - **Slide 24 (AndroidManifest.xml):**
    - `• Metadata about the app, Target SDK, «Entry point» of the app`
    - `• Permissions, activities, services, receivers...`
    - `• Declare permission: <uses-permission android:name="android.permission.SEND_SMS"/>`
- **Line-by-Line Explanation:**
  - **`Context`:**
    - The abstract handle providing access to the Android system environment.
    - Subclasses of Context include `Application`, `Activity`, and `Service`.
    - Used to access app assets (`context.getAssets()`), resources (`context.getResources()`), shared preferences (`getSharedPreferences()`), private internal directory (`getFilesDir()`), and system services (`getSystemService(Context.LOCATION_SERVICE)`).
  - **`Application`:**
    - A base class maintaining global application state across all activities.
    - Created before any Activity or Service launches.
    - **Subclassing pattern:** To use a custom Application class, extend `Application` and register it in `AndroidManifest.xml` via `<application android:name=".MyApplication">`.
    - **Global Data Singleton:** Storing a static reference `instance` inside `onCreate()` allows any class in the app to access global state via `MyApplication.getInstance()`.
    - **Early Library Setup:** Ideal location for initializing third-party crash reporters, analytics, or logging engines (e.g. ACRA - Application Crash Reports for Android with `ACRA.init(this)`).
  - **Memory Management & Garbage Collection:**
    - Android enforces a strict heap memory limit per app (historically 16MB–64MB on older devices, now 192MB–512MB).
    - If memory runs low, the OS Garbage Collector (GC) runs. If the app still needs more RAM than the limit, Android terminates background activities or throws an `OutOfMemoryError` (OOM).
  - **`AndroidManifest.xml`:**
    - The root configuration XML of every Android package.
    - Specifies the unique Java package name and `targetSdkVersion`.
    - Declares application permissions via `<uses-permission>` (e.g. SMS, Internet, Camera).
    - Registers all 4 primary Android components: `<activity>`, `<service>`, `<receiver>`, `<provider>`.
    - Specifies the launcher entry activity via `<intent-filter>` containing `<action android:name="android.intent.action.MAIN"/>` and `<category android:name="android.intent.category.LAUNCHER"/>`.

---

### Slides 26–37: Activity & Lifecycle
- **Slide Text:**
  - **Slide 28 (What is it?):**
    - `• Fundamental building block, Has a unique task or purpose`
    - `• At least one per Application, «Handles» display of single screen`
  - **Slide 30 (onCreate):**
    - `• onCreate(): initialization, Load view layout, Init view components`
    - Code: `setContentView(R.layout.main_activity); mTextView = (TextView) findViewById(R.id.text_message);`
  - **Slide 31 (onPause):**
    - `• onPause(): Stop animation or heavy tasks, Save unsaved changes, Release resources (e.g. camera)`
    - Code: `super.onPause(); if (mCamera != null) { mCamera.release(); mCamera = null; }`
  - **Slide 32 (onResume):**
    - `• onResume(): Called when activity comes to foreground, Acquire resources (e.g. camera)`
    - Code: `super.onResume(); if (mCamera == null) { initializeCamera(); }`
  - **Slide 33 (Activity Lifecycle: Screen Orientation):**
    - `• onSaveInstanceState() -> onDestroy() -> Create a new activity instance -> onCreate() -> onRestoreInstanceState()`
  - **Slide 34 (finish):**
    - `• Close current activity: call finish(); onDestroy() will be called if no memory leak`
  - **Slide 35 (Intent):**
    - `• Intent: Asynchronous messaging mechanism, Message to pass to other activities/services, Contains data`
    - Code: `Intent intent = new Intent(this, DisplayMessageActivity.class); intent.putExtra("location", text); startActivity(intent);`
- **Line-by-Line Explanation:**
  - **What is an Activity?**
    - Represents a single focused window or screen that the user interacts with.
  - **The Activity Lifecycle State Machine:**
    1. **`onCreate(Bundle savedInstanceState)`:**
       - Invoked when the activity is first instantiated.
       - Used to inflate the layout (`setContentView(R.layout.xxx)`) and bind view objects (`findViewById()`).
    2. **`onStart()`:**
       - The activity becomes visible to the user, but does not yet have foreground input focus.
    3. **`onResume()`:**
       - The activity moves into the foreground and gains interactive focus.
       - Ideal place to **acquire exclusive hardware resources** (such as opening the camera or starting sensor updates).
    4. **`onPause()`:**
       - The activity loses focus (e.g., when partially obscured by a dialog or incoming phone call).
       - Used to pause animations, commit draft data, and **release exclusive resources** (e.g., calling `mCamera.release()` so other apps or activities can use it).
       - **Rule:** Always call `super.onPause()` first!
    5. **`onStop()`:**
       - The activity is no longer visible to the user (another activity covers it completely).
    6. **`onDestroy()`:**
       - Final callback before the activity instance is removed from memory (e.g., when the user presses Back or calls `finish()`).
  - **Screen Orientation Change (Rotation):**
    - **CRITICAL EXAM CONCEPT:** Rotating an Android device causes the system to **completely destroy the current Activity instance and recreate a new one from scratch** so that it can load landscape layout resources (`layout-land/`).
    - The exact sequence:
      1. `onSaveInstanceState(Bundle)`: Saves transient UI state.
      2. `onPause()` -> `onStop()` -> `onDestroy()`: Destroys the old instance.
      3. New instance instantiated -> `onCreate(Bundle)` -> `onStart()`.
      4. `onRestoreInstanceState(Bundle)`: Restores saved UI state.
      5. `onResume()`: Re-enters running state.
  - **`Intent`:**
    - An asynchronous messaging object used to request an action from another component.
    - **Explicit Intent:** Specifies the exact target class (e.g., `new Intent(this, DisplayMessageActivity.class)`).
    - Can attach primitive key-value data via `intent.putExtra("key", value)`.
    - Executed via `startActivity(intent)` or `startActivityForResult(intent, requestCode)`.

---

### Slides 38–52: Fragments
- **Slide Text:**
  - **Slide 43 (Why Fragment?):**
    - `• Explosion in the variety of devices (Screen size, resolution, density, orientation differs)`
  - **Slide 44–45 (Fragment definition & History):**
    - `• Represents a behavior or a portion of user interface`
    - `• Building block of the Fundamental building blocks`
    - `• is optional`
    - `• Officially supported from Honeycomb [API 11]`
    - `• Can be used from devices as low as Donut [API 4] via Android Support Library`
  - **Slide 46 (Lifecycle):**
    - `• Similar lifecycle as Activity: onCreate(), onCreateView(), onPause()`
  - **Slide 47–49 (Popular Fragment Classes):**
    - `• DialogFragment, ListFragment, PreferenceFragment`
  - **Slide 50–51 (Activity Coordination & Transactions):**
    - `• Activity coordinates fragments using FragmentManager (or SupportFragmentManager)`
    - Code: `DetailFragment firstFragment = new DetailFragment();`
    - Code: `getFragmentManager().beginTransaction().add(R.id.container, firstFragment).commit();`
- **Line-by-Line Explanation:**
  - **Motivation for Fragments:**
    - Prior to Android 3.0, an Activity was tied 1:1 to the physical screen. When Android tablets arrived, a screen had room to show both a list of items and their details simultaneously (multi-pane layout).
    - Fragments allow modularizing UI and logic into independent chunks: on a tablet, both fragments sit side-by-side in one Activity; on a phone, each fragment sits in its own Activity.
  - **History & API Versions (High-Yield):**
    - **Native API support:** Introduced in **Android 3.0 Honeycomb (API 11)**.
    - **Backward compatibility:** Backported down to **Android 1.6 Donut (API 4)** via the `android.support.v4.app.Fragment` library.
  - **Fragment Lifecycle:**
    - Has lifecycle hooks closely paralleling Activity, with `onCreateView(LayoutInflater, ViewGroup, Bundle)` added specifically to inflate and return its view hierarchy.
  - **Dynamic Fragment Transactions:**
    - Fragments can be inserted statically in XML via the `<fragment>` tag, or dynamically swapped in Java using `FragmentManager`.
    - A dynamic transaction requires:
      `getFragmentManager().beginTransaction().add(containerId, fragment).commit();`

---

### Slides 53–65: Views & ViewGroups
- **Slide Text:**
  - **Slide 56 (View definition):**
    - `• What user interacts with, Basic building blocks of user interface, android.view.*, android.widget, XML or dynamic code`
  - **Slide 57 (Popular Views):**
    - `• TextView, ImageView, ViewGroup (LinearLayout, RelativeLayout, FrameLayout, AbsListView -> GridView, ListView, RecyclerView), Button, EditText, CheckBox`
  - **Slide 58–59 (Attributes):**
    - `• id: findViewById(), width, height, padding, margin, visibility, alpha, rotation, background, click`
    - `• Padding (inside boundary) vs Margin (outside boundary)`
  - **Slide 60 (TextView):** `text: setText(), drawable, font, gravity, styles`
  - **Slide 61 (ImageView):** `src: setImageResource(), scaleType: fitXY, fitStart, fitEnd, centerCrop, centerInside, tint, crop, viewBounds`
  - **Slide 62 (ViewGroup):** `Contain children (other Views), LayoutParams, Subclasses: FrameLayout, LinearLayout, RelativeLayout...`
  - **Slide 63 (Button):** `Push-button, onClick(), setOnClickListener`
  - **Slide 64 (EditText):** `Allow editing a text (TextBoxes), getText(), selection`
  - **Slide 65 (Resource Naming Rules):**
    - `• Weather icon set inside res/drawable-hdpi`
    - `• Don’t have names starting with digits`
    - `• Names contain lowercase letters, digits and underscores`
- **Line-by-Line Explanation:**
  - **`View` vs. `ViewGroup`:**
    - `View` is the base class for individual UI controls (widgets) that occupy a rectangular area on screen and handle drawing and touch events.
    - `ViewGroup` is an invisible subclass of `View` that acts as a container for other child views and defines `LayoutParams` determining child positioning.
  - **Visibility States (High-Yield Trap):**
    - `VISIBLE`: Displayed normally.
    - `INVISIBLE`: View is hidden, but **still takes up layout space** in the screen layout.
    - `GONE`: View is hidden and **takes up ZERO layout space** (as if it did not exist).
  - **Padding vs. Margin:**
    - `Padding`: Internal distance between the view content and its outer edge.
    - `Margin`: External distance separating the view from neighboring sibling views or parent borders.
  - **ImageView `scaleType`:**
    - `centerCrop`: Scales image uniformly preserving aspect ratio so width and height fill the view, cropping edges.
    - `fitXY`: Stretches image non-uniformly to exactly fit width and height without cropping.
    - `fitCenter` / `centerInside`: Scales image preserving aspect ratio so the entire image fits inside bounds.
  - **Resource File Naming Convention (High-Yield):**
    - Files in `res/drawable*` must adhere to strict Java identifier rules because AAPT generates variable names from them in `R.java`.
    - **Rules:** Must contain **ONLY lowercase letters (`a-z`), digits (`0-9`), and underscores (`_`)**.
    - **CRITICAL RESTRICTION:** Must **NEVER start with a digit** (e.g. `1_weather.png` is an error; `weather_1.png` is valid).
