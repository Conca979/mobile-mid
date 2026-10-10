# Mobile Application Development (Android Front-End)
## Comprehensive Midterm Study Guide

*Based strictly on Course Lectures 1 to 5 (Tran Giang Son, ICT Department, USTH)*

---

## Table of Contents
1. [Lecture 1: Course Overview & Architecture of Projects](#1-lecture-1-course-overview--projects)
2. [Lecture 2: Android Introduction, Hardware & History](#2-lecture-2-android-introduction-hardware--history)
3. [Lecture 3: Android Fundamentals (Architecture, Compilation, Controllers, Views)](#3-lecture-3-android-fundamentals)
4. [Lecture 4: Resources (Layouts, ViewPager, Values, Drawables, Raw Data, Menus)](#4-lecture-4-resources)
5. [Lecture 5: Background Tasks & Services (Threading, Handlers, AsyncTask)](#5-lecture-5-background-tasks--services)
6. [Exam Quick-Reference Summary & High-Yield Traps](#6-exam-quick-reference-summary--high-yield-traps)

---

## 1. Lecture 1: Course Overview & Projects

### Key Course Details
- **Course Title:** Mobile Application Development
- **Course Volume:** 4 ECTS = 40 hours (24h Lecture, 10h Practical work, 6h Project)
- **Prerequisites:** Object-Oriented Programming (OOP)
- **Assessment Structure:**
  - Attendance: **10%**
  - Midterm Project: **20%**
  - Final Project: **50%**
  - Oral Exam: **20%**
- **Recommended Reference Books:**
  - *Head First Android Development*, by Dawn Griffiths and David Griffiths (O'Reilly, 2015)
  - *Android Programming: The Big Nerd Ranch Guide*, 2nd Edition, by Bill Phillips and Brian Hardy (2015)

### Presentation & Project Criteria
- Presentation format: 15 minutes oral + 3 minutes Q&A.
- Expected sections: Introduction $\rightarrow$ Architecture $\rightarrow$ Activities $\rightarrow$ Networking $\rightarrow$ **Optimization (Show UI overdraw status!)** $\rightarrow$ Demo (using emulator) $\rightarrow$ Conclusion.

---

## 2. Lecture 2: Android Introduction, Hardware & History

### 1. What is Android?
- A **Mobile Operating System**
- A **Linux Distribution**
- A set of **user-space applications and frameworks**
- Written primarily in **Java** (for app layer and framework)
- **CRITICAL NOTE:** Android is **NOT a device**; it is the software stack/operating system.

### 2. Supported Hardware & Range
- **Target Devices:** Phones, tablets, watches (Wear OS), TVs, set-top boxes, cars (Android Auto), glasses, notebooks, game consoles, digital cameras.
- **Architectures / Platforms:**
  - **ARM** (32-bit and 64-bit)
  - **Intel x86 / x64**
  - **MIPS**
- **Hardware Specs in Slides:**
  - RAM: 128 MB to 4 GB
  - Storage: Flash-based
  - CPU: Single-core to Octa-core (384 MHz – 2.7 GHz)
  - GPU: None to 1–550 GFLOPS
  - Screen sizes: 2” to 100”
  - Sensors: GPS, compass, gyroscope, accelerometer, barometer, magnetometer, proximity, thermometer.
  - Connectivity: GSM/CDMA, WiFi, Bluetooth, Camera.

### 3. Why Android in Bachelor vs iOS?
- **Android Benefits:** Reinforces OOP, clean separation of UI design and functionality, asynchronous programming, callback methods.
- **Why not iOS in Bachelor?** High barrier to entry: requires macOS (Mac/Hackintosh), 4 GB RAM laptops struggle when running Hackintosh VM (2 GB host, 2 GB guest) with Xcode + iOS Simulator ("Slooooooooow"). iOS is taught in USTH ICT Master.

### 4. Android Version History (Alphabetical Dessert Codenames)
| Version | Codename | Release Date | Key Milestones in Course |
| :--- | :--- | :--- | :--- |
| **1.0** | Alpha | Sep 2008 | First commercial release |
| **1.1** | Petit Four | Feb 2009 | Internal name |
| **1.5** | Cupcake | Apr 2009 | First public dessert name |
| **1.6** | Donut | Sep 2009 | Support Library can support down to here (API 4) |
| **2.0–2.1** | Eclair | Oct 2009 | Support library Toolbar works down to API 7 |
| **2.2** | Froyo | May 2010 | JIT compilation introduced |
| **2.3** | Gingerbread | Dec 2010 | Gaming APIs, sensors |
| **3.0** | Honeycomb | Feb 2011 | **Tablet-focused; Fragments introduced natively!** |
| **4.0** | Ice Cream Sandwich | Oct 2011 | Unified phone and tablet UI |
| **4.1–4.3** | Jelly Bean | 2012 | Project Butter |
| **4.4** | KitKat | Oct 2013 | Experimental ART runtime |
| **5.0** | Lollipop | Nov 2014 | Material Design; **ART replaces Dalvik** |
| **6.0** | Marshmallow | Oct 2015 | Runtime permissions (API 23) |
| **7.0** | Nougat | Aug 2016 | Multi-window support |
| **8.0** | Oreo | Aug 2017 | Background execution limits |

---

## 3. Lecture 3: Android Fundamentals

### 1. Android Architecture (4 Main Layers)
From top to bottom:
1. **Applications (Java):** User apps (USTH Weather, Contacts, Browser, Phone, Home).
2. **Application Framework (Java):** Higher-level managers and services:
   - `ActivityManager`, `WindowManager`, `ContentProviders`, `ViewSystem`, `NotificationManager`, `PackageManager`, `TelephonyManager`, `ResourceManager`, `LocationManager`.
3. **Libraries (C/C++) & Android Runtime:**
   - **Libraries (C/C++):** Low-level libraries for text rendering (FreeType), media playback (Media Framework), databases (SQLite), 2D/3D graphics (Surface Manager, OpenGL ES), WebKit, Libc.
   - **Android Runtime:** Core Java libraries + Virtual Machine (**Dalvik** or **ART**).
4. **Linux Kernel (C):** Hardware drivers, memory management, process security, power management.

### 2. Compilation: From Source Code to Device
```text
[Java Source (.java)] 
        │ (javac compiler)
        ▼
[Java Bytecode (.class)] 
        │ (dx / DEX compiler)
        ▼
[Dalvik Executable (.dex)] 
        │ (Packaged with resources, manifest)
        ▼
[Android Package (.apk)]
```

### 3. Dalvik VM vs ART (Android RunTime)
- **Dalvik:** Used in Android 1.0 to 4.4. Relies on **JIT (Just-In-Time)** compilation — bytecode is translated into native machine code at runtime as the app executes.
- **ART:** Introduced in KitKat (4.4), default in Lollipop (5.0+). Relies on **AOT (Ahead-Of-Time)** compilation — apps are compiled into native machine code during installation.
- **Process Isolation / Sandboxing:**
  - Each Android application runs in its **own Linux process**.
  - Each application has its **own instance of the Virtual Machine**.
  - Each application is assigned a **unique Linux User ID (UID)**.
  - Ensures crashes or malicious code cannot directly compromise other apps.

### 4. MVC Architecture in Android
- **Model:** Business logic, entities, database.
- **View:** XML layouts, UI widgets (`TextView`, `Button`, `ImageView`).
- **Controller:** `Context`, `Application`, `Activity`, `Fragment`.

### 5. The Controllers
#### A. `Context`
- The central command center of an Android component.
- Interface to global application environment.
- Used to access application-specific resources (`res/`), raw assets (`assets/`), private files, shared preferences, and system services (e.g., `getSystemService()`).

#### B. `Application`
- A specialized `Context` representing the entire application lifecycle.
- Can be subclassed in `AndroidManifest.xml` via `<application android:name=".MyApplication">`.
- **Primary uses:**
  1. Storing global singleton state across activities.
  2. Early library initialization (e.g., ACRA crash reporting: `ACRA.init(this)` inside `onCreate()`).
- **Memory limit:** The system enforces an upper memory limit per application. If exceeded, an `OutOfMemoryError` is thrown. The Garbage Collector (GC) runs automatically, and Android will kill background activities when system memory is low.

#### C. `AndroidManifest.xml`
- Required XML file providing metadata about the application to the Android OS.
- Contains:
  - App package name & Target SDK.
  - Declares app components: `<activity>`, `<service>`, `<receiver>`, `<provider>`.
  - Application permissions (e.g. `<uses-permission android:name="android.permission.SEND_SMS"/>`).
  - Entry point configuration via `<intent-filter>`:
    - `<action android:name="android.intent.action.MAIN" />`
    - `<category android:name="android.intent.category.LAUNCHER" />`

#### D. `Activity`
- Fundamental building block of Android UI.
- Represents and manages a **single screen**.
- At least one Activity per application is standard.
- **Activity Lifecycle Methods & Sequence:**
  1. `onCreate(Bundle savedInstanceState)`: Called when activity is created. Initial setup: load layout (`setContentView(R.layout.xxx)`), find views (`findViewById()`).
  2. `onStart()`: Activity is becoming visible to the user.
  3. `onResume()`: Activity enters foreground and has user focus. **Acquire resources** (e.g., camera: `initializeCamera()`).
  4. `onPause()`: Activity loses foreground focus (partially obscured). **Release expensive resources** (e.g., camera: `mCamera.release(); mCamera = null`), pause animations, save unsaved data. *Rule: Always call `super.onPause()` first!*
  5. `onStop()`: Activity is no longer visible to the user.
  6. `onDestroy()`: Activity is finishing (e.g., `finish()` called) or being killed by system.
- **Screen Orientation Change Lifecycle:**
  Rotating the device destroys and recreates the Activity!
  $$\text{onSaveInstanceState()} \rightarrow \text{onPause()} \rightarrow \text{onStop()} \rightarrow \text{onDestroy()} \rightarrow \text{onCreate()} \rightarrow \text{onStart()} \rightarrow \text{onRestoreInstanceState()} \rightarrow \text{onResume()}$$
- **Closing an Activity:** Call `finish()`.

#### E. `Intent`
- An asynchronous messaging mechanism used to request an action from another component.
- Used to start Activities, start Services, or deliver Broadcasts.
- Can pass parameters via key-value extras:
  ```java
  Intent intent = new Intent(this, DisplayMessageActivity.class);
  intent.putExtra("location", locationEditText.getText().toString());
  startActivity(intent);
  ```

#### F. `Fragment`
- Represents a modular portion or behavior of a user interface inside an Activity.
- "Building block of the Fundamental building blocks".
- **Why Fragments?** Introduced to handle the explosion of diverse screen sizes, densities, and orientations (e.g., multi-pane tablets vs single-pane smartphones).
- **History:**
  - Introduced **natively in Honeycomb (Android 3.0, API 11)**.
  - Backported down to **Donut (API 4)** via the **Android Support Library**.
- **Lifecycle:** Has lifecycle similar to Activity: `onCreate()`, `onCreateView(LayoutInflater, ViewGroup, Bundle)`, `onPause()`, `onDestroy()`.
- **Key subclasses:** `DialogFragment`, `ListFragment`, `PreferenceFragment`.
- **Dynamic Fragment Transaction:**
  ```java
  DetailFragment firstFragment = new DetailFragment();
  getFragmentManager().beginTransaction()
      .add(R.id.container, firstFragment)
      .commit();
  ```

### 6. Views and ViewGroups
- `View` (`android.view.View`): Base class for widgets that the user interacts with (`TextView`, `Button`, `EditText`, `ImageView`, `CheckBox`).
- `ViewGroup` (`android.view.ViewGroup`): Invisible container that holds child Views and defines `LayoutParams` for organizing them.
- Common View Attributes:
  - `android:id="@+id/my_view"`: Identifier for `findViewById()`.
  - `android:layout_width`, `android:layout_height`: `match_parent` (fill parent) or `wrap_content` (fit content).
  - `android:padding`: Space **inside** the view border.
  - `android:layout_margin`: Space **outside** the view border.
  - `android:visibility`: `VISIBLE`, `INVISIBLE` (hidden but takes layout space), `GONE` (hidden and takes no space).
- **Naming Rule for Drawables/Resources:** Resource filenames must **never start with a digit** and must contain only lowercase letters (`a-z`), digits (`0-9`), and underscores (`_`).

---

## 4. Lecture 4: Resources

### 1. Overview of Resources
- All static assets bundled in the `res/` directory.
- Compiled by AAPT into numeric resource IDs in `R.java`.
- Accessed in Java via `R.<category>.<name>` (e.g. `R.string.app_name`, `R.layout.main_activity`).
- Accessed in XML via `@<category>/<name>` (e.g. `@string/app_name`).
- **Rule:** Never hardcode text, colors, or dimensions in code!

### 2. Popular Layout Classes (ViewGroups)
#### A. `FrameLayout`
- Positions child elements on top of each other in a **Z-order stack** (like layers in Photoshop).
- The **first child** defined in XML is placed at the **bottom** of the stack.
- Supports `android:layout_gravity` to align children (e.g., `center`, `top|left`).

#### B. `LinearLayout`
- Arranges children in a single line, either `vertical` or `horizontal` (`android:orientation`).
- **Weight Calculation (`layout_weight`):**
  Used to stretch views and distribute remaining space.
  $$\text{Width}_i = \text{base\_width}_i + \left( \frac{\text{weight}_i}{\sum \text{weight}_j} \right) \times \left( \text{Width}_{\text{parent}} - \sum \text{fixed\_widths} \right)$$
  - *Standard Slide Exercise:*
    - Parent width = `720px`, `orientation="horizontal"`
    - Button 1: `width="0px"`, `weight="1"`
    - Button 2: `width="100px"`, no weight (fixed)
    - Button 3: `width="0px"`, `weight="1"`
    - Remaining space to distribute = $720 - 100 = 620\text{px}$.
    - Sum of weights = $1 + 1 = 2$.
    - Button 1 width = $0 + (1/2 \times 620) = \mathbf{310\text{px}}$.
    - Button 2 width = $\mathbf{100\text{px}}$.
    - Button 3 width = $0 + (1/2 \times 620) = \mathbf{310\text{px}}$.

#### C. `RelativeLayout`
- Positions child views relative to the parent container (`alignParentTop`, `centerInParent`) or relative to sibling views (`layout_toRightOf`, `layout_below`).
- Multiple overlapping layers are also supported via Z-ordering.

#### D. Adaptive Layout Directories
Use resource configuration qualifiers:
- By screen size: `layout-small/`, `layout-normal/`, `layout-large/`, `layout-xlarge/`
- By orientation: `layout-port/`, `layout-land/`

### 3. `ViewPager` & `TabLayout`
- **ViewPager:** A ViewGroup allowing horizontal swipe gestures for page-by-page screen switching.
  - In XML: `<android.support.v4.view.ViewPager>`
  - Requires a pager adapter extending `FragmentPagerAdapter` or `PagerAdapter`.
  - Adapter overrides 3 key methods:
    1. `int getCount()`: Returns total number of pages.
    2. `Fragment getItem(int position)`: Returns the Fragment instance for that page.
    3. `CharSequence getPageTitle(int position)`: Returns title for the tab.
  - `pager.setOffscreenPageLimit(int limit)`: Keeps `limit` number of pages alive on each side of the current page to prevent frequent destruction/re-creation.
- **Header:** `TabLayout` from the Support Design library (`com.android.support:design:23.1.0`).
  - Linked to ViewPager in Java:
    ```java
    TabLayout tabLayout = (TabLayout) findViewById(R.id.tab);
    tabLayout.setupWithViewPager(pager);
    ```

### 4. Values Directories (`res/values/`)
- `strings.xml`: Text strings `<string name="refresh">Refresh</string>`
- `integers.xml`: Integer constants `<integer name="col_count">2</integer>`
- `bools.xml`: Boolean flags `<bool name="is_tablet">false</bool>`
- `colors.xml`: 32-bit hex `#AARRGGBB`
- `dimens.xml`: Sizes using `dp` (density-independent pixels for views) or `sp` (scale-independent pixels for text fonts)
- `styles.xml`: Themes and styles
- **Internationalization (i18n):**
  - Default: `res/values/strings.xml`
  - French: `res/values-fr/strings.xml`
  - Vietnamese: `res/values-vi/strings.xml`
- **Retrieving Values in Java:**
  - String: `context.getString(R.string.name)`
  - Integer: `getResources().getInteger(R.integer.name)`
  - Color: `ContextCompat.getColor(context, R.color.name)`
  - Dimension: `getResources().getDimension(R.dimen.name)`

### 5. Drawables & 9-Patch Images
- Two types of drawables:
  1. XML drawables: `res/drawable/`
  2. Bitmap drawables (PNG/JPG): `res/drawable-mdpi/`, `res/drawable-hdpi/`, `res/drawable-xhdpi/`, etc.
- **9-Patch Drawables (`*.9.png`):**
  - Bitmap images with a 1-pixel transparent border around the perimeter.
  - **Top & Left edges (Black pixels):** Define the **stretchable area** of the image.
  - **Bottom & Right edges (Black pixels):** Define the **content / padding area**.
  - All non-black pixels in the 1-pixel border **must be 100% transparent**.

### 6. Raw Data: `res/raw/` vs `assets/`
| Feature | `res/raw/` | `assets/` |
| :--- | :--- | :--- |
| **Is an Android Resource?** | **Yes** | **No** |
| **Generates `R.` ID?** | **Yes (`R.raw.filename`)** | **No** (accessed by relative file path string) |
| **Naming constraints** | Strict: lowercase letters, digits, underscores only; no subfolders | Any valid filename; supports subdirectories |
| **Access Method in Code** | `context.getResources().openRawResource(R.raw.id)` | `context.getAssets().open("path/filename")` |
| **Returns** | `InputStream` | `InputStream` |

### 7. App Bar & Menus
- **Menu Types:** App Bar (Action Bar), Context Menu, Popup Menu.
- **App Bar Evolution:** Originally `ActionBar`. Migrated to `Toolbar` in the Android Support Library to support Material Design back to Android 2.1 Eclair (API 7).
- **Defining Menu Items (`res/menu/my_menu.xml`):**
  - `<item android:id="@+id/action_search" android:title="Search" android:icon="@drawable/ic_search" app:showAsAction="ifRoom" />`
  - `app:showAsAction` options:
    - `always`: Always display directly on the App Bar as an icon.
    - `ifRoom`: Show on the App Bar if screen space permits; otherwise put in overflow menu.
    - `never`: Always place inside the three-dots overflow popup menu.
- **Activity Code Implementation:**
  1. Inflate the menu in `onCreateOptionsMenu(Menu menu)`:
     ```java
     getMenuInflater().inflate(R.menu.menu_weather, menu);
     return true;
     ```
  2. Handle clicks in `onOptionsItemSelected(MenuItem item)`:
     ```java
     switch (item.getItemId()) {
       case R.id.action_search:
         // handle action
         return true;
       default:
         return super.onOptionsItemSelected(item);
     }
     ```

---

## 5. Lecture 5: Background Tasks & Services

### 1. Threading Fundamentals
- **Why use threads?** Better CPU utilization, responsiveness, separation of background work from UI.
- **Why NOT threads?** Race conditions, synchronization overhead, architecture complexity, deadlocks.

### 2. The Android Thread Model (Single-Thread UI Model)
- **Main Thread (UI Thread):**
  - Responsible for drawing widgets and dispatching user touch/input events.
  - **Android UI toolkit is NOT thread-safe!**
- **Two Golden Rules of Android Threading:**
  1. **Rule 1: NEVER block the Main Thread.**
     - Do not run slow operations (disk I/O, heavy calculations, image decoding, network requests) on the main thread.
     - Blocking the main thread causes the app to freeze and triggers an **ANR (Application Not Responding)** dialog.
  2. **Rule 2: NEVER manipulate UI Views from a background (worker) thread.**
     - Touching a View from a background thread throws:
       `android.view.ViewRootImpl$CalledFromWrongThreadException: Only the original thread that created a view hierarchy can touch its views.`

### 3. Communicating between Threads: `Handler` & `Message`
- A `Handler` allows background threads to send messages or runnable tasks to the message queue of a target thread.
- Created on the Main Thread:
  ```java
  Handler handler = new Handler(Looper.getMainLooper()) {
    @Override
    public void handleMessage(Message msg) {
      // EXECUTED ON THE MAIN THREAD! Safe to update UI.
      String data = msg.getData().getString("server_response");
      textView.setText(data);
    }
  };
  ```
- Executed on a Worker Thread:
  ```java
  Bundle bundle = new Bundle();
  bundle.putString("server_response", "sample response");
  Message msg = new Message();
  msg.setData(bundle);
  handler.sendMessage(msg);
  ```

### 4. `AsyncTask`: Thread & Handler Encapsulation
`AsyncTask` encapsulates a background worker thread and a UI thread `Handler` into a clean object-oriented class.

#### The 3 Generic Type Parameters
`AsyncTask<Params, Progress, Result>`
1. **`Params`:** The input type passed to `execute(Params... params)`. Received by `doInBackground(Params... params)`.
2. **`Progress`:** The type passed during background progress updates via `publishProgress(Progress... values)`. Received by `onProgressUpdate(Progress... values)`.
3. **`Result`:** The output type returned by `doInBackground()`. Received by `onPostExecute(Result result)`.
- *Example from slide:* `AsyncTask<String, Integer, Bitmap>`:
  - `String`: URL to download.
  - `Integer`: Download percentage.
  - `Bitmap`: Decoded image bitmap.

#### The 4 Core Methods of `AsyncTask`
| Method | Execution Thread | Purpose | Required / Optional |
| :--- | :--- | :--- | :--- |
| **`onPreExecute()`** | **Main (UI) Thread** | Setup tasks prior to running (e.g. show progress dialog) | Optional |
| **`doInBackground(Params...)`** | **Worker (Background) Thread** | Executes heavy computation or network access. **NEVER touch UI here!** Can call `publishProgress()`. Returns `Result`. | **Required** |
| **`onProgressUpdate(Progress...)`** | **Main (UI) Thread** | Invoked when `publishProgress()` is called. Updates UI progress bar. | Optional |
| **`onPostExecute(Result)`** | **Main (UI) Thread** | Receives the result from `doInBackground()` and updates the UI (e.g. `imageView.setImageBitmap(bitmap)`). | Optional |

---

## 6. Exam Quick-Reference Summary & High-Yield Traps

1. **Is Android a device?** NO, it is an OS / Linux distribution.
2. **Which architecture layer contains SQLite, WebKit, and FreeType?** Libraries (C/C++), NOT Application Framework.
3. **Which tool converts `.class` files into `.dex` files?** The `dx` compiler.
4. **Dalvik vs ART:** Dalvik = JIT (Just-In-Time); ART = AOT (Ahead-Of-Time).
5. **Where are Fragments first supported natively?** Android 3.0 Honeycomb (API 11). For earlier versions down to Donut (API 4), use Android Support Library.
6. **What happens to an Activity on screen rotation?** It is completely destroyed and recreated (`onSaveInstanceState` $\rightarrow$ `onDestroy` $\rightarrow$ `onCreate` $\rightarrow$ `onRestoreInstanceState`).
7. **What is the difference between `INVISIBLE` and `GONE`?** Both hide the view, but `INVISIBLE` retains the view's layout dimensions, whereas `GONE` frees up space as if the view does not exist.
8. **LinearLayout weight formula:** Fixed views subtract from parent size first; remaining space is distributed proportional to weights.
9. **9-Patch borders:**
   - Top & Left = Stretchable region.
   - Bottom & Right = Padding (content) region.
10. **`res/raw/` vs `assets/`:** `res/raw/` generates resource IDs (`R.raw.name`); `assets/` does NOT generate resource IDs and supports arbitrary file names and subdirectories.
11. **What exception is thrown when a worker thread updates a View?** `CalledFromWrongThreadException`.
12. **In `AsyncTask`, which method runs on the background worker thread?** ONLY `doInBackground()`. All other methods (`onPreExecute`, `onProgressUpdate`, `onPostExecute`) run on the Main (UI) thread.
