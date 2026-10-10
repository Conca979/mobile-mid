# Mobile Application Development (Android Front-End)
# Comprehensive MCQ Question Bank (70 Questions)

*Strictly aligned with USTH Lectures 1–5 (Tran Giang Son)*

---

### Instructions
Each question has 4 options (A, B, C, D) and exactly one correct answer. Detailed explanations and references to lecture slides are provided after each question block.

---

## Part 1: Course Info, History & Android Platform Basics (Q1 – Q12)

#### Q1. According to the course syllabus, what is the weight of the Final Project in the total course grade?
- A) 20%
- B) 30%
- C) 50%
- D) 40%

**Answer:** C  
**Explanation:** Course Assessment breakdown: Attendance 10%, Midterm project 20%, Final project 50%, Oral Exam 20%.

---

#### Q2. Which of the following best defines Android according to the lecture slides?
- A) A proprietary hardware device manufactured by Google
- B) A Linux distribution and mobile operating system with a set of user-space applications and frameworks
- C) A closed-source virtual machine running Java micro-edition
- D) A cross-platform web browser operating system built on HTML5

**Answer:** B  
**Explanation:** Lecture 2 explicitly states Android is a Mobile Operating System, a Linux Distribution, a set of user-space applications and frameworks, and Java. It is NOT a device.

---

#### Q3. Which CPU architectures/platforms are officially supported by Android as presented in the slides?
- A) ARM (32/64 bits), Intel x86/x64, and MIPS
- B) ARM and RISC-V only
- C) PowerPC, SPARC, and ARM
- D) Intel x86 and Motorola 68k only

**Answer:** A  
**Explanation:** Lecture 2 lists the hardware platforms: ARM 32/64 bits, Intel x86/x64, and MIPS.

---

#### Q4. In the project presentation requirement, what specific optimization metric must students present?
- A) Network packet loss rate
- B) UI overdraw status
- C) Battery discharge curve in mAh
- D) SQL query execution time in milliseconds

**Answer:** B  
**Explanation:** Lecture 1 specifies that under Optimization in the project presentation, students must show their "UI overdraw status".

---

#### Q5. Android version codenames follow an alphabetical dessert naming convention. What is the codename for Android version 3.0?
- A) Gingerbread
- B) Honeycomb
- C) Ice Cream Sandwich
- D) Froyo

**Answer:** B  
**Explanation:** Android 3.0 is Honeycomb (released in February 2011, primarily for tablets).

---

#### Q6. Which Android version first introduced the "ART" (Android RunTime) as an experimental alternative to the Dalvik VM?
- A) Android 2.3 Gingerbread
- B) Android 4.0 Ice Cream Sandwich
- C) Android 4.4 KitKat
- D) Android 5.0 Lollipop

**Answer:** C  
**Explanation:** ART was introduced experimentally in Android 4.4 KitKat and became the default runtime replacing Dalvik in Android 5.0 Lollipop.

---

#### Q7. Which Android version introduced native Fragment support for the first time?
- A) Android 1.6 Donut
- B) Android 2.2 Froyo
- C) Android 3.0 Honeycomb
- D) Android 4.0 Ice Cream Sandwich

**Answer:** C  
**Explanation:** Fragments were officially introduced in Honeycomb (API 11) to support tablet UI layouts.

---

#### Q8. What is the lowest Android version that can support Fragments when using the Android Support Library?
- A) Android 1.0 Alpha (API 1)
- B) Android 1.6 Donut (API 4)
- C) Android 2.1 Eclair (API 7)
- D) Android 2.3 Gingerbread (API 9)

**Answer:** B  
**Explanation:** Lecture 3 explicitly states that Fragments can be used on devices as low as Donut (API 4) via the Android Support Library.

---

#### Q9. Why does the lecturer argue against teaching iOS development in the Bachelor curriculum?
- A) iOS does not use Object-Oriented Programming
- B) Developing for iOS requires macOS/Xcode, and running Hackintosh VMs on typical student laptops (4 GB RAM) is extremely slow
- C) Swift is not supported on mobile devices
- D) Apple does not allow educational apps

**Answer:** B  
**Explanation:** Lecture 2 explains that a typical student laptop has 4 GB RAM; splitting 2 GB for host and 2 GB for a Hackintosh VM makes Xcode and the iOS Simulator "Slooooooooow".

---

#### Q10. Which development environment is listed as the preferred IDE in the course slides?
- A) Eclipse with ADT
- B) Android Studio
- C) NetBeans
- D) Visual Studio Code

**Answer:** B  
**Explanation:** Android Studio is explicitly marked as "[preferred]" in Lecture 2.

---

#### Q11. Which dessert codename corresponds to Android 2.2?
- A) Cupcake
- B) Donut
- C) Eclair
- D) Froyo

**Answer:** D  
**Explanation:** Android 2.2 is Froyo (Frozen Yogurt), released in May 2010.

---

#### Q12. What was the internal/beta name for Android 1.1?
- A) Petit Four
- B) Cupcake
- C) Donut
- D) Apple Pie

**Answer:** A  
**Explanation:** Lecture 2 timeline lists 1.1 as "Petit Four" (2/2009).

---

## Part 2: Android Architecture & Compilation (Q13 – Q22)

#### Q13. In the 4-layer Android Architecture, which layer is positioned directly above the Linux Kernel?
- A) Application Framework
- B) Applications
- C) Libraries & Android Runtime
- D) User Interface Layer

**Answer:** C  
**Explanation:** The 4 layers from bottom to top are: (1) Linux Kernel $\rightarrow$ (2) Libraries (C/C++) & Android Runtime $\rightarrow$ (3) Application Framework (Java) $\rightarrow$ (4) Applications.

#### Q14. In which programming language are Android core system libraries such as WebKit, SQLite, and FreeType predominantly written?
- A) Java
- B) C/C++
- C) Python
- D) Kotlin

**Answer:** B  
**Explanation:** Lecture 3 states that the Libraries layer consists of low-level libraries mostly written in C/C++.

---

#### Q15. Which tool in the Android compilation toolchain compiles Java bytecode (`.class` files) into Dalvik Executable (`.dex` files)?
- A) javac
- B) dx (DEX compiler)
- C) aapt
- D) adb

**Answer:** B  
**Explanation:** Lecture 3 explains that `dx` converts standard Java `.class` bytecode into `.dex` format designed for Android virtual machines.

---

#### Q16. How does the Dalvik Virtual Machine execute code compared to the modern ART runtime?
- A) Dalvik uses Ahead-Of-Time (AOT) compilation; ART uses interpretation only
- B) Dalvik uses Just-In-Time (JIT) compilation; ART uses Ahead-Of-Time (AOT) compilation
- C) Dalvik compiles directly to C++ source code; ART executes Java bytecode directly
- D) Dalvik requires a JVM pre-installed on the host PC; ART runs in the cloud

**Answer:** B  
**Explanation:** Dalvik compiles bytecode into machine instructions at runtime using JIT. ART compiles bytecodes during app installation using AOT.

---

#### Q17. How does the Android security model isolate different applications from one another?
- A) All apps share the same root Linux account but use different passwords
- B) Each application runs in a separate process, with its own VM instance, and is assigned a unique Linux User ID (UID)
- C) Android runs all applications in a single thread inside the Linux Kernel
- D) Android apps run in a shared JVM sandbox similar to browser applets

**Answer:** B  
**Explanation:** Lecture 3 states that Android achieves isolation through: separated process, separated VM, and separated Linux user (unique UID per app).

---

#### Q18. Which layer of the Android architecture contains `ActivityManager`, `NotificationManager`, and `LocationManager`?
- A) Linux Kernel
- B) Libraries
- C) Application Framework
- D) Hardware Abstraction Layer

**Answer:** C  
**Explanation:** The Application Framework (written in Java) provides high-level system services and managers to apps.

---

#### Q19. In Android's adaptation of the MVC pattern described in the slides, what plays the role of the "Controller"?
- A) Layout XML files
- B) SQLite database tables
- C) Context, Application, Activity, and Fragment
- D) Custom Views and ViewGroups

**Answer:** C  
**Explanation:** Lecture 3 groups Context, Application, Activity, and Fragment under the "Controllers" category.

---

#### Q20. What is an Android `.apk` file?
- A) An uncompressed Linux executable
- B) A packaged archive containing compiled DEX code, application resources, assets, and AndroidManifest.xml
- C) A pure Java JAR archive containing `.class` files only
- D) A database file storing SQLite records

**Answer:** B  
**Explanation:** An APK (Android Package) is the final package bundle delivered to the device, containing `.dex`, compiled resources, and the manifest.

---

#### Q21. Which component in the Linux Kernel layer is responsible for device security and process isolation?
- A) Java Security Manager
- B) Linux user permissions and process boundaries
- C) ART Garbage Collector
- D) Android Studio Profiler

**Answer:** B  
**Explanation:** Android leverages standard Linux kernel process boundaries and user IDs for sandboxing.

---

#### Q22. What happens when an Android application exceeds its allocated heap memory limit?
- A) The device automatically shuts down
- B) The app crashes with an `OutOfMemoryError` (OOM)
- C) Android converts the heap into external storage
- D) The application is downgraded to Dalvik mode

**Answer:** B  
**Explanation:** Lecture 3 notes that the system sets an upper limit for each Application, leading to an `OutOfMemory` exception when exceeded.

---

## Part 3: Controllers, Context, Application & Manifest (Q23 – Q32)

#### Q23. What is the role of the `Context` object in Android?
- A) It is a graphical widget that draws pixels on the screen
- B) It is the central command center providing access to application-specific resources, files, assets, and system services
- C) It is a thread pool manager that executes network tasks
- D) It is the database driver for SQLite

**Answer:** B  
**Explanation:** Context is the central interface providing access to resources, assets, preferences, private files, and system services.

---

#### Q24. How can a developer create a custom `Application` class to store global data across the whole app?
- A) Extend `Application` in Java and declare it in `AndroidManifest.xml` using the `<application android:name="...">` attribute
- B) Extend `Activity` and mark it with `static`
- C) Define an interface named `IApplication` in `res/values/`
- D) It is impossible to subclass `Application` in Android

**Answer:** A  
**Explanation:** Lecture 3 provides the code pattern: subclass `Application` (e.g. `public class MyApplication extends Application`) and register it in `AndroidManifest.xml`.

---

#### Q25. Which library initialization was given in Lecture 3 as an example of early setup inside `Application.onCreate()`?
- A) Retrofit
- B) ACRA (Application Crash Reports for Android)
- C) Glide
- D) Room

**Answer:** B  
**Explanation:** The lecture slide explicitly shows `ACRA.init(this);` inside `MyApplication.onCreate()`.

---

#### Q26. Where in an Android project must you declare permissions such as `android.permission.SEND_SMS`?
- A) Inside `build.gradle` dependencies block
- B) Inside `res/values/strings.xml`
- C) Inside `AndroidManifest.xml` using the `<uses-permission>` tag
- D) Inside `MainActivity.java` inside `onCreate()`

**Answer:** C  
**Explanation:** `<uses-permission android:name="android.permission.SEND_SMS"/>` is declared in `AndroidManifest.xml`.

---

#### Q27. What element in `AndroidManifest.xml` designates an Activity as the main launcher entry point?
- A) `<meta-data android:name="entry" />`
- B) An `<intent-filter>` containing `<action android:name="android.intent.action.MAIN" />` and `<category android:name="android.intent.category.LAUNCHER" />`
- C) `<activity android:entryPoint="true" />`
- D) `<service android:name=".LauncherService" />`

**Answer:** B  
**Explanation:** Standard Android manifest convention: MAIN action and LAUNCHER category mark the app's default entry activity.

---

#### Q28. Which of the following is NOT one of the 4 primary component types declared in `AndroidManifest.xml`?
- A) `<activity>`
- B) `<service>`
- C) `<receiver>`
- D) `<fragment>`

**Answer:** D  
**Explanation:** Fragments are NOT top-level Android components declared in `AndroidManifest.xml`. The 4 core components are Activity, Service, BroadcastReceiver, and ContentProvider.

---

#### Q29. Which method call is used to programmatically close the current Activity?
- A) `stop()`
- B) `close()`
- C) `finish()`
- D) `terminate()`

**Answer:** C  
**Explanation:** Lecture 3 explicitly notes: "Close current activity: call `finish()`".

---

#### Q30. What object is used to pass parameters from one Activity to another when starting it?
- A) `Bundle` passed via `Intent.putExtra()`
- B) `Context.setAttribute()`
- C) `Application.sendData()`
- D) `R.values.put()`

**Answer:** A  
**Explanation:** As shown in slide 35: `intent.putExtra("location", text); startActivity(intent);`.

---

#### Q31. In Practical Work 2, what logging method was recommended to trace Activity lifecycle callbacks?
- A) `System.out.println()`
- B) `Log.i()`
- C) `Toast.makeText()`
- D) `printf()`

**Answer:** B  
**Explanation:** Slide 36 states: "Use `Log.i()` to output function traces".

---

#### Q32. What is the fundamental purpose of an `Intent`?
- A) To define the graphical layout in XML
- B) To serve as an asynchronous messaging mechanism between components
- C) To manage SQLite database migrations
- D) To allocate heap memory for bitmaps

**Answer:** B  
**Explanation:** Lecture 3 defines Intent as an "Asynchronous messaging mechanism; message to pass to other activities/services".

---

## Part 4: Activity Lifecycle & Fragments (Q33 – Q42)

#### Q33. Which Activity lifecycle callback is invoked when an activity is first created, where layout inflation typically occurs?
- A) `onStart()`
- B) `onResume()`
- C) `onCreate()`
- D) `onRestart()`

**Answer:** C  
**Explanation:** `onCreate()` is where `setContentView(R.layout.xxx)` and `findViewById()` are executed.

---

#### Q34. According to the lifecycle slides, which method is the appropriate place to acquire exclusive hardware resources like the Camera?
- A) `onCreate()`
- B) `onStart()`
- C) `onResume()`
- D) `onPause()`

**Answer:** C  
**Explanation:** Slide 32 states: "`onResume()`: Called when activity comes to foreground; acquire resources (e.g. camera)".

---

#### Q35. What must you ALWAYS do first inside overridden lifecycle methods like `onPause()` or `onCreate()`?
- A) Call `finish()`
- B) Call the corresponding superclass method (e.g. `super.onPause()`)
- C) Re-inflate the view hierarchy
- D) Release all static variables

**Answer:** B  
**Explanation:** Lecture 3 notes: "Always call the superclass method first" (`super.onPause()`).

---

#### Q36. What happens by default when a user rotates the screen of their device?
- A) The activity continues running without any lifecycle event
- B) The current Activity instance is destroyed and a brand new instance is created
- C) The Activity enters a paused state permanently
- D) Only the View is redrawn while all variables remain unchanged

**Answer:** B  
**Explanation:** Slide 33 shows screen orientation triggers: `onSaveInstanceState()` $\rightarrow$ `onDestroy()` $\rightarrow$ new instance created $\rightarrow$ `onCreate()` $\rightarrow$ `onRestoreInstanceState()`.

---

#### Q37. What method in a Fragment lifecycle is responsible for inflating its XML user interface?
- A) `onCreate()`
- B) `onCreateView()`
- C) `onAttach()`
- D) `onViewReady()`

**Answer:** B  
**Explanation:** In a Fragment, `onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)` inflates the layout.

---

#### Q38. How is a Fragment dynamically added to a container layout (e.g. `FrameLayout` with ID `R.id.container`) in code?
- A) `new FragmentManager().attach(R.id.container, fragment);`
- B) `getFragmentManager().beginTransaction().add(R.id.container, fragment).commit();`
- C) `Activity.addView(fragment);`
- D) `fragment.inflateInto(R.id.container);`

**Answer:** B  
**Explanation:** Lecture 3 slide 51 shows: `getFragmentManager().beginTransaction().add(R.id.container, firstFragment).commit();`.

---

#### Q39. Which of the following is NOT a popular built-in subclass of `Fragment` mentioned in the slides?
- A) `DialogFragment`
- B) `ListFragment`
- C) `PreferenceFragment`
- D) `DatabaseFragment`

**Answer:** D  
**Explanation:** Slides 47–49 explicitly list `DialogFragment`, `ListFragment`, and `PreferenceFragment`. `DatabaseFragment` does not exist.

---

#### Q40. Why are Fragments described as "optional"?
- A) Because an Android app can be fully implemented using only Activities and Views without using any Fragment
- B) Because Fragments only work on Android tablets, not smartphones
- C) Because Google deprecated them in Android 2.2
- D) Because Fragments can only be used with C++ code

**Answer:** A  
**Explanation:** While recommended for multi-pane adaptive designs, an application can run entirely with Activities; Fragments are not mandatory.

---

#### Q41. When an Activity with Fragments is used, what is the role of the Activity?
- A) To draw every individual pixel of the child views
- B) To coordinate and host the fragments
- C) To replace the Linux Kernel
- D) To prevent screen rotation

**Answer:** B  
**Explanation:** Slide 50 states: "Activity with fragments is simplified, coordinates fragments".

---

#### Q42. In which lifecycle callback should you release the camera to allow other activities to use it?
- A) `onStart()`
- B) `onResume()`
- C) `onPause()`
- D) `onDestroy()` only

**Answer:** C  
**Explanation:** Slide 31: "`onPause()`: Stop animation or heavy tasks, save unsaved changes, release resources (e.g. camera)".

---

## Part 5: Views, Layouts & Layout Calculation (Q43 – Q54)

#### Q43. What is the fundamental difference between `padding` and `margin` on an Android View?
- A) Padding is outside the view border; margin is inside
- B) Padding is inside the view border; margin is outside the view border
- C) Padding applies only to text; margin applies only to images
- D) Padding is measured in px; margin is measured in dp

**Answer:** B  
**Explanation:** Padding creates space between the view content and its boundary; layout margin creates space outside the view boundary between it and adjacent views.

---

#### Q44. What happens when a View's visibility attribute is set to `android:visibility="gone"`?
- A) The view is completely visible with 50% opacity
- B) The view is invisible, but it still takes up space in the layout hierarchy
- C) The view is invisible and takes up zero layout space (as if it does not exist)
- D) The view is deleted permanently from memory

**Answer:** C  
**Explanation:** `INVISIBLE` keeps layout dimensions (space reserved); `GONE` removes the view from layout space calculation.

---

#### Q45. Which `scaleType` of `ImageView` scales the image uniformly so that both dimensions equal or exceed the view bounds, cropping the excess?
- A) `fitXY`
- B) `centerCrop`
- C) `centerInside`
- D) `fitStart`

**Answer:** B  
**Explanation:** `centerCrop` maintains aspect ratio while filling the entire ImageView, cropping outer edges.

---

#### Q46. In a `FrameLayout`, how are multiple child views arranged?
- A) Horizontally side by side
- B) Vertically one below the other
- C) In a Z-order stack on top of each other, where the first child in XML is at the bottom
- D) In a 2D grid matrix

**Answer:** C  
**Explanation:** Lecture 4 states: `FrameLayout` is Z-order based like Photoshop layers, and the first child is placed at the bottom.

---

#### Q47. Consider a horizontal `LinearLayout` with total width `720px`:
- Button 1: `layout_width="0px"`, `layout_weight="1"`
- Button 2: `layout_width="100px"`, no weight (fixed)
- Button 3: `layout_width="0px"`, `layout_weight="1"`  
What will be the final calculated width of Button 1, Button 2, and Button 3?
- A) Button 1: 240px, Button 2: 240px, Button 3: 240px
- B) Button 1: 310px, Button 2: 100px, Button 3: 310px
- C) Button 1: 360px, Button 2: 100px, Button 3: 260px
- D) Button 1: 0px, Button 2: 100px, Button 3: 620px

**Answer:** B  
**Explanation:**
$$\text{Remaining space} = 720\text{px} - 100\text{px} = 620\text{px}$$
$$\text{Sum of weights} = 1 + 1 = 2$$
$$\text{Button 1} = 0 + (1/2 \times 620) = 310\text{px}$$
$$\text{Button 2} = 100\text{px} \text{ (fixed)}$$
$$\text{Button 3} = 0 + (1/2 \times 620) = 310\text{px}$$

---

#### Q48. In a vertical `LinearLayout`, setting `layout_weight` on child views affects which dimension?
- A) Width
- B) Height
- C) Margin
- D) Elevation

**Answer:** B  
**Explanation:** Slide 21: "Based on orientation: horizontal stretches width, vertical stretches height".

---

#### Q49. Which ViewGroup positions children relative to each other (e.g. `android:layout_below="@id/header"`) or relative to the parent boundary?
- A) `FrameLayout`
- B) `LinearLayout`
- C) `RelativeLayout`
- D) `AbsoluteLayout`

**Answer:** C  
**Explanation:** `RelativeLayout` positions elements based on relationships to parent or siblings.

---

#### Q50. What is the valid naming convention for Android drawable resources?
- A) Can start with any character, uppercase or lowercase, spaces allowed
- B) Names must contain only lowercase letters, digits, and underscores, and must NOT start with a digit
- C) Must be camelCase and start with a capital letter
- D) Must contain the file extension in the name (e.g., `icon_png`)

**Answer:** B  
**Explanation:** Slide 65: "Don't have names starting with digits. Names contain lowercase letters, digits and underscores".

---

#### Q51. What layout folder qualifier is used to supply dedicated layouts for devices in landscape orientation?
- A) `layout-horiz/`
- B) `layout-land/`
- C) `layout-wide/`
- D) `layout-landscape/`

**Answer:** B  
**Explanation:** Android resource qualifier for landscape is `-land` (e.g. `layout-land/`).

---

#### Q52. What class is used in Java to connect a `ViewPager` to its fragment pages?
- A) An adapter extending `FragmentPagerAdapter` or `PagerAdapter`
- B) A `CursorAdapter`
- C) A `BroadcastReceiver`
- D) A `ViewSwitcher`

**Answer:** A  
**Explanation:** Lecture 4 slide 40 shows: `public class HomeFragmentPagerAdapter extends FragmentPagerAdapter`.

---

#### Q53. What does `pager.setOffscreenPageLimit(3)` do on a `ViewPager`?
- A) Limits the maximum number of pages in the adapter to 3
- B) Retains 3 pages in memory on each side of the current page to prevent them from being destroyed
- C) Disables swiping past page 3
- D) Displays 3 tabs on the screen simultaneously

**Answer:** B  
**Explanation:** Slide 38 explains that off-screen limit controls how many pages outside current view are retained before being destroyed and recreated.

---

#### Q54. Which Support Library component is used as the header tab bar for `ViewPager`?
- A) `ActionTab`
- B) `TabLayout`
- C) `HeaderStrip`
- D) `NavBar`

**Answer:** B  
**Explanation:** Slide 43–45 describes `TabLayout` (from `com.android.support:design`), which links to ViewPager via `tabLayout.setupWithViewPager(pager)`.

---

## Part 6: Values, Drawables, Raw Data & Menus (Q55 – Q62)

#### Q55. Where should hardcoded strings be placed to allow easy internationalization (i18n)?
- A) `res/values/strings.xml`
- B) `assets/strings.json`
- C) `res/raw/strings.txt`
- D) `AndroidManifest.xml`

**Answer:** A  
**Explanation:** All app strings belong in `res/values/strings.xml`, with localized versions in folders like `res/values-vi/strings.xml`.

---

#### Q56. How is a color defined in `res/values/colors.xml` represented in hex format?
- A) RGB 24-bit (`#RRGGBB`)
- B) ARGB 32-bit (`#AARRGGBB`)
- C) CMYK format
- D) HSL string

**Answer:** B  
**Explanation:** Slide 56 notes colors are in 32-bit `AARRGGBB` format (Alpha, Red, Green, Blue).

---

#### Q57. In a 9-Patch drawable (`*.9.png`), what do the black pixels along the TOP and LEFT borders indicate?
- A) The padding/content area
- B) The stretchable area of the image
- C) The transparent area that should be deleted
- D) The shadow drop area

**Answer:** B  
**Explanation:** Slide 61: "Top & Left edges: Black pixels define stretching area. Bottom & Right edges: Black pixels define paddings".

---

#### Q58. In a 9-Patch drawable, what do the black pixels along the BOTTOM and RIGHT borders indicate?
- A) The stretchable area
- B) The content / padding area
- C) The rotation pivot
- D) The clickable hit box

**Answer:** B  
**Explanation:** Bottom and Right edges define the padding box where child content (like text inside a button) is placed.

---

#### Q59. What is the fundamental difference between storing a file in `res/raw/` versus `assets/`?
- A) `res/raw/` generates a resource ID in `R.java` (`R.raw.name`), while `assets/` does not generate an R ID and is accessed by relative file path
- B) `res/raw/` can hold folders while `assets/` cannot
- C) `assets/` is read-only while `res/raw/` is read-write
- D) `res/raw/` is for video files only; `assets/` is for text only

**Answer:** A  
**Explanation:** `res/raw/` is an official Android resource generating `R.raw.xxx`. `assets/` is a raw filesystem directory accessed via `AssetManager` (`getAssets().open("...")`) without R IDs.

---

#### Q60. How do you open a raw resource stored in `res/raw/sound.mp3` in Java?
- A) `new FileInputStream("res/raw/sound.mp3")`
- B) `context.getResources().openRawResource(R.raw.sound)`
- C) `context.getAssets().open("sound.mp3")`
- D) `R.raw.sound.openStream()`

**Answer:** B  
**Explanation:** As shown in slide 68: `context.getResources().openRawResource(R.raw.resid)`.

---

#### Q61. What attribute on a menu `<item>` controls whether it appears directly as an icon on the Toolbar or in the 3-dots overflow menu?
- A) `android:display`
- B) `app:showAsAction`
- C) `android:placement`
- D) `app:toolbarPosition`

**Answer:** B  
**Explanation:** `app:showAsAction` with values `always`, `ifRoom`, or `never` determines placement on the Toolbar.

---

#### Q62. Which Activity callback is overridden to handle user clicks on menu items in the App Bar?
- A) `onMenuItemClick()`
- B) `onActionSelected()`
- C) `onOptionsItemSelected(MenuItem item)`
- D) `onCreateOptionsMenu()`

**Answer:** C  
**Explanation:** `onCreateOptionsMenu` inflates the menu, and `onOptionsItemSelected(MenuItem item)` handles item selection (using `item.getItemId()`).

---

## Part 7: Threading, Handlers & AsyncTask (Q63 – Q70)

#### Q63. What is the primary responsibility of the Android Main Thread (UI Thread)?
- A) Compiling DEX files
- B) Drawing UI widgets and dispatching user input events
- C) Downloading files over HTTP
- D) Garbage collecting SQLite databases

**Answer:** B  
**Explanation:** Lecture 5 slide 9 states: Main thread is responsible for drawing widgets and dispatching user inputs.

---

#### Q64. What happens if a developer attempts to update a `TextView` directly from inside a background worker `Thread`?
- A) The TextView updates smoothly
- B) Android automatically schedules it on the UI thread
- C) The app crashes with `CalledFromWrongThreadException: Only the original thread that created a view hierarchy can touch its views`
- D) The text is saved to SQLite instead

**Answer:** C  
**Explanation:** Lecture 5 slide 11 highlights this exact exception: `CalledFromWrongThreadException`.

---

#### Q65. What happens if long-running operations (like network access or large file downloads) are executed directly on the Main Thread?
- A) The phone will restart
- B) The UI freezes, and the OS displays an ANR (Application Not Responding) dialog
- C) The operation runs 10x faster
- D) The thread is automatically converted into an AsyncTask

**Answer:** B  
**Explanation:** Blocking the UI thread prevents Android from processing frames and input events, causing ANR.

---

#### Q66. What Android class provides a message queue communication mechanism to post messages from worker threads to the Main Thread?
- A) `ThreadManager`
- B) `Handler`
- C) `IntentFilter`
- D) `BroadcastManager`

**Answer:** B  
**Explanation:** A `Handler` (instantiated with `Looper.getMainLooper()`) processes messages on the thread that created it.

---

#### Q67. In `AsyncTask<Params, Progress, Result>`, what does the second generic parameter (`Progress`) represent?
- A) The data type passed into `execute()`
- B) The data type used to publish and receive progress updates to the UI thread
- C) The final result type delivered to `onPostExecute()`
- D) The HTTP status code

**Answer:** B  
**Explanation:** Generic parameters are: 1st: `Params` (input), 2nd: `Progress` (progress reports), 3rd: `Result` (output).

---

#### Q68. Consider `AsyncTask<String, Integer, Bitmap>`. Which of the following is correct regarding parameter types?
- A) `String` is passed to `onPreExecute`; `Bitmap` is passed to `doInBackground`
- B) `String` is URL input; `Integer` is progress percentage; `Bitmap` is the decoded image result
- C) `Integer` is the thread priority; `Bitmap` is the input; `String` is the output message
- D) `String` is the error message; `Integer` is the retry count; `Bitmap` is the canvas

**Answer:** B  
**Explanation:** Slides 27–34 explain this exact signature: `String` for URL, `Integer` for percentage progress, `Bitmap` for decoded image.

---

#### Q69. In an `AsyncTask`, which method is executed on the background worker thread?
- A) `onPreExecute()`
- B) `doInBackground()`
- C) `onProgressUpdate()`
- D) `onPostExecute()`

**Answer:** B  
**Explanation:** `doInBackground()` is the ONLY method that runs on the worker thread. `onPreExecute()`, `onProgressUpdate()`, and `onPostExecute()` all execute on the Main (UI) thread!

---

#### Q70. In an `AsyncTask`, where should you update UI elements (such as showing a `Toast` or updating an `ImageView` with the final downloaded `Bitmap`)?
- A) Inside `doInBackground()`
- B) Inside `onPostExecute()`
- C) Inside the constructor of `AsyncTask`
- D) Inside `Looper.prepare()`

**Answer:** B  
**Explanation:** `onPostExecute(Result)` runs on the Main Thread after `doInBackground()` finishes, making it safe to update UI widgets.
